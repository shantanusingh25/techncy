'use client';
import { useEffect, useRef, useState } from 'react';

export default function CursorFollower({ children }) {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Elements that trigger magnetic effect
    const magneticEls = document.querySelectorAll('.magnetic');
    magneticEls.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      magneticEls.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="relative z-0">
      {children}

      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999]
          rounded-full transition-all duration-300 ease-out
          ${isHovered ? 'w-16 h-16' : 'w-6 h-6'}
          bg-black/80 mix-blend-difference shadow-[0_0_0_1px_white]
          -translate-x-1/2 -translate-y-1/2`}
      />
    </div>
  );
}
