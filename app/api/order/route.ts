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

import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

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
        harga = 0;
    }

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

    const dataAkhir = {
      pesanan: {
        token: generateUniqueToken(),
        wa: body.wa,
        durasi,
        cookie: body.cookie,
        cookietext: body.cookieText,
      },
      pembayaran: {
        TRXID: TRXID,
        expired: gateway.payment.expired_at,
        harga: gateway.payment.total_payment,
        status: "pending",
        imgqr: gateway.payment.payment_number,
      },
    };

    // Kirim ke server lain
    await fetch("https://mahalbos.olimdipo.my.id/pending", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: 0,
        ...dataAkhir,
      }),
    });

    console.log(dataAkhir);
    return Response.json(dataAkhir);
  } catch (err) {
    console.error("gagal test ", err);
    return Response.json({ error: "Gagal menambahkan ke proses" }, { status: 500 });
  }
}
