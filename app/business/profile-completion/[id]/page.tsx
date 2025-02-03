"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Upload, X, Loader2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const ACCEPTED_DOC_TYPES = ["application/pdf", "image/jpeg", "image/png"];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().optional(),
  description: z.string().optional(),
  picture: z
    .any()
    .refine(
      (file) => !file || (file instanceof File && file.size <= MAX_FILE_SIZE),
      "Max file size is 5MB"
    )
    .refine(
      (file) =>
        !file ||
        (file instanceof File && ACCEPTED_IMAGE_TYPES.includes(file.type)),
      "Only .jpg, .png, and .webp formats are supported"
    )
    .optional(),
  coverImage: z
    .any()
    .refine(
      (file) => !file || (file instanceof File && file.size <= MAX_FILE_SIZE),
      "Max file size is 5MB"
    )
    .refine(
      (file) =>
        !file ||
        (file instanceof File && ACCEPTED_IMAGE_TYPES.includes(file.type)),
      "Only .jpg, .png, and .webp formats are supported"
    )
    .optional(),
  phoneNumber: z.string().optional(),
  email: z.string().email("Invalid email address"),
  contactVisibility: z.boolean().default(true),
  industryId: z.string(),
  online: z.boolean().default(false),
  totalCommunities: z.number().default(0),
  totalCampaigns: z.number().default(0),
  socialLinks: z
    .object({
      website: z.string().url().optional(),
      twitter: z.string().url().optional(),
      linkedin: z.string().url().optional(),
    })
    .optional(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  totalEmployees: z.string(),
  domain: z.string().optional(),
  verificationDocs: z
    .array(
      z
        .any()
        .refine(
          (file) =>
            !file || (file instanceof File && file.size <= MAX_FILE_SIZE),
          "Max file size is 5MB"
        )
        .refine(
          (file) =>
            !file ||
            (file instanceof File && ACCEPTED_DOC_TYPES.includes(file.type)),
          "Only PDF, .jpg, and .png formats are supported"
        )
    )
    .optional(),
});

const industries = [
  { id: "tech", name: "Technology" },
  { id: "health", name: "Healthcare" },
  { id: "edu", name: "Education" },
  { id: "fin", name: "Finance" },
  { id: "retail", name: "Retail" },
];

const employeeRanges = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1000+",
];

