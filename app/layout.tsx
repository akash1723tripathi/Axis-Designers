import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { ClientProviders } from "@/components/ClientProviders";
import { Navbar } from "@/components/Navbar";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axis Designers",
  description: "Premium Exhibition Booths & Spatial Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScroll />
        <CustomCursor />
        <ClientProviders>
          <Navbar />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}

