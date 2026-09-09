"use client";

import { useRef, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group, Mesh } from "three";

function Banner({
  position,
  color = "#8f2433",
  sway = 0.4,
  reducedMotion,
}: {
  position: [number, number, number];
  color?: string;
  sway?: number;
  reducedMotion: boolean;
}) {
  const ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (reducedMotion || !ref.current) return;
    ref.current.rotation.z = Math.sin(clock.getElapsedTime() * sway) * 0.06;
  });

  return (
    <group position={position}>
      <mesh position={[0, 1.4, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 3.2, 8]} />
        <meshStandardMaterial color="#3a342e" metalness={0.4} roughness={0.55} />
      </mesh>
      <mesh ref={ref} position={[0.35, 0.55, 0]}>
        <planeGeometry args={[0.9, 1.6]} />
        <meshStandardMaterial
          color={color}
          roughness={0.85}
          metalness={0.05}
          side={2}
        />
      </mesh>
      <mesh position={[0.35, 1.25, 0.02]}>
        <circleGeometry args={[0.12, 16]} />
        <meshStandardMaterial color="#c4a574" emissive="#6a4a20" emissiveIntensity={0.25} />
      </mesh>
    </group>
  );
}

function Pillar({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.35, 0.42, 3.4, 6]} />
        <meshStandardMaterial color="#2a2420" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh position={[0, 1.55, 0]}>
        <boxGeometry args={[0.9, 0.2, 0.9]} />
        <meshStandardMaterial color="#3a322c" roughness={0.85} />
      </mesh>
    </group>
  );
}

function BladeMesh({
  position,
  rotation,
  length,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  length: number;
  color: string;
  scale?: number;
}) {
  const w = 0.042 * scale;
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh position={[0, length / 2, 0]}>
        <boxGeometry args={[w, length, 0.016]} />
        <meshStandardMaterial
          color={color}
          metalness={0.94}
          roughness={0.18}
          emissive="#5c1520"
          emissiveIntensity={0.1}
        />
      </mesh>
      {/* tip */}
      <mesh position={[0, length + 0.05, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.048, 0.048, 0.016]} />
        <meshStandardMaterial color="#c4a574" metalness={0.96} roughness={0.15} />
      </mesh>
      {/* guard */}
      <mesh position={[0, 0.015, 0]}>
        <boxGeometry args={[0.15, 0.032, 0.038]} />
        <meshStandardMaterial color="#3a322c" metalness={0.65} roughness={0.35} />
      </mesh>
      {/* grip */}
      <mesh position={[0, -0.11, 0]}>
        <cylinderGeometry args={[0.02, 0.023, 0.2, 8]} />
        <meshStandardMaterial color="#1a1612" roughness={0.72} />
      </mesh>
      {/* pommel */}
      <mesh position={[0, -0.22, 0]}>
        <sphereGeometry args={[0.028, 8, 8]} />
        <meshStandardMaterial color="#c4a574" metalness={0.9} roughness={0.25} />
      </mesh>
    </group>
  );
}

