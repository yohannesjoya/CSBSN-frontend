"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { BusinessOverviewCard } from "./business-card";
import { cn } from "@/lib/utils";

const DiscoverBusinessCardsList = ({
  filteredCompanies,
}: {
  filteredCompanies: BusinessCardProps[];
}) => {
  const [collapse, setCollapse] = useState<Boolean>(true);

  return (
    <div
      className={cn(
        "relative grid gap-4 md:grid-cols-2 lg:grid-cols-3",
        collapse ? "max-h-[88dvh] overflow-y-hidden" : ""
      )}
    >
      {filteredCompanies.map((company: BusinessCardProps) => (
        <BusinessOverviewCard key={company.businessId} {...company} />
      ))}

      {filteredCompanies.length >= 9 && (
        <div className="absolute w-full h-32 bottom-0 left-0 bg-gradient-to-t from-white/90 to-white/10 flex justify-center items-end">
          <Button
            variant={"outline"}
            className="px-16"
            onClick={() => setCollapse((prev) => !prev)}
          >
            {collapse ? "View More" : "View Less"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default DiscoverBusinessCardsList;
