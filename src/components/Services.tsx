import React from "react";
import { motion } from "framer-motion";
import { getImageUrl } from "../utils/imageUrl";

interface image {
  name: string;
  url: string;
}
interface Service {
  image1: image;
  image2: image;
  sub_header1: string;
  sub_header2: string;
  header1: string;
  header2: string;
  description1: string;
  description2: string;
}

interface ServiceProps {
  services: Service;
}
const Services: React.FC<ServiceProps> = ({ services }) => {
  return (
    <div className="flex flex-col gap-16 md:p-8 md:mt-0 mt-24 xl:p-20 overflow-hidden">
      {/* First Section: Image Background | Text */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-16"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Image as Background */}
        <motion.div
          className="lg:min-h-[700px] min-h-[500px] rounded-xl relative"
          style={{
            backgroundImage: `url('${getImageUrl(services.image1.url)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="assets/top-left.svg"
            alt="Cut out SVG"
            className="absolute top-0 left-0 w-4/12 h-w-4/12"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex flex-col items-start justify-start text-start p-6 overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-2xl mb-4 flex gap-2 justify-center items-center">
            <span className="bg-primary-500 rounded-full flex justify-center items-center p-2">
              <img src="assets/scale-up.svg" alt="scale" className="w-6 h-6" />
            </span>
            {services.sub_header1}
          </h2>
          <h1 className="xl:text-7xl text-5xl leading-tight font-normal mb-4">
            {services.header1}
          </h1>
          <p className="text-xl md:text-xl max-w-lg text-gray-600 mb-6">{services.description1}</p>
          <button className="bg-primary-500 text-white py-3 px-6 text-lg rounded-lg hover:bg-primary-600">
            Learn More
          </button>
        </motion.div>
      </motion.div>

      {/* Second Section: Text | Image Background */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-16"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Image as Background */}
        <motion.div
          className="lg:min-h-[700px] min-h-[500px] rounded-xl relative md:hidden"
          style={{
            backgroundImage: `url('${getImageUrl(services.image2.url)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="assets/bottom.svg"
            alt="Cut out SVG"
            className="absolute bottom-0 left-0 w-1/8 h-1/8 visible"
          />
        </motion.div>
        {/* Text Content */}
        <motion.div
          className="flex flex-col items-start justify-start text-start p-6 overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-2xl font-light mb-4 flex gap-2 justify-center items-center uppercase">
            <span className="bg-primary-500 rounded-full flex justify-center items-center p-2">
              <img src="assets/clock.svg" alt="clock" className="w-6 h-6" />
            </span>
            {services.sub_header2}
          </h2>
          <h1 className="xl:text-7xl text-5xl tracking-wide leading-tight font-normal mb-4">
            {services.header2}
          </h1>
          <p className="text-xl md:text-xl max-w-lg text-gray-600 mb-6">{services.description1}</p>
          <button className="bg-primary-500 text-white py-3 px-6 text-lg rounded-lg hover:bg-primary-600">
            Learn More
          </button>
        </motion.div>

        {/* Image as Background */}
        <motion.div
          className="lg:min-h-[700px] min-h-[500px] rounded-xl relative hidden md:block"
          style={{
            backgroundImage: `url('${getImageUrl(services.image2.url)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="assets/bottom.svg"
            alt="Cut out SVG"
            className="absolute bottom-0 left-0 w-1/8 h-1/8 visible"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
