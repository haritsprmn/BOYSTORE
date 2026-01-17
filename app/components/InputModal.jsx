"use client";

import { useEffect, useState } from "react";
import AkunDropDown from "./AkunDropDown";
import { statusAkun } from "../lib/api";

function InputModal({ isOpen, onClose, product, onSuccess }) {
  const [akun, setAkun] = useState(null);
  const [paket, setPaket] = useState("");
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie] = useState("");

  useEffect(() => {
    statusAkun().then((data) => setAkun(data));
  }, []);

  useEffect(() => {
    if (!product) return;

    if (product.price === 3000) setPaket("1");
    else if (product.price === 15000) setPaket("7");
    else if (product.price === 35000) setPaket("30");
  }, [product]);

  if (!isOpen) return null;
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const target = e.target;
    const nomor = target.nomorWA.value.trim();
    const cookie = target.cookie.value;
    const textTumbal = target.cookie.selectedOptions[0].text;
    const cookieText = textTumbal.split(" ")[0];

    let wa = "0" + nomor.replace(/\D/g, "");

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          wa,
          durasi: paket,
          cookie,
          cookieText,
        }),
      });
      const trx = await res.json();
      localStorage.setItem("last_trx", JSON.stringify(trx));
      window.dispatchEvent(new Event("trx-created"));

      setLoading(false);
      onSuccess(trx); // 🔥 KUNCI
    } catch {
      setLoading(false);
    }
  }

  return (
    <>
      <div id="inputModal" className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl animate-scale-in">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-900">Lengkapi Data</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:close-circle-bold" className="iconify text-2xl iconify--solar">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {/* <!-- Info Paket --> */}
            <div className="mb-5 bg-blue-50 border border-blue-100 p-4 rounded-xl flex justify-between items-center">
              <div>
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">Paket Dipilih</div>
                <div className="font-bold text-blue-900 text-lg" id="display_product">
                  {product.name}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">Harga</div>
                <div className="font-bold text-blue-900 text-lg" id="display_price">
                  Rp {new Intl.NumberFormat("id-ID").format(product.price)}
                </div>
              </div>
            </div>

            {/* <!-- Input Nomor WA --> */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Nomor WhatsApp</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-slate-400 font-bold select-none">+62</span>
                <input
                  type="number"
                  name="nomorWA"
                  placeholder="812xxxxx"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  required=""
                />
              </div>
            </div>

            {/* <!-- Input Pilih Akun (Dropdown dari API) --> */}
            <AkunDropDown akun={akun} value={cookie} onChange={setCookie} />

            <button disabled={loading} type="submit" className="w-full btn-gradient text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-blue-200 transition-all flex justify-center items-center gap-2">
              {loading ? "Memproses..." : "Lanjut Pembayaran"}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:card-send-bold" className="iconify iconify--solar">
                <path fill="currentColor" fillRule="evenodd" d="M18.47 13.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z" clipRule="evenodd"></path>
                <path fill="currentColor" d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4"></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 20h4c1.056 0 1.964 0 2.75-.026v-1.738a2.25 2.25 0 0 1-1.341-3.827l2-2a2.25 2.25 0 0 1 3.182 0l1.403 1.403Q22 12.988 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20m-4.75-4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m7.25-.75a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default InputModal;
