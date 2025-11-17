import AppSectionDivider from "@/components/app-section-divider";
import AppTypewriterText from "@/components/app-typewriter-text";
import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <motion.div className="flex flex-col gap-4">
      <AppSectionDivider
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        label="About"
      />
      <motion.div className="flex flex-col gap-4 w-full xl:w-[65%] ">
        <motion.h1
          className="text-4xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
        >
          The
          <motion.span className="text-highlight">
            &nbsp;Engineer&nbsp;
          </motion.span>
          Behind the
          <br /> Experience
        </motion.h1>
        <motion.h1 className="subText">
          <AppTypewriterText
            typingSpeed={10}
            delay={1.8}
            text="Hello again! I'm a passionate Front-end Engineer with half decade of experience dedicated to making the web a more
            beautiful, faster, and more intuitive place. My philosophy is
            simple: Code should be elegant, and the user experience should be
            seamless. I thrive on translating complex design systems into
            robust, accessible, and pixel-perfect applications."
            className="subText"
          />
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};
export default AboutSection;
