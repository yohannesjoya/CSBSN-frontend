import { BusinessOverviewCard } from "@/components/businesses/business-card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const id = (await params)?.id;
  const res = await fetch(`http://localhost:3000/api/business/${id}`);
  const { data } = await res.json();
  const business = data[0];
  return (
    <div>
      companies with id: {id} is {JSON.stringify(business)}
      <BusinessOverviewCard {...business} />
      {/* little overview from the card*/}
      {/* <div className="flex justify-center items-center">
        <img
          alt={`${business.name} logo`}
          className="rounded-lg block"
          height="40"
          src={business.logo}
          width="40"
        />
        <div className="space-y-1">
          <h3 className="font-semibold">{business.name}</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            {business.description}
          </p>
          <p className="text-sm text-muted-foreground">
            {business.employeeCount}
          </p>
        </div>
      </div> */}
      {/* bio */}
      {/* campaigns */}
      {/* founders */}
      {/* about- like contact */}
    </div>
  );
}
