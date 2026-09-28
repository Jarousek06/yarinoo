// =============================================================
//  SPORTOVNI SVG IKONY — basketbal, boxerska rukavice, cinka,
//  vlny (plavani). Kreslene carou, barvu dedi z textu
//  (currentColor), takze funguji na tmavem i akcentnim pozadi.
// =============================================================

// ---- BASKETBALOVY MIC (vyplneny, pro animace v heru) ----
// fill/seam muzes prebarvit, kdyz je mic na akcentnim pozadi
export function BasketballBall({ className = "", fill = "#FF3B1F", seam = "#0A0A0A" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill={fill} />
      <g stroke={seam} strokeWidth="2.5" fill="none">
        <path d="M2 32h60" />
        <path d="M32 2v60" />
        <path d="M11 11c14 10 14 32 0 42" />
        <path d="M53 11c-14 10-14 32 0 42" />
      </g>
    </svg>
  );
}

// ---- BASKETBAL (obrysova verze) ----
export function BasketballIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="26" />
      <path d="M6 32h52" />
      <path d="M32 6v52" />
      <path d="M14 14c12 9 12 27 0 36" />
      <path d="M50 14c-12 9-12 27 0 36" />
    </svg>
  );
}

// ---- BOXERSKA RUKAVICE ----
export function GloveIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* pest rukavice */}
      <path d="M14 26c0-10 8-16 18-16s20 6 20 17c0 8-4 13-10 15l-1 6H23l-1-6c-5-2-8-8-8-16z" />
      {/* palec */}
      <path d="M14 26c-4 1-6 4-5 8 1 3 4 5 8 4" />
      {/* manzeta */}
      <path d="M22 54h20" />
      {/* svy */}
      <path d="M32 26v10" />
    </svg>
  );
}

// ---- CINKA (gym) ----
export function DumbbellIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {/* leve kotouce */}
      <rect x="7" y="24" width="6" height="16" rx="1" />
      <rect x="15" y="18" width="7" height="28" rx="1" />
      {/* osa */}
      <path d="M22 32h20" />
      {/* prave kotouce */}
      <rect x="42" y="18" width="7" height="28" rx="1" />
      <rect x="51" y="24" width="6" height="16" rx="1" />
    </svg>
  );
}

// ---- VLNY (plavani) ----
export function WavesIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 22c5-6 9-6 14 0s9 6 14 0 9-6 14 0 6 4 10 2" opacity="0" />
      <path d="M6 22c5-5 9-5 13 0 5 5 9 5 13 0 5-5 9-5 13 0 4 4 8 4 13 0" />
      <path d="M6 34c5-5 9-5 13 0 5 5 9 5 13 0 5-5 9-5 13 0 4 4 8 4 13 0" />
      <path d="M6 46c5-5 9-5 13 0 5 5 9 5 13 0 5-5 9-5 13 0 4 4 8 4 13 0" />
    </svg>
  );
}

// ---- SPLASH / NARAZ (carky rozlitnuti kolem uderu) ----
export function SplashBurst({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M32 6v10" />
      <path d="M52 12l-7 8" />
      <path d="M58 32H46" />
      <path d="M12 12l7 8" />
      <path d="M6 32h12" />
    </svg>
  );
}
