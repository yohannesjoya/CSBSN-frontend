import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/navbar/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSBSN - Community small business support network",
  description:
    "",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex h-full min-h-screen w-full flex-col justify-between">
          <Header />
          <main className="mx-auto w-full max-w-[85rem] flex-auto px-4 py-4 sm:px-6 md:py-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
