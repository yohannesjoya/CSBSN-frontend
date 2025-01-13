import { auth } from "auth"

export const GET = auth((req) => {
  // if (req.auth) {
    return Response.json({ data: [
        {
          logo: "https://photos.wellfound.com/startups/i/8363533-bbda31929adfa0a8e8713d1abda915b3-medium_jpg.jpg?buster=1704865022",
          name: "Wynd Labs",
          employeeCount: "11-50 employees",
          description: "Making AI Data Accessible. Building a suite of products powered by Grass",
          openCampaigns: 12,
          isGrowingFast: true,
          category: "AI",
          city:'London'
        },
        {
          logo: "https://photos.wellfound.com/startups/i/7055995-39b658ccc0071665fab8edc6112cd50a-medium_jpg.jpg?buster=1600247687",
          name: "Appsmith",
          employeeCount: "51-200 employees",
          description: "An open source framework to help developers build critical business apps faster",
          tags: ["B2B", "Growth Stage", "Top Investors"],
          openCampaigns: 8,
          category: "Dev Tools",
          city:'NewYork'
        },
        {
          logo: "https://photos.wellfound.com/startups/i/8582367-4b6588765b8f2c82b3a0b69f0c2e9d05-medium_jpg.jpg?buster=1660935871",
          name: "thirdweb",
          employeeCount: "11-50 employees",
          description: "Full stack development platform for web3",
          tags: ["B2B", "Growth Stage"],
          openCampaigns: 6,
          category: "Web3",
          city:'San Francisco'
        },
        {
          logo: "https://photos.wellfound.com/startups/i/10310166-685849fb5bd84c2386695ff7ada16d76-medium_jpg.jpg?buster=1731360269",
          name: "Xenara AI",
          employeeCount: "11-50 employees",
          description: "Xenara AI is an AI-driven platform that transforms customer support with smarter solutions",
          openCampaigns: 13,
          isGrowingFast: true,
          category: "AI",
          city:'NewYork'
        },
      ]
    })
  // }
  // return Response.json({ message: "Not authenticated" }, { status: 401 })
}) as any // TODO: Fix `auth()` return type
