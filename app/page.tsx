import KeyFeaturesSection from "@/components/landing-page/features";
import LandingHeroSection from "@/components/landing-page/hero";
import HowItWorkSection from "@/components/landing-page/how-it-works";
import TestimonySection from "@/components/landing-page/testimony";
import { auth } from "auth";

export default async function Index() {
  const session = await auth();

  return (
    <div>
      <LandingHeroSection />
      <HowItWorkSection />
      <KeyFeaturesSection/>
      <TestimonySection />

      {/* <pre className="whitespace-pre-wrap break-all px-4 py-6">
        {JSON.stringify(session, null, 2)}
      </pre> */}
    </div>
  );
}
