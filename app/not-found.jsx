"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center rounded-3xl p-10">
        {/* Icon */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-600">
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <path d="M8 15s1.5-2 4-2 4 2 4 2" strokeWidth="1.5" />
            <path d="M9 9h.01M15 9h.01" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-5xl font-extrabold text-slate-900 mb-3">404</h1>
        <p className="text-lg font-semibold text-slate-700 mb-1">This page could not be found</p>
        <p className="text-sm text-slate-500 mb-8">Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.</p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="w-full btn-gradient text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
            Kembali ke Beranda
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full font-bold border border-slate-200 py-4 rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 hover:bg-slate-50 font-bold transition active:scale-95"
          >
            Halaman Sebelumnya
          </button>
        </div>
      </div>
    </div>
  );
}
