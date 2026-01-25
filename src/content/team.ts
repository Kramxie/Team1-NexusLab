export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
  facebook?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials?: SocialLinks;
}

export const team: TeamMember[] = [
  {
    id: "chris-bautista",
    name: "Chris Bautista",
    role: "Founder & Chief Executive Officer",
    bio: "Visionary leader driving Nexxus Lab's mission to deliver innovative tech solutions. Passionate about empowering businesses through automation and digital transformation.",
    avatar: "/team/chris.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/chrisbautista",
      facebook: "https://facebook.com/nexxuslab",
    },
  },
  {
    id: "loreleen-sablot",
    name: "Loreleen Mae Sablot",
    role: "Co-Founder & Senior Software Engineer",
    bio: "Technical mastermind behind Nexxus Lab's software solutions. Expert in full-stack development, AI integration, and building scalable applications.",
    avatar: "/team/loreleen.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/loreleensablot",
      github: "https://github.com/loreleensablot",
    },
  },
  {
    id: "dev-team",
    name: "Development Team",
    role: "Software Engineers & Developers",
    bio: "A talented group of developers and interns dedicated to crafting high-quality software solutions and bringing innovative ideas to life.",
    avatar: "/team/dev-team.jpg",
    socials: {},
  },
];
