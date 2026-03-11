"use client";

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