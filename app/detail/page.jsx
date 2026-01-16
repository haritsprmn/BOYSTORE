"use client";
import DetailPesanan from "../components/DetailPesanan";
import { useState, useEffect } from "react";

function Page() {
  const [trx, setTrx] = useState(null);

  useEffect(() => {
    const lastTrx = localStorage.getItem("last_trx");
    if (!lastTrx) return;

    try {
      const parsed = JSON.parse(lastTrx);
      setTrx(parsed);
    } catch (err) {
      console.error("Invalid last_trx", err);
    }
  }, []);

  return (
    <div className="pt-16">
      <DetailPesanan data={trx} />
    </div>
  );
}

export default Page;
