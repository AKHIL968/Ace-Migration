import React from 'react';
import migrationImg from '../assets/migration.png';
import educationImg from '../assets/education.png';
import refusalsImg from '../assets/refusals.png';
import healthImg from '../assets/health_insurance.png';

const services = [
    {
        title: 'Migration',
        image: migrationImg,
        description: 'Migrating to Australia is becoming an attractive option for more and more people. Explore your options with our experts.',
        id: '01',
        gridClass: 'lg:col-span-2 lg:row-span-2',
        color: 'from-orange-500/20 to-orange-600/5'
    },
    {
        title: 'Education',
        image: educationImg,
        description: 'Australia is a hot spot for international students across the world. Discover top universities and courses.',
        id: '02',
        gridClass: 'lg:col-span-1 lg:row-span-1',
        color: 'from-blue-500/10 to-blue-600/5'
    },
    {
        title: 'Refusals',
        image: refusalsImg,
        description: 'It is disappointing to have an application refused. Our lawyers provide expert guidance on appeals and re-applications.',
        id: '03',
        gridClass: 'lg:col-span-1 lg:row-span-2',
        color: 'from-gray-500/10 to-gray-600/5'
    },
    {
        title: 'Health',
        image: healthImg,
        description: 'Maintaining active health insurance is a mandatory condition. Get the best coverage for your needs.',
        id: '04',
        gridClass: 'lg:col-span-1 lg:row-span-1',
        color: 'from-emerald-500/10 to-emerald-600/5'
    }
];

const FeaturedServices = () => {
    return (
        <section className="relative py-32 bg-white font-sans overflow-hidden">
            {/* Artistic Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] select-none z-0">
                <span className="absolute top-10 left-10 text-[25vw] font-black leading-none tracking-tighter text-gray-900 uppercase">Expertise</span>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
                    <div className="space-y-6 max-w-2xl">
                        <div className="flex items-center gap-4">
                            <span className="h-[2px] w-12 bg-orange-500"></span>
                            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">Our Focus</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter">
                            CRAFTING <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">PREMIUM</span> <br />
                            SOLUTIONS.
                        </h2>
                    </div>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-xs border-l-2 border-gray-100 pl-8 pb-2">
                        Navigating complex legal requirements with professional, experience-driven guidance.
                    </p>
                </div>

                {/* Editorial Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8 h-full min-h-[800px]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-[3rem] overflow-hidden flex flex-col bg-gray-50/50 border border-gray-100 transition-all duration-700 hover:shadow-[0_50px_100px_rgba(0,0,0,0.08)] hover:-translate-y-2 ${service.gridClass}`}
                        >
                            {/* Massive Background Numeral */}
                            <span className="absolute -bottom-10 -right-10 text-[15rem] font-black text-gray-900/[0.03] pointer-events-none group-hover:text-orange-500/[0.05] transition-colors duration-700 leading-none">
                                {service.id}
                            </span>

                            {/* Image Container with Custom Shape/Overlap */}
                            <div className="relative w-full h-full overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 mix-blend-multiply group-hover:opacity-10 transition-opacity duration-700`}></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />

                                {/* Overlay Content (Always visible or revealing) */}
                                <div className="absolute inset-0 p-10 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                    <div className="flex justify-between items-start">
                                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-2xl">
                                            {service.id}
                                        </div>
                                    </div>

                                    <div className="space-y-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                        <div className="space-y-2">
                                            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                                                {service.title}
                                            </h3>
                                            <div className="h-[3px] w-0 bg-orange-500 group-hover:w-20 transition-all duration-700 delay-100"></div>
                                        </div>

                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                                            {service.description}
                                        </p>

                                        <div className="pt-4 flex items-center gap-4 group/btn cursor-pointer">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                            <span className="text-white text-xs font-black uppercase tracking-[0.2em]">Explore Service</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gray-50"></div>
        </section>
    );
};

export default FeaturedServices;
