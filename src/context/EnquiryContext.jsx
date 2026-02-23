import React, { createContext, useContext, useState } from 'react';
import EnquiryForm from '../components/EnquiryForm';

const EnquiryContext = createContext();

export const useEnquiry = () => {
    const context = useContext(EnquiryContext);
    if (!context) {
        throw new Error('useEnquiry must be used within an EnquiryProvider');
    }
    return context;
};

export const EnquiryProvider = ({ children }) => {
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    const openEnquiryModal = () => setIsEnquiryModalOpen(true);
    const closeEnquiryModal = () => setIsEnquiryModalOpen(false);

    return (
        <EnquiryContext.Provider value={{ isEnquiryModalOpen, openEnquiryModal, closeEnquiryModal }}>
            {children}
            <EnquiryForm isOpen={isEnquiryModalOpen} onClose={closeEnquiryModal} />
        </EnquiryContext.Provider>
    );
};
