export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  points: string[];
  techStack: { name: string; color: string }[];
  github: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "jobstream-ai",
    title: "JobStream AI",
    shortDescription:
      "An intelligent job aggregation platform that uses semantic search and distributed crawling to help users discover relevant opportunities through natural language queries.",
    fullDescription:
      "JobStream AI is a sophisticated job aggregation platform that revolutionizes how job seekers discover opportunities. By leveraging distributed web crawling, vector database technology, and semantic search, it allows users to find jobs using natural language queries instead of traditional keyword matching. The system features automated job aggregation from multiple sources, real-time notifications, and a subscription-based alert system that keeps users updated on opportunities matching their preferences.",
    points: [
      "Architected a distributed web crawling system using Express.js and BullMQ to asynchronously aggregate job listings from multiple sources, utilizing a worker-producer model to handle high-volume data ingestion.",
      "Implemented high-performance semantic search by integrating Qdrant Vector Database, enabling users to find relevant job opportunities through natural language queries rather than simple keyword matching.",
      "Engineered an automated notification engine featuring scheduled Cron jobs and a subscription-based mailing system to provide real-time updates on new openings tailored to specific roles and regions.",
      "Designed a fault-tolerant queue system with BullMQ and Redis to manage crawling tasks, ensuring reliable job data collection even during peak loads.",
      "Integrated OpenAI embeddings to convert job descriptions and user queries into vector representations for accurate semantic matching.",
      "Built a responsive dashboard for users to manage job preferences, view application history, and track saved opportunities.",
    ],
    techStack: [
      { name: "Express.js", color: "bg-slate-700" },
      { name: "BullMQ", color: "bg-red-400" },
      { name: "Redis", color: "bg-red-500" },
      { name: "Qdrant", color: "bg-purple-600" },
      { name: "OpenAI", color: "bg-indigo-600" },
      { name: "Deepseek", color: "bg-indigo-800" },
      { name: "Node.js", color: "bg-green-500" },
      { name: "MongoDB", color: "bg-green-600" },
      { name: "React", color: "bg-blue-500" },
      { name: "TypeScript", color: "bg-blue-700" },
    ],
    github: "https://github.com/MarutiBandagar9121/find-me-my-dream-job",
    image: "/images/projects/jobStreamAi.png",
  },

  {
    id: "lead-management-api",
    title: "Lead Management API",
    shortDescription:
      "A secure and scalable RESTful API for managing sales leads with role-based access control and containerized deployment.",
    fullDescription:
      "A comprehensive lead management solution built with Express.js that enables sales teams to efficiently track, manage, and convert leads. The system features robust authentication with JWT tokens, role-based access control for different user types (admin, manager, sales rep), and secure data validation. Deployed using Docker containers orchestrated with Docker Compose, ensuring a consistent and scalable multi-service environment.",
    points: [
      "Architected and deployed a containerized lead management application using Docker, orchestrating the Express.js API, MongoDB, and Redis containers with Docker Compose, ensuring a consistent and scalable multi-service environment.",
      "Secured the application with JSON Web Tokens (JWT), implementing role-based access control and a refresh token mechanism to enhance security and maintain persistent user sessions.",
      "Designed a predictable and reliable API with standardized response formats for both success and error scenarios, ensuring a consistent client-side experience.",
      "Enforced robust data integrity and security by utilizing Zod for comprehensive validation of all API inputs.",
      "Implemented Redis caching layer to optimize lead retrieval performance and reduce database load by up to 40%.",
      "Developed comprehensive API documentation using Swagger/OpenAPI specification for seamless developer onboarding.",
    ],
    techStack: [
      { name: "Express", color: "bg-slate-700" },
      { name: "Mongo DB", color: "bg-green-600" },
      { name: "Redis", color: "bg-red-500" },
      { name: "Docker", color: "bg-blue-500" },
      { name: "Docker Compose", color: "bg-blue-800" },
      { name: "Zod", color: "bg-gray-700" },
      { name: "JWT", color: "bg-amber-300 text-black" },
    ],
    github:
      "https://github.com/MarutiBandagar9121/LeadManagementSystem-ExpressJS",
    image: "/images/projects/leadManagementApi.png",
  },
  {
    id: "indian-id-validator",
    title: "Indian Id Validator",
    shortDescription:
      "A robust open-source npm package for validating Indian government IDs including Aadhaar, PAN, Voter ID, and GST numbers.",
    fullDescription:
      "A comprehensive TypeScript-based npm package that provides developers with reliable validation utilities for various Indian government identification documents. The package ensures correct format and checksum validation for Aadhaar numbers, PAN cards, Voter IDs, GST numbers, and Indian mobile numbers. Built with modern tooling to support both CommonJS and ES Module environments.",
    points: [
      "Engineered and published indian-id-validator, a robust open-source npm package that provides comprehensive validation for Indian government IDs including Aadhaar, PAN, Voter ID, and GST numbers.",
      "Built with TypeScript to ensure type safety and superior developer experience, leveraging Vite to configure a build pipeline that generates both CommonJS and ES module distributions for maximum compatibility.",
      "Implemented industry-standard validation algorithms including Verhoeff checksum for Aadhaar numbers and format validation for PAN card structure.",
      "Achieved zero-dependency design to keep the package lightweight and secure for all consuming applications.",
      "Published to npm registry with automated build pipeline and comprehensive test coverage to ensure reliability.",
    ],
    techStack: [
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "Vite", color: "bg-purple-500" },
      { name: "JavaScript", color: "bg-yellow-500 text-black" },
      { name: "npm", color: "bg-red-600" },
    ],
    github: "https://github.com/MarutiBandagar9121/indian-id-validator",
    image: "/images/projects/indianIdValidator.png",
  },
  {
    id: "animeflix",
    title: "AnimeFlix",
    shortDescription:
      "A full-stack anime streaming platform with secure authentication and personalized watchlists.",
    fullDescription:
      "AnimeFlix is a feature-rich anime streaming platform that allows users to discover, stream, and manage their favorite anime shows. The platform features secure user authentication with OTP email verification, personalized watchlists, and a responsive UI for seamless browsing across devices. Built with modern frontend technologies and a robust backend infrastructure.",
    points: [
      "Developed a full-stack anime streaming platform using React, Tailwind CSS, PHP, Apache, and PostgreSQL.",
      "Implemented secure user authentication with OTP-based email verification for enhanced account security.",
      "Designed a responsive and intuitive UI with Tailwind CSS, featuring anime cards, search functionality, and category filtering.",
      "Built RESTful APIs with PHP to handle user management, anime listings, and watchlist operations.",
      "Optimized PostgreSQL database with proper indexing for fast anime search and retrieval.",
    ],
    techStack: [
      { name: "React", color: "bg-blue-400" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
      { name: "PHP", color: "bg-indigo-600" },
      { name: "PostgreSQL", color: "bg-blue-800" },
      { name: "Apache", color: "bg-red-600" },
      { name: "JavaScript", color: "bg-yellow-500" },
    ],
    github: "https://github.com/MarutiBandagar9121/AnimeFlix",
    image: "/images/projects/animeflix.png",
  },
  {
    id: "milk-mart",
    title: "Milk Mart",
    shortDescription:
      "A comprehensive dairy management solution for tracking inventory, orders, and products.",
    fullDescription:
      "Milk Mart is a dairy management platform designed to streamline operations for dairy businesses. It provides an intuitive admin dashboard for managing inventory, processing orders, and tracking products. The system helps dairy owners efficiently handle daily operations, customer orders, and stock management in one centralized platform.",
    points: [
      "Built a comprehensive dairy management solution with PHP and MySQL for efficient business operations.",
      "Developed an admin dashboard for streamlined inventory, order, and product management.",
      "Implemented real-time stock tracking and automated low-stock alerts for proactive inventory management.",
      "Designed a customer-facing interface for browsing products and placing recurring milk orders.",
      "Created detailed reporting features for sales analysis and business insights.",
    ],
    techStack: [
      { name: "PHP", color: "bg-indigo-600" },
      { name: "MySQL", color: "bg-orange-500" },
      { name: "JavaScript", color: "bg-yellow-500" },
      { name: "HTML5", color: "bg-orange-600" },
      { name: "CSS3", color: "bg-blue-600" },
      { name: "Bootstrap", color: "bg-purple-600" },
    ],
    github: "https://github.com/MarutiBandagar9121/MilkMart",
    image: "/images/projects/milkmart.png",
  },
];
