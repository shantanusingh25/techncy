"use client"
import { useState, useRef } from 'react';

export default function MagneticHamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    const distanceX = e.clientX - buttonCenterX;
    const distanceY = e.clientY - buttonCenterY;
    const maxMovement = 20;

    const moveX = (distanceX / rect.width) * maxMovement;
    const moveY = (distanceY / rect.height) * maxMovement;

    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-10 right-10 z-50"> {/* FAB position */}
      <button
        ref={buttonRef}
        className="relative w-20 h-20 rounded-full transition-all duration-500 flex items-center justify-center outline-none focus:outline-none border border-gray-400 group overflow-hidden shadow-xl bg-transparent"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: position.x === 0 && position.y === 0
            ? 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            : 'none',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={toggleMenu}
      >
        <div className="absolute bottom-0 left-0 right-0 h-0 bg-blue-400 group-hover:h-full transition-all duration-500 ease-out"></div>

        <div className="flex flex-col items-center justify-center space-y-2 relative z-10">
          <span
            className={`w-8 h-0.5 bg-gray-600 group-hover:bg-white transition-all duration-500 ease-in-out ${
              isOpen ? 'transform rotate-45 translate-y-2.5' : ''
            }`}
          ></span>
          <span
            className={`w-8 h-0.5 bg-gray-600 group-hover:bg-white transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`w-8 h-0.5 bg-gray-600 group-hover:bg-white transition-all duration-500 ease-in-out ${
              isOpen ? 'transform -rotate-45 -translate-y-2.5' : ''
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
}
