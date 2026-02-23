import React from 'react';

const links = [
    {
        id: 1,
        title: "Online Application",
        action: "Apply Now",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        )
    },
    {
        id: 2,
        title: "Visa Information",
        action: "View Guide",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        id: 3,
        title: "Resources Hub",
        action: "Learn More",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        id: 4,
        title: "Policy Updates",
        action: "See What's New",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
        )
    }
];

const QuickLinks = () => {
    return (
        <section className="relative -mt-16 lg:-mt-20 z-40 px-6">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-[#050810]/95 backdrop-blur-2xl border border-white/5 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
                        {links.map((link) => (
                            <div
                                key={link.id}
                                className="group relative p-10 flex items-center justify-between transition-all duration-500 hover:bg-white/[0.03] cursor-pointer"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                                        {link.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-white font-black text-sm uppercase tracking-widest">{link.title}</h3>
                                        <div className="flex items-center gap-2 overflow-hidden h-4">
                                            <p className="text-orange-500/80 text-[10px] font-black uppercase tracking-widest group-hover:-translate-y-full transition-transform duration-500">
                                                {link.action}
                                            </p>
                                            <p className="absolute text-white text-[10px] font-black uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                                Go To Portal ➔
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Arrow Accent */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                                    <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>

                                {/* Bottom Indicator */}
                                <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuickLinks;
