import { motion } from "framer-motion";
import { smoothScroll } from "../utils/smoothScroll";

function Button({
  children,
  variant = "primary",
  as: Component = "button",
  className = "",
  ...props
}) {
  // FIX: Change rounded-full to rounded-xl for a rectangular shape with rounded corners
  const baseStyle =
    "px-6 py-3 font-semibold rounded-xl text-lg transition-all duration-300 shadow-md";
  let variantStyle = "";
  const isInternalLink =
    props.href && (props.href.startsWith("/") || props.href.startsWith("#"));

  if (variant === "primary") {
    variantStyle = "bg-primary text-dark-bg hover:bg-white hover:text-dark-bg";
  } else if (variant === "secondary") {
    variantStyle =
      "bg-dark-bg text-primary border border-primary hover:bg-primary hover:text-dark-bg";
  } else if (variant === "link") {
    variantStyle = "text-primary hover:underline px-0 py-0 shadow-none";
  }

  const finalClassName = `${baseStyle} ${variantStyle} ${className}`;

  if (Component === "a" && isInternalLink) {
    const sectionId = props.href.replace(/[/#]/g, "");

    const handleClick = (e) => {
      e.preventDefault();
      smoothScroll(sectionId);
    };

    return (
      <motion.div whileTap={{ scale: 0.95 }}>
        <a
          onClick={handleClick}
          className={finalClassName}
          {...props}
          href={`#${sectionId}`}
        >
          {children}
        </a>
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
