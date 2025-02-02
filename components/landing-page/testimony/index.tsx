import React from "react";
import { TestimoniesMarquee } from "./testimony-marquee";

export default function TestimonySection() {
  return (
    <section>
      <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        What People Are Saying
      </h2>

      <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Don't just take our word for it. Here's what
        <strong> real people</strong> are saying about CSBSN.
      </h3>
      <TestimoniesMarquee />
    </section>
  );
}
