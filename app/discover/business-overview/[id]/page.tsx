import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  Mail,
  Phone,
  Globe,
  Star,
  CheckCircle,
  BarChart2,
  Calendar,
  Target,
  BookOpen,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

// Mock data following the schema
const organizationData = {
  _id: "org123",
  name: "CelluTech",
  bio: "Innovative software solutions for modern businesses",
  description:
    "TechCorp Solutions is a leading provider of enterprise software solutions, specializing in cloud computing and artificial intelligence.",
  profileCompletion: 85,
  tags: ["AI", "Cloud", "SaaS"],
  picture: "/logos/example-logo-15.svg",
  coverImage: "/banners/addis-banner.jpg",
  phoneNumber: "+1 (555) 123-4567",
  email: "contact@techcorp.com",
  contactVisibility: true,
  industryId: "software",
  industry: {
    name: "Software Development",
    category: "Technology",
  },
  online: true,
  totalCommunities: 12,
  totalCampaigns: 25,
  socialLinks: {
    linkedin: "https://linkedin.com/techcorp",
    twitter: "https://twitter.com/techcorp",
  },
  address: {
    street: "123 Tech Street",
    city: "San Francisco",
    country: "USA",
  },
  totalEmployees: "500-1000",
  totalMembers: 15000,
  review: {
    average: 4.8,
    total: 350,
  },
  domain: "techcorp.com",
  verificationStatus: "verified",
};

// Mock campaigns data
const campaigns = [
  {
    _id: "camp1",
    coverImage: "https://magicui.design/showcase/llmreport.png",
    description: "AI-Powered Healthcare Solutions",
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    goal: 500000,
    amountCollected: 325000,
    numberofPublicationsPromised: 12,
    numberOfPublications: 8,
    donors: 156,
  },
  {
    _id: "camp2",
    coverImage: "https://magicui.design/showcase/zen-browser.png",
    description: "Sustainable Tech Initiative",
    startDate: "2024-02-15",
    endDate: "2024-08-15",
    goal: 300000,
    amountCollected: 275000,
    numberofPublicationsPromised: 8,
    numberOfPublications: 6,
    donors: 98,
  },
  {
    _id: "camp3",
    coverImage: "https://magicui.design/showcase/infisical.png",
    description: "Education Technology Fund",
    startDate: "2024-03-01",
    endDate: "2024-05-31",
    goal: 250000,
    amountCollected: 180000,
    numberofPublicationsPromised: 6,
    numberOfPublications: 4,
    donors: 87,
  },
  {
    _id: "camp4",
    coverImage: "https://magicui.design/showcase/aomni.png",
    description: "Digital Inclusion Project",
    startDate: "2024-04-01",
    endDate: "2024-09-30",
    goal: 400000,
    amountCollected: 150000,
    numberofPublicationsPromised: 10,
    numberOfPublications: 3,
    donors: 64,
  },
  {
    _id: "camp5",
    coverImage: "https://magicui.design/showcase/querylab.png",
    description: "Innovation Lab Funding",
    startDate: "2024-05-01",
    endDate: "2024-07-31",
    goal: 350000,
    amountCollected: 95000,
    numberofPublicationsPromised: 8,
    numberOfPublications: 2,
    donors: 45,
  },
];

// Add mock community clubs data
const communityClubs = [
  {
    _id: "club1",
    name: "Tech Innovators Hub",
    description:
      "A community of tech enthusiasts discussing the latest innovations in software development and AI.",
    image: "/logos/example-logo-9.svg",
    createdAt: "2024-01-15",
    membersCount: 1250,
    isJoined: false,
  },
  {
    _id: "club2",
    name: "Cloud Architecture Group",
    description:
      "Expert discussions on cloud infrastructure, scalability, and best practices in cloud computing.",
    image: "/logos/example-logo-7.svg",
    createdAt: "2024-02-01",
    membersCount: 850,
    isJoined: true,
  },
  {
    _id: "club3",
    name: "Product Design Circle",
    description:
      "A collaborative space for UI/UX designers and product managers to share insights and experiences.",
    image: "/logos/example-logo-4.svg",
    createdAt: "2024-02-15",
    membersCount: 675,
    isJoined: false,
  },
  {
    _id: "club4",
    name: "Work Life Circle",
    description:
      "A collaborative discussion space for life and personal development.",
    image: "/logos/example-logo-20.svg",
    createdAt: "2024-02-15",
    membersCount: 675,
    isJoined: false,
  },
];

