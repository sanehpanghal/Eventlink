"use client"

import { UserPlus } from "lucide-react"

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
      ))}
    </div>
  )
}

export default ProfileConnect