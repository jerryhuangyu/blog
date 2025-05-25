import React from "react";
import { Ripple } from "./magicui/ripple";

const Hero = () => {
  return (
    <main>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Huang Yu - Blog
        </p>
        <p className="text-gray-500">Hi 👋, I'm Web Developer from Taiwan 🇹🇼</p>
        <Ripple mainCircleOpacity={0.3} mainCircleSize={500} numCircles={10} />
      </div>
    </main>
  );
};

export default Hero;
