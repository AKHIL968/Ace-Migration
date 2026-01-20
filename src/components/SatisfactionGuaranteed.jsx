import React from 'react';
import studentsImg from '../assets/students_group 1.png';
import bgImg from '../assets/satisfaction_bg.png';

const SatisfactionGuaranteed = () => {
    return (
        <section className="relative w-full py-20 overflow-hidden bg-gray-900 font-sans">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-40 blur-[2px]"
                />
                {/* Dark gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side: Students Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="relative group perspective-1000">
                            {/* Decorative glow behind */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-500/30 blur-[100px] rounded-full"></div>

                            <img
                                src={studentsImg}
                                alt="Happy Students"
                                className="relative z-10 w-full max-w-xl object-contain drop-shadow-2xl transition-transform duration-700 ease-out hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2 text-white space-y-8 order-1 lg:order-2">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                Satisfaction Guaranteed
                            </h2>

                            <div className="w-20 h-1 bg-orange-500 rounded mb-6"></div>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                With a client-centric approach, we have grown to be a successful and reputed consultants with expertise in various migration services thereby ensuring best service and results for our clients.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Team of Qualified Registered Migration Agents",
                                "PIER Qualified Education Counselors",
                                "Extensive experience of complex visa cases",
                                "Professional services at affordable prices",
                                "Virtual Consultations (Your Time, Your Place)"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-4 group cursor-default">
                                    <div className="flex-shrink-0 w-6 h-6 border border-white/20 rounded bg-white/5 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                                        <svg className="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {/* Checkmark always visible alternative if preferred, but let's do hover effect for 'impressive' */}
                                        <svg className="w-3.5 h-3.5 text-orange-500 absolute group-hover:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-200 text-[17px] group-hover:text-white group-hover:translate-x-1 transition-all duration-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Flags */}
                        <div className="flex items-center gap-6 py-2">
                            {/* Using FlagCDN for high quality flags */}
                            <img src="https://flagcdn.com/w80/au.png" alt="Australia" title="Australia" className="h-10 w-auto rounded shadow-lg hover:-translate-y-1 hover:shadow-orange-500/20 transition-all duration-300 ring-2 ring-white/10 hover:ring-orange-500/50" />
                            <img src="https://flagcdn.com/w80/ca.png" alt="Canada" title="Canada" className="h-10 w-auto rounded shadow-lg hover:-translate-y-1 hover:shadow-orange-500/20 transition-all duration-300 ring-2 ring-white/10 hover:ring-orange-500/50" />
                            <img src="https://flagcdn.com/w80/gb.png" alt="United Kingdom" title="United Kingdom" className="h-10 w-auto rounded shadow-lg hover:-translate-y-1 hover:shadow-orange-500/20 transition-all duration-300 ring-2 ring-white/10 hover:ring-orange-500/50" />
                        </div>

                        {/* Button */}
                        <div className="pt-4">
                            <button className="group relative px-8 py-3.5 bg-orange-500 text-white font-bold rounded overflow-hidden shadow-lg shadow-orange-900/20 transition-all hover:shadow-orange-500/40">
                                <span className="relative z-10 flex items-center gap-2">
                                    APPLY NOW
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SatisfactionGuaranteed;
