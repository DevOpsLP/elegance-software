import React, { useEffect, useRef, useState } from "react";

const Services: React.FC = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Determine threshold based on screen size
    const threshold = window.innerWidth <= 768 ? 0.5 : 1; // Use 0.5 for mobile, 1 for larger screens

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="flex flex-col gap-16 md:p-8 md:mt-0 mt-24 xl:p-20 overflow-hidden">
      {/* First Section: Image Background | Text */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-16"
        ref={(el) => (sectionRefs.current[0] = el!)}
        data-index="0"
      >
        {/* Image as Background */}
        <div
          className={`lg:min-h-[700px] min-h-[500px] rounded-xl shadow-lg relative transition-transform duration-[1000ms] ease-out ${
            visibleSections.has(0) ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
          style={{
            backgroundImage: "url('assets/service.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src="assets/top-left.svg"
            alt="Cut out SVG"
            className="absolute top-0 left-0 w-4/12 h-w-4/12"
          />
        </div>

        {/* Text Content */}
        <div
          className={`flex flex-col items-start justify-start text-start p-6 overflow-hidden transition-transform duration-[1000ms] ease-out ${
            visibleSections.has(0) ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <h2 className="text-xl md:text-2xl font-light mb-4 flex gap-2 justify-center items-center">
            <span className="bg-primary-500 rounded-full flex justify-center items-center p-2">
              <img src="assets/scale-up.svg" alt="scale" className="w-6 h-6" />
            </span>
            EXPERTS
          </h2>
          <h1 className="xl:text-7xl text-5xl tracking-wide leading-tight font-normal mb-4">
            Our Team Of Experienced <span className="font-light italic">Developers</span>
          </h1>
          <p className="text-xl md:text-xl max-w-lg text-gray-600 mb-6">
            Will help you with the software development you need for your company, providing and fast and smooth experience for you and your company.
          </p>
        </div>
      </div>

      {/* Second Section: Text | Image Background */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-16"
        ref={(el) => (sectionRefs.current[1] = el!)}
        data-index="1"
      >
        {/* Text Content */}
        <div
          className={`flex flex-col items-start justify-start text-start p-6 overflow-hidden transition-transform duration-[1000ms] ease-out ${
            visibleSections.has(1) ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <h2 className="text-xl md:text-2xl font-light mb-4 flex gap-2 justify-center items-center uppercase">
            <span className="bg-primary-500 rounded-full flex justify-center items-center p-2">
              <img src="assets/clock.svg" alt="clock" className="w-6 h-6" />
            </span>
            Fast Automation
          </h2>
          <h1 className="xl:text-7xl text-5xl tracking-wide leading-tight font-normal mb-4">
            We automate, <span className="font-light italic">while your business grow.</span>
          </h1>
          <p className="text-xl md:text-xl max-w-lg text-gray-600 mb-6">
            Leverage cutting-edge technology and make your business growth with our tools.
          </p>
        </div>

        {/* Image as Background */}
        <div
          className={`lg:min-h-[700px] min-h-[500px] rounded-xl relative transition-transform duration-[1000ms] ease-out ${
            visibleSections.has(1) ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
          style={{
            backgroundImage: "url('assets/service-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src="assets/bottom.svg"
            alt="Cut out SVG"
            className="absolute bottom-0 left-0 w-1/8 h-1/8"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