/** Seat mass built from stacked / angled blades — not a plain box. */
function ForgedSeat({ glowRef }: { glowRef: RefObject<Mesh | null> }) {
  const seatSteel = "#1a1612";
  const seatWarm = "#2a1a18";

  return (
    <group position={[0, -0.35, 0.08]}>
      {/* Lower dais step */}
      <mesh position={[0, -0.42, 0.1]} receiveShadow>
        <boxGeometry args={[1.7, 0.14, 1.35]} />
        <meshStandardMaterial color="#12100e" metalness={0.35} roughness={0.7} />
      </mesh>
      <mesh position={[0, -0.28, 0.08]}>
        <boxGeometry args={[1.45, 0.12, 1.15]} />
        <meshStandardMaterial color="#1a1612" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Core seat — dark forge block with warm face */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[1.2, 0.38, 0.95]} />
        <meshStandardMaterial color={seatSteel} metalness={0.55} roughness={0.42} />
      </mesh>
      <mesh ref={glowRef} position={[0, 0.12, 0.05]}>
        <boxGeometry args={[1.05, 0.08, 0.78]} />
        <meshStandardMaterial
          color={seatWarm}
          emissive="#8f2433"
          emissiveIntensity={0.45}
          metalness={0.35}
          roughness={0.55}
        />
      </mesh>

      {/* Horizontal blades fused into the seat surface */}
      {(
        [
          [-0.35, 0.14, 0.15, 0, 0, 1.35, 0.55],
          [0.1, 0.16, 0.05, 0, 0.15, 1.45, 0.5],
          [0.38, 0.13, 0.2, 0, -0.2, 1.25, 0.55],
          [-0.15, 0.1, -0.15, 0.1, 0.4, 1.1, 0.45],
          [0.25, 0.11, -0.2, -0.05, -0.35, 1.05, 0.45],
        ] as const
      ).map(([x, y, z, rx, rz, len, sc], i) => (
        <BladeMesh
          key={`seat-h-${i}`}
          position={[x, y, z]}
          rotation={[rx, 0, rz + Math.PI / 2]}
          length={len}
          color={i % 2 === 0 ? "#6e5b45" : "#7a8088"}
          scale={sc}
        />
      ))}

      {/* Vertical stubs rising from the seat (pommels & broken tips) */}
      {(
        [
          [-0.4, 0.2, 0.25, 0.2],
          [-0.15, 0.22, 0.3, 0.28],
          [0.12, 0.18, 0.28, 0.18],
          [0.38, 0.2, 0.22, 0.24],
          [-0.28, 0.15, -0.15, 0.22],
          [0.3, 0.16, -0.12, 0.2],
        ] as const
      ).map(([x, y, z, len], i) => (
        <BladeMesh
          key={`seat-v-${i}`}
          position={[x, y, z]}
          rotation={[0.15 + i * 0.03, 0.1 * (i % 2 === 0 ? 1 : -1), (i - 2.5) * 0.08]}
          length={len}
          color={i % 2 === 0 ? "#9aa0a8" : "#5c5348"}
          scale={0.7}
        />
      ))}
    </group>
  );
}

function BladeThrone({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<Group>(null);
  const glow = useRef<Mesh>(null);

  const blades: {
    position: [number, number, number];
    rotation: [number, number, number];
    length: number;
    color: string;
    scale?: number;
  }[] = [
    // far back haze
    { position: [-0.85, 0, -0.35], rotation: [0.12, 0.2, -0.65], length: 1.4, color: "#5a5550", scale: 0.85 },
    { position: [0.88, 0, -0.35], rotation: [0.12, -0.2, 0.68], length: 1.35, color: "#5a5550", scale: 0.85 },
    // tall fan — backrest
    { position: [-0.72, 0.05, -0.22], rotation: [0.1, 0.15, -0.55], length: 1.65, color: "#7a8088" },
    { position: [-0.55, 0.04, -0.14], rotation: [0.08, 0.1, -0.42], length: 1.85, color: "#9aa0a8" },
    { position: [-0.38, 0.02, -0.1], rotation: [0.06, 0.05, -0.3], length: 2.0, color: "#6e5b45" },
    { position: [-0.22, 0, -0.06], rotation: [0.05, 0.02, -0.16], length: 2.15, color: "#8a9099" },
    { position: [-0.08, 0, -0.03], rotation: [0.04, 0, -0.05], length: 2.28, color: "#a8a090" },
    { position: [0.06, 0, -0.02], rotation: [0.04, 0, 0.04], length: 2.32, color: "#c0b8a8" },
    { position: [0.2, 0, -0.03], rotation: [0.04, 0, 0.1], length: 2.25, color: "#a8a090" },
    { position: [0.35, 0, -0.06], rotation: [0.05, -0.02, 0.18], length: 2.1, color: "#8a9099" },
    { position: [0.5, 0.02, -0.1], rotation: [0.06, -0.05, 0.32], length: 1.95, color: "#6e5b45" },
    { position: [0.66, 0.04, -0.14], rotation: [0.08, -0.1, 0.44], length: 1.78, color: "#9aa0a8" },
    { position: [0.8, 0.05, -0.22], rotation: [0.1, -0.15, 0.58], length: 1.58, color: "#7a8088" },
    // mid tangle
    { position: [-0.48, 0.12, 0.05], rotation: [0.22, 0.18, -0.38], length: 1.4, color: "#5c5348" },
    { position: [0.48, 0.12, 0.05], rotation: [0.22, -0.18, 0.38], length: 1.42, color: "#5c5348" },
    { position: [-0.28, 0.1, 0.08], rotation: [0.28, 0.08, -0.2], length: 1.28, color: "#9aa0a8" },
    { position: [0.3, 0.1, 0.08], rotation: [0.26, -0.08, 0.22], length: 1.3, color: "#8a9099" },
    { position: [-0.05, 0.14, 0.12], rotation: [0.32, 0.02, -0.04], length: 1.15, color: "#6e5b45" },
    { position: [0.12, 0.12, 0.1], rotation: [0.3, -0.03, 0.08], length: 1.18, color: "#7a8088" },
    // armrests
    { position: [-0.82, 0.18, 0.28], rotation: [0.45, 0.35, -1.2], length: 1.05, color: "#9aa0a8" },
    { position: [-0.68, 0.22, 0.35], rotation: [0.55, 0.22, -1.0], length: 0.92, color: "#6e5b45" },
    { position: [-0.55, 0.28, 0.4], rotation: [0.65, 0.15, -0.85], length: 0.75, color: "#7a8088" },
    { position: [0.82, 0.18, 0.28], rotation: [0.45, -0.35, 1.2], length: 1.05, color: "#9aa0a8" },
    { position: [0.68, 0.22, 0.35], rotation: [0.55, -0.22, 1.0], length: 0.92, color: "#6e5b45" },
    { position: [0.55, 0.28, 0.4], rotation: [0.65, -0.15, 0.85], length: 0.75, color: "#7a8088" },
    // crossed front
    { position: [-0.3, 0.28, 0.42], rotation: [0.9, 0.12, -0.78], length: 1.12, color: "#8a9099" },
    { position: [0.32, 0.28, 0.42], rotation: [0.9, -0.12, 0.78], length: 1.12, color: "#8a9099" },
    { position: [-0.12, 0.32, 0.48], rotation: [1.0, 0.05, -0.45], length: 0.85, color: "#5c5348" },
    { position: [0.15, 0.32, 0.48], rotation: [1.0, -0.05, 0.48], length: 0.85, color: "#5c5348" },
  ];

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    if (!reducedMotion) {
      ref.current.rotation.y = Math.sin(t * 0.16) * 0.18;
      ref.current.position.y = -0.15 + Math.sin(t * 0.65) * 0.028;
    }
    if (glow.current) {
      const mat = glow.current.material;
      if (!Array.isArray(mat) && "emissiveIntensity" in mat) {
        (mat as { emissiveIntensity: number }).emissiveIntensity =
          0.4 + Math.sin(t * 1.35) * 0.28;
      }
    }
  });

  return (
    <Float speed={reducedMotion ? 0 : 0.4} rotationIntensity={0.06} floatIntensity={0.12}>
      <group ref={ref} position={[1.25, -0.15, 0.1]} scale={1.22}>
        <ForgedSeat glowRef={glow} />
        {blades.map((b, i) => (
          <BladeMesh key={i} {...b} />
        ))}
        <pointLight position={[0, 1.35, 0.55]} intensity={1.35} color="#c45c3e" distance={5.5} />
        <pointLight position={[0, 0.35, 0.9]} intensity={0.65} color="#c4a574" distance={3.2} />
        <pointLight position={[0, -0.2, 0.4]} intensity={0.4} color="#8f2433" distance={2.5} />
      </group>
    </Float>
  );
}

