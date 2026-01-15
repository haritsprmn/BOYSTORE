import Hero from "./components/Hero";
import Produk from "./components/Produk";
import Pembayaran from "./components/Pembayaran";
import Review from "./components/Review";
import TimeID from "./components/TimeID";

export default function Home() {
  const data = {
    id: "7bbd",
    user: 0,
    pesanan: {
      token: "BOY-E3J6C",
      wa: "6282280654836",
      durasi: "1",
      cookie: "34",
      cookietext: "Gio",
    },
    pembayaran: {
      TRXID: "HR-MKDE3EVE-ZQZK1S",
      expired: "2026-01-14T03:16:36.360774747Z",
      harga: 3331,
      status: "pending",
      imgqr:
        "00020101021226610016ID.CO.SHOPEE.WWW01189360091800216005230208216005230303UME51440014ID.CO.QRIS.WWW0215ID10243228429300303UME52047929530336054073331.005802ID5907Pakasir6012KAB. KEBUMEN6105543926222051815155883660324939663040389",
    },
  };
  return (
    <>
      <Hero />
      <Review speed={90} arah="right" />
      <Review arah="left" />
      <Produk />
      <Pembayaran data={data} />
      <TimeID ts="2026-01-05T21:43:55.769Z" />
    </>
  );
}
