"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import dynamic from "next/dynamic";
import { hero } from "@/lib/content";
import Marquee from "./Marquee";

// 3D mic se nacita lazy (az v prohlizeci), aby nebrzdil start webu
const Basketball3D = dynamic(() => import("./Basketball3D"), { ssr: false });

// =============================================================
//  HERO — uvodni fullscreen sekce, kinematicka verze:
//   - pozadi ma parallax (scrolluje pomaleji nez obsah)
//   - nadpis se pri scrollu 3D "sklopi" dozadu a vybledne
//   - vedle nadpisu skace basketbalovy mic
//  Vsechno jede jen pres transform/opacity (60 fps).
// =============================================================
export default function Hero() {
  const letters = hero.headline.split("");
  const sectionRef = useRef(null);

  // prubeh scrollu pres hero sekci (0 = nahore, 1 = odscrollovano)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // parallax pozadi — jede o ~12 % pomaleji (jen dekorativni vrstva)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  // nadpis se sklopi do hloubky a vybledne
  const headRotateX = useTransform(scrollYProgress, [0, 0.7], [0, 28]);
  const headY = useTransform(scrollYProgress, [0, 0.7], ["0%", "-18%"]);
  const headOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // ---- SPOTLIGHT: mekke akcentni svetlo sleduje mys ----
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const spotX = useSpring(mouseX, { stiffness: 120, damping: 22 });
  const spotY = useSpring(mouseY, { stiffness: 120, damping: 22 });
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${spotX}px ${spotY}px, rgba(255, 59, 31, 0.13), transparent 70%)`;

  const onMouseMove = (e) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set(e.clientX - r.left);
    mouseY.set(e.clientY - r.top);
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={onMouseMove}
      className="relative flex min-h-dvh flex-col justify-between overflow-hidden pt-24"
    >
      {/* spotlight vrstva (jen dekorace, jede pres GPU) */}
      <motion.div
        aria-hidden="true"
        style={{ backgroundImage: spotlight }}
        className="pointer-events-none absolute inset-0 z-[5] hidden lg:block"
      />
      {/* ---- VELKA ATLETICKA FOTKA (duotone B&W) ----
          Skutecna fotka ze zapasu — soubor public/img/hero.webp */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY, scale: bgScale }}
        className="pointer-events-none absolute inset-0 z-0 will-change-transform"
      >
        <div className="absolute right-0 top-0 h-full w-full md:w-3/5">
          <img
            src="/img/hero.webp"
            alt=""
            className="h-full w-full object-cover object-[center_30%] grayscale"
          />
          {/* duotone prelivy pres fotku */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
          <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-tr from-accent/30 to-transparent" />
        </div>
      </motion.div>

      {/* ---- 3D BASKETBALOVY MIC (Three.js) — chyt a roztoc! ---- */}
      <motion.div
        className="absolute bottom-20 right-0 z-10 md:bottom-24 md:right-10"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.6, ease: "easeOut" }}
      >
        <Basketball3D className="h-56 w-56 md:h-96 md:w-96" />
      </motion.div>

      {/* ---- OBSAH HERA (3D perspektiva pro sklopeni nadpisu) ---- */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6"
        style={{ perspective: 900 }}
      >
        <motion.div
          style={{ rotateX: headRotateX, y: headY, opacity: headOpacity }}
          className="will-change-transform"
        >
          <motion.p
            className="mb-4 font-head text-sm uppercase tracking-[0.3em] text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.5 }}
          >
            Jaroslav Perlík
          </motion.p>

          {/* velky nadpis — pismena nabihaji postupne */}
          <h1
            className="skew-head font-head text-[22vw] font-bold leading-[0.8] tracking-tightest text-paper md:text-[16vw] lg:text-[13rem]"
            aria-label={hero.headline}
          >
            {letters.map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: "0.35em", rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 1.0 + i * 0.06,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-4 max-w-md font-body text-xl text-paper/80 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            {hero.subline}
          </motion.p>
        </motion.div>

        {/* dve tlacitka (CTA) — mimo 3D sklopeni, aby zustala citelna */}
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 bg-accent px-7 py-4 font-head text-lg font-semibold uppercase tracking-wide text-ink transition-transform duration-150 hover:-translate-y-1"
          >
            {hero.ctaPrimary}
            <span className="transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 border border-paper/40 px-7 py-4 font-head text-lg font-semibold uppercase tracking-wide text-paper transition-colors duration-150 hover:border-accent hover:text-accent"
          >
            {hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      {/* ---- BEZICI PAS DOLE ---- */}
      <div className="relative z-10 border-y border-paper/10 bg-ink/60 py-3 backdrop-blur-sm">
        <Marquee items={hero.ticker} />
      </div>
    </section>
  );
}
