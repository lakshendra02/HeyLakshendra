import SectionWrapper from "../components/SectionWrapper";
import Card from "../components/Card";
import profileImage from "../assets/profile.jpg"; // Placeholder
import { FaGraduationCap, FaCode, FaStar } from "react-icons/fa";
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

function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          className="md:col-span-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-64 h-80 relative p-4 border-4 border-primary rounded-xl overflow-hidden shadow-2xl">
            <img
              src={profileImage}
              alt="Mayank Sonkar Profile"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary rounded-bl-full opacity-70"></div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="md:col-span-2 space-y-6 text-gray-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-semibold text-primary">
            A Designer and Developer
          </p>
          <p>
            Hello! I'm Lakshendra Sejwani, a passionate Full Stack Developer
            specializing in creating clean, elegant, and functional web
            experiences. My journey started in November 2022 at IIIT
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
      </div>

      <h3 className="text-3xl font-bold text-center text-white mt-20 mb-10">
        Achievements
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

export default About;
