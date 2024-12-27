import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About <span className="text-primary">Me</span></h2>
          <p className="text-lg text-white mb-8">
            I am a passionate and detail-oriented developer with strong problem-solving skills and a keen interest in UI/UX design and full-stack development. I enjoy building efficient, scalable, and user-friendly digital solutions. With a solid foundation in Computer Science and Engineering and hands-on experience in real-world projects, I am committed to delivering innovative and impactful results.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/TathyaShah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transform hover:scale-110 transition-transform"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/tathya-shah-04a143271/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transform hover:scale-110 transition-transform"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://leetcode.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transform hover:scale-110 transition-transform"
            >
              <Code className="w-8 h-8" />
            </a>
          </div>

          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
            <div className="mb-4">
              <h4 className="text-xl font-medium text-white">Ahmedabad University, Ahmedabad</h4>
              <p className="text-gray-300">Bachelor of Technology (B.Tech) in Computer Science and Engineering</p>
              <p className="text-gray-300">August 2022 – May 2026</p>
              <p className="text-gray-300">CGPA: 3.17/4.00</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}