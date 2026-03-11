import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
<<<<<<< HEAD
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar";
import { TooltipProvider } from "@/components/ui/tooltip"; // Standard shadcn path
=======
import Sidebar from "@/components/Sidebar";
>>>>>>> de64e5f (feat: initial commit)
=======
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar";
import { TooltipProvider } from "@/components/ui/tooltip"; // Standard shadcn path
>>>>>>> 27d0f9d (eventlink firstpush)

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 27d0f9d (eventlink firstpush)
        <TooltipProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="relative flex flex-col flex-1 w-full">
              {/* This trigger stays at the top left of the content area */}
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
<<<<<<< HEAD
=======
      <Sidebar />
      <div className="p-3 max-w-max h-screen overflow-y-auto">
        {children}
        </div>
>>>>>>> de64e5f (feat: initial commit)
=======
>>>>>>> 27d0f9d (eventlink firstpush)
      </body>
    </html>
  );
}
