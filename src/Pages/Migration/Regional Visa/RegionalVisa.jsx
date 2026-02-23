import React, { useState } from 'react';
import heroBg from '../../../assets/Map-1024x614.png';

const regionalStreams = [
    {
        id: '491',
        name: 'Skilled Work Regional (Subclass 491)',
        type: 'Provisional Visa',
        description: 'A 5-year provisional visa for skilled workers who want to live and work in regional Australia. This is a primary pathway to permanent residency.',
        benefits: [
            'Stay in Australia for 5 years',
            'Live, work and study in a designated regional area',
            'Travel to and from Australia as many times as you want',
            'Pathway to permanent residency (Subclass 191)'
        ],
        requirements: [
            'Be nominated to apply by a state or territory government, or be sponsored by an eligible relative',
            'Have an occupation on a relevant skilled occupation list',
            'Have a suitable skills assessment for the occupation',
            'Be under 45 years of age',
            'Score at least 65 points'
        ],
        cost: 'From AUD 4,045',
        timeline: 'Varies by stream'
    },
    {
        id: '191',
        name: 'Permanent Resident Regional (Subclass 191)',
        type: 'Permanent Visa',
        description: 'The final step in the regional migration journey. This visa provides permanent residency to people who have lived and worked in regional Australia on a qualifying provisional visa.',
        benefits: [
            'Stay in Australia indefinitely',
            'Work and study anywhere in Australia',
            'Enroll in Australia’s public health care scheme (Medicare)',
            'Sponsor eligible relatives for permanent residence',
            'Apply for Australian citizenship, if eligible'
        ],
        requirements: [
            'Hold a qualifying visa (Subclass 491 or 494)',
            'Have lived and worked in a regional area for at least 3 years',
            'Meet minimum taxable income requirements for at least 3 years',
            'Complied with the conditions of your provisional visa'
        ],
        cost: 'From AUD 475 (for primary applicants)',
        timeline: 'Approximately 12 Months'
    }
];

const RegionalVisa = () => {
    const [activeStream, setActiveStream] = useState('491');

    return (
        <div className="pt-20 font-sans bg-[#050810]">
            {/* Cinematic Hero */}
            <section className="relative h-[65vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Regional Australia Migration"
                        className="w-full h-full object-cover grayscale brightness-[0.3] scale-110 transition-transform duration-[10s] ease-linear"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="space-y-8 max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-2xl px-6 py-2.5 rounded-full border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                            <span className="text-white text-[10px] font-black uppercase tracking-[0.5em]">Regional Gateway</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
                            PROSPER IN <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">REGIONAL</span> <br />
                            AUSTRALIA.
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
                            Experience the perfect balance of professional opportunity and quality of life. Our regional migration specialists guide you through the provisional to permanent residency transition.
                        </p>
                    </div>
                </div>
            </section>

            {/* Interactive Stream Selector */}
            <section className="py-24 relative overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none z-0">
                    <span className="absolute top-20 right-20 text-[20vw] font-black text-white uppercase tracking-tighter leading-none italic">Regions</span>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Selector Column */}
                        <div className="w-full lg:w-2/5 space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-black text-white uppercase tracking-tight leading-none">Your <span className="text-cyan-500">Regional</span> Journey</h2>
                                <p className="text-gray-500 text-base leading-relaxed font-medium">
                                    The regional pathway is a structured transition from provisional work rights to full permanent residency. Identify your current stage to proceed.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {regionalStreams.map((stream) => (
                                    <button
                                        key={stream.id}
                                        onClick={() => setActiveStream(stream.id)}
                                        className={`w-full p-8 rounded-[2.5rem] flex flex-col items-start gap-4 transition-all duration-700 border text-left group relative overflow-hidden ${activeStream === stream.id
                                                ? 'bg-cyan-500 border-cyan-500 text-white shadow-2xl shadow-cyan-500/20'
                                                : 'bg-white/[0.02] border-white/5 text-gray-500 hover:bg-white/[0.04]'
                                            }`}
                                    >
                                        <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${activeStream === stream.id ? 'text-white/70' : 'text-cyan-500'}`}>
                                            Subclass {stream.id} // {stream.type}
                                        </span>
                                        <span className={`text-xl font-black uppercase tracking-tight leading-none ${activeStream === stream.id ? 'text-white' : 'text-gray-300'}`}>
                                            {stream.name.split('(')[0]}
                                        </span>

                                        {activeStream === stream.id && (
                                            <div className="absolute right-8 top-12">
                                                <svg className="w-8 h-8 text-white/50 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Contentcolumn Dashboard */}
                        <div className="w-full lg:w-3/5">
                            <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-12 md:p-20 rounded-[4rem] min-h-[700px] flex flex-col justify-between shadow-2xl relative">
                                {regionalStreams.filter(s => s.id === activeStream).map(s => (
                                    <div key={s.id} className="animate-slide-up space-y-16">
                                        <div className="space-y-6">
                                            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-black uppercase tracking-widest">
                                                Selected Pathway Detail
                                            </div>
                                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight italic">
                                                {s.name}
                                            </h3>
                                            <p className="text-gray-400 text-lg leading-relaxed font-medium max-w-2xl">
                                                {s.description}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                            <div className="space-y-8">
                                                <h4 className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                                                    <span className="w-6 h-[1px] bg-cyan-500"></span>
                                                    Key Performance Indices
                                                </h4>
                                                <ul className="space-y-4">
                                                    {s.benefits.map((benefit, i) => (
                                                        <li key={i} className="text-gray-300 text-sm flex items-start gap-4 font-medium group">
                                                            <span className="text-cyan-500 font-black">IDX.</span>
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="space-y-8">
                                                <h4 className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                                                    <span className="w-6 h-[1px] bg-cyan-500"></span>
                                                    Vetting Standards
                                                </h4>
                                                <ul className="space-y-4">
                                                    {s.requirements.map((req, i) => (
                                                        <li key={i} className="text-gray-400 text-[13px] flex items-start gap-4 leading-relaxed">
                                                            <span className="text-cyan-500 mt-1">
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            </span>
                                                            {req}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="pt-16 border-t border-white/5 flex flex-wrap justify-between items-end gap-10">
                                            <div className="space-y-8">
                                                <div className="flex gap-16">
                                                    <div className="space-y-2">
                                                        <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Pricing Model</span>
                                                        <div className="text-white text-3xl font-black italic">{s.cost}</div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Assessment Cycle</span>
                                                        <div className="text-white text-3xl font-black italic">{s.timeline}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="px-16 py-6 bg-cyan-500 hover:bg-cyan-600 text-white font-black rounded-full text-xs tracking-[0.4em] uppercase transition-all shadow-2xl shadow-cyan-500/30 active:scale-95">
                                                Initiate Eligibility Check
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Information Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="space-y-6">
                            <h4 className="text-cyan-600 text-xs font-black uppercase tracking-[0.3em]">Regional Areas</h4>
                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                Australia's regional zones include most areas outside Sydney, Melbourne, and Brisbane, offering high-quality living and unique career prospects.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-cyan-600 text-xs font-black uppercase tracking-[0.3em]">Pathway Continuity</h4>
                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                Subclass 491 holders are locked into regional living but gain access to Subclass 191 after 3 years, bypassing standard points resets.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-cyan-600 text-xs font-black uppercase tracking-[0.3em]">Family Support</h4>
                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                Immediate and secondary family members receive full regional work and study rights under the head applicant’s sponsorship.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(50px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-up {
                    animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />
        </div>
    );
};

export default RegionalVisa;
