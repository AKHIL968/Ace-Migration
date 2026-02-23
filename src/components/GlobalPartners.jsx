import React from 'react';
import worldMapImg from '../assets/Map-1024x614.png';

const regions = [
    {
        name: "Australia",
        count: "150+",
        desc: "Regional Hubs",
        icon: "🇦🇺",
        pos: "top-[68%] left-[82%]",
        id: "AU"
    },
    {
        name: "UK & Europe",
        count: "80+",
        desc: "Elite Partners",
        icon: "🇬🇧",
        pos: "top-[32%] left-[46%]",
        id: "UK"
    },
    {
        name: "Canada",
        count: "60+",
        desc: "Safe Pathways",
        icon: "🇨🇦",
        pos: "top-[35%] left-[20%]",
        id: "CA"
    },
    {
        name: "USA",
        count: "40+",
        desc: "Ivy Standards",
        icon: "🇺🇸",
        pos: "top-[40%] left-[25%]",
        id: "US"
    }
];

const GlobalPartners = () => {
    return (
        <section className="relative py-32 bg-[#050810] font-sans overflow-hidden">
            {/* High-Tech Background Map Backdrop */}
            <div className="absolute inset-x-0 top-0 h-full z-0 pointer-events-none opacity-[0.08] mix-blend-screen overflow-hidden">
                <img
                    src={worldMapImg}
                    alt="Network Backdrop"
                    className="w-full h-full object-cover scale-125 origin-center grayscale blur-[1px]"
                />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left: Glassmorphic Narrative Card */}
                    <div className="w-full lg:w-5/12 sticky top-32">
                        <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
                            {/* Accent line */}
                            <div className="absolute top-0 left-0 w-2 h-full bg-orange-500/20 group-hover:bg-orange-500 transition-colors duration-500"></div>

                            <div className="space-y-8 pl-4">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                    </span>
                                    <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Global Operations</span>
                                </div>

                                <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                                    ELITE <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">ACADEMIC</span> <br />
                                    NETWORK.
                                </h2>

                                <p className="text-gray-400 text-lg leading-relaxed max-w-[320px]">
                                    We don't just process applications; we manage a high-performance network of 500+ global institutions to secure your legacy.
                                </p>

                                <div className="pt-6">
                                    <button className="flex items-center gap-6 group/btn">
                                        <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-xl shadow-orange-500/20 group-hover/btn:scale-110 transition-transform">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-white font-black text-xs uppercase tracking-[0.2em]">Explore Network</p>
                                            <p className="text-gray-500 text-[10px] font-bold uppercase">500+ Institutions Live</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: High-Tech Integrated Map & Markers */}
                    <div className="w-full lg:w-7/12 relative aspect-[1.6/1]">
                        <div className="absolute inset-0 z-0">
                            {/* The Map itself in this section is more prominent than the backdrop */}
                            <img
                                src={worldMapImg}
                                alt="High Tech Map"
                                className="w-full h-full object-contain filter invert opacity-20 brightness-200"
                            />
                        </div>

                        {/* Pulsing Regional Nodes */}
                        {regions.map((region) => (
                            <div
                                key={region.id}
                                className={`absolute ${region.pos} z-20 group/node`}
                            >
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full scale-[3.0] opacity-0 group-hover/node:opacity-100 transition-opacity"></div>
                                    <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-orange-500/20 opacity-75"></span>
                                    <div className="h-4 w-4 bg-orange-500 rounded-full border-2 border-white/20 shadow-[0_0_20px_rgba(249,115,22,0.5)] z-10 transition-transform group-hover/node:scale-150"></div>

                                    {/* Data Tooltip */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 p-4 min-w-[120px] bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-white/10 opacity-0 group-hover/node:opacity-100 transition-all scale-75 group-hover/node:scale-100 pointer-events-none shadow-2xl">
                                        <p className="text-orange-500 font-black text-sm">{region.count}</p>
                                        <p className="text-white font-bold text-[10px] uppercase tracking-wider">{region.name}</p>
                                        <p className="text-gray-500 text-[8px] uppercase mt-1">{region.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* The Regions Bento Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
                    {regions.map((region) => (
                        <div
                            key={region.id}
                            className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-orange-500/5 hover:border-orange-500/30 transition-all duration-500 text-center"
                        >
                            <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{region.icon}</span>
                            <h4 className="text-white font-black text-2xl tracking-tighter uppercase">{region.name.split(' ')[0]}</h4>
                            <p className="text-orange-500 text-[10px] font-black tracking-[0.2em] mt-1">{region.count} PARTNERS</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scanning Line Effect */}
            <div className="absolute inset-x-0 h-[100px] top-0 bg-gradient-to-b from-orange-500/5 to-transparent z-0 animate-scan"></div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100vh); }
                }
                .animate-scan {
                    animation: scan 8s linear infinite;
                }
            `}} />
        </section>
    );
};

export default GlobalPartners;