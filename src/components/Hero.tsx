import React from 'react';
import HeroCard from './HeroCard';
import HeroImage from './HeroImage';

const Hero: React.FC = () => {
    return (
        <div className="w-full md:mb-24 lg:mb-0">
            <div className="md:flex md:flex-row flex-col gap-x-10">
                {/* Left Side - Data */}
                <div className="md:w-1/2 w-full flex flex-col md:items-start items-center justify-center relative slide-from-right">
                    {/* Main Heading */}
                    <div className='flex items-center gap-x-3 my-4'>
                        <img src="assets/code.svg" alt="Code elegant software" className='w-12 h-12' />
                        <h1 className='text-2xl font-light font-mono'>Software development</h1>
                    </div>
                    <h1 className="lg:text-hero text-7xl font-bold uppercase">Automate</h1>
                    <h1 className="lg:text-hero text-7xl font-bold uppercase">Optimize</h1>
                    <h1 className="lg:text-hero text-7xl font-light italic uppercase">Grow</h1>

                    {/* Dividing Line */}
                    <div className="border-b-8 border-primary-500 my-4 lg:w-2/5 md:w-64 w-52 -translate-y-8 transform -rotate-3 lg:-translate-y-10 md:-translate-y-10"></div>
                    <p className="md:max-w-lg max-w-sm text-2xl font-light">
                        Get paid by listeners, <span className='font-normal italic'>every month</span>, predictably.<span className='font-normal italic'> No CPMs</span>, and <span className='font-normal italic'>no scheduling</span> required.
                    </p>

                    {/* Cards */}
                    <div className="flex flex-col md:flex-row gap-6 mt-8">
                        <HeroCard />
                        {/* Card 2 */}
                        <button className="bg-black text-white p-6 h-24 md:h-24 lg:h-32 rounded-2xl flex flex-col md:w-44 lg:w-64 justify-center items-center">
                            <h3 className="text-2xl font-bold text-center">GET IN TOUCH</h3>
                        </button>
                    </div>
                </div>

               <HeroImage />

            </div>
        </div>
    );
};

export default Hero;
