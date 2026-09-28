"use client";

import { MotionConfig } from "framer-motion";

// =============================================================
//  MotionProvider — globalni nastaveni animaci. reducedMotion
//  "user" znamena: kdyz ma uzivatel v systemu zapnuto "mene
//  pohybu", Framer Motion automaticky vypne transform animace.
// =============================================================
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
