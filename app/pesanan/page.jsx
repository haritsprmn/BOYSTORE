"use client";

import { useState } from "react";
import Pesanan from "../components/Pesanan";
import DetailPesanan from "../components/DetailPesanan";
import Alert from "../components/Alert";

export default function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [warna, setWarna] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (token) => {
    setLoading(true);

    try {
      const res = await fetch("/api/cekstatus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trxid: token,
        }),
      });

      const result = await res.json();
      // ❌ Jika gagal → TIDAK reload tab
      if (result.success == false) {
        setWarna(false);
        setAlertMessage(result.error || "Data tidak ditemukan");
        setShowAlert(true);
        setLoading(false);

        return;
      }
      console.log("berhasil: " + result.success);
      setData(result);
      setLoading(false);
    } catch (err) {
      console.error(err);
      console.log("error: " + err);
      setWarna(false);
      setAlertMessage("Gagal cek status, coba lagi");
      setShowAlert(true);
      setLoading(true);
    }
  };

  return (
    <>
      {/* JIKA BELUM ADA DATA → FORM */}
      {!data && <Pesanan onSubmit={handleSubmit} loading={loading} />}

      {/* JIKA SUDAH ADA DATA → DETAIL */}
      {data && (
        <div className="pt-16">
          <DetailPesanan
            data={data}
            onBack={() => setData(null)} // optional
          />
        </div>
      )}

      <Alert show={showAlert} warna={warna} onClose={() => setShowAlert(false)} message={alertMessage} />
    </>
  );
}
