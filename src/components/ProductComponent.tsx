import React, { useState } from "react";
import { motion } from "framer-motion";

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Industries" | "Use Cases">(
    "Industries"
  );

  const numbers = {
    Industries: [
      { number: "3", caption: "Healthcare Platforms" },
      { number: "2", caption: "Marketing Solutions" },
      { number: "1", caption: "Real Estate Platform" },
    ],
    "Use Cases": [
      { number: "5", caption: "Automations Delivered" },
      { number: "10M+", caption: "Transactions Processed" },
      { number: "4", caption: "Dynamic Interfaces Deployed" },
    ],
  };

  const tabs = Object.keys(numbers);

  return (
    <div className="max-w-7xl mx-auto py-16 ">

      {/* Tabs for Numbers Section */}
      <div className="flex justify-center mb-12">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "Industries" | "Use Cases")}
            className={`px-8 py-4 text-lg md:text-xl font-medium transition-colors duration-300 ${activeTab === tab
                ? "bg-primary-500 text-black"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              } ${index === 0
                ? "rounded-l-lg" // Round the left border of the first button
                : index === tabs.length - 1
                  ? "rounded-r-lg" // Round the right border of the last button
                  : "" // Middle buttons have no rounded edges
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Numbers Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        {numbers[activeTab].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="text-6xl font-bold text-primary-500">{item.number}</h2>
            <p className="text-xl text-gray-300 mt-4">{item.caption}</p>
          </motion.div>
        ))}
      </div>

      {/* Heading Section */}
      <motion.div
        className="flex justify-between items-end mb-12 transition-all duration-700 transform"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-light tracking-wide">Know about our products</h1>
        <h2 className="text-xl tracking-wider font-light text-gray-400">
          Learn about the best products for your business
        </h2>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="border mb-24 border-b-2 border-primary-500 w-full mx-auto"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      ></motion.div>

      {/* Product Cards Section */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {[
          {
            imageUrl: "assets/hero-image.jpg",
            title: "EAZIBOT",
            description: "Automates complex workflows to save time and reduce costs for businesses.",
          },
          {
            imageUrl: "assets/hero-image.jpg",
            title: "ScheduleX",
            description: "Streamlines scheduling for teams, ensuring efficiency and scalability.",
          },
          {
            imageUrl: "assets/hero-image.jpg",
            title: "DocHive",
            description: "Simplifies document management with secure and dynamic interfaces.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-center group transition-all duration-700 transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="w-full h-[400px] rounded-3xl bg-cover bg-center relative"
              style={{
                backgroundImage: `url('${card.imageUrl}')`,
              }}
            >
              <div className="p-2 group-hover:bg-black transition-colors bg-primary-500 absolute top-10 right-10 rounded-full">
                <img src="assets/arrow.svg" alt="Arrow" className="w-6 h-6" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-2xl font-medium">{card.title}</h2>
              <button className="p-3 bg-primary-500 text-black rounded-3xl transform transition hover:scale-105">
                LEARN MORE
              </button>
            </div>
            <p className="text-gray-400 mt-4">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
