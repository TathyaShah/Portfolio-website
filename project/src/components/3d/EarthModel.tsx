import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function EarthModel() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Earth */}
      <Sphere ref={earthRef} args={[1.5, 32, 32]}>
        <meshPhongMaterial
          map={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg')}
          bumpMap={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg')}
          bumpScale={0.05}
          specularMap={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg')}
          specular={new THREE.Color('#909090')}
          shininess={5}
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere args={[1.51, 32, 32]}>
        <meshPhongMaterial
          color="#6700fd"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Clouds */}
      <Sphere ref={cloudsRef} args={[1.53, 32, 32]}>
        <meshPhongMaterial
          map={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png')}
          transparent
          opacity={0.4}
        />
      </Sphere>
    </group>
  );
}