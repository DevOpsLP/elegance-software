import React, { useEffect, useRef, useState } from "react";

interface ImageCard {
  imageUrl: string;
  title: string;
  description: string;
}

const Products: React.FC = () => {
  const numbers = [
    { number: "40K", caption: "Task automated" },
    { number: "+10", caption: "Clients" },
    { number: "20", caption: "Projects completed" },
    { number: "30", caption: "Business managed" },
  ];

  const imageCards: ImageCard[] = [
    { imageUrl: "assets/hero-image.jpg", title: "EAZIBOT", description: "Focused on automation of complex tasks for your company" },
    { imageUrl: "assets/hero-image.jpg", title: "ScheduleX", description: "Focused on automation of complex tasks for your company" },
    { imageUrl: "assets/hero-image.jpg", title: "DocHive", description: "Focused on automation of complex tasks for your company" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [headingVisible, setHeadingVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Determine threshold for mobile vs desktop
    const threshold = window.innerWidth <= 768 ? 0.5 : 0.8;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.hasAttribute("data-index")) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          }

          if (entry.target.getAttribute("data-heading") === "heading" && entry.isIntersecting) {
            setHeadingVisible(true);
          }

          if (entry.target.getAttribute("data-card-index") && entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-card-index") || "0", 10);
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold }
    );

    const items = containerRef.current?.querySelectorAll(
      ".grid-item, [data-heading], [data-card-index]"
    ) || [];
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 lg:px-32 md:px-10 px-6">
      {/* Numbers Section */}
      <div className="grid grid-cols-2 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 gap-12 lg:gap-32 mb-52">
        {numbers.map((item, index) => (
          <div
            key={index}
            data-index={index}
            className="grid-item flex flex-col items-center justify-center text-center"
          >
            <div
              className={`number-rotate ${
                visibleItems.has(index) ? "rotate-active" : ""
              }`}
            >
              {item.number}
            </div>
            <div className="text-3xl text-slate-300">{item.caption}</div>
          </div>
        ))}
      </div>

      {/* Heading Section */}
      <div
        data-heading="heading"
        className={`flex justify-between items-end mb-12 transition-all duration-700 transform ${
          headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl font-light tracking-wide">Know about our products</h1>
        <h2 className="text-xl tracking-wider font-light">Learn about the best products for your business</h2>
      </div>

      {/* Border Animation */}
      <div
        className={`border mb-24 border-b-2 border-white w-full mx-auto transition-all duration-700 ${
          headingVisible ? "scale-x-100" : "scale-x-0"
        } origin-center`}
      ></div>

      {/* Cards Section */}
      <div className="mt-6 grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-cols-row-3 gap-6">
        {imageCards.map((card, index) => (
          <div
            key={index}
            data-card-index={index}
            className={`flex flex-col justify-center group transition-all duration-700 transform ${
              visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className="w-full h-[500px] rounded-3xl bg-cover bg-center relative block"
              style={{
                backgroundImage: `url('${card.imageUrl}')`,
              }}
            >
              <div className="p-2 group-hover:bg-black transition-colors bg-primary-500 absolute top-10 right-10 rounded-full">
                <img src="assets/arrow.svg" alt="Arrow" className="w-6 h-6" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-2xl">{card.title}</h2>
              <button className="p-3 bg-primary-500 rounded-3xl transform transition hover:scale-105">
                LEARN MORE
              </button>
            </div>
            <div className="border-b-2 border border-slate-200 w-full mt-4"></div>
            <p className="text-slate-300 mt-4">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
