import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Experience & <span className="text-primary">Achievements</span></h2>
        
        <div className="max-w-4xl mx-auto grid gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg border border-[#2A2A2A]"
          >
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white">UI/UX Intern at Zidio</h3>
                <p className="text-gray-300">May 2023 – August 2023</p>
                <ul className="list-disc list-inside mt-4 text-gray-300">
                  <li>Designed intuitive and user-friendly interfaces for Zidio applications</li>
                  <li>Collaborated with the development team to enhance UI/UX elements</li>
                  <li>Conducted usability testing and created wireframes and prototypes</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg border border-[#2A2A2A]"
          >
            <div className="flex items-start gap-4">
              <Trophy className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white">Achievements</h3>
                <ul className="list-disc list-inside mt-4 text-gray-300">
                  <li>Solved 200+ problems on LeetCode</li>
                  <li>Contest rating of nearly 1375</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}