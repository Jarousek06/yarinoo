"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import SectionHead from "./SectionHead";

// =============================================================
//  SERVICES — "Co delam". Tri karty s ostrymi hranami.
//  Karty nabihaji ve 3D: otoci se z hloubky (rotateY) jedna
//  po druhe. Pri najeti se karta zvedne + akcentni ramecek.
// =============================================================
export default function Services() {
  return (
    <section id="sluzby" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHead kicker={services.kicker} title={services.title} />

      {/* perspective = 3D hloubka pro nabihani karet */}
      <div
        className="mt-16 grid grid-cols-1 gap-px bg-paper/10 md:grid-cols-3"
        style={{ perspective: 1200 }}
      >
        {services.items.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotateY: -24, y: 48 }}
            whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="will-change-transform"
          >
            <a
              href="#kontakt"
              className="group flex h-full flex-col justify-between border border-transparent bg-ink p-8 transition-all duration-150 hover:-translate-y-2 hover:border-accent md:p-10"
            >
              <div>
                <span className="font-head text-sm text-smoke">
                  0{i + 1}
                </span>
                <h3 className="skew-head mt-4 font-head text-4xl font-bold uppercase tracking-tight text-paper transition-colors duration-150 group-hover:text-accent md:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-4 font-body text-base text-paper/70">
                  {s.desc}
                </p>
              </div>
              <span className="mt-10 inline-flex items-center gap-2 font-head text-sm font-semibold uppercase tracking-widest text-accent">
                {s.link}
                <span className="transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
