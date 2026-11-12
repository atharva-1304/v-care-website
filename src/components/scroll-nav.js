"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

export default function ScrollNav() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 220);
  });

  return (
    <motion.nav
      className="scroll-nav"
      aria-label="Page navigation"
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -18, pointerEvents: isVisible ? "auto" : "none" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <a className="scroll-nav-brand" href="#top">V-CARE</a>
      <div className="scroll-nav-links">
        <a href="#product">Product</a>
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
      </div>
      <a className="scroll-nav-cta" href="#demo">Book a demo</a>
    </motion.nav>
  );
}
