import React from "react";
import { Canvas } from "@react-three/fiber";

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 2, 2]} color="#ffbe53" intensity={2} distance={10} />
        <pointLight position={[-4, -2, 1]} color="#4865d6" intensity={1.5} distance={10} />
      </Canvas>
    </div>
  );
}
