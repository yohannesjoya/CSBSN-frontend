import { BusinessOverviewCard } from "@/components/businesses/business-card";
import DiscoverBusinessCardsList from "@/components/businesses/discover-business-cards";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { value: "all", label: "all" },
  { value: "AI", label: "AI" },
  { value: "Web3", label: "Web3" },
  { value: "Dev Tools", label: "Dev Tools" },
];

const cities = [
  { value: "any", label: "any city" },
  { label: "Addis Ababa", value: "addis_ababa" },
  { label: "Hawassa", value: "hawassa" },
  { label: "Bahir Dar", value: "bahir_dar" },
  { label: "Mekelle", value: "mekelle" },
  { label: "Jimma", value: "jimma" },
  { label: "Dire Dawa", value: "dire_dawa" },
  { label: "Adama", value: "adama" },
  { label: "Gondar", value: "gondar" },
  { label: "Harar", value: "harar" },
  { label: "Sodo", value: "sodo" },
  { label: "Dessie", value: "dessie" },
  { label: "Shashamane", value: "shashamane" },
  { label: "Debre Berhan", value: "debre_berhan" },
  { label: "Hosaena", value: "hosaena" },
  { label: "Arba Minch", value: "arba_minch" },
  { label: "Nekemte", value: "nekemte" },
  { label: "Axum", value: "axum" },
  { label: "Debre Markos", value: "debre_markos" },
  { label: "Dilla", value: "dilla" },
  { label: "Gambela", value: "gambela" },
  { label: "Assosa", value: "assosa" },
];

export default async function DiscoverPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { category = "all", city = "any" } = await searchParams;

  const res = await fetch("http://localhost:3000/api/business");
  const { data: companies } = await res.json();

  // Filter companies based on category and city
  const filteredCompanies = companies.filter((company: BusinessCardProps) => {
    const categoryMatch = category === "all" || company.category === category;
    const cityMatch = city === "any" || company?.city?.value === city;
    return categoryMatch && cityMatch;
  });

  return (
    <div className="mx-auto px-4 py-8 max-w-6xl">
      <h1 className="mb-8 text-center text-5xl font-bold">
        Discover Idea to Support
      </h1>

      {/* Filters */}
      <form className="mb-12 flex items-center justify-center gap-4 text-lg">
        <span>Show me</span>
        <Select name="category" defaultValue={category}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span>startups, located in</span>
        <Select name="city" defaultValue={city}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {cities.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="submit">Apply Filters</Button>
      </form>
      <DiscoverBusinessCardsList filteredCompanies={filteredCompanies} />
    </div>
  );
}
