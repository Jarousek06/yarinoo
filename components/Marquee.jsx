"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

// =============================================================
//  Marquee — KINETICKY bezici pas. Neposouva se konstantne:
//  reaguje na rychlost scrollu (cim rychleji scrollujes, tim
//  rychleji jede; pri scrollu nahoru se otoci smer). Stejny
//  efekt pouzivaji awwwards weby — pusobi to zive a filmove.
//  Pri reduced-motion jede pomalu a rovnomerne.
// =============================================================

// pomocna funkce: drzi hodnotu v rozsahu min..max (nekonecna smycka)
const wrap = (min, max, v) =>
  min + ((((v - min) % (max - min)) + (max - min)) % (max - min));

export default function Marquee({ items, className = "", speed = "normal" }) {
  const reduced = useReducedMotion();
  const baseVelocity = speed === "fast" ? 6 : 3.5; // % za sekundu

  const baseX = useMotionValue(0);

  // rychlost scrollu -> faktor zrychleni pasu
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4], {
    clamp: false,
  });

  // smer pasu: 1 = doleva, otoci se podle smeru scrollu
  const directionRef = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionRef.current * baseVelocity * (delta / 1000);

    if (!reduced) {
      const vf = velocityFactor.get();
      // pri scrollu nahoru pas couva, pri scrollu dolu zrychli
      if (vf < 0) directionRef.current = -1;
      else if (vf > 0) directionRef.current = 1;
      moveBy += directionRef.current * Math.abs(vf) * (delta / 1000) * baseVelocity;
    }

    baseX.set(baseX.get() + moveBy);
  });

  // obsah je 4x za sebou, posun wrapujeme mezi -25 % a 0 %
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, -v)}%`);
  const list = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <motion.div
        style={{ x }}
        className="flex shrink-0 items-center gap-8 pr-8 will-change-transform"
      >
        {list.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="skew-head whitespace-nowrap font-head text-lg font-semibold uppercase tracking-wide">
              {item}
            </span>
            {/* oddelovaci tecka v akcentni barve */}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
