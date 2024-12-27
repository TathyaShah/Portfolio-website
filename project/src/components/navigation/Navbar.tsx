import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from './NavLink';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className={`max-w-5xl mx-auto transition-all duration-300 ${
        isScrolled ? 'bg-[#1A1A1A]/90' : 'bg-[#1A1A1A]/70'
      } backdrop-blur-md rounded-full px-6 py-2`}>
        <div className="flex items-center justify-center h-12">
          <div className="hidden md:flex items-center justify-center space-x-12">
            <NavLink href="#about" onClick={(e) => scrollToSection(e, 'about')}>
              About Me
            </NavLink>
            <NavLink href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>
              Experience
            </NavLink>
            <NavLink href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
              Projects
            </NavLink>
            <NavLink href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}