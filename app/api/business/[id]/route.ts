import { dummy_businesses } from "@/data/dummy_data";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const selected_business = dummy_businesses.filter((company) => {
    return company.businessId === id;
  });

  return Response.json({
    data: selected_business,
  });
}
