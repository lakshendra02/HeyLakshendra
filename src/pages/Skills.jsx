import SectionWrapper from "../components/SectionWrapper";
import TechCard from "../components/TechCard";
import { technologies } from "../data/constants";

function Skills() {
  return (
    <SectionWrapper id="skills" title="Technologies">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <TechCard key={index} name={tech.name} Icon={tech.icon} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Skills;
