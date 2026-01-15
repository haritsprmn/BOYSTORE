"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Apa itu Pakasir?",
    answer: "Pakasir adalah platform pembayaran digital yang mendukung QRIS dan berbagai metode pembayaran untuk memudahkan transaksi Anda.",
  },
  {
    question: "Bagaimana cara melakukan pembayaran?",
    answer: "Anda cukup scan QRIS yang muncul di halaman pembayaran menggunakan aplikasi e-wallet atau mobile banking Anda.",
  },
  {
    question: "Berapa lama batas waktu pembayaran?",
    answer: "Setiap transaksi memiliki batas waktu yang tertera di halaman pembayaran. Jika melewati batas waktu, transaksi akan otomatis dibatalkan.",
  },
  {
    question: "Bagaimana jika pembayaran sudah dilakukan tapi status belum berubah?",
    answer: "Silakan klik tombol “Cek Status Pembayaran”. Jika masih bermasalah, hubungi tim support kami.",
  },
  {
    question: "Apakah pembayaran aman?",
    answer: "Ya, semua transaksi diproses melalui sistem yang aman dan telah mendukung standar keamanan pembayaran digital.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-40 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 gradient-text">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-slate-500 mt-2 text-sm">Temukan jawaban atas pertanyaan seputar layanan kami</p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border bg-white border-slate-200 rounded-2xl overflow-hidden">
              <button onClick={() => toggle(index)} className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition">
                <span className="font-semibold text-slate-800">{faq.question}</span>

                <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer */}
              <div className={`px-5 overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
