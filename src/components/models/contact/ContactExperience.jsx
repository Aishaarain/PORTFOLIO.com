

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 7], fov: 45 }}
    >
      {/* Dark neon background */}
      <color attach="background" args={["#0a0a0f"]} />

      {/* Subtle ambient light */}
      <ambientLight intensity={0.25} />

      {/* Neon lights */}
      <pointLight
        position={[4, 6, 4]}
        intensity={2}
        color="#00f5ff" // neon cyan
      />
      <pointLight
        position={[-4, 3, 2]}
        intensity={1.6}
        color="#ff2fdc" // neon pink
      />
      <pointLight
        position={[0, 6, -5]}
        intensity={1.2}
        color="#7c3aed" // neon purple
      />

      {/* Camera controls */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Neon glow */}
      <EffectComposer>
        <Bloom
          intensity={1.2}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>

      {/* Neon floor */}
      <mesh
        receiveShadow
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial
          color="#050508"
          emissive="#00f5ff"
          emissiveIntensity={0.15}
          toneMapped={false}
        />
      </mesh>

      {/* Computer model */}
      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
