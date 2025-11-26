import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Button({
  children,
  variant = "primary",
  as: Component = "button",
  className = "",
  ...props
}) {
  const baseStyle =
    "px-6 py-3 font-semibold rounded-full text-lg transition-all duration-300 shadow-md";
  let variantStyle = "";

  if (variant === "primary") {
    variantStyle = "bg-primary text-dark-bg hover:bg-white hover:text-dark-bg";
  } else if (variant === "secondary") {
    variantStyle =
      "bg-dark-bg text-primary border border-primary hover:bg-primary hover:text-dark-bg";
  } else if (variant === "link") {
    variantStyle = "text-primary hover:underline px-0 py-0 shadow-none";
  }

  const finalClassName = `${baseStyle} ${variantStyle} ${className}`;

  if (Component === "a" && props.href && props.href.startsWith("/")) {
    return (
      <motion.div whileTap={{ scale: 0.95 }}>
        <Link to={props.href} className={finalClassName} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Component className={finalClassName} {...props}>
        {children}
      </Component>
    </motion.div>
  );
}

export default Button;
