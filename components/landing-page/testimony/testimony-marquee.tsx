import { Marquee } from "@/components/ui/marquee";
import TestimonyCard from "./testtimony-card";

const reviews = [
  {
    name: "Sarah Thompson",
    username: "@sarah_thompson",
    body: "The transparency and community support gave me the confidence to expand.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Michael Patel",
    username: "@michael_patel",
    body: "This platform lets me support passionate founders, track progress, and see my contributions",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Jessica Lee",
    username: "@jessica_lee",
    body: "We got the funding and built a loyal community that now supports our growth. The engagement is incredible!",
    img: "https://avatar.vercel.sh/jessica",
  },
  {
    name: "David Rodriguez",
    username: "@david_rodriguez",
    body: "Together, we’ve helped three amazing startups. The voting system and real-time tracking make it rewarding!",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Emily Carter",
    username: "@emily_carter",
    body: "This platform gave me visibility, real supporters, and funding. Now, they don’t just fund but advocate for us!",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Nathan Park",
    username: "@nathan_park",
    body: "As an early supporter, I can see exactly where my funds go. This makes investing easier!",
    img: "https://avatar.vercel.sh/nathan",
  },
  {
    name: "Olivia Bennett",
    username: "@olivia_bennett",
    body: "Beyond funding, the community, and networking helped me take my idea to production much faster!",
    img: "https://avatar.vercel.sh/olivia",
  },
  {
    name: "Ethan Clarke",
    username: "@ethan_clarke",
    body: "I’ve backed startups, but this platform’s mix of community and blockchain transparency is next level.",
    img: "https://avatar.vercel.sh/ethan",
  },
  {
    name: "Sophia Reynolds",
    username: "@sophia_reynolds",
    body: "Thanks to this platform, I raised funds and built a strong supporter base before opening!",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "Daniel Cooper",
    username: "@daniel_cooper",
    body: "This platform gives me confidence that my funds create real impact. thats difference!",
    img: "https://avatar.vercel.sh/daniel",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export function TestimoniesMarquee() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <TestimonyCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <TestimonyCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
