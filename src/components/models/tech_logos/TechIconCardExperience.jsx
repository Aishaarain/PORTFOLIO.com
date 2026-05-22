import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    scene.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#ffffff",
          emissive: "#00ffff",
          emissiveIntensity: 1.5,
          roughness: 0.3,
          metalness: 0.8,
        });

        // Special highlight
        if (child.name === "Object_5") {
          child.material.emissive = new THREE.Color("#ff00ff");
          child.material.emissiveIntensity = 2.5;
        }
      }
    });
  }, [scene]);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ background: "#02010a" }}
    >
      {/* NEON LIGHTING */}
      <ambientLight intensity={0.2} />

      <pointLight position={[3, 3, 3]} intensity={2} color="#00ffff" />
      <pointLight position={[-3, -3, -3]} intensity={1.5} color="#ff00ff" />

      {/* ENVIRONMENT */}
      <Environment preset="night" />

      {/* FLOATING ICON */}
      <Float speed={3} rotationIntensity={0.6} floatIntensity={0.8}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
