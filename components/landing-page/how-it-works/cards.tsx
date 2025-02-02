"use client";
import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Image from "next/image";

const steps = [
  {
    name: "Register",
    image: "https://magicui.design/showcase/llmreport.png",
  },
  {
    name: "Launch",
    image: "https://magicui.design/showcase/zen-browser.png",
  },
  {
    name: "Track",
    image: "https://magicui.design/showcase/infisical.png",
  },
];

export default function HowItWorkCards() {
  return (
    <div className="w-full isolate mx-auto flex items-center justify-between gap-8 py-8 px-5">
      {steps.map((plan, index) => {
        const { name, image } = plan;
        return (
          <Rectangle className="w-[500px] h-[300px] shadow-none" key={index}>
            <Image
              src={image}
              width={500}
              height={300}
              alt={name}
              className="rounded-xl"
            />
          </Rectangle>
        );
      })}
    </div>
  );
}

const Rectangle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Rectangle.displayName = "Rectangle";
