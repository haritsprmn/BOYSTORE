import DetailPesanan from "../components/DetailPesanan";
import Count from "../components/Count";

function page() {
  const trx = {
    id: "34fg",
    user: "fa3b93bc-27ab-4a9a-8763-72d3621ff49a",
    pesanan: {
      token: "BOY-OT6SN",
      wa: "6281342343707",
      durasi: "30",
      cookie: "21",
      cookietext: "Felix",
    },
    pembayaran: {
      TRXID: "HR-MK1OT6DA-26KIS4",
      harga: 35555,
      status: "completed",
      terbayar: "2026-01-05T21:43:55.769Z",
    },
    expired: "2026-02-04T21:44:02.765Z",
    ulasan: {
      nama: "dimas",
      star: 3,
      komentar: "sangat bagus sekali",
    },
  };
  return (
    <div className="pt-15">
      {/* <Count targetTime="2026-01-16T03:16:36.360774747Z" /> */}
      <DetailPesanan data={trx} />;
    </div>
  );
}

export default page;
