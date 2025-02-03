"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BusinessDetailHeader({
  businessId,
  logo,
  name,
  employeeCount,
  description,
  tags,
  openCampaigns,
  isGrowingFast,
  city,
  category,
}: BusinessCardProps) {
  return (
    <Card className="flex flex-col justify-between border">
      <CardContent className="p-4 pt-6">
        <div className="flex items-center gap-4">
          <img
            alt={`${name} logo`}
            className="block rounded-lg"
            height="40"
            src={`/${logo}`}
            width="40"
          />

          <h3 className="font-semibold">{name}</h3>
          {/* <p className="text-sm text-muted-foreground">{employeeCount}</p> */}

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{city?.label}</Badge>
            {isGrowingFast && (
              <Badge
                variant="secondary"
                className="bg-pink-50 text-pink-700 hover:bg-pink-50 cursor-pointer"
              >
                Growing fast
              </Badge>
            )}
            {tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
            <Badge
              key={category}
              variant="secondary"
              className="bg-green-50 text-green-700 hover:bg-green-50 cursor-pointer"
            >
              {category}
            </Badge>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{description}</p>
        {}
      </CardContent>
      {/* <CardFooter className="flex items-center justify-between">
        <span className="font-medium">{openCampaigns} open Campaigns</span>
      </CardFooter> */}
    </Card>
  );
}
