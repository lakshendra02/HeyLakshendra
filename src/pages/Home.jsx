import { motion } from "framer-motion";
import Button from "../components/Button";
import heroIllustration from "../assets/hero-illustration.svg"; // Placeholder
import SectionWrapper from "../components/SectionWrapper";
function Home() {
  return (
    <SectionWrapper
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center justify-center"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Illustration */}
        <motion.div
          className="order-2 md:order-1 flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Placeholder for artistic illustration/artwork */}
          <div className="relative w-full max-w-sm aspect-square bg-gradient-to-br from-primary/50 to-dark-bg rounded-3xl p-4">
            <img
              src={heroIllustration} // Replace with your image
              alt="Artistic Illustration"
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </motion.div>

        {/* Right Side: Text and Buttons */}
        <motion.div
          className="order-1 md:order-2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl text-primary font-semibold mb-2">
            Hi There! I'm Lakshendra Sejwani.
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-white">Turning Vision Into Reality </span>
            <span className="text-primary">Through Code.</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-xl">
            As a passionate Full Stack Developer, I am dedicated to turning
            ideas into innovative web applications, focusing on seamless user
            experience and robust backend architecture.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <Button
              variant="primary"
              as="a"
              href="https://drive.google.com/file/d/1de03O0HH98uVFa3COVriqzV0XcEf707I/view?usp=sharing"
              target="_blank"
            >
              Resume ↗
            </Button>
            <Button variant="secondary" as="a" href="/contact">
              Contact
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default Home;
