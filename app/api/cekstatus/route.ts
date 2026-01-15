import { NextRequest } from "next/server";

const imghr = process.env.IMGHR;
const imgsc = process.env.IMGSUCESS;

async function kirimWA(nomor: any, pesan: any) {
  const kirim = await fetch("https://statusakun.olimdipo.my.id/bot/wa", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nomor, pesan }),
  });
}

// ==========================================
// 🧩 Fungsi bantu
// ==========================================

// ✅ Handle expired
async function handleExpired(filtered: any, filteredPembayaran: any, expired: any, id: any, gateway: any) {
  const viewKlien = {
    ...filteredPembayaran,
    expired,
    status: "EXPIRED",
    imgqrh: imghr,
  };
  const updatedS = {
    ...filteredPembayaran,
    expired,
    status: "EXPIRED",
  };

  const updatedStatus = {
    ...filtered,
    pembayaran: updatedS,
  };
  const updatedData = {
    ...filtered,
    pembayaran: viewKlien,
  };

  // 🔹 Update ke pending hanya kalau belum expired
  if (filteredPembayaran.status !== "EXPIRED") {
    const updateRes = await fetch(`https://mahalbos.olimdipo.my.id/pending/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedStatus),
    });
    if (!updateRes.ok) {
      console.error("⚠️ Gagal mengupdate status expired di pending:", await updateRes.text());
    }
  }

  return updatedData;
}

// ✅ Handle pending
async function handlePending(imgqr: any, filtered: any, filteredPembayaran: any, expired: any, gateway: any) {
  return {
    ...filtered,
    pembayaran: {
      ...filteredPembayaran,
      expired,
      imgqr,
      status: gateway.transaction.status,
    },
  };
}

// ✅ Handle success → pindahkan data ke tokenActive
async function handleSuccess(item: any, filtered: any, filteredPembayaran: any, masaAktifExpired: any, gateway: any) {
  const { id } = item;

  const dataUntukTokenActive = {
    id,
    ...filtered,
    pembayaran: {
      ...filteredPembayaran,
      status: gateway.transaction.status,
      terbayar: gateway.transaction.completed_at,
    }, // tanpa imgqr dan expired
    expired: masaAktifExpired, // masa aktif token baru
  };

  // Simpan ke tokenActive
  const simpan = await fetch("https://mahalbos.olimdipo.my.id/tokenActive", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataUntukTokenActive),
  });

  if (!simpan.ok) throw new Error("Gagal menambahkan ke tokenActive");
  const d = new Date(masaAktifExpired);
  const options = {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const;
  const tanggal = d.toLocaleDateString("id-ID", options);
  const waktu = d.toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit" });
  const harga = item.pembayaran.harga;

  const hargaRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(harga);
  const wa0 = item.pesanan.wa.replace(/^62/, "0");
  const expDate = `${tanggal}, ${waktu} WIB`;
  const text = `*🌿 PEMBAYARAN BERHASIL!*\n\nTerima kasih sudah melakukan transaksi di *HR STORE 💚*\nBerikut detail pesanan kamu:\n\n───────────────────────\n*📦 Detail Pesanan*\n• Token : ${item.pesanan.token}\n• Nama Cookie : ${item.pesanan.cookietext}\n• Durasi : ${item.pesanan.durasi} Hari\n\n*💰 Detail Pembayaran*\n• TRXID : ${item.pembayaran.TRXID}\n• Nominal : ${hargaRupiah}\n• Status : *✅ LUNAS*\n───────────────────────\n\n*🕓 Masa Aktif Hingga:*\n${expDate}\n\n───────────────────────\n🙏 Terima kasih sudah mempercayai layanan kami!\nSilakan gunakan token di atas untuk aktivasi layanan Anda.\nJika ada pertanyaan hubungi TikTok/ig: @haritsprmn_.\n───────────────────────\n✨ _HR STORE — Aman, Cepat, Terpercaya_\n\n> Bahan & Tutorial\n> https://drive.google.com/drive/folders/1FAgudD-hiCSXB77hHhdUIotLzLP9UU3O?usp=sharing\n> group member\n> https://chat.whatsapp.com/HfjFUViPBkgIWKzGNOPLtq?mode=wwt`;
  const text1 = `*🌿 TOKEN ACTIVE!*\n\n*📦 Detail Pesanan*\n• Token : ${item.pesanan.token}\n• Nama Cookie : ${item.pesanan.cookietext}\n• Durasi : ${item.pesanan.durasi} Hari\n• WA : ${wa0}\n\n*💰 Detail Pembayaran*\n• TRXID : ${item.pembayaran.TRXID}\n• Nominal : ${hargaRupiah}\n───────────────────────\n\n*🕓 Masa Aktif Hingga:*\n${expDate}\n\n───────────────────────`;
  const jid = item.pesanan.wa.replace(/\D/g, "");
  const jid1 = "6288983592740".replace(/\D/g, "");
  await kirimWA(jid, text);
  await kirimWA(jid1, text1);
  // Hapus dari pending
  await fetch(`https://mahalbos.olimdipo.my.id/pending/${id}`, {
    method: "DELETE",
  });

  // Kirim ke klien tanpa id & YOTRX, tapi dengan expired masa aktif token
  return {
    ...filtered,
    pembayaran: {
      ...filteredPembayaran,
      status: gateway.transaction.status,
      terbayar: gateway.transaction.completed_at,
      imgqrh: imgsc,
    },
    expired: masaAktifExpired,
  };
}

// ✅ Handle active token (sudah aktif di tokenActive)
async function handleActive(id: any, filtered: any, filteredPembayaran: any, expired: any) {
  return {
    id,
    ...filtered,
    pembayaran: {
      ...filteredPembayaran,
      imgqrh: imgsc,
    },
    expired,
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const trxid = body.trxid;
    let itemActive;
    let itemPending;
    // 🔹 Ambil semua data dari endpoint eksternal
    const [pendingRes, activeRes] = await Promise.all([fetch("https://mahalbos.olimdipo.my.id/pending"), fetch("https://mahalbos.olimdipo.my.id/tokenActive")]);
    const [pending, active] = await Promise.all([pendingRes.json(), activeRes.json()]);

    if (trxid.startsWith("HR-")) {
      // lakukan proses pencarian berdasarkan TRXID
      itemPending = pending.find((x: any) => x.pembayaran.TRXID === trxid);
      itemActive = active.find((x: any) => x.pembayaran.TRXID === trxid);
    } else {
      // lakukan proses pencarian berdasarkan TOKEN
      itemPending = pending.find((x: any) => x.pesanan.token === trxid);
      itemActive = active.find((x: any) => x.pesanan.token === trxid);
    }

    if (!itemPending && !itemActive) {
      return Response.json({ success: false, error: "TRXID tidak ditemukan" }, { status: 404 });
    }
    const now = new Date();
    const item = itemPending || itemActive;

    const orderID = item.pembayaran.TRXID;
    const durasi = item.pesanan.durasi;
    let harga = 0;
    switch (durasi) {
      case "1":
        harga = 3000;
        break;
      case "7":
        harga = 15000;
        break;
      case "30":
        harga = 35000;
        break;
      default:
        harga = 0;
    }

    const { id, pembayaran, ...filtered } = item;
    const { imgqr, expired, ...filteredPembayaran } = pembayaran;

    const expireCalc = new Date(now);
    const masaAktifExpired = new Date(expireCalc.setDate(expireCalc.getDate() + parseInt(item.pesanan.durasi)));

    const gatewayRes = await fetch(`https://app.pakasir.com/api/transactiondetail?project=hrstoredemo&amount=${harga}&order_id=${orderID}&api_key=8ffSgLWZ0j3MbYct9YelrCRGQ7H8F0A7`);
    const gateway = await gatewayRes.json();
    const kedaluarso = new Date(item.pembayaran.expired);
    if (now > kedaluarso) {
      const result = await handleExpired(filtered, filteredPembayaran, expired, item.id, gateway);
      return Response.json(result);
    }
    // Kalau data sudah aktif → langsung tampilkan
    if (itemActive) {
      const result = await handleActive(id, filtered, filteredPembayaran, item.expired);
      return Response.json(result);
    }
    // Jika masih pending, cek ke gateway
    if (!gatewayRes.ok) {
      const text = await gatewayRes.text();
      return Response.json(
        {
          error: "SERVER GATEWAY BERMASALAH",
          detail: text,
        },
        { status: 502 }
      );
    }

    const statusGateway = gateway.transaction.status;

    // 🔹 Kalau masih pending
    if (statusGateway !== "completed") {
      const result = await handlePending(imgqr, filtered, filteredPembayaran, expired, gateway);
      return Response.json(result);
    }

    // 🔹 Kalau sukses
    const result = await handleSuccess(item, filtered, filteredPembayaran, masaAktifExpired, gateway);
    return Response.json(result);
  } catch (err) {
    console.error("Gagal mengambil status:", err);
    Response.json({ error: "Gagal memproses permintaan status" }, { status: 404 });
  }
}
