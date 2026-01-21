import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import patternBg from '../assets/pattern_bg.png';

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
            interested_country: 'Not Specified', // Contact form doesn't have country field
            visa_type: formData.service,
            message: formData.message,
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            alert('Thank you for contacting us. We will be in touch shortly!');
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: '',
                message: ''
            });
        } catch (error) {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="relative py-20 font-sans overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{ backgroundImage: `url(${patternBg})`, backgroundRepeat: 'repeat', backgroundSize: '400px' }}
            ></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Text Content */}
                    <div className="w-full lg:w-5/12 space-y-6">
                        <h4 className="text-gray-500 font-bold tracking-widest text-sm uppercase border-b border-gray-300 inline-block pb-1">
                            We're keen to assist you
                        </h4>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                            Identify your <br />
                            goals & let us <br />
                            help you achieve
                        </h2>

                        <p className="text-gray-500 text-lg leading-relaxed pt-4">
                            After we help you discover what you want, we'll work together to find the very best way of achieving it.
                        </p>
                    </div>

                    {/* Right Form Content */}
                    <div className="w-full lg:w-7/12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={sending}
                                    className="w-full bg-gray-50 border-none rounded p-4 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300 outline-none disabled:opacity-50"
                                />

                                {/* Phone */}
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    placeholder="Your Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={sending}
                                    className="w-full bg-gray-50 border-none rounded p-4 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300 outline-none disabled:opacity-50"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Email */}
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={sending}
                                    className="w-full bg-gray-50 border-none rounded p-4 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300 outline-none disabled:opacity-50"
                                />

                                {/* Service Dropdown */}
                                <div className="relative">
                                    <select
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        disabled={sending}
                                        className="w-full bg-gray-50 border-none rounded p-4 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300 outline-none appearance-none cursor-pointer disabled:opacity-50"
                                    >
                                        <option value="" disabled>Service</option>
                                        <option value="Student Visa">Student Visa</option>
                                        <option value="Visitor Visa">Visitor Visa</option>
                                        <option value="Business Visa">Business Visa</option>
                                        <option value="Partner Visa">Partner Visa</option>
                                        <option value="Parent Visa">Parent Visa</option>
                                        <option value="Skilled Visa">Skilled Visa</option>
                                        <option value="Others">Others</option>

                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                disabled={sending}
                                className="w-full bg-gray-50 border-none rounded p-4 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300 outline-none resize-none disabled:opacity-50"
                            ></textarea>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="group relative px-8 py-4 bg-orange-500 text-white font-bold text-sm uppercase tracking-wide rounded overflow-hidden shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {sending ? 'SENDING...' : 'SUBMIT NOW'}
                                        {!sending && (
                                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
