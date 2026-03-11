"use client"

import { UserPlus } from "lucide-react"
<<<<<<< HEAD
import { users } from "@/lib/mock"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link";

const ProfileConnect = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
      {users.map((user, i) => (
      <Link key={i} href={`/${user.username}`} scroll={false}>
        <Card
          key={i}
          className={`relative h-52 overflow-hidden border-gray-300 bg-linear-to-b ${user.gradient} to-white transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer group`}
        >
          <Button 
            variant="secondary" 
            size="icon" 
            className="absolute top-3 right-3 h-8 w-8 bg-white/80 hover:bg-white shadow-sm"
          >
            <UserPlus className="size-4" />
          </Button>

          <CardContent className="p-4 pt-6">
            <div className="flex flex-col gap-2">
              <Avatar className="h-14 w-14 border border-white shadow-sm">
                <AvatarImage src={user.avatar} alt={user.name} className="object-cover" />
                <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>

              <div className="space-y-0.5">
                <h3 className="font-semibold leading-none tracking-tight">{user.name}</h3>
                <p className="text-sm text-muted-foreground">@{user.username}</p>
              </div>

              <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                {user.bio}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
=======

const users = [
  {
    name: "Aarav Sharma",
    username: "aaravdev",
    bio: "Full-stack developer building open source tools.",
    avatar: "https://i.pravatar.cc/150?img=3",
    gradient: "from-blue-100"
  },
  {
    name: "Riya Patel",
    username: "riyacodes",
    bio: "AI + ML enthusiast. Love hackathons.",
    avatar: "https://i.pravatar.cc/150?img=5",
    gradient: "from-purple-100"
  },
  {
    name: "Kabir Mehta",
    username: "kabirmehta",
    bio: "Frontend engineer. UI nerd.",
    avatar: "https://i.pravatar.cc/150?img=8",
    gradient: "from-green-100"
  },
  {
    name: "Saniya Mehta",
    username: "saniyamehta",
    bio: "Frontend engineer. UI nerd.",
    avatar: "https://i.pravatar.cc/150?img=9",
    gradient: "from-pink-100"
  },
  {
    name: "Aditya Verma",
    username: "adityadev",
    bio: "Building dev tools & CLI utilities.",
    avatar: "https://i.pravatar.cc/150?img=11",
    gradient: "from-yellow-100"
  },
  {
    name: "Neha Kapoor",
    username: "nehacodes",
    bio: "Product designer focused on UX.",
    avatar: "https://i.pravatar.cc/150?img=12",
    gradient: "from-indigo-100"
  },
  {
    name: "Rahul Singh",
    username: "rahulsingh",
    bio: "Backend engineer. Rust & Go.",
    avatar: "https://i.pravatar.cc/150?img=14",
    gradient: "from-teal-100"
  },
  {
    name: "Isha Gupta",
    username: "ishagupta",
    bio: "AI builder exploring LLM apps.",
    avatar: "https://i.pravatar.cc/150?img=16",
    gradient: "from-rose-100"
  }
]

const ProfileConnect = () => {
  return (
    <div className="grid grid-cols-4 gap-4 text-black">
      {users.map((user, i) => (
        <div
          key={i}
          className={`relative p-4 h-48 rounded-xl border border-gray-300 bg-gradient-to-b ${user.gradient} to-white hover:shadow-md transition cursor-pointer hover:scale-105 ease-in-out`}
        >
          {/* Connect button */}
          <button className="absolute top-3 right-3 p-2 rounded-lg bg-white hover:bg-gray-100 transition">
            <UserPlus size={18} />
          </button>

          <div className="flex flex-col gap-3">
            {/* Avatar */}
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover border"
            />

            {/* Name */}
            <h3 className="font-semibold">{user.name}</h3>

            {/* Username */}
            <p className="text-sm text-gray-500 -mt-4">@{user.username}</p>

            {/* Bio */}
            <p className="text-xs text-gray-600">
              {user.bio}
            </p>
          </div>
        </div>
>>>>>>> de64e5f (feat: initial commit)
      ))}
    </div>
  )
}

<<<<<<< HEAD
export default ProfileConnect
=======
export default ProfileConnect
>>>>>>> de64e5f (feat: initial commit)
