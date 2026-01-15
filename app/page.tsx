import Hero from "./components/Hero";
import Produk from "./components/Produk";
import Pembayaran from "./components/Pembayaran";
import Review from "./components/Review";
import TimeID from "./components/TimeID";

export default function Home() {
  const data = {
    pesanan: { token: "BOY-LRCPV", wa: "6288983592740", durasi: "1", cookie: "24", cookietext: "Indomie" },
    pembayaran: {
      TRXID: "HR-MKFLRB1F-NB69BT",
      expired: "2026-01-15T16:26:36.917714425Z",
      harga: 3331,
      status: "pending",
      imgqr:
        "00020101021226610016ID.CO.SHOPEE.WWW01189360091800216005230208216005230303UME51440014ID.CO.QRIS.WWW0215ID10243228429300303UME52047929530336054073331.005802ID5907Pakasir6012KAB. KEBUMEN6105543926222051816409909193289695863043A49",
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
