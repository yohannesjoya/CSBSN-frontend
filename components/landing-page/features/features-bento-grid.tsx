import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, DollarSignIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { DecentralizedNetwork } from "./decentralized-animated-list";
import { CommunityAnimatedListDemo } from "./community-animated-list";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";

const files = [
  {
    name: "business_plan.pdf",
    body: "A detailed plan outlining the vision, goals, and financial projections for 'Green Earth Café' submitted for community review.",
  },
  {
    name: "funding_report.xlsx",
    body: "A spreadsheet tracking donations, milestones, and disbursements for the 'Tech4Good' campaign, updated monthly.",
  },
  {
    name: "smart_contract.gpg",
    body: "A cryptographic key used to verify and interact with blockchain smart contracts governing campaign fund distributions.",
  },
  {
    name: "community_guidelines.txt",
    body: "A document outlining the rules and values for members participating in discussions and funding activities within clubs.",
  },
  {
    name: "impact_report.pdf",
    body: "A report detailing how funds from 'Local Farmers Initiative' were used to support sustainable agricultural projects.",
  },
  {
    name: "event_schedule.xlsx",
    body: "An updated list of upcoming networking events and club activities, including guest speakers and panel discussions.",
  },
  {
    name: "kyc_documents.zip",
    body: "A secured archive containing identity verification documents required for high-value campaign backers and SMB founders.",
  },
];

const features = [
  {
    Icon: DollarSignIcon,
    name: "Transparent Funding",
    description: "All contributions and disbursements are recorded on-chain",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Community Club",
    description:
      "Users can form/join clubs to support specific SMBs or causes.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <CommunityAnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Decentralized & Secure",
    description: "Built on smart contracts with verifiable transactions.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <DecentralizedNetwork className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Impact Tracking",
    description: "SMBs post updates on fund usage with receipts.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export function FeaturesBentoDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
