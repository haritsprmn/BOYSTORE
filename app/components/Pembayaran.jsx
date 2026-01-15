"use client";

import { useEffect, useState, useRef } from "react";
import Count from "./Count";
import TimeID from "./TimeID";
import Link from "next/link";
import QRCode from "qrcode";
import Image from "next/image";

function Pembayaran({ data }) {
  console.log(data);
  const [qrSrc, setQrSrc] = useState("/blank.png");

  useEffect(() => {
    if (!data?.pembayaran) return;

    if (data.pembayaran.imgqr) {
      QRCode.toDataURL(data.pembayaran.imgqr, {
        width: 450,
        margin: 1,
        color: { dark: "#000", light: "#FFF" },
      })
        .then(setQrSrc)
        .catch((e) => console.error("QR ERROR:", e));
    } else if (data.pembayaran.imgqrh) {
      setQrSrc(data.pembayaran.imgqrh);
    }
  }, [data]);

  const copyText = async () => {
    if (typeof window === "undefined") return;

    try {
      await navigator.clipboard.writeText("HR-MK1OT6DA-26KIS4");
      alert("Disalin!");
    } catch (err) {
      alert("Gagal menyalin");
    }
  };

  const [openDetail, setOpenDetail] = useState(false);
  const [openTutorial, setOpenTutorial] = useState(false);

  const AccordionDetail = () => setOpenDetail(!openDetail);
  const AccordionTutorial = () => setOpenTutorial(!openTutorial);
  useEffect(() => {
    // lock scroll
    document.body.style.overflow = "hidden";
    return () => {
      // unlock scroll saat modal ditutup / unmount
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="fixed inset-0 z-50">
      {/* BACKDROP (TIDAK IKUT SCROLL) */}
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"></div>

      {/* WRAPPER SCROLL */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 overflow-y-auto">
        {/* MODAL */}
        <div className="relative bg-white w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-scale-in">
          <div className="bg-slate-50 p-6 text-center border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-800 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:wallet-money-bold-duotone" className="iconify text-blue-600 iconify--solar">
                <path fill="currentColor" d="M4.892 9.614c0-.402.323-.728.722-.728H9.47c.4 0 .723.326.723.728a.726.726 0 0 1-.723.729H5.614a.726.726 0 0 1-.722-.729"></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M21.188 10.004q-.094-.005-.2-.004h-2.773C15.944 10 14 11.736 14 14s1.944 4 4.215 4h2.773q.106.001.2-.004c.923-.056 1.739-.757 1.808-1.737c.004-.064.004-.133.004-.197v-4.124c0-.064 0-.133-.004-.197c-.069-.98-.885-1.68-1.808-1.737m-3.217 5.063c.584 0 1.058-.478 1.058-1.067c0-.59-.474-1.067-1.058-1.067s-1.06.478-1.06 1.067c0 .59.475 1.067 1.06 1.067"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="currentColor"
                  d="M21.14 10.002c0-1.181-.044-2.448-.798-3.355a4 4 0 0 0-.233-.256c-.749-.748-1.698-1.08-2.87-1.238C16.099 5 14.644 5 12.806 5h-2.112C8.856 5 7.4 5 6.26 5.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87C2 10.401 2 11.856 2 13.694v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238q.305-.308.526-.66c.45-.72.504-1.602.504-2.45l-.15.001h-2.774C15.944 18 14 16.264 14 14s1.944-4 4.215-4h2.773q.079 0 .151.002"
                  opacity=".5"
                ></path>
                <path fill="currentColor" d="M10.101 2.572L8 3.992l-1.733 1.16C7.405 5 8.859 5 10.694 5h2.112c1.838 0 3.294 0 4.433.153q.344.045.662.114L16 4l-2.113-1.428a3.42 3.42 0 0 0-3.786 0"></path>
              </svg>
              Pembayaran
            </h2>
            <p className="text-slate-500 text-xs mt-1 font-medium">Selesaikan pembayaran sebelum waktu habis</p>
          </div>

          <div className="p-6 flex flex-col items-center">
            {/* <div className="w-full bg-amber-50 border border-amber-100 text-amber-600 px-4 py-3 rounded-xl text-sm text-center mb-6 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="svg-spinners:ring-resize" className="iconify animate-spin text-lg iconify--svg-spinners">
                <g stroke="currentColor">
                  <circle cx="12" cy="12" r="9.5" fill="none" strokeLinecap="round" strokeWidth="3">
                    <animate
                      attributeName="stroke-dasharray"
                      calcMode="spline"
                      dur="1.5s"
                      keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                      keyTimes="0;0.475;0.95;1"
                      repeatCount="indefinite"
                      values="0 150;42 150;42 150;42 150"
                    ></animate>
                    <animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59"></animate>
                  </circle>
                  <animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform>
                </g>
              </svg>
              Status: PENDING. Menunggu pembayaran.
            </div> */}
            <div className="w-full mb-4 bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium flex justify-between items-center border border-red-100 shadow-sm">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 .352.636l3 1.875a.75.75 0 1 0 .796-1.272l-2.648-1.655z"></path>
                  <path fill="currentColor" fillRule="evenodd" d="M12 3.25a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M4.75 12a7.25 7.25 0 1 1 14.5 0a7.25 7.25 0 0 1-14.5 0" clipRule="evenodd"></path>
                </svg>{" "}
                Selesaikan dalam
              </span>
              <span id="countdown" className="font-bold font-mono text-base">
                <Count targetTime="2026-01-16T03:16:36.360774747Z" />
              </span>
            </div>

            {/* <!-- QR Code Frame --> */}
            <div className="relative p-4 bg-white rounded-2xl border-2 border-dashed border-blue-400 shadow-sm mb-6 group hover:border-slate-200 transition-colors">
              <Image src={qrSrc} alt="QR Pembayaran" width={192} height={192} className="object-contain rounded-lg mx-auto" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full border border-blue-400 shadow-sm flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:qr-code-bold" className="iconify text-slate-900 iconify--solar">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M16.525 2h.068c.884 0 1.597 0 2.17.055c.592.056 1.108.175 1.571.459c.47.288.864.682 1.152 1.152c.284.463.403.979.46 1.57C22 5.81 22 6.524 22 7.407v.07c0 .58 0 1.064-.037 1.458c-.04.412-.124.795-.34 1.147c-.21.344-.5.633-.844.844c-.352.216-.736.3-1.147.34c-.394.037-.879.037-1.46.037h-1.104c-.836 0-1.533 0-2.086-.074c-.584-.079-1.111-.251-1.535-.675s-.596-.95-.675-1.535c-.074-.553-.074-1.25-.074-2.086V5.827c0-.58 0-1.065.037-1.459c.04-.411.124-.795.34-1.146c.21-.345.5-.634.844-.845c.352-.216.735-.3 1.147-.34C15.459 2 15.944 2 16.525 2m.824 5.814c-.48 0-.72 0-.889-.12a.7.7 0 0 1-.154-.154c-.12-.17-.12-.41-.12-.889s0-.719.12-.888a.7.7 0 0 1 .154-.155c.17-.12.41-.12.889-.12s.719 0 .888.12q.09.065.155.155c.12.169.12.409.12.888s0 .72-.12.889a.7.7 0 0 1-.155.154c-.169.12-.409.12-.888.12M10.08 2.377c-.35-.216-.734-.3-1.146-.34C8.54 2 8.056 2 7.475 2h-.068c-.884 0-1.597 0-2.17.055c-.592.056-1.108.175-1.571.459c-.47.288-.864.682-1.152 1.152c-.284.463-.403.979-.46 1.57C2 5.81 2 6.524 2 7.407v.07c0 .58 0 1.064.037 1.458c.04.412.124.795.34 1.147c.21.344.5.633.845.844c.351.216.735.3 1.146.34c.394.037.878.037 1.46.037h1.104c.836 0 1.533 0 2.086-.074c.584-.079 1.111-.251 1.535-.675s.596-.95.675-1.535c.074-.553.074-1.25.074-2.086V5.827c0-.58 0-1.065-.037-1.459c-.04-.411-.124-.795-.34-1.146a2.56 2.56 0 0 0-.844-.845M5.764 7.694c.169.12.409.12.888.12s.72 0 .889-.12a.7.7 0 0 0 .154-.154c.12-.17.12-.41.12-.889s0-.719-.12-.888a.7.7 0 0 0-.154-.155c-.17-.12-.41-.12-.889-.12s-.719 0-.888.12a.7.7 0 0 0-.155.155c-.12.169-.12.409-.12.888s0 .72.12.889a.7.7 0 0 0 .155.154m3.254 5.078c.584.079 1.111.251 1.535.675s.596.95.675 1.535c.074.553.074 1.25.074 2.086v1.105c0 .58 0 1.065-.037 1.459c-.04.411-.124.795-.34 1.146c-.21.345-.5.634-.844.845c-.352.216-.735.3-1.147.34C8.54 22 8.056 22 7.475 22h-.068c-.884 0-1.597 0-2.17-.055c-.592-.056-1.108-.175-1.571-.459a3.5 3.5 0 0 1-1.152-1.152c-.284-.463-.403-.979-.46-1.57C2 18.19 2 17.477 2 16.594v-.07c0-.58 0-1.065.037-1.458c.04-.412.124-.795.34-1.147c.21-.344.5-.633.845-.844c.351-.216.735-.3 1.146-.34c.394-.037.878-.037 1.46-.037h1.104c.836 0 1.533 0 2.086.074m-2.367 5.74c-.48 0-.719 0-.888-.12a.7.7 0 0 1-.155-.155c-.12-.169-.12-.409-.12-.888s0-.72.12-.889a.7.7 0 0 1 .155-.154c.169-.12.409-.12.888-.12s.72 0 .889.12q.09.065.154.154c.12.17.12.41.12.889s0 .719-.12.888a.7.7 0 0 1-.154.155c-.17.12-.41.12-.889.12"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M12.698 16.616v.035h1.395c0-.668 0-1.116.036-1.458c.033-.33.093-.482.16-.583a1.2 1.2 0 0 1 .32-.321c.102-.067.254-.127.584-.16c.342-.035.79-.036 1.458-.036h1.86v-1.395h-1.895c-.623 0-1.143 0-1.564.042c-.44.045-.849.143-1.217.389c-.28.186-.52.426-.706.706c-.246.368-.344.777-.389 1.217c-.042.42-.042.94-.042 1.564M22 18.535v-.023h-1.395c0 .443 0 .74-.016.97c-.016.224-.043.333-.073.405a1.16 1.16 0 0 1-.63.63c-.07.029-.18.056-.404.072c-.23.015-.527.016-.97.016h-1.86V22h1.883c.414 0 .759 0 1.042-.02a2.6 2.6 0 0 0 .844-.175a2.56 2.56 0 0 0 1.384-1.384c.112-.27.156-.549.176-.844c.019-.283.019-.628.019-1.042m-7.907 2.767a.698.698 0 1 1-1.395 0v-2.79h1.395zm7.209-8.604a.7.7 0 0 0-.697.697v3.256H22v-3.256a.7.7 0 0 0-.698-.697m-5.226 3.919c-.076.184-.076.417-.076.883s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54C18.199 16 17.966 16 17.5 16s-.699 0-.883.076a1 1 0 0 0-.54.541"
                  ></path>
                </svg>
                <span className="text-[10px] font-bold text-slate-600">SCAN QRIS</span>
              </div>
            </div>

            {/* <!-- Transaction Details --> */}
            <div className="w-full bg-slate-50/80 rounded-2xl p-5 space-y-4 mb-6 border border-slate-100">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 text-xs font-semibold uppercase">Total Tagihan</span>
                <span className="text-xl font-extrabold text-slate-800">Rp 1.132</span>
              </div>
              <div className="h-px bg-slate-200/60 w-full"></div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-xs">ID Transaksi</span>
                  <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-slate-100">
                    <span className="font-mono text-xs font-bold text-slate-700 select-all">HR-MK1OT6DA-26KIS4</span>
                    <button onClick={copyText} className="text-slate-400 hover:text-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:copy-bold" className="iconify iconify--solar">
                        <path
                          fill="currentColor"
                          d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593s1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.6 3.6 0 0 0 15.24 2"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847S21 8.671 21 11.397v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-xs">Status</span>
                  <span className="text-xs text-amber-500 font-bold bg-amber-50 px-2 py-1 rounded-md">Pending</span>
                </div>
              </div>
            </div>

            {/* <!-- Action Buttons --> */}
            <div className="w-full space-y-3">
              <a
                href="?check_status=1&amp;trx_id=YO-5C0DCF4F&amp;amount=1132&amp;qr=https%3A%2F%2Fyogateway.id%2Fassets%2Fqris%2Fqris_YO-5C0DCF4F.png&amp;expired=2025-12-06+02%3A24%3A42&amp;prod=Paket+Harian"
                className="w-full btn-gradient text-white text-center font-bold py-3.5 rounded-xl shadow-lg shadow-blue-200/50 flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:refresh-circle-bold" className="iconify text-xl iconify--solar">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-16.54-.917a6.59 6.59 0 0 1 6.55-5.833a6.59 6.59 0 0 1 5.242 2.592a.75.75 0 0 1-1.192.911a5.09 5.09 0 0 0-4.05-2.003a5.09 5.09 0 0 0-5.037 4.333h.364a.75.75 0 0 1 .53 1.281l-1.169 1.167a.75.75 0 0 1-1.06 0L4.47 12.364a.75.75 0 0 1 .53-1.28zm12.902-.614a.75.75 0 0 0-1.06 0l-1.168 1.167a.75.75 0 0 0 .53 1.28h.363a5.09 5.09 0 0 1-5.036 4.334a5.08 5.08 0 0 1-4.038-1.986a.75.75 0 0 0-1.188.916a6.58 6.58 0 0 0 5.226 2.57a6.59 6.59 0 0 0 6.549-5.833H19a.75.75 0 0 0 .53-1.281z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Cek Status Pembayaran
              </a>
              <Link
                href="/detail?trx=HR-MK1OT6DA-26KIS4"
                className="w-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 text-center font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:link-circle-bold" className="iconify text-lg iconify--solar">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M9.5 8.75A3.25 3.25 0 1 0 12.75 12a.75.75 0 0 1 1.5 0A4.75 4.75 0 1 1 9.5 7.25a.75.75 0 0 1 0 1.5M17.75 12a3.25 3.25 0 0 1-3.25 3.25a.75.75 0 0 0 0 1.5A4.75 4.75 0 1 0 9.75 12a.75.75 0 0 0 1.5 0a3.25 3.25 0 0 1 6.5 0"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Buka Detail Pesanan
              </Link>
              <a href="?reset=1" className="block text-center text-xs text-red-400 hover:text-red-600 font-medium transition-colors pt-2">
                Batalkan Transaksi
              </a>
            </div>
            <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <button
                onClick={AccordionDetail} // ✅ React style
                className="w-full px-5 py-3 flex justify-between items-center bg-white hover:bg-slate-50 transition"
              >
                <span className="text-sm font-semibold text-slate-700">Rincian Pesanan</span>
                <iconify-icon icon="heroicons:chevron-down" className="text-slate-400 transition-transform" style={{ transform: openDetail ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>

              <div className={`border-t border-slate-100 bg-slate-50/50 p-5 text-sm ${openDetail ? "block" : "hidden"}`}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-500">Item</span>
                  <span className="font-medium text-slate-800 text-right">HRSTOREfixs</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-500">Harga</span>
                  <span className="font-medium text-slate-800">Rp 1.213</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="font-bold text-slate-700">Total</span>
                  <span className="font-bold text-blue-600">Rp 1.213</span>
                </div>
              </div>
            </div>

            <div className="mt-4 w-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <button onClick={AccordionTutorial} className="w-full px-5 py-3 flex justify-between items-center bg-white hover:bg-slate-50 transition">
                <span className="text-sm font-semibold text-slate-700">Cara Pembayaran</span>
                <iconify-icon id="icon-guide" icon="heroicons:chevron-down" className="text-slate-400 transition-transform" style={{ transform: openTutorial ? "rotate(180deg)" : "rotate(0deg)" }}></iconify-icon>
              </button>
              <div id="guide-details" className={`border-t border-slate-100 bg-slate-50/50 p-5 text-sm text-slate-600 space-y-3 ${openTutorial ? "block" : "hidden"}`}>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                  <p>Buka aplikasi e-wallet (GoPay, OVO, Dana, LinkAja, ShopeePay) atau Mobile Banking (BCA, Mandiri, BRI, dll).</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                  <p>
                    Pilih menu <strong>Scan QRIS</strong>.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs">3</span>
                  <p>Arahkan kamera ke kode QR di atas.</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs">4</span>
                  <p>
                    Periksa nama merchant <strong className="text-slate-800">PAKASIR</strong> dan total bayar.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs">5</span>
                  <p>Masukkan PIN Anda dan pembayaran selesai.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pembayaran;
