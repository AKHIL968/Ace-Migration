import React from 'react';
import consultationImg from '../assets/consultation.png';
import meetingImg from '../assets/meeting.png';
import teamImg from '../assets/team.png';
// import certifiedImg from '../assets/certified.png';

const WhoWeAre = () => {
    return (
        <section className="py-20 bg-white font-sans overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 mb-24">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Who we are
                        </h2>
                        <div className="w-20 h-1 bg-orange-500 rounded"></div>

                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-justify">
                            <p>
                                We are experienced migration agents and education counselors with expertise in Australian migration laws and policies. Our friendly and strategic team provides a full range of services, from helping students get into the best universities to obtaining permanent residency.
                            </p>
                            <p>
                                We have access to some of the best educational institutions in Australia. With a client-centric approach, our experienced migration agents and education counselors are dedicated to understanding your unique needs and aspirations, guiding you towards a successful future in Australia.
                            </p>
                            <p>
                                We provide all Australian immigration law services including appeals of citizenship refusals. Our ethical services aim to help you build a better future.
                            </p>
                        </div>

                        <div className="pt-4">
                            <button className="group relative px-8 py-3 bg-orange-500 text-white font-bold rounded overflow-hidden shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2">
                                    READ MORE
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </button>
                        </div>
                    </div>

                    {/* Right Images Collage */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Top large image spanning full width of the grid column */}
                            <div className="col-span-2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl group">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img src={consultationImg} alt="Visa Consultation" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>

                            {/* Bottom left image */}
                            <div className="relative h-48 md:h-56 rounded-xl overflow-hidden shadow-xl group">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img src={meetingImg} alt="Team Meeting" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>

                            {/* Bottom right image */}
                            <div className="relative h-48 md:h-56 rounded-xl overflow-hidden shadow-xl group">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img src={teamImg} alt="Professional Team" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Certified Badge Overlay - Positioned absolutely */}
                        {/* <div className="absolute top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
                            <img src={certifiedImg} alt="Certified Approved" className="w-40 h-40 md:w-48 md:h-48 drop-shadow-2xl hover:scale-110 transition-transform duration-500" />
                        </div> */}
                    </div>
                </div>

                {/* Stats / Info Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Over 10 Years Of Exceptional",
                            icon: (
                                <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            )
                        },
                        {
                            title: "5000+ Successful Student",
                            icon: (
                                <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            )
                        },
                        {
                            title: "RMA Methodical Assessment",
                            icon: (
                                <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11.536 16.464a2.5 2.5 0 11-3.536-3.536l1.722-1.721A6 6 0 0119 9z" />
                                </svg>
                            )
                        },
                        {
                            title: "PIER Qualified Educational",
                            icon: (
                                <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            )
                        }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full border border-orange-200 flex items-center justify-center mb-6 group-hover:border-orange-500 group-hover:bg-orange-500/5 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
