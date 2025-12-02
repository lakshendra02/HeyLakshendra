import SectionWrapper from "./SectionWrapper";
import Card from "./Card";
import { timelineEvents } from "../data/constants"; // New Import
import {
  FaCode,
  FaStar,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaLaptopCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Achievement data (example, extracted from the original timeline)
const achievements = [
  {
    title: "SDE Internship",
    icon: FaCode,
    description:
      "I did three internships, playing roles from SDE intern to Developer Relations intern, gaining valuable mentorship and growth experience.",
  },
  {
    title: "Student Leader",
    icon: FaGraduationCap,
    description:
      "I joined Web Development Club as Student Coordinator, where I organized Workshops and Hackathons, learning essential leadership and networking skills.",
  },
  {
    title: "Tech Secy",
    icon: FaStar,
    description:
      "Managing curriculum and responsibilities in parallel as Technical Secretary helped me improve my skills in management and communication.",
  },
];

function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me">
      {/* 1. Professional Description (Full Width) */}
      <motion.div
        className="space-y-6 text-gray-300 mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-xl font-semibold text-primary">
          A Designer and Developer
        </p>
        <p>
          Hello! I'm Lakshendra Sejwani, a passionate full-stack developer
          specializing in creating clean, elegant, and functional web
          experiences. My journey started in August 2022 at IIIT
          Tiruchirappalli, leading me through diverse roles.
        </p>
        <p>
          I primarily work with the MERN stack and leverage TailwindCSS for
          rapid, modern styling. I focus heavily on Backend architecture,
          finding challenges there crucial for improving my logic and never
          giving up on innovation.
        </p>
        <p>
          When I'm not coding, I enjoy exploring new technologies and
          contributing to community projects. I believe in continuous learning
          and building things that make a real impact.
        </p>
      </motion.div>

      {/* 2. Career Timeline (Full Width, Centered) */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-white mb-10 inline-block relative pb-2">
          Career Timeline
          <span className="block w-1/2 h-1 bg-primary mx-auto absolute bottom-0 left-1/4 rounded-full"></span>
        </h3>

        {/* Timeline Container - Adjusted for better centering and flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line for aesthetic timeline effect */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20 hidden md:block"></div>

          <div className="flex flex-col space-y-4">
            {timelineEvents.map((event, index) => (
              // The TimelineItem needs to be modified slightly to work in this centered layout
              // For simplicity, we wrap each item in a motion div and control alignment here.
              <motion.div
                key={index}
                className={`flex w-full ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-full md:w-1/2">
                  {/* Re-implementing the core content logic for centering */}
                  <div
                    className={`flex items-center space-x-4 mb-4 ${
                      index % 2 !== 0
                        ? "md:flex-row-reverse md:space-x-reverse md:pl-8"
                        : "md:pr-8"
                    }`}
                  >
                    {/* Icon/Date Container for centering */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-dark-bg text-xl shadow-lg">
                        {/* Using placeholder icon logic here, you'll need to pass the correct icon component */}
                        {index === 0 && <FaGraduationCap />}
                        {index === 1 && <FaCode />}
                        {index === 2 && <FaBriefcase />}
                        {index === 3 && <FaCertificate />}
                        {/* Add more icon logic for the rest of your events */}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-dark-card p-4 rounded-xl border border-primary/20 shadow-md w-full">
                      <p className="text-primary font-bold text-base">
                        {event.date}
                      </p>
                      <p className="text-gray-300 mt-1 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Key Achievements (Bottom Card Grid) */}
      <h3 className="text-3xl font-bold text-center text-white mt-12 mb-10">
        Key Achievements
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card title={item.title} icon={item.icon}>
              {item.description}
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
