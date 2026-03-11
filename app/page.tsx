import Image from "next/image";
import {
  Bold,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Search,
  ArrowRight,
} from "lucide-react";
import ProfileConnect from "@/components/ProfileConnect";

export default function Home() {
  return (
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
          />
        </div>
      </div>

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

      <h3 className="text-lg font-semibold mt-8 mb-4">Connect with Attendees</h3>
      <ProfileConnect />
    </main>
  );
}
