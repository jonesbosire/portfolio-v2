import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import CursorSpotlight from "@/components/CursorSpotlight";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jones Bosire — Web Developer & Project Manager",
  description:
    "Jones Bosire is a web developer, tech trainer, and project manager based in Eldoret, Kenya. Building websites, running accelerators, and supporting entrepreneurs across the Rift Valley.",
  keywords: [
    "Jones Bosire",
    "web developer Kenya",
    "Laravel developer",
    "Eldoret",
    "tech trainer",
    "project manager Kenya",
    "EcoHost",
    "Eldohub",
  ],
  openGraph: {
    title: "Jones Bosire — Web Developer & Project Manager",
    description:
      "Building websites, running accelerators, and supporting entrepreneurs across Kenya.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider>
          <CursorSpotlight />
          <Nav />
          <main className="pt-16 relative z-[1]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
