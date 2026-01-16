"use client";
import { useState } from "react";
import Review from "../components/Review";
import { useSearchParams } from "next/navigation";

export default function RatingUlasan() {
  const searchParams = useSearchParams();
  const tkn = searchParams.get("tkn");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [token, setToken] = useState(tkn || "");
  const [nama, setNama] = useState("");
  return (
    <>
      <section className="pt-40 py-16">
        <Review speed={90} arah="right" />
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 gradient-text">Beri Penilaian</h2>
              <p className="text-sm text-slate-500 mt-1">Pendapat Anda sangat berarti bagi kami</p>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} type="button" onClick={() => setRating(star)} onMouseEnter={() => setHover(star)} onMouseLeave={() => setHover(0)} className="transition-transform active:scale-90">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={star <= (hover || rating) ? "#facc15" : "none"} stroke="#facc15" className="w-8 h-8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.562.562 0 0 0 .475.345l5.518.442a.562.562 0 0 1 .32.988l-4.204 3.602a.562.562 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.01 20.539a.562.562 0 0 1-.84-.61l1.285-5.385a.562.562 0 0 0-.182-.557L2.07 10.385a.562.562 0 0 1 .32-.988l5.518-.442a.562.562 0 0 0 .475-.345L10.508 3.5Z"
                    />
                  </svg>
                </button>
              ))}
            </div>

            {/* Rating Text */}
            <p className="text-center text-sm text-slate-600 mb-6">{rating === 0 ? "Pilih rating" : `Anda memberi ${rating} dari 5 bintang`}</p>

            {/* Token Input */}
            <div className="mb-2">
              <label className="block text-xs font-semibold text-slate-600 mb-1">Token (WAJIB)</label>
              <input type="text" placeholder="BOY-UZAYL" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" value={token} onChange={(e) => setToken(e.target.value)} />
            </div>

            {/* Nama Input */}
            <div className="mb-2">
              <label className="block text-xs font-semibold text-slate-600 mb-1">Nama (Opsional)</label>
              <input type="text" placeholder="Anonim" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" value={nama} onChange={(e) => setNama(e.target.value)} />
            </div>

            {/* Review Input */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-600 mb-1">Ulasan (Opsional)</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                rows="4"
                placeholder="Tulis ulasan Anda..."
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              />
            </div>

            {/* Submit */}
            <button
              onClick={() => {
                alert(`Rating: ${rating}\nUlasan: ${review || "-"}`);
              }}
              disabled={rating === 0}
              className="w-full btn-gradient text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group-hover:gap-3 transition-all"
            >
              Kirim Ulasan
            </button>
          </div>
        </div>
        <Review arah="left" />
      </section>
    </>
  );
}
