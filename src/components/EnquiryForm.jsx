import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EnquiryForm = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        country: '',
        visaType: '',
        message: ''
    });
    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
            contact_number: formData.contact,
            interested_country: formData.country,
            visa_type: formData.visaType,
            message: formData.message,
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            alert('Thank you for your enquiry. We will get back to you soon!');
            setFormData({
                name: '',
                email: '',
                contact: '',
                country: '',
                visaType: '',
                message: ''
            });
            onClose();
        } catch (error) {
            console.error('FAILED...', error);
            alert('Failed to send enquiry. Please try again later or contact us directly.');
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-all duration-500 font-sans">
            <div className="bg-white/95 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] w-full max-w-xl overflow-hidden relative animate-fade-in-up">

                {/* Header Section */}
                <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-8 md:p-10 relative overflow-hidden">
                    {/* Abstract Backdrop Blobs */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 flex justify-between items-start">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black text-white italic tracking-tighter leading-none">ENQUIRY PORTAL</h2>
                            <p className="text-blue-100/70 text-sm font-medium">Start your elite migration journey today.</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/10 transition-all duration-300 disabled:opacity-50"
                            disabled={sending}
                        >
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Body / Form Section */}
                <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar">

                    {/* Name */}
                    <div className="space-y-1.5 group">
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-blue-600 transition-colors">Candidate Identity</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5 text-gray-900 placeholder:text-gray-300 focus:bg-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all duration-300 disabled:opacity-50 font-medium"
                            placeholder="Full Legal Name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={sending}
                        />
                    </div>

                    {/* Email & Contact Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5 group">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-blue-600 transition-colors">Digital Handle</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5 text-gray-900 placeholder:text-gray-300 focus:bg-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all duration-300 disabled:opacity-50 font-medium"
                                placeholder="email@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={sending}
                            />
                        </div>
                        <div className="space-y-1.5 group">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-blue-600 transition-colors">Contact Protocol</label>
                            <input
                                type="tel"
                                name="contact"
                                required
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5 text-gray-900 placeholder:text-gray-300 focus:bg-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all duration-300 disabled:opacity-50 font-medium"
                                placeholder="+XX XXX XXX XXXX"
                                value={formData.contact}
                                onChange={handleChange}
                                disabled={sending}
                            />
                        </div>
                    </div>

                    {/* Country & Visa Selection Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5 group">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-blue-600 transition-colors">Target Jurisdiction</label>
                            <div className="relative">
                                <select
                                    name="country"
                                    required
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5 text-gray-900 focus:bg-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all duration-300 disabled:opacity-50 appearance-none cursor-pointer font-medium"
                                    value={formData.country}
                                    onChange={handleChange}
                                    disabled={sending}
                                >
                                    <option value="" disabled className="text-gray-400">Select Region</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Canada">Canada</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="USA">USA</option>
                                    <option value="Others">Others</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1.5 group">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-blue-600 transition-colors">Visa Classification</label>
                            <div className="relative">
                                <select
                                    name="visaType"
                                    required
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5 text-gray-900 focus:bg-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all duration-300 disabled:opacity-50 appearance-none cursor-pointer font-medium"
                                    value={formData.visaType}
                                    onChange={handleChange}
                                    disabled={sending}
                                >
                                    <option value="" disabled className="text-gray-400">Select Category</option>
                                    <option value="Student Visa">Student Visa</option>
                                    <option value="Visitor Visa">Visitor Visa</option>
                                    <option value="Business Visa">Business Visa</option>
                                    <option value="Partner Visa">Partner Visa</option>
                                    <option value="Parent Visa">Parent Visa</option>
                                    <option value="Skilled Visa">Skilled Visa</option>
                                    <option value="Others">Others</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Context */}
                    <div className="space-y-1.5 group">
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-blue-600 transition-colors">Mission Context</label>
                        <textarea
                            name="message"
                            rows="4"
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-300 focus:bg-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all duration-300 resize-none disabled:opacity-50 font-medium"
                            placeholder="Describe your migration objectives..."
                            value={formData.message}
                            onChange={handleChange}
                            disabled={sending}
                        ></textarea>
                    </div>

                    {/* Submission CTA */}
                    <button
                        type="submit"
                        disabled={sending}
                        className="w-full relative group/btn overflow-hidden rounded-2xl py-5 transition-all duration-500 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-blue-500/20"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 transition-transform duration-500 group-hover/btn:scale-105"></div>
                        <div className="relative z-10 flex items-center justify-center gap-3 text-white">
                            {sending ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className="font-black text-xs uppercase tracking-widest">TRANSMITTING...</span>
                                </>
                            ) : (
                                <>
                                    <span className="font-bold text-sm uppercase tracking-widest">Initiate Priority Assessment</span>
                                    <svg className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </>
                            )}
                        </div>
                    </button>
                </form>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.05); border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(59, 130, 246, 0.5); }
            `}} />
        </div>
    );
};

export default EnquiryForm;
