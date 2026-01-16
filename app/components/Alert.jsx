"use client";

import { useEffect, useState } from "react";

export default function Alert({ show, onClose, warna = true, message = "Berhasil disalin!" }) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) setVisible(true); // trigger masuk

    const timer = setTimeout(() => {
      setVisible(false); // trigger keluar
      setTimeout(() => onClose?.(), 300); // hapus dari DOM setelah animasi
    }, 2000); // auto close 2 detik

    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!show && !visible) return null;

  return (
    <>
      {warna && (
        <div
          className={`fixed top-5 right-5 z-50 max-w-xs transition-transform transition-opacity duration-500
            ${visible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
        >
          <div className="flex items-center gap-3 bg-emerald-50 text-emerald-700 px-5 py-3 rounded-xl shadow-md border border-emerald-100">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>

            {/* Message */}
            <span className="text-sm font-medium flex-1">{message}</span>

            {/* Close button */}
            <button onClick={() => setVisible(false)} className="text-emerald-600 hover:text-emerald-800 transition-colors rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      {!warna && (
        <div
          className={`fixed top-5 right-5 z-50 max-w-xs transition-transform transition-opacity duration-500
            ${visible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
        >
          <div className="flex items-center gap-3 bg-red-50 text-red-700 px-5 py-3 rounded-xl shadow-md border border-red-100">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>

            {/* Message */}
            <span className="text-sm font-medium flex-1">{message}</span>

            {/* Close button */}
            <button onClick={() => setVisible(false)} className="text-red-600 hover:text-red-800 transition-colors rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
