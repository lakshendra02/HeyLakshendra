import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/constants";
import Button from "./Button";

function Projects() {
  return (
    <SectionWrapper id="projects" title="My Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button
          variant="secondary"
          as="a"
          href="https://github.com/lakshendra02"
        >
          Explore More on GitHub
        </Button>
      </div>
    </SectionWrapper>
  );
}

export default Projects;
