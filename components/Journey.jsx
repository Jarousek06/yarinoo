"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { journey } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

// =============================================================
//  JOURNEY — "Moje cesta". Vlevo sticky foto, vpravo timeline.
//  Svisla cara timeline se VYKRESLUJE podle scrollu (akcentni
//  linka roste shora dolu, jak ctes pribeh). Uzly nabihaji
//  pruzinove, foto ma jemny parallax.
// =============================================================
export default function Journey() {
  const listRef = useRef(null);

  // prubeh scrollu pres timeline -> delka akcentni cary
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="o-mne" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHead kicker={journey.kicker} title={journey.title} />

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {/* ---- LEVA STRANA: STICKY FOTO (placeholder) ---- */}
        <div className="md:sticky md:top-24 md:h-[70vh]">
          <div className="relative h-[50vh] w-full overflow-hidden md:h-full">
            {/* AI generovana fotka — chces vlastni? Nahrad public/img/journey.jpg */}
            <img
              src="/img/journey.jpg"
              alt="Trénink v tělocvičně"
              loading="lazy"
              className="h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-t from-accent/25 to-transparent" />
            <div className="absolute inset-0 border border-paper/10" />
          </div>
        </div>

        {/* ---- PRAVA STRANA: TIMELINE ---- */}
        <ol ref={listRef} className="relative pl-8">
          {/* podkladova (slaba) cara */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 top-0 w-px bg-paper/15"
          />
          {/* akcentni cara, ktera roste pri scrollu */}
          <motion.span
            aria-hidden="true"
            style={{ scaleY: lineScale, originY: 0 }}
            className="absolute bottom-0 left-0 top-0 w-[3px] -translate-x-[1px] bg-accent will-change-transform"
          />

          {journey.milestones.map((m, i) => (
            <li key={i} className="relative mb-12 last:mb-0">
              {/* uzel na care — pruzinove vyskoci */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 18,
                  delay: 0.1,
                }}
                className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center"
              >
                <span className="h-4 w-4 rounded-full border-2 border-accent bg-ink" />
                <span className="absolute h-1.5 w-1.5 rounded-full bg-accent" />
              </motion.span>

              <Reveal delay={i * 0.05}>
                <span className="skew-head font-head text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  {m.year}
                </span>
                <h3 className="mt-1 font-head text-2xl font-bold uppercase tracking-tight text-paper md:text-3xl">
                  {m.label}
                </h3>
                <p className="mt-2 max-w-md font-body text-base leading-relaxed text-paper/70">
                  {m.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
