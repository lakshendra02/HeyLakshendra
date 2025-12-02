import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiMysql } from "react-icons/si";
import image from "..//assets/project-thumb-1.jpg";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/lakshendra02" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/lakshendra-sejwani" },
  { icon: FaInstagram, href: "" },
];

export const technologies = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: SiMysql },
  { name: "Git", icon: FaGitAlt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

export const projects = [
  {
    title: "PolicyPal",
    description:
      "A full-stack AI powered policy document summarizer that helps users quickly grasp key points from lengthy insurance policies.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    image: image,
    liveLink: "https://policy-pal-red.vercel.app/",
    githubLink: "https://github.com/lakshendra02/PolicyPal.git",
  },
  {
    title: "QuickBlog",
    description:
      "An AI-powered blogging platform that simplifies content creation and management.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: image,
    liveLink: "https://ai-blog-app-hazel.vercel.app/",
    githubLink: "https://github.com/lakshendra02/QuickBlog.git",
  },
  {
    title: "Swipe Invoice App",
    description:
      "A simple invoice management app that allows users to upload invoices and group its data into products, invoices and customers.",
    tags: ["React", "Firebase", "CSS"],
    image: image,
    liveLink: "https://idyllic-sherbet-abf288.netlify.app/",
    githubLink: "https://github.com/lakshendra02/SwipeInvoiceApp.git",
  },
];

// ... (Keep existing imports and data like navLinks, socialLinks, technologies, projects)

export const timelineEvents = [
  {
    date: "November - 2022",
    description: "Joined IIIT Tiruchirappalli as a student of B.Tech (ECE).",
    icon: "FaGraduationCap",
  },
  {
    date: "March - 2023",
    description: "Joined Web Dev Club, IIIT Tiruchirappalli as a member.",
    icon: "FaCode",
  },
  {
    date: "September - 2020",
    description:
      "Became Coordinator of Web Dev Club, IIIT Tiruchirappalli, organizing workshops and hackathons.",
    icon: "FaBriefcase",
  },
  {
    date: "April - 2024",
    description: "Won Student Council of IIITT as a Technical Secretary.",
    icon: "FaCertificate",
  },
  {
    date: "June - 2024",
    description: "Joined Zenquip as SDE Intern.",
    icon: "FaLaptopCode",
  },
];
