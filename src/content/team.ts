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
  isGroupPhoto?: boolean;
  socials?: SocialLinks;
}

export interface TeamSection {
  id: string;
  title: string;
  members: TeamMember[];
}

// Leadership Team
export const leadershipTeam: TeamMember[] = [
  {
    id: "chris-bautista",
    name: "Chris Bautista",
    role: "Founder & Chief Executive Officer",
    bio: "Visionary leader driving Nexxus Lab's mission to deliver innovative tech solutions. Passionate about empowering businesses through automation and digital transformation.",
    avatar: "/images/team/chris-bautista.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/chris-bautista-31935854/",
      facebook: "https://facebook.com/nexxuslab",
    },
  },
  {
    id: "loreleen-sablot",
    name: "Loreleen Mae Sablot",
    role: "Co-Founder & Senior Software Engineer",
    bio: "Technical mastermind behind Nexxus Lab's software solutions. Expert in full-stack development, AI integration, and building scalable applications.",
    avatar: "/images/team/loreleen-sablot.png",
    socials: {
      linkedin: "https://linkedin.com/in/loreleensablot",
      github: "https://github.com/loreleensablot",
    },
  },
];

// Internship Team (DLSUD Interns)
export const internshipTeam: TeamMember[] = [
  {
    id: "internship-team",
    name: "DLSUD & CAVITE FEU Interns",
    role: "Internship Team",
    bio: "A talented group of interns from De La Salle University - Dasmariñas, dedicated to learning and contributing to innovative tech solutions.",
    avatar: "/images/team/internship-team.png",
    isGroupPhoto: true,
    socials: {},
  },
];

// Combined team sections for the page
export const teamSections: TeamSection[] = [
  {
    id: "leadership",
    title: "Leadership",
    members: leadershipTeam,
  },
  {
    id: "internship",
    title: "Internship Team",
    members: internshipTeam,
  },
];

// Legacy export for backwards compatibility
export const team: TeamMember[] = [...leadershipTeam, ...internshipTeam];
