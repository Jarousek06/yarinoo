"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// =============================================================
//  Magnetic — prvek se "prilepi" k mysi (magneticky efekt).
//  Tah je omezeny (x0.35), aby prvek nikdy neutekl z mista.
//  Na dotykovych zarizenich se nedeje nic. Pouzivej stridme —
//  max 1-2 magneticke prvky na obrazovku.
// =============================================================
export default function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // pruzinovy dojezd — elasticky navrat na misto
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  const onMouseMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
