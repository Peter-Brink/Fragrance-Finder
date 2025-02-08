"use client";
import { useRouter } from "next/navigation";
import LandingPage from "./sections/landing-page";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";

import Section4 from "./sections/section4";
import Section5 from "./sections/section5";
import Section6 from "./sections/section6";
import Section7 from "./sections/section7";

export default function Home() {
  const router = useRouter();

  const navigateToResults = () => {
    router.push("/results");
  };

  return (
    <div className="h-[100dvh] font-sans overflow-scroll snap-y snap-mandatory bg-transparent">
      <LandingPage />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 navigateToResults={navigateToResults} />
    </div>
  );
}
