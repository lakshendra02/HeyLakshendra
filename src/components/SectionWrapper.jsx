import { motion } from "framer-motion";

function SectionWrapper({ children, title, id, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`py-20 md:py-24 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        {title && (
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12 relative pb-4">
            {title}
            <span className="block w-20 h-1 bg-primary mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full"></span>
          </h2>
        )}
        {children}
      </div>
    </motion.section>
  );
}

export default SectionWrapper;
