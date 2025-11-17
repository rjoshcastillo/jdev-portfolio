import { motion } from "framer-motion";

const AppSectionDivider = ({ label, ...props }) => {
  return (
    <motion.div
      {...props}
      className="border border-Hazy px-8 py-1 rounded-4xl w-fit"
    >
      <p className="text-Hazy">{label}</p>
    </motion.div>
  );
};

export default AppSectionDivider;
