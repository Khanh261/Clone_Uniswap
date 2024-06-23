import ConnectWithUs from "@/components/layout/ConnectWithUs";
import Footer from "@/components/layout/Footer";
import GoToDeFi from "@/components/layout/GoToDefi";
import SwapAnytime from "@/components/layout/SwapAnytime";
import TrustByMillions from "@/components/layout/TrustByMillions";

export default function Home() {
  return (
    <>
      <SwapAnytime />
      <GoToDeFi />
      <TrustByMillions />
      <ConnectWithUs />
      <Footer />
    </>
  );
}
