import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Developer } from './models/Developer';
import { SceneLighting } from './lights/SceneLighting';
import { Suspense } from 'react';

export function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <SceneLighting />
          <Developer />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}