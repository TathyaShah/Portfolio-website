import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function LaptopModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  // Using a 3D developer character model instead of laptop
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/sitting-developer/model.gltf');

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={2}
      position={[0, -1.5, 0]}
      rotation={[0.1, -0.4, 0]}
    />
  );
}