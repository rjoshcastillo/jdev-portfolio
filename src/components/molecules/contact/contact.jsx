import AppSectionDivider from "@/components/app-section-divider";
import { ScaleUp } from "@/utils/animation-configs";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <motion.div id="contact-me" className="flex flex-col gap-10 pt-10">
      <AppSectionDivider {...ScaleUp} label="Contact" />
      <motion.div>
        <motion.h1 className="text-center 4xl sub-text">
          CURRENTLY BEING DEVELOP <br /> (Nov. 26, 2025)
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
