import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'src/locales/i18n.js';

const Navbar = () => {
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(
        i18n.language === 'az' ? 'Azərbaycanca' : 'English'
    );

    const languages = [
        { value: 'en', label: 'English' },
        { value: 'az', label: 'Azərbaycanca' },
    ];

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang); // Correctly call the i18n method
        setSelectedLanguage(languages.find((l) => l.value === lang).label);
        setIsOpen(false);
    };

    return (
        <div className="bg-gradient-to-b from-black to-transparent h-[120px] w-full flex justify-between items-center">
            <div className="w-full mx-48 flex justify-between items-center">
                <div>
                    <img src="src/assets/NetflixLogo.png" alt="Netflix Logo" />
                </div>

                <div className="flex gap-2">
                    <div className="relative inline-block min-w-[8rem]">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center justify-between w-full bg-black text-white border rounded border-white/40 px-3 py-2"
                        >
                            <span>{selectedLanguage}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {isOpen && (
                            <div className="absolute mt-1 w-full bg-black text-white rounded shadow-lg z-10">
                                {languages.map((lang) => (
                                    <div
                                        key={lang.value} // Add unique key
                                        onClick={() => handleLanguageChange(lang.value)}
                                        className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
                                    >
                                        {lang.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-red-600 hover:bg-red-700 rounded p-1 h-[42px] w-[5rem] text-white"
                    >
                        {t('signIn')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
