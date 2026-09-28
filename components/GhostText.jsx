"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// =============================================================
//  GhostText — obri "duchovy" napis jen s obrysem (outline),
//  ktery pri scrollovani pomalu jede do strany (scrub efekt
//  vazany na scrollbar). Cisty dekorativni prvek mezi sekcemi,
//  typicky pro kineticke / editorial weby.
//
//  direction:  1 = jede doleva,  -1 = jede doprava
//  accent:     true = obrys v akcentni barve
// =============================================================
export default function GhostText({
  text,
  direction = 1,
  accent = false,
  className = "",
}) {
  const ref = useRef(null);

  // prubeh: 0 = sekce vstupuje zespodu, 1 = odchazi nahoru
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`${direction * 6}%`, `${direction * -6}%`]
  );

  // text zopakujeme, aby pas nikdy nekoncil
  const repeated = Array(4).fill(text).join("  •  ");

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none select-none overflow-hidden py-2 ${className}`}
    >
      <motion.div
        style={{ x }}
        className={`skew-head whitespace-nowrap font-head text-[16vw] font-bold uppercase leading-none tracking-tightest will-change-transform md:text-[11vw] ${
          accent ? "text-outline-accent" : "text-outline"
        } opacity-30`}
      >
        {repeated}
      </motion.div>
    </div>
  );
}
