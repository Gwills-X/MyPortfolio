// src/data/projects.js
import vtuVideo from "../data/lv_0_20250826145229.mp4";
import jobLinkVideo from "../data/lv_0_20251108115058.mp4";
import chayilPortfolio from "../data/lv_0_20260117215806.mp4";
import landingPageVideo from "../data/landing page.mp4";

const projects = [
  {
    id: "joblink",
    title: "JobLink",
    description: "A platform connecting job seekers with employers.",
    image: "/project1.png",
    video: jobLinkVideo,
    tech: ["React", "PHP", "Laravel", "MySQL"],
    overview:
      "JobLink is a fullstack web application designed to connect employers with job seekers through a seamless and user-friendly platform.",
    problem:
      "Many job seekers struggle to find relevant opportunities, while employers face challenges managing applications efficiently.",
    solution:
      "I built a system that allows employers to post jobs and manage applications, while job seekers can create profiles, apply for jobs, and track their progress.",
    features: [
      "User authentication and role-based access",
      "Job posting and management system",
      "Application tracking",
      "REST API integration",
      "Real-time notifications",
    ],
    live: "#",
    github: "#",
  },
  {
    id: "vtu-portal",
    title: "VTU Service Portal",
    description:
      "A web portal for airtime, data subscriptions, and bill payments.",
    image: "/project2.png",
    video: vtuVideo,
    tech: ["React", "Tailwind CSS", "Redux", "Node.js", "Express", "MongoDB"],
    overview:
      "This portal allows users to purchase airtime, data bundles, pay bills, and track transactions with a smooth interface.",
    problem:
      "Existing services are fragmented, and users often need multiple apps or websites to manage telecom services.",
    solution:
      "I developed a unified platform integrating APIs from multiple service providers, with user authentication, transaction history, and a secure checkout system.",
    features: [
      "User dashboard with transaction history",
      "Service provider API integration",
      "Secure checkout with validation",
      "Responsive mobile-first design",
    ],
    live: "#",
    github: "#",
  },
  {
    id: "chayil-portfolio",
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, services, and contact info.",
    video: chayilPortfolio,
    tech: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
    overview:
      "Chayil Portfolio is a modern, responsive portfolio website built to highlight personal projects, services, and professional achievements.",
    problem:
      "Chayil needed a sleek, interactive portfolio to showcase her work and attract potential clients and collaborators.",
    solution:
      "Developed a fully responsive website with smooth animations, project showcase, and contact functionality, emphasizing modern UX/UI design principles.",
    features: [
      "Responsive multi-section layout",
      "Animated transitions with Framer Motion",
      "Project showcase with videos and tech stack",
      "Contact form integration",
    ],
    live: "#",
    github: "#",
  },
  {
    id: "modern-landing-page",
    title: "High-Conversion Landing Page",
    description:
      "A sleek, high-performance landing page for business marketing.",
    video: landingPageVideo,
    tech: ["React", "Vite", "Tailwind CSS", "Lucide React"],
    overview:
      "A professionally designed landing page optimized for speed, SEO, and user conversion, featuring a modern aesthetic and bold branding.",
    problem:
      "Businesses often have low conversion rates due to cluttered designs and slow-loading marketing pages.",
    solution:
      "I created a lightweight, high-performance landing page with clear CTA sections, optimized assets, and a clean UI to drive user engagement.",
    features: [
      "Fully responsive and mobile-optimized",
      "High-performance assets with Vite",
      "Clear Call-to-Action (CTA) sections",
      "Modern UI components and typography",
    ],
    live: "#",
    github: "#",
  },
  {
    id: "vtu-fullstack-app",
    title: "Enterprise VTU Solution",
    description:
      "Fullstack automated platform for telecom and utility services.",
    image: "/vtu-fullstack.png",
    video: vtuVideo,
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    overview:
      "A robust, fullstack Virtual Top-Up (VTU) application built to handle automated airtime, data, and utility bill payments via secure API integrations.",
    problem:
      "Managing high-volume telecom transactions manually or through unstable third-party tools leads to revenue loss and user frustration.",
    solution:
      "I engineered a complete solution using Laravel for the backend logic and React for the frontend, featuring automated transaction processing and secure wallet management.",
    features: [
      "Automated API routing for instant delivery",
      "User wallet system with secure funding",
      "Real-time transaction status tracking",
      "Advanced Admin dashboard for sales monitoring",
      "Secure authentication and data encryption",
    ],
    live: "#",
    github: "#",
  },
];

export default projects;
