import React from 'react';
import { motion } from 'framer-motion';

interface ValuePropositionProps {
    title: string;
    sub_title: string;
    header1: string;
    header2: string;
    header3: string;
    header4: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    svg1: svg;
    svg2: svg;
    svg3: svg;
    svg4: svg;
}

interface svg{
    name: string;
    url: string,
}

interface Props {
    valueProposition: ValuePropositionProps;
}

const ValueProposition: React.FC<Props> = ({ valueProposition }) => {
    return (
            <div className="max-w-7xl mx-auto pb-12">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold uppercase text-gray-900">{valueProposition.title}</h2>
                    <p className="text-xl font-light text-gray-700 mt-4">{valueProposition.sub_title}</p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-10">
                    {/* Feature 1 */}
                    <motion.div
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <img src={`${import.meta.env.STRAPI_URL}${valueProposition.svg1.url}`} alt="Powerful Yet Elegant" className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-semibold text-gray-900">{valueProposition.header1}</h3>
                        <p className="text-gray-700 mt-2">{valueProposition.description1}</p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                    >
                        <img src={`${import.meta.env.STRAPI_URL}${valueProposition.svg2.url}`} alt="Secure Yet Easy" className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-semibold text-gray-900">{valueProposition.header2}</h3>
                        <p className="text-gray-700 mt-2">{valueProposition.description2}</p>

                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <img src={`${import.meta.env.STRAPI_URL}${valueProposition.svg3.url}`} alt="Complex Yet Seamless" className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-semibold text-gray-900">{valueProposition.header3}</h3>
                        <p className="text-gray-700 mt-2">{valueProposition.description3}</p>

                    </motion.div>

                    {/* Feature 4 */}
                    <motion.div
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <img src={`${import.meta.env.STRAPI_URL}${valueProposition.svg4.url}`} alt="Scalable for Growth" className="w-16 h-16 mb-4 transform hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-semibold text-gray-900">{valueProposition.header4}</h3>
                        <p className="text-gray-700 mt-2">{valueProposition.description4}</p>

                    </motion.div>
                </div>


            </div>
    );
};

export default ValueProposition;
