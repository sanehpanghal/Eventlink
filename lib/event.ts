export type SocialLinks = {
  twitter?: string | null;
  linkedin?: string | null;
  github?: string | null;
  instagram?: string | null;
};

export type Entity = {
  name: string;
  logo?: string | null;
  website?: string | null;
};

export interface BaseEvent {
  id: string;
  name: string;
  description: string;
  date: string; // ISO String recommended
  startTime?: string;
  endTime?: string;
  banner?: string | null;
  eventLogo?: string | null;
  tags: string[];
  
  stats: {
    attendees: number;
    projects?: number;
    sponsors?: number;
  };
  
  location: {
    isOnline: boolean;
    venue?: string;
    address?: string;
    city: string;
    state?: string;
    country: string;
    mapUrl?: string;
  };

  organizers: Entity[];
  sponsors?: Entity[];
  
  contact: {
    email: string;
    phone?: string;
    social: SocialLinks;
  };

  // Optional arrays to avoid "undefined" errors in loops
//   schedule?: { time: string; activity: string }[];
//   prizes?: { position: string; amount: string; description?: string }[];
}


export type EventType = 

  | "hackathon" | "workshop" | "webinar" | "conference" 
  | "meetup" | "coding_challenge" | "design_challenge" 
  | "networking" | "social" | "music" | "art" | "sports" 
  | "career_fair" | "charity" | "other";

export type AppEvent = BaseEvent & {
  type: EventType;
};
