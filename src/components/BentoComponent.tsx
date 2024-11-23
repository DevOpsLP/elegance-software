import React, { useEffect, useRef, useState } from "react";

const BentoLayout: React.FC = () => {
  const groupRef = useRef<HTMLDivElement>(null);
  const [visibleGroup, setVisibleGroup] = useState<boolean>(false);

  useEffect(() => {
    const getThreshold = () => (window.innerWidth < 768 ? 0.4 : 0.75);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleGroup(true);
        }
      },
      { threshold: getThreshold() }
    );

    if (groupRef.current) {
      observer.observe(groupRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={groupRef}
      className="grid grid-cols-1 gap-6 md:grid-rows-2 md:grid-cols-2 md:py-12 xl:px-32 xl:pt-32 lg:min-h-[800px] lg:mt-0 mt-20"
    >
      {/* Large Section */}
      <div
        className={`section bg-primary-500 text-white flex items-center justify-center rounded-3xl row-span-1 md:col-span-1 md:row-span-2 md:p-6 p-4 md:h-full h-[300px] relative transition-all duration-700 transform ${
          visibleGroup ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="absolute top-10 flex gap-6 items-center">
          <img
            src="assets/chart.svg"
            alt="chart"
            className="xl:w-44 xl:h-44 md:w-32 md:h-32 w-16 rotate-180"
          />
          <h1 className="xl:text-5xl md:text-3xl text-2xl font-bold top-0 max-w-sm uppercase">
            Streamline Your <span className="outline-white">Business</span>
          </h1>
        </div>
        <p className="text-2xl tracking-wide font-light px-6 absolute bottom-10">
          Automate repetitive tasks, save time, and focus on growth.
        </p>
      </div>

      {/* Small Sections */}
      <div className="grid grid-cols-2 gap-4 md:col-span-1 md:row-span-1 md:h-full h-[300px]">
        {/* First Small Section */}
        <div
          className={`section bg-white rounded-3xl p-6 flex flex-col shadow relative transition-all duration-700 delay-300 transform ${
            visibleGroup ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-xl absolute top-14 xl:left-14 left-4 font-light flex gap-2 xl:gap-4 items-center tracking-wide">
            Boost Efficiency
            <span>
              <img
                src="assets/arrow-up.svg"
                alt="arrow-up"
                className="lg:w-8 lg:h-8 md:w-4 md:h-4"
              />
            </span>
          </h2>
          <p className="text-7xl absolute bottom-10 md:left-4 lg:left-8 xl:left-14 text-center font-bold">
            80%
          </p>
        </div>

        {/* Second Small Section */}
        <div
          className={`section bg-white rounded-3xl p-6 flex flex-col relative shadow transition-all duration-700 delay-500 transform ${
            visibleGroup ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-xl tracking-wide absolute top-14 md:left-4 lg:left-14">
            Business Growth
          </h2>
          <h2 className="text-7xl font-bold uppercase absolute bottom-10 md:left-4 lg:left-14">
            2<span className="outline-black">X</span>
          </h2>
        </div>
      </div>

      {/* Medium Section */}
      <div
        className={`section bg-black text-white rounded-3xl p-6 flex flex-col items-start justify-center shadow transition-all duration-700 delay-700 transform ${
          visibleGroup ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <h2 className="md:text-6xl text-3xl font-bold outline-white mb-12 ">
          Real-Time Insights
        </h2>
        <p className="md:text-2xl font-light text-start lg:text-center tracking-wide">
          Track performance and make data-driven decisions.
        </p>
      </div>
    </div>
  );
};

export default BentoLayout;
