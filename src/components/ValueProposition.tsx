import React from 'react';
import { motion } from 'framer-motion';

const ValueProposition: React.FC = () => {
    return (
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold uppercase text-gray-900">Why Choose Elegant Software?</h2>
                    <p className="text-xl font-light text-gray-700 mt-4">
                        From automating tasks to optimizing growth, we build software that scales seamlessly.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-24 gap-10">
                    {/* Feature 1 */}
                    <motion.div
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <img src="assets/powerful.svg" alt="Powerful Yet Elegant" className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-semibold text-gray-900">Powerful Yet Elegant</h3>
                        <p className="text-gray-700 mt-2">
                            Harness cutting-edge technology while keeping interfaces intuitive and user-friendly.
                        </p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                    >
                        <img src="assets/secure.svg" alt="Secure Yet Easy" className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-semibold text-gray-900">Secure Yet Easy</h3>
                        <p className="text-gray-700 mt-2">
                            We prioritize security without compromising the ease of use for end users.
                        </p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <img src="assets/complex.svg" alt="Complex Yet Seamless" className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-semibold text-gray-900">Complex Yet Seamless</h3>
                        <p className="text-gray-700 mt-2">
                            Manage complexity under the hood while keeping workflows seamless and smooth.
                        </p>
                    </motion.div>

                    {/* Feature 4 */}
                    <motion.div
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <img src="assets/scalable.svg" alt="Scalable for Growth" className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-semibold text-gray-900">Scalable for Growth</h3>
                        <p className="text-gray-700 mt-2">
                            Solutions designed to grow with your business and handle millions of users.
                        </p>
                    </motion.div>
                </div>

                <motion.div
    className="text-center mt-16 relative z-10"
    initial={{ opacity: 0, scale: 0.5, y: 50 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    whileHover={{ scale: 1.1 }}
    viewport={{ once: true }} // Ensures animation triggers only once
    transition={{ duration: 0.4, ease: "easeOut" }}
>
    <button className="bg-primary-500 text-white py-4 px-8 text-lg rounded-lg hover:bg-primary-600 shadow-lg hover:shadow-xl transition-all duration-300">
        Explore Our Services
    </button>
</motion.div>


            </div>
    );
};

export default ValueProposition;
