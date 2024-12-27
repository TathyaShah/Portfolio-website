import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function Developer() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Head */}
      <Sphere args={[0.5]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#FFB6C1" />
      </Sphere>

      {/* Body */}
      <Box args={[1, 1.5, 0.5]} position={[0, 0.2, 0]}>
        <meshStandardMaterial color="#6700fd" />
      </Box>

      {/* Laptop */}
      <Box args={[1.2, 0.05, 0.8]} position={[0, -0.2, 0.4]} rotation={[0.3, 0, 0]}>
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </Box>
      <Box args={[1.2, 0.8, 0.05]} position={[0, 0.2, 0]} rotation={[1.5, 0, 0]}>
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </Box>

      {/* Screen Glow */}
      <Box args={[1.1, 0.7, 0.01]} position={[0, 0.2, 0.02]} rotation={[1.5, 0, 0]}>
        <meshStandardMaterial color="#6700fd" emissive="#6700fd" emissiveIntensity={0.5} />
      </Box>
    </group>
  );
}