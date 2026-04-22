export type Experience = {
  slug: string;
  company: string;
  role: string;
  date: string;
  stack: string[];
  highlights: string[];
  details: string;
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "bright-mind-enrichment",
    company: "Bright Mind Enrichment, Inc.",
    role: "Web Developer (Volunteer)",
    date: "Mar 2026 – Present",
    stack: ["WordPress", "Plugins", "Web Development", "UX"],
    highlights: [
      "Improved website usability and accessibility through content and feature development.",
      "Configured and managed WordPress plugins for performance, security, and functionality.",
      "Built and updated responsive pages using WordPress tools and design best practices.",
      "Collaborated with team members to implement updates aligned with organizational goals.",
    ],
    details:
      "Contributed to the development and maintenance of a nonprofit website using WordPress. Focused on improving usability, accessibility, and performance while ensuring a consistent user experience across pages. Worked closely with team members to support ongoing updates and community outreach efforts.",
  },
  {
    slug: "coordinare",
    company: "Coordinare, Inc.",
    role: "Software Engineer",
    date: "Aug 2024 – Dec 2024",
    stack: ["C#", ".NET", "APIs", "Document Processing"],
    highlights: [
      "Reduced contract creation time by 50%",
      "Improved document generation speed by 15%",
      "Reduced QA cycles by 30%",
    ],
    details:
      "Built a contract-generation system handling complex multi-party workflows. Designed backend systems emphasizing correctness, extensibility, and predictable behavior. Integrated multiple third-party APIs and collaborated closely with stakeholders through iterative development.",
  },
  

];