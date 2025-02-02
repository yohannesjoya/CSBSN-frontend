import { FeaturesBentoDemo } from "./features-bento-grid";

export default function KeyFeaturesSection() {
  return (
    <section className="my-32 relative">
      <h2 className="mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        What is the Difference?
      </h2>
      <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Here are some key features that make us stand out.
      </h3>

      <FeaturesBentoDemo/>
    </section>
  );
}
