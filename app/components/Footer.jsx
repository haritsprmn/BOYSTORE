"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">BOY STORE</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Gunakan alat ini secara bijak sebagai sarana pendukung belajar atau evaluasi mandiri. Pastikan kamu tetap memahami materi agar hasil yang didapat tetap bermanfaat bagi perkembangan akademismu.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h4 className="text-white font-semibold mb-3">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Order
                </Link>
              </li>
              <li>
                <Link href="/produk" className="hover:text-white transition">
                  Cek Pesanan
                </Link>
              </li>
              <li>
                <Link href="/cek-pesanan" className="hover:text-white transition">
                  Update Cookie
                </Link>
              </li>
              <li>
                <Link href="/tutorial" className="hover:text-white transition">
                  Tutorial
                </Link>
              </li>
            </ul>
          </div>

          {/* BANTUAN */}
          <div>
            <h4 className="text-white font-semibold mb-3">Bantuan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-white transition">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/rating" className="hover:text-white transition">
                  Beri Penilaian
                </Link>
              </li>
            </ul>
          </div>

          {/* KONTAK */}
          <div>
            <h4 className="text-white font-semibold mb-3">Kontak</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                WhatsApp: <span className="text-white">+62 858-7621-0954</span>
              </li>
              <li>
                Email: <span className="text-white">haritsboy94@gmail.com</span>
              </li>
              <li>Jam Operasional: 08.00 - 18.00</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Harits. All rights reserved.</p>

          <div className="flex gap-4 text-slate-400">
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
