import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export function SplineScene() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError('Failed to load 3D scene');
    setIsLoading(false);
  };

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center text-white/80">
          {error}
        </div>
      ) : (
        <Spline 
          scene="https://draft.spline.design/b4038f67-d1ec-4ebb-b906-22f501a72f25/scene.splinecode"
          onLoad={handleLoad}
          onError={handleError}
          className="w-full h-full"
        />
      )}
    </div>
  );
}