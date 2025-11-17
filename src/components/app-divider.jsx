import { motion } from "motion/react";

const AppDivider = ({
  height = 50,
  color = "black",
  thickness = 2,
  style,
  ...props
}) => {
  return (
    <motion.div
      {...props}
      style={{
        borderLeft: `${thickness}px solid ${color}`,
        height: height,
        ...style,
      }}
    />
  );
};
export default AppDivider;
