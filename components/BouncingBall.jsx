"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BasketballBall } from "./SportIcons";

// =============================================================
//  BouncingBall — basketbalovy mic, ktery skace nahoru a dolu
//  se "squash & stretch" efektem (zplacne se pri dopadu) a
//  stinem, ktery se pri vyskoku zmensuje. Cisty transform/opacity
//  (zadne repainty). Pri reduced-motion stoji na miste.
// =============================================================
export default function BouncingBall({ className = "" }) {
  const reduced = useReducedMotion();

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      {/* vyskok nahoru/dolu */}
      <motion.div
        animate={reduced ? {} : { y: [0, -110, 0] }}
        transition={{
          y: {
            duration: 1.3,
            repeat: Infinity,
            times: [0, 0.5, 1],
            ease: ["easeOut", "easeIn"],
          },
        }}
      >
        {/* squash & stretch + lehke pootoceni */}
        <motion.div
          animate={
            reduced
              ? {}
              : {
                  scaleY: [0.78, 1.05, 1, 1.05, 0.78],
                  scaleX: [1.18, 0.96, 1, 0.96, 1.18],
                  rotate: [-6, 0, 4, 0, -6],
                }
          }
          transition={{
            duration: 1.3,
            repeat: Infinity,
            times: [0, 0.2, 0.5, 0.8, 1],
            ease: "easeInOut",
          }}
          style={{ originY: 1 }}
        >
          <BasketballBall className="h-20 w-20 md:h-28 md:w-28" />
        </motion.div>
      </motion.div>

      {/* stin pod micem */}
      <motion.div
        className="mx-auto mt-2 h-2 w-16 rounded-full bg-black/60 blur-[3px] md:w-24"
        animate={reduced ? {} : { scaleX: [1, 0.45, 1], opacity: [0.6, 0.25, 0.6] }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          times: [0, 0.5, 1],
          ease: ["easeOut", "easeIn"],
        }}
      />
    </div>
  );
}
