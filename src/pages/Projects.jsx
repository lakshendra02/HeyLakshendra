import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/constants";
import Button from "../components/Button";

function Projects() {
  return (
    <SectionWrapper id="projects" title="My Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="secondary" as="a" href="#">
          Explore More on GitHub
        </Button>
      </div>
    </SectionWrapper>
  );
}

export default Projects;
