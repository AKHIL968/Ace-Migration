import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-Photoroom.png';
import EnquiryForm from '../components/EnquiryForm';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    // Handle scroll to hide/show top bar
    useState(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', link: '/' },
        {
            name: 'Migration',
            link: '/',
            dropdown: [
                {
                    name: 'Study Visa',
                    link: '/migration/study-visa',
                    subDropdown: [
                        { name: 'Temporary Study Visa - Subclass 485', link: '/migration/study-visa/temporary' },
                        { name: 'Post Study Work Visa - Subclass 485', link: '/migration/study-visa/post-study' },

                    ]
                },
                {
                    name: 'Permanent Visa',
                    link: '/migration/permanent-visa',
                    subDropdown: [
                        { name: 'Skilled Independent Visa - Subclass 189', link: '/migration/permanent-visa/skilled-independent' },
                        { name: 'Skilled Nominated Visa - Subclass 190', link: '/migration/permanent-visa/skilled-nominated' },

                    ]
                },
                {
                    name: 'Regional Visa',
                    link: '/migration/regional-visa',
                    subDropdown: [
                        { name: 'Permanent Resident (Skillled Regional) Visa - Subclass 191', link: '/migration/regional-visa/permanent' },
                        { name: 'Skilled Work Regional (Provisional) Visa - Subclass 491', link: '/migration/regional-visa/skilled-work' },

                    ]
                },

            ]
        },
        {
            name: 'Study Overseas',
            link: '/study-overseas',
            dropdown: [
                {
                    name: 'Study In Australia',
                    link: '/study-overseas/australia',
                    subDropdown: [
                        { name: 'Australia Basics', link: '/study-overseas/australia/basics' },
                        { name: 'Earning & Spending', link: '/study-overseas/australia/finance' },
                        { name: 'Education System', link: '/study-overseas/australia/education' },
                        { name: 'Student Visa', link: '/study-overseas/australia/student-visa' },

                    ]
                },
                {
                    name: 'Study In Canada',
                    link: '/study-overseas/canada',
                    subDropdown: [
                        { name: 'Canada Basics', link: '/study-overseas/canada/basics' },
                        { name: 'Earning & Spending', link: '/study-overseas/canada/finance' },
                        { name: 'Education System', link: '/study-overseas/canada/education' },
                        { name: 'Student Visa', link: '/study-overseas/canada/student-visa' }
                    ]
                },
                {
                    name: 'Study In New Zealand',
                    link: '/study-overseas/new-zealand',
                    subDropdown: [
                        { name: 'New Zealand Basics', link: '/study-overseas/new-zealand/basics' },
                        { name: 'Earning & Spending', link: '/study-overseas/new-zealand/finance' },
                        { name: 'Education System', link: '/study-overseas/new-zealand/education' },
                        { name: 'Student Visa', link: '/study-overseas/new-zealand/student-visa' }
                    ]
                },

                {
                    name: 'Study In UK',
                    link: '/study-overseas/uk',
                    subDropdown: [
                        { name: 'UK Basics', link: '/study-overseas/uk/basics' },
                        { name: 'Earning & Spending', link: '/study-overseas/uk/finance' },
                        { name: 'Education System', link: '/study-overseas/uk/education' },
                        { name: 'Student Visa', link: '/study-overseas/uk/student-visa' }
                    ]
                }
            ]
        },
        {
            name: 'Visitor Visa',
            link: '/visitor-visa',
            dropdown: [
                {
                    name: 'Family Sponsored Visa',
                    link: '/visitor-visa/family-sponsored',
                    // subDropdown: [
                    //     { name: 'Requirements', link: '/visitor-visa/tourist/requirements' },
                    //     { name: 'Documentation', link: '/visitor-visa/tourist/docs' },
                    //     { name: 'Application', link: '/visitor-visa/tourist/application' }
                    // ]
                },
                {
                    name: 'Work And Holiday Visa - Subclass 462 & 417',
                    link: '/visitor-visa/work-and-holiday',
                    // subDropdown: [
                    //     { name: 'Eligibility', link: '/visitor-visa/business/eligibility' },
                    //     { name: 'Process', link: '/visitor-visa/business/process' },
                    //     { name: 'Documents', link: '/visitor-visa/business/documents' }
                    // ]
                },

            ]
        },
        {
            name: 'Others',
            link: '/others',
            dropdown: [
                {
                    name: 'Business Visa',
                    link: '/others/business-visa',
                    // subDropdown: [
                    //     { name: 'IELTS', link: '/others/exam-prep/ielts' },
                    //     { name: 'TOEFL', link: '/others/exam-prep/toefl' },
                    //     { name: 'PTE', link: '/others/exam-prep/pte' }
                    // ]
                },
                {
                    name: 'Family Visa',
                    link: '/others/family-visa',
                    subDropdown: [
                        { name: 'Partner Visa - Subclass 309, 820, 100, 801', link: '/others/family-visa/partner' },
                        { name: 'Parent Visa - Subclass 103, 143, 173, 804, 884, 864', link: '/others/family-visa/parent' },
                    ]
                },
                {
                    name: 'Insurance',
                    link: '/others/insurance',
                    subDropdown: [
                        {
                            name: "Allianz",
                            link: "https://api.allianz.com/myquote/1?groupId=55318",
                            external: true
                        },
                        {
                            name: "IMAN",
                            link: "https://api.allianz.com/myquote/1?groupId=55318",
                            external: true
                        },


                    ]
                }
            ]
        }
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-50 to-indigo-50   transition-all duration-300">
                {/* Top Contact Bar - Slides up when scrolling */}
                <div className={`w-full px-4 sm:px-6 lg:px-20 py-2.5 flex justify-between items-center border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 py-0 hidden' : 'max-h-20 block'}`}>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                        {/* <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg> */}
                        <span className="hidden sm:inline">Opening Time 8:30 AM - 9:30 PM</span>
                    </div>
                    <div
                        className="flex items-center gap-2 text-sm text-gray-700 lg:mr-2 cursor-pointer hover:text-blue-600 transition-colors"
                        onClick={() => setIsEnquiryModalOpen(true)}
                    >
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Apply Now</span>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="w-full   px-4 sm:px-6 lg:px-20">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo Section - Fixed Width */}
                        <div className="flex-shrink-0 w-32 lg:w-40">
                            <Link to="/" className="inline-block">
                                {/* <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
                                ACE
                            </div> */}
                                <img src={logo} alt="" />
                            </Link>
                        </div>

                        {/* Desktop Navigation - Perfectly Centered */}
                        <nav className="hidden  lg:flex absolute left-1/2 transform -translate-x-1/2">
                            <div className="flex items-center gap-1 xl:gap-3">
                                {navItems.map((item) => (
                                    <div key={item.name} className="relative group">
                                        <Link
                                            to={item.link}
                                            className="flex items-center gap-1 px-4 py-2 text-[#0e3a66]  font-medium hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-blue-50"
                                        >
                                            <span>{item.name}</span>
                                            {item.dropdown && (
                                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </Link>

                                        {/* Level 1 Dropdown Menu */}
                                        {item.dropdown && (
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                                <div className="bg-white rounded-xl shadow-2xl ring-1 ring-black/5 overflow-visible min-w-[220px] p-2">
                                                    {item.dropdown.map((subItem, idx) => (
                                                        <div key={subItem.name} className="relative group/sub">
                                                            <Link
                                                                to={subItem.link}
                                                                className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-lg transition-all duration-200"
                                                                style={{ transitionDelay: `${idx * 30}ms` }}
                                                            >
                                                                <span>{subItem.name}</span>
                                                                {subItem.subDropdown && (
                                                                    <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                    </svg>
                                                                )}
                                                            </Link>

                                                            {/* Level 2 Sub-Dropdown Menu */}
                                                            {subItem.subDropdown && (
                                                                <div className="absolute left-full top-0 ml-3 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                                                                    <div className="bg-white rounded-xl shadow-2xl ring-1 ring-black/5 overflow-hidden min-w-[200px] p-2">
                                                                        {subItem.subDropdown.map((nestedItem, nestedIdx) => (
                                                                            nestedItem.external || nestedItem.link.startsWith('http') ? (
                                                                                <a
                                                                                    key={nestedItem.name}
                                                                                    href={nestedItem.link}
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-lg transition-all duration-200"
                                                                                    style={{ transitionDelay: `${nestedIdx * 30}ms` }}
                                                                                >
                                                                                    {nestedItem.name}
                                                                                </a>
                                                                            ) : (
                                                                                <Link
                                                                                    key={nestedItem.name}
                                                                                    to={nestedItem.link}
                                                                                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-lg transition-all duration-200"
                                                                                    style={{ transitionDelay: `${nestedIdx * 30}ms` }}
                                                                                >
                                                                                    {nestedItem.name}
                                                                                </Link>
                                                                            )
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </nav>

                        {/* Right Section - Fixed Width */}
                        <div className="flex items-center justify-end gap-3 w-32 lg:w-40">
                            {/* Contact Button - Desktop */}
                            <a
                                href="tel:+919672233443"
                                className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="hidden xl:inline">Contact</span>
                            </a>

                            {/* Hamburger Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="lg:hidden p-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 active:scale-95"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#0e3a66">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
                    {/* Backdrop */}
                    <div
                        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    ></div>

                    {/* Drawer */}
                    <div className={`absolute top-0 right-0 w-[80%] h-screen bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        {/* Header */}
                        <div className="p-5 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Menu</span>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200 active:scale-90"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Items */}
                        <div className="flex-1 overflow-y-auto py-4">
                            <nav className="flex flex-col px-4 space-y-1">
                                {navItems.map((item, idx) => (
                                    <div key={item.name}>
                                        <div
                                            className="flex items-center justify-between px-4 py-3.5 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl transition-all font-medium cursor-pointer active:scale-98"
                                            onClick={() => {
                                                if (item.dropdown) {
                                                    setOpenDropdown(openDropdown === idx ? null : idx);
                                                    setOpenSubDropdown(null);
                                                } else {
                                                    setIsMobileMenuOpen(false);
                                                }
                                            }}
                                        >
                                            <Link to={item.link} className="flex-1" onClick={(e) => item.dropdown && e.preventDefault()}>
                                                {item.name}
                                            </Link>
                                            {item.dropdown && (
                                                <svg
                                                    className={`w-5 h-5 transition-transform duration-300 ${openDropdown === idx ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </div>

                                        {/* Mobile Level 1 Dropdown Items */}
                                        {item.dropdown && (
                                            <div className={`overflow-hidden transition-all duration-300 ${openDropdown === idx ? 'max-h-[600px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                                                <div className="pl-4 ml-4 border-l-2 border-blue-200 space-y-1">
                                                    {item.dropdown.map((subItem, subIdx) => (
                                                        <div key={subItem.name}>
                                                            <div
                                                                className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 active:scale-98 cursor-pointer"
                                                                onClick={() => {
                                                                    if (subItem.subDropdown) {
                                                                        setOpenSubDropdown(openSubDropdown === subIdx ? null : subIdx);
                                                                    } else {
                                                                        setIsMobileMenuOpen(false);
                                                                    }
                                                                }}
                                                            >
                                                                <Link to={subItem.link} className="flex-1" onClick={(e) => subItem.subDropdown && e.preventDefault()}>
                                                                    {subItem.name}
                                                                </Link>
                                                                {subItem.subDropdown && (
                                                                    <svg
                                                                        className={`w-4 h-4 transition-transform duration-300 ${openSubDropdown === subIdx ? 'rotate-180' : ''}`}
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                    </svg>
                                                                )}
                                                            </div>

                                                            {/* Mobile Level 2 Sub-Dropdown Items */}
                                                            {subItem.subDropdown && (
                                                                <div className={`overflow-hidden transition-all duration-300 ${openSubDropdown === subIdx ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                                                                    <div className="pl-4 ml-4 border-l-2 border-indigo-200 space-y-1">
                                                                        {subItem.subDropdown.map((nestedItem) => (
                                                                            <Link
                                                                                key={nestedItem.name}
                                                                                to={nestedItem.link}
                                                                                className="block px-3 py-2 text-xs text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
                                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                            >
                                                                                {nestedItem.name}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>

                        {/* Footer CTA */}
                        <div className="p-5 border-t border-gray-200 space-y-3 bg-gray-50">
                            <a
                                href="tel:+919672233443"
                                className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition-all shadow-lg shadow-blue-200"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Us Now
                            </a>
                            <div className="text-center text-xs text-gray-500">
                                +91 9672233443
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Enquiry Form Modal */}
            <EnquiryForm
                isOpen={isEnquiryModalOpen}
                onClose={() => setIsEnquiryModalOpen(false)}
            />
        </>
    );
}

export default Header;