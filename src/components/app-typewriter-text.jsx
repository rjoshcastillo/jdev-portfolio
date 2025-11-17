import { clsx } from "clsx";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const AppTypewriterText = ({
  text,
  typingSpeed = 50,
  delay = 0,
  className,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = text;

  // Effect to handle the typing logic
  useEffect(() => {
    const totalLength = fullText.length;
    let i = 0;

    // Start typing after the initial delay
    const startTyping = setTimeout(() => {
      const intervalId = setInterval(() => {
        setDisplayedText(fullText.substring(0, i + 1));
        i++;

        // Stop the interval when the entire text is displayed
        if (i === totalLength) {
          clearInterval(intervalId);
        }
      }, typingSpeed); // Speed in milliseconds per character

      return () => clearInterval(intervalId); // Cleanup function
    }, delay * 1000); // Convert delay from seconds to milliseconds

    return () => clearTimeout(startTyping); // Cleanup on unmount
  }, [fullText, typingSpeed, delay]);

  return (
    <motion.div
      className={clsx("font-mono text-white inline", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.div>
  );
};

export default AppTypewriterText;
