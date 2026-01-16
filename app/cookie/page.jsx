"use client";

import { useState } from "react";
import DetailPesanan from "../components/DetailPesanan";
import Alert from "../components/Alert";
import Cookie from "../components/Cookie";

export default function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [warna, setWarna] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  async function handleSubmit({ token, cookie }) {
    setLoading(true);

    try {
      const res = await fetch("/api/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, cookie }),
      });

      const result = await res.json();

      if (result.error) {
        setWarna(false);
        setAlertMessage(result.error);
        setShowAlert(true);
        return;
      }

      setData(result);
    } catch (err) {
      setWarna(false);
      setAlertMessage("Gagal update cookie");
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {!data && <Cookie onSubmit={handleSubmit} loading={loading} />}

      {data && (
        <div className="pt-16">
          <DetailPesanan data={data} onBack={() => setData(null)} />
        </div>
      )}

      <Alert show={showAlert} warna={warna} message={alertMessage} onClose={() => setShowAlert(false)} />
    </>
  );
}
