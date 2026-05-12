"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Icosahedron, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

export default function ThreeNetwork() {
  // Generate random floating particles for the background dust
  const particlesCount = 200;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  return (
    <div className="w-full aspect-square max-w-[500px] mx-auto relative cursor-grab active:cursor-grabbing">

      {/* Background ambient glow matching your purple/blue theme */}
      <div className="absolute inset-0 bg-blue-600/10 dark:bg-purple-600/20 blur-[100px] rounded-full -z-10" />

      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#60a5fa" /> {/* Blue light */}
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#a855f7" /> {/* Purple light */}

        {/* The Node Network Mesh (Icosahedron) */}
        {/* Detail level 2 creates a complex, interconnected web of triangles */}
        <Icosahedron args={[2.5, 2]}>
          <meshStandardMaterial
            color="#8b5cf6" // Purple base
            wireframe={true}
            transparent
            opacity={0.3}
          />
        </Icosahedron>

        {/* Inner Solid Core to give it depth and hide the back-facing lines */}
        <Icosahedron args={[2.45, 2]}>
          <meshStandardMaterial color="#020202" />
        </Icosahedron>

        {/* Floating Data Particles surrounding the core */}
        <Points positions={positions}>
          <PointMaterial
            transparent
            color="#60a5fa"
            size={0.05}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>

        {/* OrbitControls handles the rotation and grabbing automatically.
          It stops spinning when the user clicks and drags.
        */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1.0}
        />
      </Canvas>
    </div>
  );
}