import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { token, cookie } = body;

    const bahan = {
      pesanan: {
        cookie: cookie.index,
        cookietext: cookie._displayName,
      },
    };

    const cek = await fetch(`https://statusakun.olimdipo.my.id/updatecek/${token}`);
    const hasilCek = await cek.json();

    const uRess = await fetch(`https://mahalbos.olimdipo.my.id/tokenActive/${hasilCek.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pesanan: {
          ...hasilCek.pesanan,
          cookie: cookie.index.toString(),
          cookietext: cookie._displayName,
        },
      }),
    });

    const update = await uRess.json();
    console.log(uRess);

    return Response.json(update);
  } catch (err) {
    console.error("gagal test ", err);
    return Response.json({ error: "Gagal menambahkan ke proses" }, { status: 500 });
  }
}
