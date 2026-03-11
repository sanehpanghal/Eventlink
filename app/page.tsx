<<<<<<< HEAD
"use client";

import {
=======
import Image from "next/image";
import {
  Bold,
>>>>>>> de64e5f (feat: initial commit)
  Calendar,
  ChevronLeft,
  ChevronRight,
  Search,
  ArrowRight,
} from "lucide-react";
<<<<<<< HEAD
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
=======
>>>>>>> de64e5f (feat: initial commit)
import ProfileConnect from "@/components/ProfileConnect";

export default function Home() {
  return (
<<<<<<< HEAD
    <main className="w-full mx-auto min-h-screen p-6 bg-white rounded-xl">
      {/* Search Header */}
      <div className="flex items-center gap-4 mb-8">
        {/* Navigation Buttons */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-none hover:bg-gray-100 h-9 w-9"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-none border-l border-gray-300 hover:bg-gray-100 h-9 w-9"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search for events, organizers, and more..."
            className="pl-10 h-10 border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500"
=======
      <main className="w-full mx-auto min-h-screen p-6 bg-white rounded-xl overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8">
        {/* Left / Right buttons */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button className="p-2 hover:bg-gray-100 transition" aria-label="Previous">
            <ChevronLeft size={20} />
          </button>

          <button className="p-2 border-l hover:bg-gray-100 transition" aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center flex-1 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <Search size={18} className="text-gray-500 mr-2" />

          <input
            type="text"
            placeholder="Search for events, organizers, and more..."
            className="w-full outline-none text-sm"
>>>>>>> de64e5f (feat: initial commit)
          />
        </div>
      </div>

<<<<<<< HEAD
      {/* Event Banner */}
      <Card className="rounded-xl shadow-sm border-gray-300 overflow-hidden">
        <CardContent className="p-8 flex flex-col">
          <h2 className="text-2xl font-semibold text-foreground">Hackonnect Meetup</h2>
          <p className="text-sm text-muted-foreground max-w-3xl mt-1 leading-relaxed">
            Meet developers, founders, and builders around you.<br />
            Share ideas, collaborate, and grow your network.
          </p>
          <span className="text-md font-bold mt-2">
            1,240 participants
          </span>
          <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
            <Calendar className="size-4" />
            <span>Aug 12 • 6:00 PM</span>
          </div>
        </CardContent>
      </Card>

      {/* Join Chat CTA */}
      <div className="mt-4 flex justify-between items-center px-4 py-3 rounded-lg border border-gray-300 text-black cursor-pointer transition hover:bg-gradient-to-r hover:from-white hover:to-blue-500 group">
        <span className="font-medium text-sm">Join Event Chatroom</span>
        <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-1" />
      </div>

      {/* Connect Section */}
=======
      {/* event  */}
      <div className="w-full rounded-xl shadow-sm">
        {/* Banner */}
        <div className="h-auto flex flex-col p-8 border border-gray-300">
          <h2 className="text-2xl font-semibold">Hackonnect Meetup</h2>
          <span className="text-sm text-gray-600 max-w-3xl mt-1">
            Meet developers, founders, and builders around you.<br></br>
            Share ideas, collaborate, and grow your network.
          </span>
          <span className="text-md font-bold mt-2">
            1,240 participants
          </span>
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-700">
            <Calendar size={16} />
            <span>Aug 12 • 6:00 PM</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center px-4 py-3 rounded-lg border border-gray-300 text-black cursor-pointer transition hover:bg-linear-to-r hover:from-white hover:to-blue-500">
        <span className="font-medium text-sm">Join Event Chatroom</span>
        <ArrowRight size={18} />
      </div>

>>>>>>> de64e5f (feat: initial commit)
      <h3 className="text-lg font-semibold mt-8 mb-4">Connect with Attendees</h3>
      <ProfileConnect />
    </main>
  );
}
