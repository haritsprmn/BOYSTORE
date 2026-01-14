"use client";

export default function Kontak() {
  return (
    <section className="pt-40 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Hubungi Kami</h2>
          <p className="text-slate-500 mt-2 text-sm">Butuh bantuan? Tim kami siap membantu Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* INFO KONTAK */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-xl font-bold text-slate-800">Informasi Kontak</h3>

            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-4">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-xl">📞</span>
                <div>
                  <p className="font-semibold text-slate-800">WhatsApp</p>
                  <p>+62 822-8065-4836</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="bg-green-100 text-green-600 p-2 rounded-xl">✉️</span>
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <p>support@pakasir.id</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="bg-purple-100 text-purple-600 p-2 rounded-xl">⏰</span>
                <div>
                  <p className="font-semibold text-slate-800">Jam Operasional</p>
                  <p>Setiap hari, 08.00 - 22.00 WIB</p>
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
