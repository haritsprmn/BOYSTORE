"use client";
import { useEffect, useState } from "react";
import Pembayaran from "@/app/components/Pembayaran";

function Navbar() {
  const [hasLastTrx, setHasLastTrx] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedTrx = localStorage.getItem("last_trx");
    if (savedTrx) {
      setHasLastTrx(true);
    }
    if (savedTrx) setData(JSON.parse(savedTrx));
  }, []);
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-40 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2.5 group cursor-pointer">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center gap-2.5 group sm:cursor-default">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      data-icon="solar:layers-minimalistic-bold-duotone"
                      className="iconify text-2xl text-blue-600 iconify--solar"
                    >
                      <path
                        fill="currentColor"
                        d="M7.624 4.449C9.501 3.698 10.621 3.25 12 3.25s2.499.448 4.376 1.199l2.97 1.188c.954.382 1.727.69 2.258.969c.268.14.528.3.729.493c.206.198.417.498.417.901s-.21.703-.417.901c-.2.193-.46.352-.73.493c-.53.278-1.303.587-2.258.97l-2.97 1.187C14.5 12.302 13.38 12.75 12 12.75s-2.499-.448-4.376-1.199l-2.969-1.188c-.955-.382-1.728-.69-2.259-.969a3.2 3.2 0 0 1-.729-.493C1.461 8.703 1.25 8.403 1.25 8s.21-.703.417-.901c.2-.193.46-.352.73-.493c.53-.278 1.303-.587 2.258-.97z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M2.502 11.443L2.5 11.44a.75.75 0 0 0-1 1.119L2 12l-.5.559l.002.002l.005.004l.014.012l.045.039q.057.047.161.129c.14.108.343.256.61.429c.533.346 1.32.79 2.363 1.207l2.809 1.124l.115.046c1.877.751 2.997 1.199 4.376 1.199s2.499-.448 4.375-1.199l.116-.046L19.3 14.38a13.7 13.7 0 0 0 2.363-1.207a9 9 0 0 0 .771-.558l.045-.039l.014-.012l.005-.004l.001-.002h.002a.75.75 0 0 0-1-1.119l-.002.002l-.002.001l-.024.021l-.118.094a8 8 0 0 1-.508.357c-.46.299-1.161.697-2.105 1.074l-2.808 1.123c-2.025.81-2.874 1.138-3.934 1.138s-1.91-.328-3.934-1.138L5.257 12.99a12 12 0 0 1-2.104-1.074a8 8 0 0 1-.65-.472"
                        opacity=".7"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M2.499 15.5a.75.75 0 0 0-1 1.118H1.5l.002.002l.005.004l.014.012l.045.039l.161.13c.14.107.343.255.61.428c.533.346 1.32.79 2.363 1.207l2.809 1.124l.115.046c1.877.751 2.997 1.2 4.376 1.2s2.499-.449 4.375-1.2l.116-.046L19.3 18.44a13.7 13.7 0 0 0 2.363-1.208a9 9 0 0 0 .771-.558l.045-.039l.014-.012l.005-.004l.001-.001l.002-.002a.75.75 0 0 0-1-1.118l-.002.002l-.002.001l-.024.021l-.118.094a8 8 0 0 1-.508.357c-.46.299-1.161.697-2.105 1.074l-2.808 1.123c-2.025.81-2.874 1.138-3.934 1.138s-1.91-.328-3.934-1.138l-2.809-1.123a12 12 0 0 1-2.104-1.073a8 8 0 0 1-.626-.452l-.025-.02z"
                        opacity=".4"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl tracking-tight text-slate-800 leading-none">BOY</span>
                  <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Store</span>
                </div>
              </button>
            </div>

            {isMobileMenuOpen && (
              <div className="sm:hidden glass-nav absolute top-20 left-0 w-full animate-slide-down-soft">
                <div className="flex flex-col p-4 gap-3">
                  <button onClick={() => setIsMobileMenuOpen(false)} className="w-full px-4 py-3 bg-slate-100 rounded-xl text-slate-600">
                    Status Pembayaran
                  </button>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="w-full px-4 py-3 bg-slate-100 rounded-xl text-slate-600">
                    Update Cookie
                  </button>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="w-full px-4 py-3 bg-slate-100 rounded-xl text-slate-600">
                    Tutorial
                  </button>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="w-full px-4 py-3 bg-slate-100 rounded-xl text-slate-600">
                    ✖ Tutup
                  </button>
                </div>
              </div>
            )}

            {/* <!-- Resume Button --> */}
            {hasLastTrx && (
              <button id="resumeBtn" onClick={() => setOpen(true)} className="none px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-bold hover:bg-amber-200 transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:history-bold" className="iconify animate-pulse iconify--solar">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5.079 5.069c3.795-3.79 9.965-3.75 13.783.069c3.82 3.82 3.86 9.993.064 13.788s-9.968 3.756-13.788-.064a9.81 9.81 0 0 1-2.798-8.28a.75.75 0 1 1 1.487.203a8.31 8.31 0 0 0 2.371 7.017c3.245 3.244 8.468 3.263 11.668.064c3.199-3.2 3.18-8.423-.064-11.668c-3.243-3.242-8.463-3.263-11.663-.068l.748.003a.75.75 0 1 1-.007 1.5l-2.546-.012a.75.75 0 0 1-.746-.747L3.575 4.33a.75.75 0 1 1 1.5-.008zm6.92 2.18a.75.75 0 0 1 .75.75v3.69l2.281 2.28a.75.75 0 1 1-1.06 1.061l-2.72-2.72V8a.75.75 0 0 1 .75-.75"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Lanjutkan Transaksi
              </button>
            )}
          </div>
        </div>
      </nav>
      <Pembayaran data={data} show={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default Navbar;
