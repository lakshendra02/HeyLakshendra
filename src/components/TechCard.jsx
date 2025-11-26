import { motion } from "framer-motion";

function TechCard({ name, Icon }) {
  return (
    <motion.div
      className="p-6 bg-dark-card rounded-xl border border-primary/20 flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300 cursor-pointer backdrop-blur-sm"
      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 140, 0, 0.5)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-5xl mb-3 text-primary">
        <Icon />
      </div>
      <p className="text-lg font-semibold text-white">{name}</p>
    </motion.div>
  );
}

export default TechCard;
