import React from 'react';
import consultationImg from '../assets/consultation.png';
import meetingImg from '../assets/meeting.png';
import teamImg from '../assets/team.png';

const stats = [
    {
        id: "01",
        number: "10+",
        label: "Years Excellence",
        detail: "Exceptional service since 2014",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: "02",
        number: "5k+",
        label: "Global Reach",
        detail: "Successful student placements",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
        )
    },
    {
        id: "03",
        number: "RMA",
        label: "Methodical",
        detail: "MARA Registered Migration Agents",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        id: "04",
        number: "PIER",
        label: "Qualified",
        detail: "Expert Educational Advisors",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        )
    }
];

const WhoWeAre = () => {
    return (
        <section className="relative py-28 bg-white font-sans overflow-hidden">
            {/* Background Branding Pillar */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gray-50/50 hidden xxl:flex flex-col items-center justify-between py-12 pointer-events-none select-none border-r border-gray-100">
                <span className="text-gray-200 text-sm font-black rotate-180 uppercase tracking-[0.5em] [writing-mode:vertical-lr]">Since 2014</span>
                <div className="w-[1px] h-32 bg-orange-500/30"></div>
                <span className="text-gray-200 text-sm font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr]">Ace Immigration</span>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24">

                    {/* Artistic Mosaic Image Section */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="grid grid-cols-12 grid-rows-12 gap-5 h-[500px] md:h-[700px]">
                            {/* Larger Vertical Frame */}
                            <div className="col-span-8 row-span-9 rounded-[3rem] overflow-hidden shadow-2xl relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 via-transparent to-transparent z-10"></div>
                                <img src={consultationImg} alt="Consultation" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110" />
                                <div className="absolute bottom-10 left-10 z-20">
                                    <div className="bg-white/90 backdrop-blur-xl px-6 py-4 rounded-3xl shadow-2xl border border-white/50">
                                        <p className="text-orange-500 font-black text-3xl leading-none">100%</p>
                                        <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mt-1">Dedication</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Asymmetric Frame 1 */}
                            <div className="col-span-6 row-span-6 col-start-7 row-start-4 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] z-20 border-[8px] border-white group-hover:-translate-y-4 group-hover:translate-x-4 transition-transform duration-700">
                                <img src={meetingImg} alt="Meeting" className="w-full h-full object-cover" />
                            </div>

                            {/* Floating Asymmetric Frame 2 */}
                            <div className="col-span-5 row-span-5 col-start-2 row-start-8 rounded-[2rem] overflow-hidden shadow-2xl z-30 border-[6px] border-white translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700">
                                <img src={teamImg} alt="Team" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Editorial Text Content */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="h-[2px] w-12 bg-orange-500"></span>
                                <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">Our Narrative</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.95] tracking-tighter">
                                STRATEGIC <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">ADVISORS</span> <br />
                                FOR YOUR FUTURE.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <p className="text-xl font-black text-gray-900 leading-tight">Expertly Crafted Pathways</p>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    We are a team of qualified migration consultants and education advisors with in-depth knowledge of Australian immigration regulations and study pathways.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-xl font-black text-gray-900 leading-tight">Global Institution Reach</p>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    We work closely with leading educational institutions across Australia to ensure students receive the right opportunities for their academic plans.
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-500 text-lg leading-relaxed border-l-4 border-orange-500 pl-8 italic bg-orange-50/30 py-6 rounded-r-3xl">
                            "With a strong commitment to ethical practice and transparency, our mission is to help you create a secure and successful future in Australia."
                        </p>

                        <div className="pt-4 flex items-center gap-8">
                            <button className="group relative px-10 py-5 bg-gray-900 text-white font-black rounded-full overflow-hidden transition-all hover:bg-orange-500 active:scale-95 shadow-2xl shadow-gray-200">
                                <span className="relative z-10 flex items-center gap-4 text-xs tracking-[0.3em] uppercase">
                                    Read Legacy
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                            <div className="hidden sm:block">
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">Certified by</p>
                                <p className="text-xs font-bold text-gray-800 tracking-tight mt-1">PIER & MARA Australia</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The "Very Different" Stats Dashboard Strip */}

            </div>
        </section>
    );
};

export default WhoWeAre;
