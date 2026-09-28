"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { sport } from "@/lib/content";
import Reveal from "./Reveal";
import Marquee from "./Marquee";
import {
  BasketballBall,
  BasketballIcon,
  GloveIcon,
  DumbbellIcon,
  WavesIcon,
  SplashBurst,
} from "./SportIcons";

// =============================================================
//  SPORT / DISCIPLINA — full-width sekce s diagonalni hranou.
//  Kazda disciplina ma vlastni animovanou ikonu:
//   - Basketbal: mic skace (bounce)
//   - Gym: cinka dela "opakovani" (zvedani)
//   - Box: rukavice udeluje udery + splash naraz
//   - Plavani: vlny se houpou
//  Animace bezi pri najeti mysi (hover) i pri tapnuti (tap).
// =============================================================

// ---- animacni varianty pro jednotlive ikony ----
const iconAnims = {
  basketbal: {
    hover: {
      y: [0, -18, 0, -10, 0],
      transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
    },
  },
  gym: {
    hover: {
      y: [0, -12, 0, -12, 0],
      scaleX: [1, 1.06, 1, 1.06, 1],
      transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut" },
    },
  },
  box: {
    hover: {
      x: [0, 16, -2, 16, 0],
      rotate: [0, -10, 2, -10, 0],
      transition: { duration: 0.65, repeat: Infinity, ease: "easeOut" },
    },
  },
  plavani: {
    hover: {
      x: [0, 8, -8, 0],
      transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
    },
  },
};

// splash carky u boxerske rukavice (objevi se pri uderu)
const splashAnim = {
  hover: {
    opacity: [0, 1, 0],
    scale: [0.4, 1.25, 1.4],
    transition: { duration: 0.65, repeat: Infinity, ease: "easeOut" },
  },
};

const disciplineIcons = {
  Basketbal: { Icon: BasketballIcon, anim: iconAnims.basketbal },
  Gym: { Icon: DumbbellIcon, anim: iconAnims.gym },
  Box: { Icon: GloveIcon, anim: iconAnims.box, splash: true },
  Plavání: { Icon: WavesIcon, anim: iconAnims.plavani },
};

export default function Sport() {
  // citat se pri scrollu "priblizi" (scrub efekt vazany na scrollbar)
  const quoteRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: quoteRef,
    offset: ["start 95%", "start 40%"],
  });
  const quoteScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const quoteOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  // mic se KUTALI pres celou sekci podle scrollu (scrub)
  const sectionRef = useRef(null);
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const ballX = useTransform(sectionProgress, [0, 1], ["-12vw", "104vw"]);
  const ballRotate = useTransform(sectionProgress, [0, 1], [0, 1080]);

  return (
    <section
      ref={sectionRef}
      id="disciplina"
      className="diagonal-top relative -mt-[5vw] bg-accent py-28 text-ink md:py-40"
    >
      {/* kutalejici se mic — vazany na scrollbar, jede po "care hriste" */}
      <motion.div
        aria-hidden="true"
        style={{ x: ballX, rotate: ballRotate }}
        className="pointer-events-none absolute left-0 top-[8vw] z-10 will-change-transform"
      >
        <BasketballBall
          fill="#0A0A0A"
          seam="#FF3B1F"
          className="h-10 w-10 drop-shadow-lg md:h-14 md:w-14"
        />
      </motion.div>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-head text-sm font-semibold uppercase tracking-[0.3em] text-ink/70">
            {sport.kicker}
          </span>
        </Reveal>

        {/* velky citat — scrub scale pri scrollu */}
        <motion.blockquote
          ref={quoteRef}
          style={{ scale: quoteScale, opacity: quoteOpacity, originX: 0 }}
          className="skew-head mt-6 max-w-4xl font-head text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl"
        >
          {sport.quote}
        </motion.blockquote>

        {/* ---- KARTY DISCIPLIN S ANIMOVANYMI IKONAMI ---- */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {sport.disciplines.map((d, i) => {
            const entry = disciplineIcons[d] ?? {
              Icon: BasketballIcon,
              anim: iconAnims.basketbal,
            };
            const { Icon, anim, splash } = entry;
            return (
              <Reveal key={d} delay={0.08 + i * 0.07}>
                <motion.div
                  data-cursor
                  whileHover="hover"
                  whileTap="hover"
                  className="group relative flex cursor-default flex-col items-center gap-4 border-2 border-ink/25 bg-accent p-6 transition-colors duration-150 hover:bg-ink hover:text-accent md:p-8"
                >
                  <div className="relative">
                    <motion.div variants={anim}>
                      <Icon className="h-14 w-14 md:h-16 md:w-16" />
                    </motion.div>
                    {/* splash naraz u boxu */}
                    {splash && (
                      <motion.div
                        className="absolute -right-6 -top-4 h-10 w-10"
                        initial={{ opacity: 0, scale: 0.4 }}
                        variants={splashAnim}
                        aria-hidden="true"
                      >
                        <SplashBurst className="h-full w-full" />
                      </motion.div>
                    )}
                  </div>
                  <span className="skew-head font-head text-xl font-bold uppercase tracking-tight md:text-2xl">
                    {d}
                  </span>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* horizontalni bezici pas */}
      <div className="mt-16 border-y border-ink/20 py-3">
        <Marquee
          items={["TRÉNINK", "DISCIPLÍNA", "DRIVE", "FOCUS", "REPEAT"]}
          speed="fast"
        />
      </div>
    </section>
  );
}
