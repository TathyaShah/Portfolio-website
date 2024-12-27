import { motion } from 'framer-motion';
import { Code2, Palette } from 'lucide-react';
import { Typewriter } from './shared/Typewriter';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl lg:text-8xl xl:text-9xl font-bold mb-4 text-white"
          >
            Hi, I am
          </motion.h1>
          <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold mb-12 text-primary">
            <Typewriter text="Tathya Shah" delay={150} />
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <div className="flex items-center space-x-3">
              <Code2 className="w-10 h-10 text-primary" />
              <h2 className="text-3xl lg:text-4xl text-white">Full Stack Developer</h2>
            </div>
            <span className="hidden sm:inline text-3xl lg:text-4xl text-primary">|</span>
            <div className="flex items-center space-x-3">
              <Palette className="w-10 h-10 text-primary" />
              <h2 className="text-3xl lg:text-4xl text-white">UI/UX Designer</h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto"
          >
            Crafting beautiful, efficient, and user-centric digital experiences
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}