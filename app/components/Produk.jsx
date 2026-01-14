"use client";
import { useState } from "react";
import InputModal from "./InputModal.jsx";

function Produk() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    price: 0,
  });

  const openModal = (name, price) => {
    setSelectedProduct({ name, price });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <section id="produk" className="py-12 px-4 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pilih Paket Terbaik</h2>
            <p className="text-slate-500">Sesuaikan dengan kebutuhan durasi dan budget Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-between items-start">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:cup-hot-bold-duotone" className="iconify text-4xl iconify--solar">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M6.977 1.327a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 0 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175m4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175m4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175"
                      clipRule="evenodd"
                      opacity=".5"
                    ></path>
                    <path fill="currentColor" d="M9.613 22h.774c2.66 0 3.991 0 4.856-.81c.67-.626.874-1.564 1.015-3.19H3.742c.14 1.626.344 2.564 1.014 3.19c.865.81 2.196.81 4.856.81" opacity=".5"></path>
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3.284 11.266c-.133-2-.2-2.999.393-3.632C4.27 7 5.272 7 7.276 7h5.449c2.003 0 3.005 0 3.598.634c.162.173.275.374.35.616H17a4.75 4.75 0 1 1 0 9.5h-.722l-.02.25H3.742a86 86 0 0 1-.116-1.6zm13.1 4.984H17a3.25 3.25 0 0 0 0-6.5h-.2c-.012.43-.045.93-.084 1.516z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Paket Harian</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-sm font-semibold text-slate-400">Rp</span>
                <span className="text-4xl font-extrabold text-slate-800">3.000</span>
              </div>
              <p className="text-slate-500 text-sm mb-8">Akses 1 Hari. Cocok untuk uji coba layanan.</p>

              <div className="h-px w-full bg-slate-100 mb-8"></div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-icon="solar:check-circle-bold"
                    className="iconify text-green-500 text-lg flex-shrink-0 iconify--solar"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Durasi 24 Jam
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-icon="solar:check-circle-bold"
                    className="iconify text-green-500 text-lg flex-shrink-0 iconify--solar"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Server Lokal
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-icon="solar:check-circle-bold"
                    className="iconify text-green-500 text-lg flex-shrink-0 iconify--solar"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Garansi Aktif
                </li>
              </ul>

              <button onClick={() => openModal("Paket Harian", 3000)} className="w-full btn-gradient text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                Pilih Paket
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:arrow-right-line-duotone" className="iconify text-lg iconify--solar">
                  <g fill="none">
                    <path fill="currentColor" d="M4 11.25a.75.75 0 0 0 0 1.5zm0 1.5h16v-1.5H4z" opacity=".5"></path>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 6l6 6l-6 6"></path>
                  </g>
                </svg>
              </button>
            </div>
            <div className="relative group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-between items-start">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:calendar-date-bold-duotone" className="iconify text-4xl iconify--solar">
                    <path
                      fill="currentColor"
                      d="M6.96 2c.418 0 .756.31.756.692V4.09c.67-.012 1.422-.012 2.268-.012h4.032c.846 0 1.597 0 2.268.012V2.692c0-.382.338-.692.756-.692s.756.31.756.692V4.15c1.45.106 2.403.368 3.103 1.008c.7.641.985 1.513 1.101 2.842v1H2V8c.116-1.329.401-2.2 1.101-2.842c.7-.64 1.652-.902 3.103-1.008V2.692c0-.382.339-.692.756-.692"
                    ></path>
                    <path fill="currentColor" d="M22 14v-2c0-.839-.013-2.335-.026-3H2.006c-.013.665 0 2.161 0 3v2c0 3.771 0 5.657 1.17 6.828C4.349 22 6.234 22 10.004 22h4c3.77 0 5.654 0 6.826-1.172S22 17.771 22 14" opacity=".5"></path>
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M14 12.25A1.75 1.75 0 0 0 12.25 14v2a1.75 1.75 0 1 0 3.5 0v-2A1.75 1.75 0 0 0 14 12.25m0 1.5a.25.25 0 0 0-.25.25v2a.25.25 0 1 0 .5 0v-2a.25.25 0 0 0-.25-.25"
                      clipRule="evenodd"
                    ></path>
                    <path fill="currentColor" d="M11.25 13a.75.75 0 0 0-1.28-.53l-1.5 1.5a.75.75 0 0 0 1.06 1.06l.22-.22V17a.75.75 0 0 0 1.5 0z"></path>
                  </svg>
                </div>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-blue-200">Popular</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Paket Mingguan</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-sm font-semibold text-slate-400">Rp</span>
                <span className="text-4xl font-extrabold text-slate-800">15.000</span>
              </div>
              <p className="text-slate-500 text-sm mb-8">Akses 7 Hari. Lebih hemat untuk kebutuhan jangka pendek.</p>

              <div className="h-px w-full bg-slate-100 mb-8"></div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-icon="solar:check-circle-bold"
                    className="iconify text-green-500 text-lg flex-shrink-0 iconify--solar"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Durasi 7 Hari
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-icon="solar:check-circle-bold"
                    className="iconify text-green-500 text-lg flex-shrink-0 iconify--solar"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Server Premium
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-icon="solar:check-circle-bold"
                    className="iconify text-green-500 text-lg flex-shrink-0 iconify--solar"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Prioritas Support
                </li>
              </ul>

              <button onClick={() => openModal("Paket Mingguan", 15000)} className="w-full btn-gradient text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                Pilih Paket
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:arrow-right-line-duotone" className="iconify text-lg iconify--solar">
                  <g fill="none">
                    <path fill="currentColor" d="M4 11.25a.75.75 0 0 0 0 1.5zm0 1.5h16v-1.5H4z" opacity=".5"></path>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 6l6 6l-6 6"></path>
                  </g>
                </svg>
              </button>
            </div>
            <div className="relative group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-between items-start">
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:crown-star-bold-duotone" className="iconify text-4xl iconify--solar">
                    <path
                      fill="currentColor"
                      d="m21.838 11.126l-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22h-2.72c-3.545 0-5.317 0-6.5-1.21s-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a1 1 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998c.618.704.927 1.055 1.271 1.11a.92.92 0 0 0 .562-.09c.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2s1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464c.176.089.37.12.562.09c.344-.055.653-.406 1.271-1.11c1.195-1.36 1.792-2.04 2.268-1.998a1 1 0 0 1 .675.367c.327.395.237 1.352.057 3.264"
                      opacity=".5"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m12.952 12.699l-.098-.176c-.38-.682-.57-1.023-.854-1.023s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.136.399-.136s.202.046.399.136l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354"
                    ></path>
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Paket Bulanan</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-sm font-semibold text-slate-400">Rp</span>
                <span className="text-4xl font-extrabold text-slate-800">35.000</span>
              </div>
              <p className="text-slate-500 text-sm mb-8">Akses 30 Hari. Solusi terbaik dan paling hemat.</p>

              <div className="h-px w-full bg-slate-100 mb-8"></div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-icon="solar:check-circle-bold"
                    className="iconify text-green-500 text-lg flex-shrink-0 iconify--solar"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Durasi 30 Hari
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-icon="solar:check-circle-bold"
                    className="iconify text-green-500 text-lg flex-shrink-0 iconify--solar"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Akses Penuh
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-icon="solar:check-circle-bold"
                    className="iconify text-green-500 text-lg flex-shrink-0 iconify--solar"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  VIP Support
                </li>
              </ul>

              <button onClick={() => openModal("Paket Bulanan", 35000)} className="w-full btn-gradient text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                Pilih Paket
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:arrow-right-line-duotone" className="iconify text-lg iconify--solar">
                  <g fill="none">
                    <path fill="currentColor" d="M4 11.25a.75.75 0 0 0 0 1.5zm0 1.5h16v-1.5H4z" opacity=".5"></path>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 6l6 6l-6 6"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <InputModal isOpen={modalOpen} onClose={closeModal} product={selectedProduct} />
    </>
  );
}

export default Produk;
