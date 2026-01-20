import React from 'react';
import migrationImg from '../assets/migration.png';
import educationImg from '../assets/education.png';
import refusalsImg from '../assets/refusals.png';
import healthImg from '../assets/health_insurance.png';

const services = [
    {
        title: 'Migration',
        image: migrationImg,
        description: 'Migrating to Australia is becoming an attractive option for more and more people..'
    },
    {
        title: 'Education',
        image: educationImg,
        description: 'Australia is a hot spot for International students across the world. It is currently home..'
    },
    {
        title: 'Refusals / Appeals',
        image: refusalsImg,
        description: 'It is always very disappointing to have an application refused, and scary to have a..'
    },
    {
        title: 'Health Insurance',
        image: healthImg,
        description: 'Purchasing and maintaining an active health insurance policy is a mandatory condition of..'
    }
];

const FeaturedServices = () => {
    return (
        <section className="py-16 px-4 md:px-12 bg-white text-center">
            <h3 className="text-gray-500 uppercase tracking-widest text-sm font-semibold mb-2 decoration-gray-400 underline underline-offset-4">Featured Services</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 max-w-4xl mx-auto">
                We Provide Visa & Immigration Service From Experienced Lawyers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 text-left">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedServices;
