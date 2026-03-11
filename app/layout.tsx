import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hackonnect",
  description: "A platform to connect hackers and organizers for hackathons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex ${geistSans.variable} ${geistMono.variable} antialiased dark:bg-white` }
      >
      <Sidebar />
      <div className="p-3 max-w-max h-screen overflow-y-auto">
        {children}
        </div>
      </body>
    </html>
  );
}
