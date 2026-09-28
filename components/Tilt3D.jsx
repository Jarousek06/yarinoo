"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// =============================================================
//  Tilt3D — karta se pri pohybu mysi lehce naklani do 3D
//  (jak drzis kartu v ruce). Max ~7 stupnu, pruzinovy navrat.
//  Na dotykovych zarizenich se nic nedeje (jen mousemove).
// =============================================================
export default function Tilt3D({ children, className = "", max = 7 }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // pruziny, aby navrat pusobil prirozene
  const springX = useSpring(rotateX, { stiffness: 260, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 260, damping: 20 });

  const onMouseMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    // pozice mysi vuci stredu karty (-0.5 az 0.5)
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateY.set(px * max * 2);
    rotateX.set(-py * max * 2);
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div style={{ perspective: 900 }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        className="h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
