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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all scale-100">

                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex justify-between items-center text-white">
                    <div>
                        <h2 className="text-2xl font-bold">Enquiry Form</h2>
                        <p className="text-blue-100 text-sm mt-1">Start your migration journey with us.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                        disabled={sending}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={sending}
                        />
                    </div>

                    {/* Email & Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={sending}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                            <input
                                type="tel"
                                name="contact"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50"
                                placeholder="+91 98765 43210"
                                value={formData.contact}
                                onChange={handleChange}
                                disabled={sending}
                            />
                        </div>
                    </div>

                    {/* Country & Visa Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Interested Country</label>
                            <select
                                name="country"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white disabled:opacity-50"
                                value={formData.country}
                                onChange={handleChange}
                                disabled={sending}
                            >
                                <option value="" disabled>Select Country</option>
                                <option value="Australia">Australia</option>
                                <option value="Canada">Canada</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="UK">United Kingdom</option>
                                <option value="USA">USA</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Visa Type</label>
                            <select
                                name="visaType"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white disabled:opacity-50"
                                value={formData.visaType}
                                onChange={handleChange}
                                disabled={sending}
                            >
                                <option value="" disabled>Select Visa Type</option>
                                <option value="Student Visa">Student Visa</option>
                                <option value="Visitor Visa">Visitor Visa</option>
                                <option value="Business Visa">Business Visa</option>
                                <option value="Partner Visa">Partner Visa</option>
                                <option value="Parent Visa">Parent Visa</option>
                                <option value="Skilled Visa">Skilled Visa</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none disabled:opacity-50"
                            placeholder="Tell us about your requirements..."
                            value={formData.message}
                            onChange={handleChange}
                            disabled={sending}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={sending}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {sending ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : 'Submit Enquiry'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;
