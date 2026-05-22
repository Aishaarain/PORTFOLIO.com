

import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* Neon key light (cyan) */}
    <spotLight
      position={[3, 6, 6]}
      angle={0.25}
      penumbra={0.6}
      intensity={60}
      color="#00f5ff"
      castShadow
    />

    {/* Neon fill light (pink) */}
    <spotLight
      position={[-4, 5, 4]}
      angle={0.35}
      penumbra={0.8}
      intensity={45}
      color="#ff2fdc"
    />

    {/* Neon rim light (purple) */}
    <spotLight
      position={[0, 6, -6]}
      angle={0.4}
      penumbra={1}
      intensity={50}
      color="#7c3aed"
    />

    {/* Rect area neon light (soft glow wash) */}
    <primitive
      object={new THREE.RectAreaLight("#00f5ff", 6, 4, 3)}
      position={[1.5, 3.5, 3]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
    />

    {/* Atmospheric neon accents */}
    <pointLight
      position={[0, 1.5, 0]}
      intensity={12}
      color="#00f5ff"
    />
    <pointLight
      position={[2, 2, -3]}
      intensity={10}
      color="#ff2fdc"
    />
  </>
);

export default HeroLights;

