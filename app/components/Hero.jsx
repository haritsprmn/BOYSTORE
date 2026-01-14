function Hero() {
  return (
    <section className="pt-40 pb-16 px-4 relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-blue-100 shadow-sm mb-8 animate-float backdrop-blur-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">Tools Quizizz #1</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight">
          Bantu Kuis Online <br />
          <span className="gradient-text">Jadi Lebih Mudah</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Anti-Cheat Bypass Technology: Keunggulan utama kami! Tool ini mampu melewati deteksi "Menu Ujian" terbaru, termasuk proteksi pindah tab (tab-switching) dan pemantauan aktivitas browser.
        </p>

        <div className="max-w-md mx-auto bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl flex items-center shadow-sm animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:danger-circle-bold" className="iconify text-xl mr-2 iconify--solar">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-sm font-medium">Status: PENDING. Menunggu pembayaran.</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
