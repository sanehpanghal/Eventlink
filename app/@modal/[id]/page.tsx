"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { users } from "@/lib/mock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, MessageCircle, ExternalLink } from "lucide-react";

export default function ProfileModal({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const user = users.find((u) => u.username === resolvedParams.id);

  if (!user) return null;

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent
        className="
        fixed bottom-0 left-1/2
        translate-x-[-50%]
        translate-y-[-40%]
        w-[95vw]
        h-[80vh]
        p-0
        border-none
        bg-white
        shadow-2xl
        rounded-t-3xl
        sm:max-w-[900px]
      "
      >
        {/* Drag Handle */}
        <div className="w-full flex justify-center py-3">
          <div className="h-1.5 w-12 bg-zinc-300 rounded-full" />
        </div>

        {/* Accessibility */}
        <div className="sr-only">
          <DialogTitle>{user.name}</DialogTitle>
          <DialogDescription>{user.username}</DialogDescription>
        </div>

        {/* Scroll area */}
        <div className="overflow-y-auto px-8 pb-10">
          {/* Header */}
          <div className="flex items-center gap-5">
            <Avatar className="h-20 w-20 border">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-zinc-500">@{user.username}</p>
            </div>

            <Button size="sm" className="rounded-full">
              Follow
            </Button>
          </div>

          <p className="mt-4 text-zinc-600">{user.bio}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 my-6 border-y py-4">
            <div className="text-center">
              <p className="font-bold text-lg">{user.stats.projects}</p>
              <p className="text-xs text-zinc-400">Projects</p>
            </div>
            <div className="text-center border-x">
              <p className="font-bold text-lg">{user.stats.followers}</p>
              <p className="text-xs text-zinc-400">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">{user.stats.hackathons}</p>
              <p className="text-xs text-zinc-400">Wins</p>
            </div>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {user.stack.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-between" asChild>
              <a href={user.links.github} target="_blank">
                <span className="flex items-center gap-2">
                  <Github className="size-4" />
                  GitHub
                </span>
                <ExternalLink className="size-4 opacity-40" />
              </a>
            </Button>

            <Button variant="outline" className="w-full justify-between" asChild>
              <a href={user.links.linkedin} target="_blank">
                <span className="flex items-center gap-2">
                  <Linkedin className="size-4" />
                  LinkedIn
                </span>
                <ExternalLink className="size-4 opacity-40" />
              </a>
            </Button>

            <Button className="w-full">
              <MessageCircle className="size-4 mr-2" />
              Message
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}