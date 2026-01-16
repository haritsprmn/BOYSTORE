"use client";
import Hero from "./components/Hero";
import Produk from "./components/Produk";
import Pembayaran from "./components/Pembayaran";
import Review from "./components/Review";
import { useState, useEffect } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const lastTrx = localStorage.getItem("last_trx");
    if (!lastTrx) return;
    const parsed = JSON.parse(lastTrx);

    setData(parsed);

    if (parsed?.pembayaran?.status !== "completed") {
      setOpen(true);
    }
  }, []);

  return (
    <>
      <Hero />
      <Review speed={90} arah="right" />
      <Review arah="left" />
      <Produk />
      {/* <Pembayaran data={data} show={open} onClose={() => setOpen(false)} /> */}
    </>
  );
}
