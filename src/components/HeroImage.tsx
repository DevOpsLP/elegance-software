import React, { useEffect, useRef, useState } from 'react';

interface HeroImageProps{
  image_url: string;
}
const HeroImage: React.FC<HeroImageProps> = ({
  image_url
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if the screen is mobile
    const mobileMediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mobileMediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mobileMediaQuery.matches);
    };

    // Listen for resize events to update the state
    mobileMediaQuery.addEventListener('change', handleResize);

    return () => {
      mobileMediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile || !imageRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
          setIsVisible(true);
        }
      },
      {
        root: null, // Default is the viewport
        threshold: [0.4], // Trigger when 40% of the element is visible
      }
    );

    observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [isMobile]);

  return (
    <div
      ref={imageRef}
      className={`md:w-1/2 w-full relative ${
        isMobile
          ? isVisible
            ? 'slide-from-left'
            : 'hidden-slide'
          : 'slide-from-left'
      }`}
    >
      {/* Main Hero Background Image */}
      <div
        className="w-full h-[500px] md:h-full mt-12 rounded-r-3xl bg-cover bg-center relative"
        style={{
          backgroundImage: `url('${import.meta.env.STRAPI_URL}${image_url}')`,
        }}
      >
        {/* Top-left Cutout Image */}
        <img
          src="assets/top-left.svg"
          alt="Cut out SVG"
          className="absolute top-0 left-0 w-1/8 h-1/8"
        />
        <div className="absolute top-8 left-2 w-32 md:w-44 h-12 overflow-hidden ">
          <div className="infinite-scroll-container">
            <div className="infinite-scroll-text text-2xl font-light">
              Develop with experts • Automate • Grow • Optimize • Develop with experts • Automate • Grow • Optimize
            </div>
          </div>
        </div>
        {/* Bottom-left Cutout Image */}
        <img
          src="assets/bottom-left.svg"
          alt="Cut out SVG"
          className="absolute bottom-0 left-0 w-1/8 h-1/8"
        />
        {/* Bottom-right Cutout Image */}
        <img
          src="assets/bottom-right.svg"
          alt="Cut out SVG"
          className="absolute bottom-0 right-0 w-1/8 h-1/8"
        />

        {/* Arrow Link */}
        <a href="#explore" className="absolute -bottom-4 -right-4 mb-8 mr-8">
          <div className="bg-black border-black border p-2 rounded-full">
            <img
              src="assets/arrow.svg"
              alt="arrow up"
              className="w-12 h-12 transform duration-300 hover:rotate-45"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroImage;
