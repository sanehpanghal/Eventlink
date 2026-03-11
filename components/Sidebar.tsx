"use client";

<<<<<<< HEAD
import * as React from "react";
=======
>>>>>>> de64e5f (feat: initial commit)
import Link from "next/link";
import {
  Compass,
  Users,
  MessageCircle,
  Bell,
  User,
  QrCode,
  ArrowRight,
} from "lucide-react";

<<<<<<< HEAD
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Discover", href: "/discover", icon: Compass },
  { name: "Network", href: "/network", icon: Users },
  { name: "Messages", href: "/messages", icon: MessageCircle },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Profile", href: "/profile", icon: User },
];

export default function AppSidebar() {
  return (
    <Sidebar className="border-r">
      {/* Header */}
      <SidebarHeader className="px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
            EL
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold leading-none tracking-tight">
              EventLink
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              building real networks
            </span>
          </div>
        </div>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-1 px-2">
            {navItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild tooltip={item.name} className="h-10">
                  <Link href={item.href} className="flex items-center gap-3">
                    <item.icon className="size-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4 gap-3">
        <Button 
          variant="outline" 
          className="w-full justify-between h-12 px-4 font-semibold group"
          asChild
        >
          <Link href="/host">
            Host an Event
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>

        <Button className="w-full gap-2 h-10">
          <QrCode className="size-4" />
          Join with QR
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
=======
const navItems = [
  {
    name: "Discover",
    href: "/discover",
    icon: Compass,
  },
  {
    name: "Network",
    href: "/network",
    icon: Users,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: MessageCircle,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-72 h-auto  ">

      {/* Header */}
      <div className="px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center font-bold">
            H
          </div>

          <div>
            <h1 className="text-lg font-semibold">Hackonnect</h1>
            <p className="text-xs">
              building real networks
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition hover:text-black"
            >
              <Icon size={20} />
              <span className="text-sm font-medium text-right ">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 space-y-3">

        {/* Create a Event card */}
        <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-black cursor-pointer transition">
          <div className="flex justify-between items-center gap-2 w-full">
            <h3 className="font-semibold">Host an Event</h3>
        <ArrowRight size={18} className="" />
          </div>
        </div>

        <button className="flex items-center justify-center gap-2 w-full py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition">
          <QrCode size={18} />
          Join with QR
        </button>

        {/* <button className="w-full py-2 text-sm font-semibold border rounded-lg hover:bg-gray-100 transition">
          Join an Event
        </button> */}

      </div>
    </aside>
  );
}
>>>>>>> de64e5f (feat: initial commit)
