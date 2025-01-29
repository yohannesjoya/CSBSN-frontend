type BusinessCardProps = {
  businessId: string;
  logo: string;
  name: string;
  employeeCount: string;
  description: string;
  tags?: string[];
  openCampaigns: number;
  isGrowingFast?: boolean;
  category?: string;
  city?: {
    label: string;
    value: string;
  };
};
