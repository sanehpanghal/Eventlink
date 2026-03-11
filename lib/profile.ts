// ability to create multiple profiles based on event types 

export interface BaseUserProfile {
    name: string;
    username: string;
    avatar: string;
    bio: string;
    gradient: string;
    location: string;
    website: string;
    stack: string[];
    links: {
        github?: string;

        twitter?: string;
        linkedin?: string;
    };
    stats: {
        projects: number;
        followers: string;
        hackathons: number;
    };
}