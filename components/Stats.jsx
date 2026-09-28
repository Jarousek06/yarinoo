"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { stats } from "@/lib/content";

// =============================================================
//  STATS — pas s cisly jako "statistiky hrace" na sportovni
//  kartce. Cisla se napocitaji od nuly, kdyz pas vjede do
//  obrazovky (count-up efekt).
// =============================================================

// jedno pocitadlo
function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.6, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, value, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      aria-label="Statistiky"
      className="border-y border-paper/10 bg-ink"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.items.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="border-r border-paper/10 px-6 py-10 last:border-r-0 md:py-14 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
          >
            <div className="skew-head font-head text-5xl font-bold uppercase tracking-tightest text-accent md:text-6xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 font-head text-xs uppercase tracking-[0.25em] text-paper/60 md:text-sm">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
