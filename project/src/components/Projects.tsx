import React from 'react';
import { ProjectCard } from './projects/ProjectCard';
import { projects } from './projects/projectsData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My <span className="text-primary">Projects</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}