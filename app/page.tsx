"use client";
import Hero from "./components/Hero";
import Produk from "./components/Produk";
import Pembayaran from "./components/Pembayaran";
import Review from "./components/Review";
import TimeID from "./components/TimeID";
import { useState, useEffect } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const lastTrx = localStorage.getItem("last_trx");
    if (lastTrx) {
      setOpen(true);
    }
    if (lastTrx) setData(JSON.parse(lastTrx));
  }, []);

  return (
    <>
      <Hero />
      <Review speed={90} arah="right" />
      <Review arah="left" />
      <Produk />
      <Pembayaran data={data} show={open} onClose={() => setOpen(false)} />
      <TimeID ts="2026-01-05T21:43:55.769Z" />
    </>
  );
}
