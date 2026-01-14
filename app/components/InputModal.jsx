function InputModal({ isOpen, onClose, product }) {
  if (!isOpen) return null;
  return (
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

        <form method="POST">
          <input type="hidden" name="action" value="checkout" />
          <input type="hidden" name="product_name" id="modal_product_name" />
          <input type="hidden" name="amount" id="modal_amount" />

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
                name="nomor_wa"
                placeholder="812xxxxx"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                required=""
              />
            </div>
          </div>

          {/* <!-- Input Pilih Akun (Dropdown dari API) --> */}
          <div className="mb-8">
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Pilih Akun / Cookie</label>
            <div className="relative">
              <select
                name="cookie"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none transition-all cursor-pointer"
                required=""
              >
                <option value="">-- Pilih Akun Tersedia --</option>
                <option value="25">Pamekaran (14/40)</option>
                <option value="27">Sello (15/40)</option>
                <option value="28">Litha (3/40)</option>
                <option value="29">Unsa (6/40)</option>
                <option value="30">Felis (13/40)</option>
                <option value="31">Adel (16/40)</option>
                <option value="32">Dio (8/40)</option>
                <option value="33">Fay (7/40)</option>
                <option value="34">Gio (9/40)</option>
                <option value="35">Naya (15/40)</option>
                <option value="36">Rai (0/40)</option>
                <option value="37">Sora (8/40)</option>
                <option value="38">Vio (0/40)</option>
                <option value="39">Zee (35/40)</option>
                <option value="40">Tara (2/40)</option>
                <option value="41">Rey (7/40)</option>
              </select>
              <div className="absolute right-4 top-3.5 text-slate-400 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:alt-arrow-down-bold" className="iconify text-xl iconify--solar">
                  <path fill="currentColor" d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"></path>
                </svg>
              </div>
            </div>
          </div>

          <button type="submit" className="w-full btn-gradient text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-blue-200 transition-all flex justify-center items-center gap-2">
            Lanjut Pembayaran
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
  );
}

export default InputModal;
