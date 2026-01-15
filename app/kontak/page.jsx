"use client";

export default function Kontak() {
  return (
    <section className="pt-40 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 gradient-text">Hubungi Kami</h2>
          <p className="text-slate-500 mt-2 text-sm">Butuh bantuan? Tim kami siap membantu Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* INFO KONTAK */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">Informasi Kontak</h3>

            <div className="space-y-4 text-sm text-slate-600">
              {/* WhatsApp */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-green-50/50 hover:bg-green-100 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md transform hover:scale-105">
                <span className="bg-green-100 text-green-600 p-3 rounded-full text-lg transition-transform duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                    ></path>
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-slate-800">WhatsApp</p>
                  <p className="text-slate-700 hover:underline">+62 858-7621-0954</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-blue-50/50 hover:bg-blue-100 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md transform hover:scale-105">
                <span className="bg-blue-100 text-blue-600 p-3 rounded-full text-lg transition-transform duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-.67 2L12 10.75L5.67 6ZM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2a1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1"
                    ></path>
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <p className="text-slate-700 hover:underline">haritsboy94@gmail.com</p>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-purple-50/50 hover:bg-purple-100 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md transform hover:scale-105">
                <span className="bg-purple-100 text-purple-600 p-3 rounded-full text-lg transition-transform duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 .352.636l3 1.875a.75.75 0 1 0 .796-1.272l-2.648-1.655z"></path>
                    <path fill="currentColor" fillRule="evenodd" d="M12 3.25a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M4.75 12a7.25 7.25 0 1 1 14.5 0a7.25 7.25 0 0 1-14.5 0" clipRule="evenodd"></path>
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-slate-800">Jam Operasional</p>
                  <p className="text-slate-700">Setiap hari, 08.00 - 18.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM KONTAK */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Kirim Pesan</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Nama</label>
                <input type="text" placeholder="Nama lengkap" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Email</label>
                <input type="email" placeholder="email@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Pesan</label>
                <textarea rows="4" placeholder="Tulis pesan Anda..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"></textarea>
              </div>

              <button type="submit" className="w-full btn-gradient text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
