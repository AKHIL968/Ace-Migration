import React, { useState } from 'react';
import heroBg from '../../../assets/graduate_hero_bg.png';

const streams = [
    {
        id: 'graduate-work',
        name: 'Graduate Work Stream',
        description: 'For international students with recently completed qualifications that relate to an occupation on the skilled occupation list.',
        duration: 'Typically 18 months',
        requirements: [
            'Hold a qualification from the skilled list',
            'Must be under 50 years of age',
            'Minimum 2 years Australian study',
            'Adequate English language skills'
        ]
    },
    {
        id: 'post-study-work',
        name: 'Post-Study Work Stream',
        description: 'For international students who have graduated with a higher education degree from an Australian education provider.',
        duration: '2 to 4 years (qualification based)',
        requirements: [
            'Bachelor Degree: 2 Years',
            'Masters Degree: 3 Years',
            'Doctoral Degree: 4 Years',
            'Newly completed Australian degree'
        ]
    }
];

const StudyVisa = () => {
    const [activeStream, setActiveStream] = useState('post-study-work');

    return (
        <div className="pt-20 font-sans bg-white">
            {/* Cinematic Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Study Visa Australia"
                        className="w-full h-full object-cover grayscale transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="h-[2px] w-12 bg-orange-500"></span>
                            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">Subclass 485</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter uppercase">
                            TEMPORARY <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">GRADUATE</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
                            Transform your Australian education into professional success. Gain the work experience you need to launch your global career.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stream Selection Dashboard */}
            <section className="py-24 bg-[#050810] relative overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none z-0">
                    <span className="absolute top-10 right-10 text-[15vw] font-black text-white uppercase tracking-tighter">Streams</span>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Selector Column */}
                        <div className="w-full lg:w-1/3 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-black text-white uppercase tracking-tight">Select Your <span className="text-orange-500">Pathway</span></h2>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    The Subclass 485 visa has two main streams. Choose the one that matches your Australian qualification.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {streams.map((stream) => (
                                    <button
                                        key={stream.id}
                                        onClick={() => setActiveStream(stream.id)}
                                        className={`w-full p-6 rounded-2xl flex items-center justify-between group transition-all duration-500 border ${activeStream === stream.id
                                                ? 'bg-orange-500 border-orange-500 text-white shadow-2xl shadow-orange-500/20'
                                                : 'bg-white/[0.03] border-white/5 text-gray-400 hover:bg-white/[0.05]'
                                            }`}
                                    >
                                        <span className="font-black text-xs uppercase tracking-widest">{stream.name}</span>
                                        <svg className={`w-5 h-5 transition-transform duration-500 ${activeStream === stream.id ? 'translate-x-2' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="w-full lg:w-2/3">
                            <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-10 md:p-16 rounded-[3.5rem] min-h-[500px] flex flex-col justify-between">
                                <div className="space-y-12">
                                    {streams.filter(s => s.id === activeStream).map(stream => (
                                        <div key={stream.id} className="animate-fade-in space-y-8">
                                            <div className="space-y-4">
                                                <div className="text-orange-500 text-6xl font-black opacity-20 leading-none">0{streams.findIndex(s => s.id === activeStream) + 1}</div>
                                                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                                                    {stream.name}
                                                </h3>
                                                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                                                    {stream.description}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <div className="space-y-4">
                                                    <h4 className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Visa Duration</h4>
                                                    <div className="text-white font-bold text-xl flex items-center gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                                        {stream.duration}
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <h4 className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Key Requirements</h4>
                                                    <ul className="space-y-3">
                                                        {stream.requirements.map((req, i) => (
                                                            <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                                                                <span className="text-orange-500 mt-1">✓</span>
                                                                {req}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-12 border-t border-white/5 flex flex-wrap gap-6">
                                    <button className="px-10 py-5 bg-orange-500 text-white font-black rounded-full text-xs tracking-[0.3em] uppercase hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                                        Check Eligibility
                                    </button>
                                    <button className="px-10 py-5 bg-white/[0.05] text-white font-black rounded-full text-xs tracking-[0.3em] uppercase border border-white/5 hover:bg-white/[0.1] transition-all">
                                        Download PDF Guide
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* General Conditions Strip */}
            <section className="py-20 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-between items-center gap-10">
                        <div className="space-y-2">
                            <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Pricing</span>
                            <div className="text-gray-900 text-3xl font-black italic">AUD 1,650 <span className="text-gray-400 text-xs not-italic font-medium">/ Main Applicant</span></div>
                        </div>
                        <div className="space-y-2">
                            <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Status</span>
                            <div className="text-gray-900 text-3xl font-black italic">Open <span className="text-gray-400 text-xs not-italic font-medium">/ Accepting Applications</span></div>
                        </div>
                        <div className="space-y-2">
                            <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Processing</span>
                            <div className="text-gray-900 text-3xl font-black italic">5-6 Months <span className="text-gray-400 text-xs not-italic font-medium">/ Average Time</span></div>
                        </div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />
        </div>
    );
};

export default StudyVisa;
