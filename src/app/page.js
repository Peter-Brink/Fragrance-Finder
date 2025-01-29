"use client";

import FadingDiv from "@/components/fading-div";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);

  return (
    <div className="min-h-screen overflow-scroll snap-y snap-mandatory bg-transparent">
      <section className="h-screen relative bg-gradient-to-b from-myNavy via-myNavy to-myBlue flex items-center justify-center bg-grad snap-start">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-6xl font-sans font-light text-white mb-5">
            Your fragrance helps you
          </h1>
          <h1 className="text-7xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-r from-myTextBlue to-myTextPink">
            Stand Out
          </h1>
        </div>
        <FadingDiv section={0} text={"Let us help you choose it."} />
      </section>
      <section className="h-screen relative flex justify-center items-center text-center bg-gradient-to-b from-myBlue to-mylightBlue text-white snap-start">
        <p>Bottom Section</p>
        <FadingDiv section={1} />
      </section>
      <section className="h-screen relative flex justify-center items-center text-center bg-gradient-to-b from-mylightBlue to-myPurple text-white snap-start">
        <FadingDiv section={2} />
      </section>
      <section className="h-screen relative bg-gradient-to-b from-myPurple to-myPink1 text-white snap-start"></section>
    </div>
  );
}
