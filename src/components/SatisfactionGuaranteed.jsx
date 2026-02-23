import React from 'react';
import studentsImg from '../assets/students_group 1.png';
import bgImg from '../assets/satisfaction_bg.png';

const features = [
    {
        id: "01",
        title: "Expertise",
        desc: "Certified migration consultants.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    },
    {
        id: "02",
        title: "Integrity",
        desc: "Transparent & honest pricing.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        )
    },
    {
        id: "03",
        title: "Results",
        desc: "Proven high success rates.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    },
    {
        id: "04",
        title: "Support",
        desc: "24/7 dedicated assistance.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

const SatisfactionGuaranteed = () => {
    return (
        <section className="relative w-full py-32 bg-[#050810] font-sans overflow-hidden">
            {/* Artistic Background Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050810] via-transparent to-orange-500/5"></div>
                {/* Dot Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
            </div>

            {/* Giant Background Text Texture */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.03]">
                <h2 className="text-[25vw] font-black text-white leading-none tracking-tighter">EXCELLENCE</h2>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
                    {/* Header Side */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="inline-flex items-center gap-4 bg-orange-500/10 px-5 py-2 rounded-full border border-orange-500/20 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">Satisfaction Guaranteed</span>
                        </div>

                        <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tight">
                            WE MAKE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">SUCCESS</span> <br />
                            INEVITABLE.
                        </h2>
                    </div>

                    {/* Description Side */}
                    <div className="lg:col-span-5 pb-4">
                        <p className="text-gray-400 text-xl leading-relaxed border-l-2 border-orange-500 pl-8 italic">
                            "Our commitment goes beyond processing visas. We build futures, navigate complexities, and ensure your Australian dream is secured with unwavering integrity."
                        </p>
                    </div>
                </div>

                {/* The Horizontal Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-white/[0.03] border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Number background */}
                            <span className="absolute -top-4 -right-2 text-7xl font-black text-white/[0.03] group-hover:text-orange-500/10 transition-colors uppercase">{item.id}</span>

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-500/20 rotate-3 group-hover:rotate-0 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h4>
                                <p className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm leading-relaxed">{item.desc}</p>
                            </div>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 h-1 bg-orange-500 w-0 group-hover:w-full transition-all duration-700"></div>
                        </div>
                    ))}
                </div>

                {/* Final Interactive Strip */}
                <div className="flex flex-col lg:flex-row items-center justify-between p-1 px-1 bg-white/[0.02] border border-white/5 rounded-full backdrop-blur-xl">
                    <div className="flex items-center gap-6 pl-8 py-4">
                        <div className="flex -space-x-3">
                            <img src="https://flagcdn.com/w80/au.png" className="w-12 h-8 object-cover rounded shadow-lg border border-white/10" alt="AU" />
                            <img src="https://flagcdn.com/w80/ca.png" className="w-12 h-8 object-cover rounded shadow-lg border border-white/10" alt="CA" />
                            <img src="https://flagcdn.com/w80/gb.png" className="w-12 h-8 object-cover rounded shadow-lg border border-white/10" alt="GB" />
                        </div>
                        <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>
                        <span className="text-white font-bold tracking-tight hidden md:block">Trust & Integrity Global</span>
                    </div>

                    <div className="flex items-center gap-8 pr-1 py-1 w-full lg:w-auto mt-4 lg:mt-0">
                        <button className="flex-grow lg:flex-none px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black rounded-full transition-all shadow-xl shadow-orange-500/20 active:scale-95 text-sm tracking-[0.2em] uppercase">
                            Start Journey
                        </button>
                    </div>
                </div>
            </div>

            {/* Asymmetric Cutout Student Image Interaction */}
            <div className="absolute -bottom-24 -right-12 w-[35vw] pointer-events-none select-none opacity-20 lg:opacity-100 transition-opacity duration-700">
                <div className="relative group">
                    <div className="absolute inset-0 bg-orange-500/20 blur-[150px] rounded-full scale-150 group-hover:bg-orange-500/30 transition-colors"></div>
                    <img
                        src={studentsImg}
                        alt="Success"
                        className="relative z-10 w-full h-auto object-contain drop-shadow-[0_40px_100px_rgba(249,115,22,0.4)] animate-slow-float"
                    />
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes slowFloat {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(2deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                .animate-slow-float {
                    animation: slowFloat 8s ease-in-out infinite;
                }
            `}} />
        </section>
    );
};

export default SatisfactionGuaranteed;