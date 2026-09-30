import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import DemoBanner from "@/components/demo-banner";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Safi Motors | Cars in Nairobi",
  description: "Safi Motors dealership platform for vehicles on Kangundo Road, Nairobi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <DemoBanner />
        {children}
      </body>
    </html>
  );
}
