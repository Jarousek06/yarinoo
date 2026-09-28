"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolio } from "@/lib/content";
import SectionHead from "./SectionHead";
import Tilt3D from "./Tilt3D";

// =============================================================
//  PORTFOLIO — mrizka projektu s filtrem (Vse / Weby / Social).
//  Pri najeti na kartu se ukaze akcentni overlay "Zobrazit".
// =============================================================
export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  // vyber projektu podle zvoleneho filtru
  const shown =
    filter === "all"
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHead kicker={portfolio.kicker} title={portfolio.title} />

      {/* ---- FILTRACNI TLACITKA ---- */}
      <div className="mt-10 flex flex-wrap gap-3">
        {portfolio.filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`border px-5 py-2 font-head text-sm font-semibold uppercase tracking-widest transition-colors duration-150 ${
              filter === f.value
                ? "border-accent bg-accent text-ink"
                : "border-paper/25 text-paper/70 hover:border-paper hover:text-paper"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ---- MRIZKA PROJEKTU ---- */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.a
              key={p.name}
              href={p.href || "#kontakt"}
              target={p.href ? "_blank" : undefined}
              rel={p.href ? "noopener noreferrer" : undefined}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block"
            >
              {/* 3D naklon karty podle pohybu mysi */}
              <Tilt3D className="h-full">
              <div className="h-full border border-paper/10 bg-ink">
              {/* obrazek projektu (AI generovany) — nahrad realnym screenshotem */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-transform duration-300 group-hover:scale-105"
                />

                {/* overlay "Zobrazit" pri najeti */}
                <div className="absolute inset-0 flex items-center justify-center bg-accent/90 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                  <span className="skew-head font-head text-3xl font-bold uppercase tracking-tight text-ink">
                    Zobrazit →
                  </span>
                </div>
              </div>

              {/* popis pod obrazkem */}
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <h3 className="font-head text-2xl font-bold uppercase tracking-tight text-paper">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-body text-sm text-paper/60">
                    {p.oneLiner}
                  </p>
                </div>
                <span className="shrink-0 border border-accent px-2 py-1 font-head text-xs font-semibold uppercase tracking-widest text-accent">
                  {p.tag}
                </span>
              </div>
              </div>
              </Tilt3D>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
