import React, { useState, useEffect } from 'react';

const HeroCard: React.FC = () => {
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const texts = ["Redefine efficiency", "Simple Automation", "Simple Growth"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTransitioning(false);
      }, 500); // Matches the duration of the transition
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="bg-primary-500 p-6 rounded-2xl flex flex-col md:w-52 lg:w-64 h-24 md:h-24  overflow-hidden relative text-white">
      <div className="relative w-full h-full">
        {/* Current Text */}
        <h3
          className={`absolute inset-0 flex items-center justify-center text-2xl font-light text-center transform transition-all duration-150 ease-in-out ${
            isTransitioning
              ? '-translate-y-8 opacity-0'
              : 'translate-y-0 opacity-100'
          }`}
          key={activeTextIndex}
        >
          {texts[activeTextIndex]}
        </h3>

        {/* Next Text */}
        <h3
          className={`absolute inset-0 flex items-center justify-center text-2xl font-light text-center transform transition-all duration-150 ease-in-out ${
            isTransitioning
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
          key={activeTextIndex + 1}
        >
          {texts[(activeTextIndex + 1) % texts.length]}
        </h3>
      </div>
    </div>
  );
};

export default HeroCard;
