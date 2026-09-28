import { brand } from "@/lib/content";

// =============================================================
//  FOOTER — minimalisticka paticka.
// =============================================================
export default function Footer() {
  return (
    <footer className="border-t border-paper/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <span className="skew-head font-head text-xl font-bold uppercase tracking-tight text-paper">
          {brand.name}
        </span>
        <span className="font-body text-sm text-smoke">
          © {brand.name} 2026 — {brand.fullName}
        </span>
      </div>
      {/* povinna atribuce 3D modelu (licence CC-BY-4.0) */}
      <p className="mx-auto mt-4 max-w-7xl text-center font-body text-xs text-paper/30 md:text-left">
        3D míč:{" "}
        <a
          href="https://sketchfab.com/3d-models/basketball-eb172b5f4e544f428c2bcd8d3f067a91"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-paper/60"
        >
          „Basketball"
        </a>{" "}
        od{" "}
        <a
          href="https://sketchfab.com/ikagogava"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-paper/60"
        >
          24fpsboy
        </a>
        , licence CC-BY-4.0
      </p>
    </footer>
  );
}
