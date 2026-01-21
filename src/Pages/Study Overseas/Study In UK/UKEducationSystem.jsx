import React from 'react';
import heroBg from '../../../assets/education.png';

const UKEducationSystem = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Education in UK"
                        className="w-full h-full object-cover top-0"
                    />
                    <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-200 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-red-500/30 uppercase backdrop-blur-sm">
                        Global Standard
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Education System in UK
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Discover a world-class education system that blends centuries of tradition with cutting-edge global innovation.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Intro Section */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">A Global Beacon of Knowledge</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The UK's education system is celebrated worldwide for its exceptional standards. Monitored by the <span className="text-blue-700 font-bold">Quality Assurance Agency (QAA)</span>, it ensures that every institution maintains the highest level of academic rigor and teaching quality.
                        </p>
                    </div>

                    {/* Institutions Grid */}
                    <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up">
                        <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Educational Framework</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Universities */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-600 hover:-translate-y-1 transition-transform">
                                <div className="text-blue-600 mb-4">
                                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Universities</h4>
                                <p className="text-gray-600 text-sm">Top-tier institutions fostering academic excellence and research. UK degree-awarding powers are strictly regulated.</p>
                            </div>

                            {/* Polytechnics */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-red-600 hover:-translate-y-1 transition-transform">
                                <div className="text-red-600 mb-4">
                                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Polytechnics</h4>
                                <p className="text-gray-600 text-sm">Institutes of Technology offering varied degree programs with a stronger focus on vocational skills.</p>
                            </div>

                            {/* Private Providers */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-600 hover:-translate-y-1 transition-transform">
                                <div className="text-blue-600 mb-4">
                                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Private Providers</h4>
                                <p className="text-gray-600 text-sm">Over 800 private institutions offering a diverse range of professional and specialized courses.</p>
                            </div>
                        </div>
                    </div>

                    {/* Qualification Levels */}
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-20">
                        <div className="bg-blue-900 text-white p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-red-600 rounded-full blur-3xl translate-x-10 -translate-y-10 opacity-50"></div>
                            <h4 className="text-2xl font-bold relative z-10">Course Levels & Qualifications</h4>
                            <p className="text-blue-200 mt-2 relative z-10">Understanding the tiered education structure.</p>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                { level: "Level 4-5", title: "Certificate / Diploma / Foundation", desc: "Foundational higher education qualifications." },
                                { level: "Level 6", title: "Bachelor's Degree", desc: "Standard 3-year undergraduate degree (4 years in Scotland)." },
                                { level: "Level 7", title: "Master's Degree", desc: "1-year intensive postgraduate degree (MA, MSc, MBA)." },
                                { level: "Level 8", title: "Postgraduate Diploma", desc: "Specialized postgraduate qualification." },
                                { level: "Level 9-10", title: "Doctoral Degree (PhD)", desc: "Advanced research qualification." }
                            ].map((item, index) => (
                                <div key={index} className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center hover:bg-gray-50 transition-colors">
                                    <div className="font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded w-fit">{item.level}</div>
                                    <div className="font-bold text-gray-900 md:col-span-1">{item.title}</div>
                                    <div className="text-gray-600 md:col-span-2">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Educational Hubs & CTA */}
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Hubs */}
                        <div className="lg:col-span-2 bg-blue-50 rounded-2xl p-10 border border-blue-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Places to Study</h3>
                            <p className="text-gray-700 mb-6">
                                From historic capitals to vibrant modern cities, the UK offers diverse study locations:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["London", "Manchester", "Edinburgh", "Birmingham", "Leeds", "Glasgow"].map((city, i) => (
                                    <span key={i} className="px-4 py-2 bg-white rounded-full text-blue-700 font-semibold shadow-sm border border-blue-100">
                                        📍 {city}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-red-700 rounded-2xl p-10 text-white flex flex-col justify-center text-center shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Start Your Application</h3>
                            <p className="text-red-100 mb-8 text-sm">
                                Explore scholarship opportunities and find the perfect university for your career goals.
                            </p>
                            <button className="w-full py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-red-50 transition-colors shadow-md">
                                Contact Us
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default UKEducationSystem;
