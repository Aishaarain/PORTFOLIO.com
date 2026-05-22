import React, { useRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Room(props) {
  const { nodes } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();

  const matcapTexture = useTexture("/images/textures/mat1.png");

  /* ---------- NEON MATERIALS ---------- */

  const curtainMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ff005d",
        emissive: "#ff005d",
        emissiveIntensity: 0.4,
      }),
    []
  );

  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: matcapTexture,
        emissive: "#7f5cff",
        emissiveIntensity: 0.2,
      }),
    [matcapTexture]
  );

  const tableMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#140021",
        emissive: "#3c096c",
        emissiveIntensity: 0.3,
      }),
    []
  );

  const neonWhite = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ffffff",
        emissive: "#00ffff",
        emissiveIntensity: 0.4,
      }),
    []
  );

  const pillowMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ff00ff",
        emissive: "#ff00ff",
        emissiveIntensity: 0.6,
      }),
    []
  );

  const chairMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#050505",
        emissive: "#00ffff",
        emissiveIntensity: 0.15,
      }),
    []
  );

  const screenMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#000000",
        emissive: "#00ffff",
        emissiveIntensity: 3,
        toneMapped: false,
      }),
    []
  );

  return (
    <group {...props} dispose={null}>
      {/* ---------- BLOOM FOR NEON ---------- */}
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={2.5}
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>

      {/* ---------- MESHES ---------- */}
      <mesh geometry={nodes._________6_blinn1_0.geometry} material={curtainMaterial} />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={nodes.chair_body_blinn1_0.geometry} material={chairMaterial} />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={neonWhite} />

      {/* NEON SCREEN */}
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={screenMaterial}
      />

      {/* REUSE NEON WHITE FOR SMALL OBJECTS */}
      <mesh geometry={nodes.keyboard_blinn1_0.geometry} material={neonWhite} />
      <mesh geometry={nodes.miuse_blinn1_0.geometry} material={neonWhite} />
      <mesh geometry={nodes.monitor2_blinn1_0.geometry} material={neonWhite} />
      <mesh geometry={nodes.monitor3_blinn1_0.geometry} material={neonWhite} />
      <mesh geometry={nodes.pillows_blinn1_0.geometry} material={pillowMaterial} />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={nodes.window_blinn1_0.geometry} material={neonWhite} />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");
