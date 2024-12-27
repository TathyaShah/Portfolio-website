import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Library, Wrench, Laptop } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg border border-[#2A2A2A]"
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-6 h-6 text-primary" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-300">{item}</li>
      ))}
    </ul>
  </motion.div>
);

export default function Skills() {
  const skills = {
    languages: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
    frameworks: ['Tailwind CSS', 'ReactJS', 'Express.js', 'Flask'],
    tools: ['MongoDB', 'Node.js', 'Git', 'GitHub'],
    software: ['Figma', 'VS Code', 'Postman']
  };

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Technical <span className="text-primary">Skills</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <SkillCard icon={Code2} title="Languages" items={skills.languages} />
          <SkillCard icon={Library} title="Frameworks" items={skills.frameworks} />
          <SkillCard icon={Wrench} title="Tools" items={skills.tools} />
          <SkillCard icon={Laptop} title="Software" items={skills.software} />
        </div>
      </div>
    </section>
  );
}