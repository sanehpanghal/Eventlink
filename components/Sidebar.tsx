"use client";

import * as React from "react";
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
