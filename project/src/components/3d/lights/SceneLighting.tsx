import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function SceneLighting() {
  const pointLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (pointLightRef.current) {
      pointLightRef.current.intensity = 1 + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight ref={pointLightRef} position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#6700fd" />
    </>
  );
}