function ImageUpload({
  onChange,
  value,
  onRemove,
  loading,
  preview,
  aspectRatio = "16:9",
  className,
}: {
  onChange: (file: File) => void;
  value?: File;
  onRemove: () => void;
  loading?: boolean;
  preview?: string;
  aspectRatio?: "1:1" | "16:9";
  className?: string;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(
    preview || null
  );

  React.useEffect(() => {
    if (value) {
      const objectUrl = URL.createObjectURL(value);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [value]);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  const aspect = aspectRatio === "1:1" ? "aspect-square" : "aspect-video";

  return (
    <div className={cn("relative group", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center border-2 border-dashed rounded-lg overflow-hidden transition-colors",
          aspect,
          !previewUrl && "bg-muted hover:bg-muted/80"
        )}
        onClick={handleClick}
      >
        {previewUrl ? (
          <Image
            src={previewUrl || "/placeholder.svg"}
            alt="Preview"
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-sm p-4">
            <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
            <p className="text-muted-foreground text-center">
              Click to upload or drag and drop
            </p>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED_IMAGE_TYPES.join(",")}
          onChange={handleChange}
          className="hidden"
        />
        {loading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Loader2 className="h-6 w-6 text-white animate-spin" />
          </div>
        )}
      </div>
      {previewUrl && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            type="button"
            variant="destructive"
            size="icon"
            onClick={onRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

function FileUpload({
  onChange,
  onRemove,
  value,
  loading,
}: {
  onChange: (files: File[]) => void;
  onRemove: (index: number) => void;
  value?: File[];
  loading?: boolean;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    onChange(files);
  };

  return (
    <div className="space-y-4">
      <div
        onClick={handleClick}
        className="border-2 border-dashed rounded-lg p-4 hover:border-primary cursor-pointer transition-colors"
      >
        <div className="flex flex-col items-center justify-center text-sm">
          <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
          <p className="text-muted-foreground text-center">
            Click to upload verification documents
          </p>
          <p className="text-xs text-muted-foreground">
            PDF, JPG or PNG (max. 5MB)
          </p>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED_DOC_TYPES.join(",")}
          onChange={handleChange}
          multiple
          className="hidden"
        />
      </div>
      {value && value.length > 0 && (
        <div className="space-y-2">
          {value.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border rounded-lg bg-muted/50"
            >
              <span className="text-sm truncate">{file.name}</span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => onRemove(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CircularCompletion({ percentage }: { percentage: number }) {
  const circumference = 2 * Math.PI * 45; // 45 is the radius of the circle

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-24 h-24">
        <circle
          className="text-muted-foreground"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="48"
          cy="48"
        />
        <circle
          className="text-primary"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percentage / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="48"
          cy="48"
          style={{
            transition: "stroke-dashoffset 0.5s ease-in-out",
          }}
        />
      </svg>
      <span className="absolute text-xl font-bold">
        {Math.round(percentage)}%
      </span>
    </div>
  );
}

export default function OrganizationForm() {
  const [logoLoading, setLogoLoading] = React.useState(false);
  const [coverLoading, setCoverLoading] = React.useState(false);
  const [docsLoading, setDocsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactVisibility: true,
      online: false,
      totalCommunities: 0,
      totalCampaigns: 0,
      socialLinks: {
        website: "",
        twitter: "",
        linkedin: "",
      },
      address: {
        street: "",
        city: "",
        country: "",
      },
      verificationDocs: [],
    },
  });

  const [completionPercentage, setCompletionPercentage] = React.useState(0);

  React.useEffect(() => {
    const values = form.getValues();
    const totalFields = Object.keys(formSchema.shape).length;
    const filledFields = Object.keys(values).filter((key) => {
      const value = values[key as keyof typeof values];
      return value !== undefined && value !== "" && value !== null;
    }).length;
    setCompletionPercentage((filledFields / totalFields) * 100);
  }, [form.getValues, form.watch()]); // Added form.getValues to dependencies

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="container max-w-7xl mx-auto p-6">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">
              Organization Profile
            </CardTitle>
            <CircularCompletion percentage={completionPercentage} />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Complete your organization profile to maximize your presence on our
            platform.
          </p>
        </CardContent>
      </Card>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Organization Images</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="coverImage"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel>Cover Image</FormLabel>
                    <FormControl>
                      <ImageUpload
                        onChange={onChange}
                        onRemove={() => onChange(undefined)}
                        value={value}
                        loading={coverLoading}
                        aspectRatio="16:9"
                      />
                    </FormControl>
                    <FormDescription>
                      Recommended size: 1200x630 pixels
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="picture"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel>Logo</FormLabel>
                    <FormControl>
                      <ImageUpload
                        onChange={onChange}
                        onRemove={() => onChange(undefined)}
                        value={value}
                        loading={logoLoading}
                        aspectRatio="1:1"
                        className="max-w-[200px]"
                      />
                    </FormControl>
                    <FormDescription>
                      Square format recommended, at least 200x200 pixels
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter organization name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter a short bio"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      A brief summary of your organization
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter a detailed description"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactVisibility"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Contact Visibility
                      </FormLabel>
                      <FormDescription>
                        Make contact information visible to others
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Organization Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="industryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry.id} value={industry.id}>
                            {industry.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="totalEmployees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Employees</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select employee range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {employeeRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="domain"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Domain</FormLabel>
                    <FormControl>
                      <Input placeholder="example.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      Your organization's website domain
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="address.street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter street address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="address.city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address.country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="socialLinks.website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="socialLinks.twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://twitter.com/handle"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="socialLinks.linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://linkedin.com/company/name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Verification Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="verificationDocs"
                render={({ field: { onChange, value } }) => (
                  <FormItem>
                    <FormControl>
                      <FileUpload
                        onChange={onChange}
                        onRemove={(index) => {
                          const newFiles = value ? [...value] : [];
                          newFiles.splice(index, 1);
                          onChange(newFiles);
                        }}
                        value={value}
                        loading={docsLoading}
                      />
                    </FormControl>
                    <FormDescription>
                      Upload documents to verify your organization (business
                      registration, licenses, etc.)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button type="submit" size="lg">
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
