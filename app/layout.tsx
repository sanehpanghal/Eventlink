import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

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
  modal
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="relative flex flex-col flex-1 w-full">
              <div className="p-2">
                <SidebarTrigger />
              </div>
              <div className="p-6 h-screen overflow-y-auto">
                {children}
                {modal}
              </div>
            </main>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}