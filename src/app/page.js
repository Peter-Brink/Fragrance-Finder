"use client";

import { useRef } from "react";
import LandingPage from "./landing-page";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";

export default function Home() {
  const scrollRef = useRef(null);

  return (
    <div className="min-h-screen overflow-scroll snap-y snap-mandatory bg-transparent">
      <LandingPage />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}
