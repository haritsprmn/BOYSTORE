"use client";
import TutorialSection from "@/app/components/TutorialSection";

export default function TutorialPage() {
  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Tutorial Penggunaan <span className="gradient-text">Tools</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">Ikuti langkah-langkah berikut agar tools dapat digunakan dengan aman dan optimal.</p>
        </div>

        <TutorialSection />
      </div>
    </section>
  );
}
