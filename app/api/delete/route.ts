import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const trxid = body.trxid;

    if (!trxid) {
      return Response.json({ error: "trxid tidak dikirim" }, { status: 400 });
    }

    const pendingRes = await fetch("https://mahalbos.olimdipo.my.id/pending");
    const pending = await pendingRes.json();

    const itemPending = pending.find((x: any) => x?.pembayaran?.TRXID === trxid);

    if (!itemPending) {
      return Response.json({ error: "TRXID tidak ditemukan" }, { status: 404 });
    }

    const id = itemPending.id;

    const delRes = await fetch(`https://mahalbos.olimdipo.my.id/pending/${id}`, { method: "DELETE" });

    if (!delRes.ok) {
      const text = await delRes.text();

      return Response.json({ error: "Gagal membatalkan", detail: text }, { status: 500 });
    }

    console.log(`✅ Pending item dengan id ${id} berhasil dihapus.`);

    return Response.json({ success: true, id });
  } catch (error: any) {
    console.error("❌ Error delete pending:", error);
    return Response.json({ error: "Internal Server Error", detail: error?.message || error }, { status: 500 });
  }
}
