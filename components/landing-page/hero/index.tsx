"use client";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { TextAnimate } from "@/components/ui/text-animate";
import { WarpBackground } from "@/components/ui/warp-background";
import { cn } from "@/lib/utils";

export default function LandingHeroSection(): JSX.Element {
  return (
    <section className="relative flex h-[78dvh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-none mb-16 gap-0">
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 rounded bg-red-500">
        <span>✨ Introducing CSBSN</span>
      </AnimatedShinyText>

      <p className="text-center my-7 z-10">
        <span className="block italic text-6xl mr-3 my-1 font-semibold">
          Empowering Small Businesses
        </span>
        <span className="italic text-4xl ml-3 my-1 font-semibold ">
          with Community Support & Transparency
        </span>
      </p>

      <TextAnimate
        animation="blurInUp"
        by="character"
        className="max-w-3xl text-center text-black dark:text-white font-medium"
      >
        Join a decentralized funding network where small businesses raise funds
        transparently, supporters contribute securely, and impact is tracked in
        real-time.
      </TextAnimate>

      <div className="mt-10 mx-auto w-full max-w-md flex flex-col sm:flex-row justify-center gap-4 z-10">
        <Button className="!cursor-pointer w-full h-11" variant={"outline"}>
          Get Started
        </Button>
        <Button className="!cursor-pointer w-full h-11">
          Explore Businesses
        </Button>
      </div>

      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "opacity-90 dark:opacity-40"
        )}
        width={30}
        height={30}
        squares={[100, 100]}
        squaresClassName="hover:fill-blue-500"
      />
      <WarpBackground
        gridColor="#f3f4f6"
        className="fixed h-[70dvh] w-full border-none z-0"
        children={[]}
      />
    </section>
  );
}
