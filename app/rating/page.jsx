"use client";
import { useState } from "react";
import RatingUlasan from "../components/RatingUlasan";
import DetailPesanan from "../components/DetailPesanan";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const tkn = searchParams.get("token");
  const [data, setData] = useState(null);

  return <>{data ? <DetailPesanan data={data} onBack={() => setData(null)} /> : <RatingUlasan data={tkn} onSuccess={setData} />}</>;
}
