import React from "react";
import { motion, useAnimation } from "motion/react";

// Single-file React component that renders a bouncing ball using motion/react.
// Drop this file into your project and import <BouncingBall /> where you want the animation.

export default function BouncingBall({ size = 80, color = "#ff4d4f", floorHeight = 220 }) {
  const ballSize = size;
  const containerHeight = floorHeight + ballSize + 40; // extra padding

  // Keyframes for vertical movement (y), squash/stretch (scaleY/scaleX), and shadow
  const bounceY = [0, -floorHeight, 0];
  const squashY = [1, 0.85, 1];
  const squashX = [1, 1.15, 1];
  const shadowScale = [1, 0.6, 1];
  const shadowOpacity = [0.45, 0.12, 0.45];

  const transition = {
    duration: 1.0,
    times: [0, 0.5, 1],
    ease: ["easeOut", "easeIn"],
    repeat: Infinity,
    repeatType: "loop",
  };

  return (
    <div
      style={{
        width: 240,
        height: containerHeight,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        position: "relative",
        margin: 24,
      }}
    >
      {/* Ground line */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 16,
          height: 2,
          background: "#e6e6e6",
          borderRadius: 2,
        }}
      />

      {/* Shadow */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 18,
          width: ballSize * 0.9,
          height: ballSize * 0.28,
          borderRadius: 9999,
          background: "rgba(0,0,0,0.45)",
          transformOrigin: "center",
          filter: "blur(8px)",
        }}
        animate={{
          scaleX: shadowScale,
          opacity: shadowOpacity,
        }}
        transition={transition}
      />

      {/* Ball */}
      <motion.div
        role="img"
        aria-label="Bouncing ball animation"
        initial={{ y: 0, scaleY: 1, scaleX: 1 }}
        animate={{ y: bounceY, scaleY: squashY, scaleX: squashX }}
        transition={transition}
        style={{
          width: ballSize,
          height: ballSize,
          borderRadius: "50%",
          background: color,
          boxShadow: "0 12px 20px rgba(0,0,0,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          willChange: "transform, opacity",
        }}
      >
        {/* optional highlight */}
        <div
          style={{
            width: ballSize * 0.38,
            height: ballSize * 0.38,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.5)",
            transform: "translate(-10%, -10%)",
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </div>
  );
}
