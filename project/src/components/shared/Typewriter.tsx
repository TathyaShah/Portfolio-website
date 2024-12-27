import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
}

export function Typewriter({ text, delay = 100, className = '' }: TypewriterProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {currentText}
      <span 
        className={`inline-block w-[3px] h-[1em] bg-primary ml-1 -mb-[2px] ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
}