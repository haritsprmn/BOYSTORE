import Hero from "./components/Hero";
import Produk from "./components/Produk";
import Pembayaran from "./components/Pembayaran";
import Review from "./components/Review";

export default function Home() {
  return (
    <>
      <Hero />
      <Review speed={90} arah="right" />
      <Review arah="left" />
      <Produk />
      {/* <Pembayaran /> */}
    </>
  );
}
