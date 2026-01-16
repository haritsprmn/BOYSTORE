"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Pesanan({ onSubmit, loading }) {
  const searchParams = useSearchParams();
  const tkn = searchParams.get("tkn");
  const [token, setToken] = useState(tkn || "");

  return (
    <>
      <section className="pt-42 pb-35 py-16">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 gradient-text">Cek Pesanan</h2>
              <p className="text-sm text-slate-500 mt-1">
                Anda dapat melihat detail pesanan anda hanya dengan menggunakan <b>Token</b> / <b>TRXID</b>
              </p>
            </div>

            {/* Token Input */}
            <div className="mb-2">
              <label className="block text-xs font-semibold text-slate-600 mb-1">Token / TRXID</label>
              <input
                type="text"
                placeholder="BOY-UZAYL / HR-MKAUZ9NO-5M5Q2I"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
            </div>

            {/* Submit */}
            <button
              disabled={loading || !token}
              onClick={() => onSubmit(token)}
              className={`w-full ${loading ? "btn-gradient cursor-not-allowed" : "btn-gradient"} text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group-hover:gap-3 transition-all`}
            >
              {loading ? "Memproses..." : "Lihat Detail Pesanan"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
