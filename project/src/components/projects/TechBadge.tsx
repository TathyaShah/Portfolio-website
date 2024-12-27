import React from 'react';
import { techColors } from './techColors';

interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span 
      className={`px-3 py-1 rounded-full text-sm ${techColors[tech]?.bg || 'bg-[#2A2A2A]'} ${techColors[tech]?.text || 'text-gray-300'}`}
    >
      {tech}
    </span>
  );
}