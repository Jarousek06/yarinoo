"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  PresentationControls,
  ContactShadows,
  useGLTF,
} from "@react-three/drei";

// =============================================================
//  Basketball3D — skutecny naskenovany 3D model basketbaloveho
//  mice (GLTF, Draco komprese, 827 kB, lazy-loaded).
//
//  Model: "Basketball" by 24fpsboy
//  https://sketchfab.com/3d-models/basketball-eb172b5f4e544f428c2bcd8d3f067a91
//  Licence: CC-BY-4.0 — autor uveden i v paticce webu.
//
//  Mic se sam otaci, vznasi se (Float) a jde chytit mysi
//  a roztocit (PresentationControls).
// =============================================================

const MODEL_URL = "/models/basketball.glb";

function Ball() {
  const ref = useRef(null);
  const { scene } = useGLTF(MODEL_URL);

  // pomale samovolne otaceni (delta = plynule pri jakemkoliv FPS)
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.3;
  });

  return (
    // scale: model ma polomer ~1.61, chceme ~1
    <group ref={ref} scale={0.62} rotation={[0.25, 0, -0.1]}>
      <primitive object={scene} />
    </group>
  );
}

// model se zacne stahovat hned, ne az pri prvnim vykresleni
useGLTF.preload(MODEL_URL);

// vykresli se az po nacteni modelu (uvnitr Suspense) -> spusti fade-in
function LoadedSignal({ onLoad }) {
  useEffect(() => {
    onLoad();
  }, [onLoad]);
  return null;
}

export default function Basketball3D({ className = "" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      data-cursor
      // jemny fade-in: mic se objevi plynule, az kdyz je stazeny
      className={`transition-opacity duration-1000 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 3.4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ touchAction: "pan-y" }}
      >
        {/* editorial nasviceni: tvrde klicove svetlo, studeny fill
            zezadu a oranzovy odlesk zespodu */}
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 4, 4]} intensity={2.4} />
        <directionalLight position={[-5, -1, -4]} intensity={0.7} color="#8899ff" />
        <pointLight position={[-3, -2, 2]} intensity={0.5} color="#FF3B1F" />

        {/* dokud se model stahuje, nevykresluje se nic */}
        <Suspense fallback={null}>
          <LoadedSignal onLoad={() => setLoaded(true)} />
          {/* chytni a roztoc; jinak se vznasi a otaci sam */}
          <PresentationControls
            global={false}
            cursor={false}
            snap
            speed={1.6}
            polar={[-0.4, 0.4]}
          >
            <Float speed={2.2} rotationIntensity={0.12} floatIntensity={0.7}>
              <Ball />
            </Float>
          </PresentationControls>

          {/* mekky stin pod micem */}
          <ContactShadows
            position={[0, -1.45, 0]}
            opacity={0.55}
            scale={4}
            blur={2.4}
            far={2.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
