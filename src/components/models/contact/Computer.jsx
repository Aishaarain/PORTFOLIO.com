

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export function Computer(props) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  );

  // Apply neon emissive glow
  const neonColors = ["#8a79ff", "#ff2fdc", "#7c3aed"];

Object.values(materials).forEach((material, i) => {
  material.emissive.set(neonColors[i % neonColors.length]);
  material.emissiveIntensity = 1.3;
  material.toneMapped = false;
});


  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
