import type { Metadata } from "next";
import { Grand_Hotel, Rozha_One, Poppins, Jost, Inter, Josefin_Sans } from "next/font/google";
import "@/app/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import Providers from "@/Provider/Providers";

// Import fonts
const jost = Jost({ weight: ["300", "400", "500", "700"], subsets: ["latin"], variable: "--font-jost" });
const grandHotel = Grand_Hotel({ weight: "400", subsets: ["latin"], variable: "--font-grand-hotel" });
const rozhaOne = Rozha_One({ weight: "400", subsets: ["latin"], variable: "--font-rozha-one" });
const poppins = Poppins({ weight: ["300", "400", "500", "700"], subsets: ["latin"], variable: "--font-poppins" });
const inter = Inter({ weight: ["300", "400", "500", "700"], subsets: ["latin"], variable: "--font-inter" });
const josefinSans = Josefin_Sans({ weight: ["300", "400", "500", "700"], subsets: ["latin"], variable: "--font-josefin-sans" });

export const metadata: Metadata = {
  title: "Illuminate",
  description: "Book Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${grandHotel.variable} ${rozhaOne.variable} ${poppins.variable} ${jost.variable} ${inter.variable} ${josefinSans.variable} antialiased`}
      >
             <Providers>

        <AntdRegistry>{children}</AntdRegistry>
             </Providers>
      
      </body>
    </html>
  );
}
