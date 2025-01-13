"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from 'lucide-react'

const BusinessOverviewCard = ({
  logo,
  name,
  employeeCount,
  description,
  tags,
  openCampaigns,
  isGrowingFast,
  city, category
}: BusinessCardProps) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardContent className="p-4 pt-6">
        <div className="flex items-start gap-4">
          <img
            alt={`${name} logo`}
            className="rounded-lg"
            height="40"
            src={logo}
            width="40"
          />
          <div className="space-y-1">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{employeeCount}</p>
          </div>
          <Badge key={city} variant="secondary">
                {city}
              </Badge>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{description}</p>
        {(tags || isGrowingFast) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {isGrowingFast && (
              <Badge variant="secondary" className="bg-pink-50 text-pink-700 hover:bg-pink-50 cursor-pointer">
                Growing fast
              </Badge>
            )}
            {tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
              <Badge key={category} variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-50 cursor-pointer">
                {category}
              </Badge>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="font-medium">{openCampaigns} open Campaigns</span>
        <ChevronRight className="h-4 w-4" />
      </CardFooter>
    </Card>
  )
}

export {BusinessOverviewCard}