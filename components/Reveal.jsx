"use client";

import { motion } from "framer-motion";

// =============================================================
//  Reveal — obal, ktery necha obsah "vyjet zdola + zesvetlit"
//  ve chvili, kdy priscrolluje do zoberu. Pouziva se vsude,
//  kde chceme scroll-animaci. delay = zpozdeni (pro staggering).
// =============================================================
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
