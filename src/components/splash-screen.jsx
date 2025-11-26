"use client";

import { motion } from "motion/react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function SplashScreen() {
  return (
    <motion.div className="w-full h-screen flex justify-center items-center">
      <motion.svg
        width="350"
        height="200"
        viewBox="0 0 350 200"
        initial="hidden"
        animate="visible"
        style={image}
      >
        {/* J */}
        <motion.path
          d="
            M 60 20
            L 60 120
            C 60 160 110 160 110 120
          "
          stroke="#ff0088"
          variants={draw}
          custom={0}
          style={shape}
        />

        {/* D */}
        <motion.path
          d="
            M 140 20
            L 140 160
            M 140 20
            C 240 20 260 90 260 110
            C 260 140 240 160 140 160
          "
          stroke="#8df0cc"
          variants={draw}
          custom={1}
          style={shape}
        />

        {/* E */}
        <motion.path
          d="
            M 290 20
            L 290 160
            M 290 20
            L 350 20
            M 290 90
            L 330 90
            M 290 160
            L 350 160
          "
          stroke="#ff0088"
          variants={draw}
          custom={2}
          style={shape}
        />

        {/* V */}
        <motion.path
          d="
            M 380 20
            L 420 160
            L 460 20
          "
          stroke="#8df0cc"
          variants={draw}
          custom={3}
          style={shape}
        />
      </motion.svg>
    </motion.div>
  );
}

const image = {
  maxWidth: "80vw",
};

const shape = {
  strokeWidth: 20,
  strokeLinecap: "round",
  fill: "transparent",
};
