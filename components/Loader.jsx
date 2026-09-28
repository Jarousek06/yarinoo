"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand } from "@/lib/content";

// =============================================================
//  Loader — cerna obrazovka, na ktere jednou "probliksne" napis
//  YARINOO. Zmizi max do 1 sekundy. Respektuje reduced-motion.
// =============================================================
export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1000); // max 1s
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.span
            className="skew-head font-head text-5xl font-bold tracking-tightest text-paper md:text-7xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: [0, 1, 1, 0.4], scale: 1 }}
            transition={{ duration: 0.9, times: [0, 0.3, 0.7, 1] }}
          >
            {brand.name}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
