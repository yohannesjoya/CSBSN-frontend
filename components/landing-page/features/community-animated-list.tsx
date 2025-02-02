"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Funding received",
    description:
      "Your campaign 'Green Earth Café' just received a new contribution!",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "New club discussion",
    description:
      "Your club 'Sustainable Startups' has a new discussion thread: 'Best Practices for Eco-Friendly Packaging'.",
    time: "12m ago",
    icon: "🗣️",
    color: "#FFB800",
  },
  {
    name: "New supporter joined",
    description: "John Doe just joined your campaign as a top supporter!",
    time: "10m ago",
    icon: "🤝",
    color: "#3D9BE9",
  },
  {
    name: "New message",
    description:
      "You received a message from Olivia Bennett about your campaign.",
    time: "8m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Club vote initiated",
    description:
      "A new poll is live in 'Women Entrepreneurs Club' – 'Which business should we support next?'",
    time: "5m ago",
    icon: "🗳️",
    color: "#1E86FF",
  },
  {
    name: "Milestone achieved",
    description:
      "Your campaign 'Tech4Good' just reached 80% of its funding goal!",
    time: "4m ago",
    icon: "🏆",
    color: "#F59E0B",
  },
  {
    name: "New event in your club",
    description:
      "Your club 'Local Farmers Collective' scheduled a networking session for next Friday.",
    time: "3m ago",
    icon: "📅",
    color: "#1E86FF",
  },
  {
    name: "Impact update posted",
    description:
      "Sarah's Bakery shared how your contributions helped expand their kitchen!",
    time: "2m ago",
    icon: "📢",
    color: "#4CAF50",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[550px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function CommunityAnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg border bg-background p-6 md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
