import { motion } from "framer-motion";

function Card({ children, title, icon: Icon, className = "" }) {
  return (
    <motion.div
      className={`bg-dark-card p-6 rounded-xl border-2 border-primary/30 shadow-xl transition-all duration-500 hover:shadow-primary/50 hover:border-primary ${className}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center mb-4">
        {Icon && (
          <div className="text-3xl text-primary mr-3">
            <Icon />
          </div>
        )}
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="text-gray-400">{children}</div>
    </motion.div>
  );
}

export default Card;
