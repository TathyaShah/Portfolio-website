import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

export function DeveloperModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Monitor */}
      <Box args={[2, 1.2, 0.1]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#333333" />
      </Box>
      <Box args={[1.8, 1, 0.05]} position={[0, 1.5, 0.1]}>
        <meshStandardMaterial color="#6700fd" emissive="#6700fd" emissiveIntensity={0.2} />
      </Box>
      
      {/* Stand */}
      <Cylinder args={[0.1, 0.1, 0.8]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#444444" />
      </Cylinder>
      <Cylinder args={[0.3, 0.3, 0.1]} position={[0, 0.6, 0]}>
        <meshStandardMaterial color="#444444" />
      </Cylinder>

      {/* Desk */}
      <Box args={[3, 0.1, 1.5]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#222222" />
      </Box>

      {/* Developer figure */}
      <group position={[0, 0, 0.5]}>
        {/* Head */}
        <Sphere args={[0.2]} position={[0, 1.2, 0]}>
          <meshStandardMaterial color="#FFB6C1" />
        </Sphere>
        
        {/* Body */}
        <Box args={[0.4, 0.6, 0.2]} position={[0, 0.8, 0]}>
          <meshStandardMaterial color="#6700fd" />
        </Box>
        
        {/* Arms */}
        <Box args={[0.1, 0.4, 0.1]} position={[0.25, 0.9, 0]}>
          <meshStandardMaterial color="#6700fd" />
        </Box>
        <Box args={[0.1, 0.4, 0.1]} position={[-0.25, 0.9, 0]}>
          <meshStandardMaterial color="#6700fd" />
        </Box>
      </group>

      {/* Ambient light for character */}
      <pointLight position={[2, 2, 2]} intensity={0.5} color="#6700fd" />
      <pointLight position={[-2, 2, -2]} intensity={0.3} color="#ffffff" />
    </group>
  );
}