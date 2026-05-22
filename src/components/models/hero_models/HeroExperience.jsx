

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 15], fov: 45 }}
    >
      {/* Dark base background */}
      <color attach="background" args={["#0a0a0f"]} />

      {/* Subtle ambient to avoid full darkness */}
      <ambientLight intensity={0.3} />

      {/* Neon key lights */}
      <pointLight
        position={[5, 5, 5]}
        intensity={2}
        color="#00f5ff"
      />
      <pointLight
        position={[-5, -3, 3]}
        intensity={1.6}
        color="#ff2fdc"
      />
      <pointLight
        position={[0, 6, -6]}
        intensity={1.2}
        color="#7c3aed"
      />

      {/* Camera controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        minDistance={6}
        maxDistance={20}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Neon glow post-processing */}
      <EffectComposer>
        <Bloom
          intensity={1.3}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>

      <Suspense fallback={null}>
        {/* Extra stylized lights */}
        <HeroLights />

        {/* Neon particles */}
        <Particles count={isMobile ? 60 : 120} />

        {/* Main 3D scene */}
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
