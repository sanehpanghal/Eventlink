import { use } from "react";
import { notFound } from "next/navigation";
import { users } from "@/lib/mock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Globe, Twitter, Github, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function UserProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params); 
  const id = resolvedParams.id;

  const user = users.find((u) => u.username === id);


  if (!user) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Banner */}
      <div className={`h-48 bg-gradient-to-r ${user.gradient} to-white`} />

      <div className="px-8 pb-10 -mt-16">
        <div className="flex justify-between items-end">
          <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
            <AvatarImage src={user.avatar} className="object-cover" />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex gap-2 pb-2">
             <Button variant="outline" size="sm" asChild>
                <Link href="/">Back to Feed</Link>
             </Button>
             <Button size="sm" className="bg-black">Follow</Button>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-3xl font-bold tracking-tight">{user.name}</h1>
          <div className="flex items-center gap-2 text-gray-500 mt-1">
            <span>@{user.username}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span className="text-sm">{user.location}</span>
            </div>
          </div>
        </div>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          {user.bio}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 my-8 border-y py-6 border-gray-100">
          <div className="text-center">
            <p className="text-2xl font-bold">{user.stats.projects}</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Projects</p>
          </div>
          <div className="text-center border-x border-gray-100">
            <p className="text-2xl font-bold">{user.stats.followers}</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{user.stats.hackathons}</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Hackathons</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-sm font-semibold text-black mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {user.stack.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 border-none">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button variant="outline" className="justify-between h-12 px-4 border-gray-200" asChild>
              <a href={user.links.github} target="_blank">
                <div className="flex items-center gap-3"><Github size={18} /> GitHub</div>
                <ExternalLink size={14} className="text-gray-400" />
              </a>
            </Button>
            <Button variant="outline" className="justify-between h-12 px-4 border-gray-200" asChild>
              <a href={user.links.linkedin} target="_blank">
                <div className="flex items-center gap-3 text-blue-600"><Linkedin size={18} /> LinkedIn</div>
                <ExternalLink size={14} className="text-gray-400" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
