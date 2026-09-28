"use client";

import { useEffect, useRef, useState } from "react";

// =============================================================
//  CustomCursor — mala tecka + kroužek, ktery ji dohani.
//  Zobrazuje se JEN na desktopu (mys). Na dotykovych zarizenich
//  se vubec nevykresli. Nad odkazy/tlacitky se kroužek zvetsi.
// =============================================================
export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // aktivujeme jen na sirokych obrazovkach s mysi
    const canHover = window.matchMedia("(min-width: 1024px) and (hover: hover)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!canHover.matches || reduced.matches) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor");

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // tecka jede presne s mysi
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    // kroužek plynule dohani tecku (lehci pocit)
    let raf;
    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    // zvetseni kroužku nad interaktivnimi prvky
    const onOver = (e) => {
      if (e.target.closest("a, button, [data-cursor]")) {
        ringRef.current?.classList.add("cursor-grow");
      }
    };
    const onOut = (e) => {
      if (e.target.closest("a, button, [data-cursor]")) {
        ringRef.current?.classList.remove("cursor-grow");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* kroužek */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-4 -mt-4 h-8 w-8 rounded-full border border-accent transition-[width,height,margin] duration-150 [&.cursor-grow]:-ml-7 [&.cursor-grow]:-mt-7 [&.cursor-grow]:h-14 [&.cursor-grow]:w-14"
      />
      {/* tecka */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-accent"
      />
    </>
  );
}
