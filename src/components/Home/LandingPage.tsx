'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  const text = `But this transformation requires removing significant barriers. We need intuitive interfaces, a reimagined approach to data privacy, and a robust platform that simplifies the creation and deployment of AI-driven nutrition solutions.`;
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust speed by changing the interval time
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "1.2rem", lineHeight: "1.5" }}>
      <motion.div
        initial={{ width: 0, height: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, delay : 3 }}
      >
        {displayText}
        {/* <span className="cursor" style={{ borderLeft: "2px solid black", paddingLeft: "2px" }} /> */}
      </motion.div>
    </div>
  );
};

export default LandingPage;
