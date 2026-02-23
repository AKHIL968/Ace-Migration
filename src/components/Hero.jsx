import { useState, useEffect } from 'react';
import migrationImg from '../assets/graduate_hero_bg.png';
import studyImg from '../assets/students_group 1.png';

const slides = [
    {
        id: 1,
        image: migrationImg,
        title: "GATEWAY",
        subTitle: "TO GLOBAL OPPORTUNITIES",
        context: "Expert migration services to help you build a new life abroad with absolute confidence and professional ease.",
        cta: "Book Consultation"
    },
    {
        id: 2,
        image: studyImg,
        title: "EVOLVE",
        subTitle: "WITH GLOBAL EDUCATION",
        context: "Discover world-class universities and unlock your true potential with our vetted study abroad programs.",
        cta: "Explore Courses"
    }
];

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            handleSlideChange((currentSlide + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const handleSlideChange = (index) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 800);
    };

    return (
        <section className="relative h-screen min-h-[800px] w-full bg-white overflow-hidden mt-20 font-sans">
            {/* Background Text Texture */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] z-0">
                <h2 className="text-[30vw] font-black tracking-tighter uppercase whitespace-nowrap">
                    {slides[currentSlide].title}
                </h2>
            </div>

            <div className="relative z-10 h-full flex flex-col lg:flex-row">

                {/* Left: High-Impact Content */}
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 space-y-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 animate-fade-in">
                            <span className="h-[2px] w-12 bg-orange-500"></span>
                            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">Premium Migration</span>
                        </div>

                        <div className="overflow-hidden">
                            <h1 key={currentSlide + '-title'} className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.8] tracking-tighter text-gray-900 animate-slide-up">
                                {slides[currentSlide].title}
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                                    {slides[currentSlide].subTitle.split(' ')[0]}
                                </span>
                            </h1>
                        </div>

                        <div className="overflow-hidden max-w-md">
                            <p key={currentSlide + '-subtitle'} className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed animate-fade-in delay-200">
                                {slides[currentSlide].context}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-8 animate-fade-in delay-300">
                        <button className="group relative px-10 py-5 bg-gray-950 text-white font-black rounded-full overflow-hidden transition-all hover:bg-orange-500 active:scale-95 shadow-2xl shadow-gray-200">
                            <span className="relative z-10 flex items-center gap-4 text-xs tracking-[0.3em] uppercase">
                                {slides[currentSlide].cta}
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>

                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Available</span>
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <div className="w-full h-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600">
                                            {i}
                                        </div>
                                    </div>
                                ))}
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center text-[8px] font-bold text-white">
                                    +5k
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Cinematic Frame */}
                <div className="w-full lg:w-1/2 h-full p-4 lg:p-12 relative flex items-center justify-center">
                    <div className="w-full h-[300px] lg:h-full relative rounded-[4rem] md:rounded-[6rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] group">

                        {/* Slide Images */}
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                            >
                                <div
                                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                            </div>
                        ))}

                        {/* Slide Stats Overlay */}
                        <div className="absolute bottom-12 left-12 z-20 text-white animate-fade-in delay-500">
                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl px-6 py-4 rounded-[2rem] border border-white/20">
                                <span className="text-4xl font-black">{currentSlide + 1} <span className="text-gray-400 text-lg">/ {slides.length}</span></span>
                                <div className="w-[1px] h-8 bg-white/20"></div>
                                <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Elite <br />Placement</span>
                            </div>
                        </div>

                        {/* Navigation Arrows (Minimalist) */}
                        <div className="absolute top-1/2 -translate-y-1/2 right-8 z-30 flex flex-col gap-4">
                            <button
                                onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)}
                                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all active:scale-95"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                            </button>
                            <button
                                onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
                                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all active:scale-95"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Progress */}
            <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 z-30 flex items-center gap-10">
                <div className="flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleSlideChange(index)}
                            className={`group relative h-1 transition-all duration-500 ${index === currentSlide ? 'w-24 bg-orange-500' : 'w-12 bg-gray-200'}`}
                        >
                            <span className="absolute -top-6 left-0 text-[10px] font-black tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                0{index + 1}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="hidden md:flex items-center gap-4 text-gray-300">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-gray-200 to-transparent"></div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes slide-up {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-slide-up {
                    animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-500 { animation-delay: 0.5s; }
            `}} />
        </section>
    );
}

export default Hero;
