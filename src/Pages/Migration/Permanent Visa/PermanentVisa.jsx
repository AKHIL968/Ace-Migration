import React, { useState } from 'react';
import migrationBg from '../../../assets/migration.png';

const subclasses = [
    {
        id: '189',
        name: 'Skilled Independent (Subclass 189)',
        description: 'A points-tested permanent visa for skilled workers who are not sponsored by an employer or family member or nominated by a state or territory government.',
        rights: [
            'Stay in Australia indefinitely',
            'Work and study anywhere in Australia',
            'Enroll in Medicare',
            'Sponsor eligible relatives for permanent residence',
            'Apply for Australian citizenship, if eligible'
        ],
        criteria: [
            'Have a relevant occupation',
            'Have a suitable skills assessment',
            'Be under 45 years of age',
            'Be invited to apply',
            'Meet health and character requirements'
        ],
        points: 'Score at least 65 points'
    },
    {
        id: '190',
        name: 'Skilled Nominated (Subclass 190)',
        description: 'This visa allows skilled workers who are nominated by an Australian state or territory government to live and work in Australia as permanent residents.',
        rights: [
            'Permanent residence from arrival',
            'Access to Australia\'s healthcare (Medicare)',
            'Social security benefits access',
            'Pathway to Australian citizenship',
            'Geographic flexibility within the nominating state'
        ],
        criteria: [
            'Be nominated by a state or territory',
            'Profession on the nominated lists',
            'Standard age/skills/English requirements',
            'Invitation to apply via SkillSelect',
            'Commitment to live in the nominating state for 2 years'
        ],
        points: 'Score at least 65 points (includes 5 points for state nomination)'
    }
];

const PermanentVisa = () => {
    const [activeTab, setActiveTab] = useState('189');

    return (
        <div className="pt-20 font-sans bg-[#050810]">
            {/* Cinematic Hero */}
            <section className="relative h-[65vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={migrationBg}
                        alt="Permanent Residency Australia"
                        className="w-full h-full object-cover grayscale brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Permanent Pathways</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter uppercase italic">
                            BUILD YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">LEGACY.</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                            The definitive gateway to Australian permanent residency. Select the pathway that matches your professional profile and state alignment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Dashboard Navigation */}
            <section className="sticky top-20 z-40 bg-[#050810]/80 backdrop-blur-2xl border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex justify-center">
                        {subclasses.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setActiveTab(s.id)}
                                className={`px-8 md:px-16 py-8 text-xs font-black uppercase tracking-[0.4em] transition-all relative ${activeTab === s.id ? 'text-white' : 'text-gray-600 hover:text-gray-400'
                                    }`}
                            >
                                {s.id} // {s.name.split('(')[0].trim()}
                                {activeTab === s.id && (
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-500"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Dashboard */}
            <section className="py-24 relative overflow-hidden">
                {/* Background Branding */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none z-0">
                    <span className="absolute bottom-20 left-10 text-[25vw] font-black text-white uppercase tracking-tighter leading-none italic">PR</span>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-[1400px] mx-auto">
                        {subclasses.filter(s => s.id === activeTab).map(s => (
                            <div key={s.id} className="grid grid-cols-1 lg:grid-cols-2 gap-20 animate-slide-up">
                                {/* Left Side: Narrative & Strategy */}
                                <div className="space-y-12">
                                    <div className="space-y-6">
                                        <div className="text-green-500 text-8xl font-black opacity-10 italic">0{subclasses.findIndex(x => x.id === activeTab) + 1}</div>
                                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                                            {s.name}
                                        </h2>
                                        <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                            {s.description}
                                        </p>
                                    </div>

                                    <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 space-y-8">
                                        <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] flex items-center gap-4">
                                            <span className="w-8 h-[1px] bg-green-500"></span>
                                            Core Privileges
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {s.rights.map((r, i) => (
                                                <div key={i} className="flex items-start gap-4 text-sm text-gray-400">
                                                    <span className="text-green-500 font-bold">PR.</span>
                                                    {r}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Technical Grid & Actions */}
                                <div className="space-y-8">
                                    <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-16 space-y-12 shadow-2xl">
                                        <div className="space-y-6">
                                            <h4 className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">Validation Criteria</h4>
                                            <ul className="space-y-6">
                                                {s.criteria.map((c, i) => (
                                                    <li key={i} className="flex items-center justify-between py-4 border-b border-white/5 group">
                                                        <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{c}</span>
                                                        <svg className="w-5 h-5 text-green-500 opacity-20 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-8 items-center justify-between pt-6">
                                            <div className="space-y-2 text-center md:text-left">
                                                <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Threshold</span>
                                                <div className="text-white text-3xl font-black italic">{s.points}</div>
                                            </div>

                                            <button className="w-full md:w-auto px-12 py-5 bg-green-500 text-white font-black rounded-full text-[10px] tracking-[0.4em] uppercase hover:bg-green-600 transition-all shadow-xl shadow-green-500/20 active:scale-95">
                                                Lodge EOI Now
                                            </button>
                                        </div>
                                    </div>

                                    {/* Assistance Banner */}
                                    <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-[2.5rem] p-8 flex items-center justify-between group cursor-pointer overflow-hidden relative">
                                        <div className="relative z-10 space-y-1">
                                            <h4 className="text-white font-black uppercase text-xs tracking-widest">Complex Profile?</h4>
                                            <p className="text-white/70 text-[10px] font-medium uppercase tracking-widest">Get a Senior Legal Assessment</p>
                                        </div>
                                        <div className="relative z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-white/10 skew-x-[30deg] translate-x-10 group-hover:translate-x-5 transition-transform duration-700"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-up {
                    animation: slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />
        </div>
    );
};

export default PermanentVisa;
