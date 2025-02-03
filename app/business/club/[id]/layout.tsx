import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSBSN - Community small business support network",
  description: "",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex h-full min-h-screen w-full flex-col justify-between ">
          {children}
        </div>
      </body>
    </html>
  );
}
