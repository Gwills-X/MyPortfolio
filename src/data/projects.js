// src/data/projects.js
import vtuVideo from "../data/lv_0_20250826145229.mp4";
import jobLinkVideo from "../data/lv_0_20251108115058.mp4";
import chayilPortfolio from "../data/lv_0_20260117215806.mp4";
const projects = [
  {
    id: "joblink",
    title: "JobLink",
    description: "A platform connecting job seekers with employers.",
    image: "/project1.png",
    video: jobLinkVideo, // <-- added
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
    title: "Chayil Portfolio",
    description:
      "A personal portfolio website showcasing projects, services, and contact info.",
    video: chayilPortfolio, // replace with your actual video path
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
    live: "#", // replace with live demo link if available
    github: "#", // replace with GitHub link if available
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    description:
      "Fullstack system to manage products, stock, and transactions.",
    image: "/project3.png",
    video: "/videos/inventory-system.mp4",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    overview:
      "A backend-driven application for businesses to manage products, stock levels, and inventory transactions efficiently.",
    problem:
      "Manual inventory tracking causes errors, mismanagement, and inefficient reporting.",
    solution:
      "Implemented a secure CRUD system with relational database management, reporting features, and stock tracking logic to automate daily operations.",
    features: [
      "Product CRUD management",
      "Stock tracking and updates",
      "User role access control",
      "Reporting and export options",
    ],
    live: "#",
    github: "#",
  },
  {
    id: "cosmetics-store",
    title: "Cosmetics E-commerce",
    description: "A responsive online store for beauty products.",
    image: "/project4.png",
    video: "/videos/cosmetics-store.mp4",
    tech: ["React", "Tailwind CSS", "Stripe API", "Firebase"],
    overview:
      "An online store providing seamless shopping for beauty and cosmetic products, including checkout and order tracking.",
    problem:
      "Small businesses need an online store without managing complex e-commerce platforms.",
    solution:
      "Built a modern React-based store with Firebase backend for authentication, Stripe for payments, and responsive UI for all devices.",
    features: [
      "Product listing and search",
      "User authentication and cart",
      "Stripe payment integration",
      "Order history and tracking",
    ],
    live: "#",
    github: "#",
  },
  {
    id: "student-management",
    title: "Student Management System",
    description: "Manage student data, courses, and academic records.",
    image: "/project5.png",
    video: "/videos/student-management.mp4",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    overview:
      "This system allows educational institutions to manage student profiles, course registration, grades, and academic history efficiently.",
    problem:
      "Manual student record-keeping is prone to errors and is difficult to scale.",
    solution:
      "Developed a secure web application with role-based access, CRUD operations, and database relationships to ensure smooth student data management.",
    features: [
      "Student profile management",
      "Course registration and allocation",
      "Role-based admin and teacher access",
      "Reports on grades and attendance",
    ],
    live: "#",
    github: "#",
  },
];

export default projects;
