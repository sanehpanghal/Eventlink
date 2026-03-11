"use client"

import { UserPlus } from "lucide-react"
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
      ))}
    </div>
  )
}

export default ProfileConnect