function Hall({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <group position={[0.6, -0.3, 0]}>
      <Pillar position={[-2.4, 0, -1]} />
      <Pillar position={[2.6, 0, -1.2]} />
      <Banner position={[-1.6, 0.2, 0.4]} color="#8f2433" sway={0.35} reducedMotion={reducedMotion} />
      <Banner position={[2.1, 0.1, 0.2]} color="#5c1520" sway={0.28} reducedMotion={reducedMotion} />
      <Banner position={[0.2, 0.3, -0.8]} color="#6e2a18" sway={0.42} reducedMotion={reducedMotion} />
      <BladeThrone reducedMotion={reducedMotion} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, 0]} receiveShadow>
        <circleGeometry args={[8, 48]} />
        <meshStandardMaterial color="#100e0c" roughness={1} />
      </mesh>
    </group>
  );
}

function HallLights({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <color attach="background" args={["#0c0a09"]} />
      <fog attach="fog" args={["#0c0a09", 5, 14]} />
      <ambientLight intensity={0.18} />
      <directionalLight position={[3, 5, 2]} intensity={0.55} color="#e8dfd0" />
      <pointLight position={[-2, 2, 3]} intensity={1.2} color="#c45c3e" distance={10} />
      <pointLight position={[2, 0.5, 2]} intensity={0.9} color="#8f2433" distance={8} />
      <Hall reducedMotion={reducedMotion} />
    </>
  );
}

export type SceneProps = {
  reducedMotion?: boolean;
};

export default function Scene({ reducedMotion = false }: SceneProps) {
  return (
    <div className="absolute inset-0 h-full w-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.4, 6.2], fov: 40 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: false }}
      >
        <HallLights reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
