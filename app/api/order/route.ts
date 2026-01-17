// //==== Fungsi Bantu ====
// function generateUniqueToken() {
//   const timestamp = Date.now().toString(36).substring(3, 10).toUpperCase();
//   return "BOY-" + timestamp;
// }

// function generateTrxId() {
//   const prefix = "HR";
//   const timestamp = Date.now().toString(36).toUpperCase();
//   const random = Math.random().toString(36).substring(2, 8).toUpperCase();
//   return `${prefix}-${timestamp}-${random}`;
// }

// import { NextRequest } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const durasi: string = body.durasi;
//     let harga = 0;

//     switch (durasi) {
//       case "1":
//         harga = 3000;
//         break;
//       case "7":
//         harga = 15000;
//         break;
//       case "30":
//         harga = 35000;
//         break;
//       default:
//         harga = 0;
//     }

//     const TRXID = generateTrxId();
//     const tai = await fetch("https://app.pakasir.com/api/transactioncreate/qris", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         project: "hrstoredemo",
//         order_id: TRXID,
//         amount: harga,
//         api_key: "8ffSgLWZ0j3MbYct9YelrCRGQ7H8F0A7",
//       }),
//     });

//     const gateway = await tai.json();

//     const dataAkhir = {
//       pesanan: {
//         token: generateUniqueToken(),
//         wa: body.wa,
//         durasi,
//         cookie: body.cookie,
//         cookietext: body.cookieText,
//       },
//       pembayaran: {
//         TRXID: TRXID,
//         expired: gateway.payment.expired_at,
//         harga: gateway.payment.total_payment,
//         status: "pending",
//         imgqr: gateway.payment.payment_number,
//       },
//     };

//     // Kirim ke server lain
//     await fetch("https://mahalbos.olimdipo.my.id/pending", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         user: 0,
//         ...dataAkhir,
//       }),
//     });

//     console.log(dataAkhir);
//     return Response.json(dataAkhir);
//   } catch (err) {
//     console.error("gagal test ", err);
//     return Response.json({ error: "Gagal menambahkan ke proses" }, { status: 500 });
//   }
// }

import { NextRequest } from "next/server";

//==== Fungsi Bantu ====
function generateUniqueToken() {
  const timestamp = Date.now().toString(36).substring(3, 10).toUpperCase();
  return "BOY-" + timestamp;
}

function generateTrxId() {
  const prefix = "HR";
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // ==============================
    // 🔐 1. VERIFIKASI TURNSTILE
    // ==============================
    const cfToken = body.cfToken;

    if (!cfToken) {
      return Response.json({ error: "Captcha token missing" }, { status: 400 });
    }

    const formData = new URLSearchParams();
    formData.append("secret", process.env.TURNSTILE_SECRET_KEY!);
    formData.append("response", cfToken);

    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });

    const verify = await verifyRes.json();

    if (!verify.success) {
      return Response.json({ error: "Captcha verification failed" }, { status: 403 });
    }

    // ==============================
    // 💰 2. LOGIC HARGA
    // ==============================
    const durasi: string = body.durasi;
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
        return Response.json({ error: "Durasi tidak valid" }, { status: 400 });
    }

    // ==============================
    // 🧾 3. BUAT TRANSAKSI
    // ==============================
    const TRXID = generateTrxId();

    const tai = await fetch("https://app.pakasir.com/api/transactioncreate/qris", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: "hrstoredemo",
        order_id: TRXID,
        amount: harga,
        api_key: "8ffSgLWZ0j3MbYct9YelrCRGQ7H8F0A7",
      }),
    });

    const gateway = await tai.json();

    if (!gateway?.payment) {
      return Response.json({ error: "Gateway error" }, { status: 502 });
    }

    // ==============================
    // 📦 4. DATA AKHIR
    // ==============================
    const dataAkhir = {
      pesanan: {
        token: generateUniqueToken(),
        wa: body.wa,
        durasi,
        cookie: body.cookie,
        cookietext: body.cookieText,
      },
      pembayaran: {
        TRXID,
        expired: gateway.payment.expired_at,
        harga: gateway.payment.total_payment,
        status: "pending",
        imgqr: gateway.payment.payment_number,
      },
    };

    // ==============================
    // 📡 5. KIRIM KE SERVER LAIN
    // ==============================
    await fetch("https://mahalbos.olimdipo.my.id/pending", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: 0,
        ...dataAkhir,
      }),
    });

    return Response.json(dataAkhir);
  } catch (err) {
    console.error("API error:", err);
    return Response.json({ error: "Gagal memproses transaksi" }, { status: 500 });
  }
}
