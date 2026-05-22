// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";

// const Particles = ({ count = 200 }) => {
//   const mesh = useRef();

//   const particles = useMemo(() => {
//     const temp = [];
//     for (let i = 0; i < count; i++) {
//       temp.push({
//         position: [
//           (Math.random() - 0.5) * 10,
//           Math.random() * 10 + 5, // higher starting point
//           (Math.random() - 0.5) * 10,
//         ],
//         speed: 0.005 + Math.random() * 0.001,
//       });
//     }
//     return temp;
//   }, [count]);

//   useFrame(() => {
//     const positions = mesh.current.geometry.attributes.position.array;
//     for (let i = 0; i < count; i++) {
//       let y = positions[i * 3 + 1];
//       y -= particles[i].speed;
//       if (y < -2) y = Math.random() * 10 + 5;
//       positions[i * 3 + 1] = y;
//     }
//     mesh.current.geometry.attributes.position.needsUpdate = true;
//   });

//   const positions = new Float32Array(count * 3);
//   particles.forEach((p, i) => {
//     positions[i * 3] = p.position[0];
//     positions[i * 3 + 1] = p.position[1];
//     positions[i * 3 + 2] = p.position[2];
//   });

//   return (
//     <points ref={mesh}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={count}
//           array={positions}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         color="#ffffff"
//         size={0.05}
//         transparent
//         opacity={0.9}
//         depthWrite={false}
//       />
//     </points>
//   );
// };

// export default Particles;


import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 200 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5,
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.004 + Math.random() * 0.002,
      });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      arr[i * 3] = p.position[0];
      arr[i * 3 + 1] = p.position[1];
      arr[i * 3 + 2] = p.position[2];
    });
    return arr;
  }, [particles, count]);

  useFrame(() => {
    if (!mesh.current) return;

    const pos = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= particles[i].speed;
      if (pos[i * 3 + 1] < -2) pos[i * 3 + 1] = Math.random() * 10 + 5;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>

      {/* NEON MATERIAL */}
      <pointsMaterial
        size={0.08}
        color="#00ffff"
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
