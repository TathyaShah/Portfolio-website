import React from 'react';
import { motion } from 'framer-motion';
import { TechBadge } from './TechBadge';
import { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export function ProjectCard({ icon: Icon, title, description, tech, link }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg border border-[#2A2A2A]"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-8 h-8 text-primary" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <TechBadge key={index} tech={item} />
        ))}
      </div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-primary hover:text-primary/80 transition-colors"
      >
        Link to the Project →
      </a>
    </motion.div>
  );
}