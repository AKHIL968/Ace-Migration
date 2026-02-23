import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import portalBg from '../assets/consultation_portal_bg.png';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });
    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        const serviceID = 'service_ejk4s2d';
        const templateID = 'template_az1wrqs';
        const publicKey = '75vokj7tB-Q0Yzm3i';

        const templateParams = {
            to_name: 'ACE Immigration',
            from_name: formData.name,
            from_email: formData.email,
            contact_number: formData.phone,
            interested_country: 'Not Specified',
            visa_type: formData.service,
            message: formData.message,
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            alert('Your consultation request has been sent successfully. We will be in touch shortly!');
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: '',
                message: ''
            });
        } catch (error) {
            console.error('FAILED...', error);
            alert('Failed to send request. Please try again later.');
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="relative min-h-screen bg-[#050810] font-sans flex items-center overflow-hidden py-20 lg:py-0">
            {/* Artistic Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none z-0">
                <span className="absolute bottom-20 right-10 text-[20vw] font-black text-white uppercase tracking-tighter leading-none">Connect</span>
            </div>

            <div className="max-w-[1500px] mx-auto w-full h-full lg:h-[85vh] relative z-10 flex flex-col lg:flex-row px-6 gap-6 ">

                {/* Left: Cinematic Visual Column */}
                <div className="w-full lg:w-5/12 relative rounded-[3rem] overflow-hidden shadow-2xl group min-h-[400px] lg:min-h-0">
                    <img
                        src={portalBg}
                        alt="Consultation Portal"
                        className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>

                    <div className="absolute bottom-12 left-12 right-12 space-y-6">
                        <div className="inline-flex items-center gap-3 bg-orange-500/90 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            <span className="text-white font-black uppercase tracking-widest text-[10px]">Expert Advisory Live</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                            SECURE YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">AUSTRALIAN</span> <br />
                            LEGACY TODAY.
                        </h2>

                        <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                            Tailored migration strategies designed for high-performance outcomes. Connect with our senior advisors for an elite consultation experience.
                        </p>
                    </div>
                </div>

                {/* Right: Premium Dashboard Form */}
                <div className="w-full lg:w-7/12 flex flex-col justify-center">
                    <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 md:p-8 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                        {/* Status Strip */}
                        <div className="flex flex-wrap items-center gap-8 mb-12 py-4 border-b border-white/5">
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest">Availability</span>
                                <span className="text-white font-bold text-sm">24/7 Global Access</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest">Response</span>
                                <span className="text-orange-500 font-bold text-sm">Within 24 Hours</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest">Expertise</span>
                                <span className="text-white font-bold text-sm">MARA & PIER Certified</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label className="text-gray-500 text-[10px] uppercase font-black tracking-widest px-4 group-focus-within:text-orange-500 transition-colors">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={sending}
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-white placeholder-gray-700 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-gray-500 text-[10px] uppercase font-black tracking-widest px-4 group-focus-within:text-orange-500 transition-colors">Contact Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="+X XXX XXX XXXX"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        disabled={sending}
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-white placeholder-gray-700 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label className="text-gray-500 text-[10px] uppercase font-black tracking-widest px-4 group-focus-within:text-orange-500 transition-colors">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={sending}
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-white placeholder-gray-700 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-gray-500 text-[10px] uppercase font-black tracking-widest px-4 group-focus-within:text-orange-500 transition-colors">Interested Service</label>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            disabled={sending}
                                            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-white focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none appearance-none cursor-pointer transition-all duration-300"
                                        >
                                            <option value="" disabled className="bg-gray-950">Select Service</option>
                                            <option value="Student Visa" className="bg-gray-950 text-white">Student Visa</option>
                                            <option value="Skilled Visa" className="bg-gray-950 text-white">Skilled Visa</option>
                                            <option value="Partner Visa" className="bg-gray-950 text-white">Partner Visa</option>
                                            <option value="Business Visa" className="bg-gray-950 text-white">Business Visa</option>
                                            <option value="Parent Visa" className="bg-gray-950 text-white">Parent Visa</option>
                                            <option value="Refusals / Appeals" className="bg-gray-950 text-white">Refusals / Appeals</option>
                                            <option value="Others" className="bg-gray-950 text-white">Others</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none text-gray-500">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-gray-500 text-[10px] uppercase font-black tracking-widest px-4 group-focus-within:text-orange-500 transition-colors">Message Context</label>
                                <textarea
                                    name="message"
                                    placeholder="Briefly describe your objectives..."
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={sending}
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 text-white placeholder-gray-700 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none resize-none transition-all duration-300"
                                ></textarea>
                            </div>

                            <div className="pt-0">
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="group relative w-full lg:w-auto px-12 py-5 bg-orange-500 text-white font-black rounded-full overflow-hidden transition-all hover:bg-orange-600 active:scale-95 shadow-2xl shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-4 text-xs tracking-[0.3em] uppercase">
                                        {sending ? 'PROCESSING...' : 'REQUEST CONSULTATION'}
                                        {!sending && (
                                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        )}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Scanning Line Effect (matching GlobalPartners) */}
            <div className="absolute inset-x-0 h-[100px] top-0 bg-gradient-to-b from-orange-500/5 to-transparent z-0 animate-scan pointer-events-none"></div>
        </section>
    );
};

export default ContactForm;
