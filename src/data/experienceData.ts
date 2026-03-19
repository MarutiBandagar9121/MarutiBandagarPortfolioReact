import {
  RiCodeBoxLine,
  RiLayoutLine,
  RiServerLine,
  RiCloudLine,
  RiDatabase2Line,
  RiToolsLine,
} from "@remixicon/react";

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "Full-time" | "Internship" | "Freelance" | "Contract";
  location: string;
  startDate: string;
  endDate: string | null; // null = Present
  achievements: string[];
  techStack: string[];
}

export const stats = [
  { value: "~2", label: "Years Experience", color: "#6366f1" },
  { value: "10+", label: "Projects Built", color: "#06b6d4" },
  { value: "15+", label: "Technologies", color: "#10b981" },
];

export const totalExperience = "~2 Years";

export const experiences: Experience[] = [
  {
    id: "estatehub-fulltime",
    company: "Estatehub",
    role: "Software Engineer",
    type: "Full-time",
    location: "Pune, Maharashtra",
    startDate: "May 2024",
    endDate: "",
    achievements: [
      "Architected and executed migration of a legacy monolith into a containerized microservices system, deployed on Google Cloud Run with full GCP environment setup including Cloud SQL — dramatically improving developer experience and system scalability.",
      "Built an AI-powered thesis evaluation prototype and a large-scale web scraper to fetch, analyze, and generate reports on thesis documents — delivering measurable research automation for the organization.",
      "Engineered a real estate data ETL pipeline that formatted and bulk-loaded large volumes of property data from Excel into SQL, and separately built a real estate web scraper for internal data acquisition.",
      "Designed a highly efficient, complex data model tailored to the company's real estate domain requirements — built for scale, clarity, and long-term maintainability.",
      "Developed a full-featured invoice generation and management system within the product portal, and resolved critical payment gateway integration bugs end-to-end.",
      "Led integration of an external plagiarism detection API and co-built a proprietary plagiarism checking service layered on top — expanding the platform's core capabilities.",
      "Owned SEO strategy and digital marketing modernization — brought the entire process in-house using AI tooling and modern tech, improving the firm's search visibility and operational efficiency.",
    ],
    techStack: [
      "Python",
      "Fastapi",
      "Java",
      "Spring Boot",
      "Javascript",
      "TypeScript",
      "React",
      "NextJs",
      "Angular",
      "PHP",
      "Laravel",
      "Docker",
      "AWS",
      "GCP",
      "Qdrant",
      "PostgreSQL",
      "MySQL",
    ],
  }
]

export interface SkillCategory {
  title: string;
  Icon: React.ElementType;
  accent: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    Icon: RiCodeBoxLine,
    accent: "#8b5cf6",
    skills: ["Python","Java", "JavaScript", "TypeScript", "PHP"],
  },
  {
    title: "Frontend",
    Icon: RiLayoutLine,
    accent: "#06b6d4",
    skills: ["React", "Next.js", "Angular", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    Icon: RiServerLine,
    accent: "#10b981",
    skills: ["Fastapi","Django","Spring Boot","Laravel", "Express", "Node.js"],
  },
  {
    title: "DevOps & Cloud",
    Icon: RiCloudLine,
    accent: "#f97316",
    skills: ["Git & GitHub","GitHub Actions","Docker","Docker Compose", "AWS", "GCP"],
  },
  {
    title: "Databases",
    Icon: RiDatabase2Line,
    accent: "#3b82f6",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Qdrant","ChromaDB", "Elasticsearch"],
  },
  {
    title: "Tools & More",
    Icon: RiToolsLine,
    accent: "#f43f5e",
    skills: ["Postman", "Insomnia", "VS Code", "IntelliJ IDEA", "Claude Code", "KiloCode","FileZilla","DBeaver"],
  },
];
