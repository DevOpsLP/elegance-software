import React, { useEffect, useRef, useState } from "react";




const Logos: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!imageRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.9 }
    );

    observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imageRef}
      className={`grid grid-cols-1 mt-32 md:mt-5 lg:mt-0 gap-x-4 w-full md:grid-cols-3 transition duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          src="assets/easy-bot.png"
          alt="Eazibot Logo"
          className="w-full max-w-[250px] h-40 object-contain"
        />
        {/* <p className="text-lg"> AI Assistant for Small Business</p> */}
      </div>
      <div className="flex flex-col items-center">
        <img
          src="assets/schedule-x.png"
          alt="SchedulX Logo"
          className="w-full max-w-[250px] h-40 object-contain"
        />
        {/* <p className="text-lg"> Your scheduling X factor platform </p> */}
      </div>
      <div className="flex flex-col items-center">
        <img
          src="assets/Dochive.png"
          alt="DocHive Logo"
          className="w-full max-w-[250px] h-40 object-contain"
        />
        {/* <p className="text-lg"> Document storage and sharing re-imagined and boosted via AI</p> */}
      </div>
    </div>
  );
};

export default Logos;
