"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import AkunDropDown from "./AkunDropDown";
import { statusAkun } from "../lib/api";

export default function Cookie({ onSubmit, loading }) {
  const searchParams = useSearchParams();
  const tkn = searchParams.get("tkn");
  const [token, setToken] = useState(tkn || "");
  const [akun, setAkun] = useState(null);
  const [cookie, setCookie] = useState("");

  useEffect(() => {
    statusAkun().then((data) => setAkun(data));
  }, []);

  //   useEffect(() => {
  //     console.log("cookie:", cookie);
  //     console.log(cookie.index);
  //     console.log(cookie._displayName);
  //   }, [cookie]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ token, cookie });
  }

  return (
    <>
      <section className="pt-42 pb-35 py-16">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 gradient-text">Update Cookie</h2>
              <p className="text-sm text-slate-500 mt-1">Anda dapat update cookie sebelum di gunakan agar dapat menikmati fitur yang telah kami sediakan</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Token Input */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-600 mb-1">Token</label>
                <input
                  type="text"
                  name="toket"
                  placeholder="BOY-UZAYL"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  required
                />
              </div>

              {/* Cookie Input */}
              <AkunDropDown akun={akun} value={cookie} onChange={setCookie} />

              {/* <AkunDropDown akun={akun} value={cookie} onChange={(e) => setCookie(e.target.value)} /> */}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full ${loading ? "btn-gradient cursor-not-allowed" : "btn-gradient"} text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group-hover:gap-3 transition-all`}
              >
                {loading ? "Memproses..." : "Update Cookie"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
