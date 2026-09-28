"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

// =============================================================
//  SectionHead — nadpis sekce se "splash wipe" efektem:
//  pres titulek prejede akcentni pas (jako grafika ve sportovnim
//  prenosu) a odhali text. Kicker nabiha klasicky.
// =============================================================

// Wipe — barevny pas prejede zleva doprava a odhali obsah
// Pozn.: padding + zaporny margin kompenzuji presah skosenych
// (italic) pismen, aby je overflow-hidden neorezaval.
export function Wipe({ children, color = "bg-accent", delay = 0, className = "" }) {
  return (
    <span
      className={`relative -mx-[0.18em] -my-[0.1em] inline-block overflow-hidden px-[0.18em] py-[0.1em] align-bottom ${className}`}
    >
      {/* text se objevi presne ve chvili, kdy je zakryty pasem */}
      <motion.span
        className="inline-block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: delay + 0.32, duration: 0.01 }}
      >
        {children}
      </motion.span>
      {/* akcentni pas (splash) */}
      <motion.span
        aria-hidden="true"
        className={`absolute inset-0 ${color}`}
        style={{ skewX: "-8deg" }}
        initial={{ x: "-105%" }}
        whileInView={{ x: ["-105%", "0%", "0%", "105%"] }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          delay,
          duration: 0.85,
          times: [0, 0.35, 0.55, 1],
          ease: "easeInOut",
        }}
      />
    </span>
  );
}

export default function SectionHead({ kicker, title, className = "" }) {
  return (
    <div className={className}>
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 shrink-0 bg-accent" />
          <span className="font-head text-sm uppercase tracking-[0.3em] text-accent">
            {kicker}
          </span>
        </div>
      </Reveal>
      <h2 className="skew-head mt-3 font-head text-5xl font-bold uppercase tracking-tightest text-paper md:text-7xl">
        <Wipe delay={0.1}>{title}</Wipe>
      </h2>
    </div>
  );
}
