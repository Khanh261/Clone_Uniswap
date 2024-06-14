import ConnectWithUs from "@/components/layout/ConnectWithUs";
import GoToDeFi from "@/components/layout/GoToDefi";
import SwapAnytime from "@/components/layout/SwapAnytime";
import TrustByMillions from "@/components/layout/TrustByMillions";
import { ContentWrapper } from "@/styles/layout/Content";

export default function Home() {
  return (
    <ContentWrapper>
      <SwapAnytime />
      <GoToDeFi />
      <TrustByMillions />
      <ConnectWithUs />
    </ContentWrapper>
  );
}