export default function BusinessOverview() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6">
        {/* Header Section */}
        <Card className="relative overflow-hidden">
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${organizationData.coverImage})` }}
          />
          <CardContent className="pt-6">
            <div className="flex items-start gap-6">
              <div className="relative -mt-20">
                <img
                  src={organizationData.picture || "/placeholder.svg"}
                  alt="Company logo"
                  className="w-24 h-24 rounded-lg border-2 bg-background"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-2xl font-bold">
                    {organizationData.name}
                  </h1>
                  {organizationData.verificationStatus === "verified" && (
                    <Badge variant="secondary">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  <Badge variant="outline" className="ml-auto">
                    <Briefcase className="w-3 h-3 mr-1" />
                    {organizationData.industry.name}
                  </Badge>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-pink-50 text-pink-700 hover:bg-pink-50 cursor-pointer"
                    >
                      Growing fast
                    </Badge>

                    {organizationData.tags?.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-green-50 text-green-700 hover:bg-green-50 cursor-pointer border-[1]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mt-1">
                  {organizationData.bio}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Clubs Section */}
        <Card className="border-none p-0">
          <CardHeader>
            <CardTitle>Community Clubs</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-3 gap-4">
              {communityClubs.map((club) => (
                <Card key={club._id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-start gap-4">
                      <div className="w-full flex justify-between ">
                        <img
                          src={club.image || "/placeholder.svg"}
                          alt={`${club.name} logo`}
                          className="block w-12 h-12 rounded-lg"
                        />
                        <Button
                          variant={club.isJoined ? "secondary" : "default"}
                          className="flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          {club.isJoined ? "Chat" : "Join"}
                        </Button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <h3 className="font-semibold truncate">
                              {club.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {club.membersCount.toLocaleString()} members
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {club.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Campaigns Section */}
        <Card className="border-none p-0">
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {campaigns.map((campaign) => (
                <Card key={campaign._id} className="overflow-hidden">
                  <img
                    src={campaign.coverImage || "/placeholder.svg"}
                    alt={campaign.description}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">
                      {campaign.description}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>
                            {Math.round(
                              (campaign.amountCollected / campaign.goal) * 100
                            )}
                            %
                          </span>
                        </div>
                        <Progress
                          value={
                            (campaign.amountCollected / campaign.goal) * 100
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Target className="w-4 h-4" />
                            Goal
                          </div>
                          <p className="font-medium">
                            ${campaign.goal.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            Donors
                          </div>
                          <p className="font-medium">{campaign.donors}</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <BookOpen className="w-4 h-4" />
                            Publications
                          </div>
                          <p className="font-medium">
                            {campaign.numberOfPublications}/
                            {campaign.numberofPublicationsPromised}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            End Date
                          </div>
                          <p className="font-medium">
                            {new Date(campaign.endDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Details Section */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {organizationData.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{organizationData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{organizationData.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span>{organizationData.domain}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-muted-foreground mt-1" />
                  <span>
                    {organizationData.address.street}
                    <br />
                    {organizationData.address.city},{" "}
                    {organizationData.address.country}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm font-medium">Total Members</p>
              </div>
              <p className="text-2xl font-bold mt-2">
                {organizationData.totalMembers.toLocaleString()}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm font-medium">Total Employees</p>
              </div>
              <p className="text-2xl font-bold mt-2">
                {organizationData.totalEmployees}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm font-medium">Review Score</p>
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <p className="text-2xl font-bold">
                  {organizationData.review.average}
                </p>
                <p className="text-sm text-muted-foreground">
                  ({organizationData.review.total} reviews)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm font-medium">Total Campaigns</p>
              </div>
              <p className="text-2xl font-bold mt-2">
                {organizationData.totalCampaigns}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// import BusinessDetailHeader from "@/components/businesses/bussiness-detail-header";

// export default async function Page({ params }: { params: { id: string } }) {
//   const id = (await params)?.id;
//   const res = await fetch(`http://localhost:3000/api/business/${id}`);
//   const { data } = await res.json();
//   const business = data[0];
//   return (
//     <div>
//       <BusinessDetailHeader {...business} />
//       {/* little overview from the card*/}
//       {/* <div className="flex justify-center items-center">
//         <img
//           alt={`${business.name} logo`}
//           className="rounded-lg block"
//           height="40"
//           src={business.logo}
//           width="40"
//         />
//         <div className="space-y-1">
//           <h3 className="font-semibold">{business.name}</h3>
//           <p className="mt-4 text-sm text-muted-foreground">
//             {business.description}
//           </p>
//           <p className="text-sm text-muted-foreground">
//             {business.employeeCount}
//           </p>
//         </div>
//       </div> */}
//       {/* bio */}
//       {/* campaigns */}
//       {/* founders */}
//       {/* about- like contact */}
//     </div>
//   );
// }
