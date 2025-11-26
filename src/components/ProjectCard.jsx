import { motion } from "framer-motion";
import Button from "./Button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  const { title, description, tags, image, liveLink, githubLink } = project;

  return (
    <motion.div
      className="bg-dark-card rounded-xl overflow-hidden shadow-2xl group cursor-pointer border border-primary/20"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 40px rgba(255, 140, 0, 0.2)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0"></div>
      </div>

      <div className="p-6">
        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <Button
            as="a"
            href={liveLink}
            target="_blank"
            variant="primary"
            className="text-sm flex items-center gap-2 w-1/2 justify-center"
          >
            Demo <FaExternalLinkAlt />
          </Button>
          <Button
            as="a"
            href={githubLink}
            target="_blank"
            variant="secondary"
            className="text-sm flex items-center gap-2 w-1/2 justify-center"
          >
            Code <FaGithub />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
