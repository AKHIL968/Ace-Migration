import React from 'react';
import worldMapImg from '../assets/Map-1024x614.png';

const GlobalPartners = () => {
    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            We're Global Partner of <br className="hidden md:block" />
                            <span className="text-gray-900">100+ Institutes</span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Discover the world of education through our extensive global network, as we proudly stand as a trusted partner of 100+ educational institutes. Unlock a multitude of academic opportunities and access top-notch institutions around the globe.
                        </p>

                        <div className="pt-2">
                            <button className="group relative px-8 py-3.5 bg-orange-500 text-white font-bold rounded overflow-hidden shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2 text-sm md:text-base uppercase tracking-wider">
                                    More
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </button>
                        </div>
                    </div>

                    {/* Right Image - World Map */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-2xl">
                            {/* Abstract decorative circle behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-gray-50 to-transparent opacity-50 -z-10"></div>

                            <img
                                src={worldMapImg}
                                alt="Global Partners World Map"
                                className="w-full h-auto object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-700"
                            />

                            {/* Floating animated markers (simulated with CSS if not part of image, but image has them. We can add pulsing effects on top if we knew exact coordinates, but for now the image is sufficient as it is high quality) */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GlobalPartners;
