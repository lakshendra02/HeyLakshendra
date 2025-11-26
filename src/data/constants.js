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
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiMysql } from "react-icons/si";

export const navLinks = [
  { id: "home", title: "Home", path: "/" },
  { id: "about", title: "About", path: "/about" },
  { id: "projects", title: "Projects", path: "/projects" },
  { id: "skills", title: "Skills", path: "/skills" },
  { id: "contact", title: "Contact", path: "/contact" },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/yourprofile" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/yourprofile" },
  { icon: FaTwitter, href: "https://twitter.com/yourprofile" },
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
    title: "TODOGENIX",
    description:
      "A full-stack task management application to boost productivity using the MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "/assets/project-thumb-1.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "HEAL",
    description:
      "An AI-powered health monitoring system providing personalized wellness tips and progress tracking.",
    tags: ["Next.js", "Python", "ML", "PostgreSQL"],
    image: "/assets/project-thumb-2.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "VOICE OVER",
    description:
      "A simple utility for converting text to speech using a modern, accessible interface.",
    tags: ["React", "Web Speech API", "CSS"],
    image: "/assets/project-thumb-3.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio v1",
    description:
      "The first iteration of my personal website, built with pure HTML/CSS/JS for foundational practice.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/assets/project-thumb-4.jpg",
    liveLink: "#",
    githubLink: "#",
  },
];
