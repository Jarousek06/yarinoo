"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// =============================================================
//  ScrollProgress — tenka akcentni linka nahore, ktera ukazuje,
//  jak daleko jsi na strance odscrolloval. Pruzinovy pohyb.
// =============================================================
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
