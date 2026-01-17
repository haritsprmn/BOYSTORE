import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let timeout;
  try {
    const controller = new AbortController();
    timeout = setTimeout(() => controller.abort(), 8000);
    const body = await req.json();
    const { token, nama, star, komentar } = body;

    // Validasi dasar

    if (!token) {
      return NextResponse.json({ error: "Token wajib diisi" }, { status: 400 });
    }

    if (token.length > 10) {
      return NextResponse.json({ error: "Token terlalu panjang" }, { status: 400 });
    }

    if (!star || star < 1 || star > 5) {
      return NextResponse.json({ error: "Rating tidak valid" }, { status: 400 });
    }

    if (komentar && komentar.length > 100) {
      return NextResponse.json({ error: "Komentar terlalu panjang" }, { status: 400 });
    }

    if (nama && nama.length > 10) {
      return NextResponse.json({ error: "nama terlalu panjang" }, { status: 400 });
    }

    const cek = await fetch(`https://statusakun.olimdipo.my.id/updatecek/${token}`, { signal: controller.signal });
    if (!cek.ok) {
      return NextResponse.json({ error: "Gagal cek token, silahkan coba lagi!" }, { status: 500 });
    }
    const hasilCek = await cek.json();

    if (hasilCek.error) return NextResponse.json({ error: `${token} Tidak Ditemukan` }, { status: 400 });
    if (hasilCek.ulasan) return NextResponse.json({ error: `anda sudah memberi ulasan` }, { status: 400 });

    const ulasan = {
      nama: nama || "Anonim",
      star,
      komentar: komentar || "",
      createdAt: new Date().toISOString(),
    };

    const simpan = await fetch(`https://statusakun.olimdipo.my.id/ulasan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ulasan }),
      signal: controller.signal,
    });

    if (!simpan.ok) {
      return NextResponse.json({ error: "Gagal memberi ulasan, silahkan coba lagi!" }, { status: 500 });
    }
    const uRess = await fetch(`https://mahalbos.olimdipo.my.id/tokenActive/${hasilCek.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ulasan }),
      signal: controller.signal,
    });

    if (!uRess.ok) {
      return NextResponse.json({ error: "Gagal memberi ulasan, silahkan coba lagi!" }, { status: 500 });
    }

    const update = await uRess.json();

    return NextResponse.json({ ...update }, { status: 200 });
  } catch (err: any) {
    if (err.name === "AbortError") {
      return NextResponse.json({ error: "Server sibuk coba lagi nanti" }, { status: 500 });
    }
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  } finally {
    clearTimeout(timeout);
  }
}
