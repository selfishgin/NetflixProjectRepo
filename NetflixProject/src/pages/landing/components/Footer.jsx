import React, { useState } from "react";
import EmailInputForEntry from "./EmailInputForEntry";

const Footer = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { value: "en", label: "English" },
        { value: "az", label: "Azərbaycanca" },
    ];

    return (
        <div className="bg-black text-white/70 mt-20 mb-24">
            {/* Top Section */}
            <EmailInputForEntry />

            <div className="max-w-6xl mx-auto ml-[9rem]">
                {/* Links Section */}
                <div className="mt-20">
                    <a href="#" className="underline">
                        Questions? Contact us.
                    </a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-12">
                    <a href="#" className="underline">
                        FAQ
                    </a>
                    <a href="#" className="underline">
                        Help Center
                    </a>
                    <a href="#" className="underline">
                        Account
                    </a>
                    <a href="#" className="underline">
                        Media Center
                    </a>
                    <a href="#" className="underline">
                        Investor Relations
                    </a>
                    <a href="#" className="underline">
                        Jobs
                    </a>
                    <a href="#" className="underline">
                        Ways to Watch
                    </a>
                    <a href="#" className="underline">
                        Terms of Use
                    </a>
                    <a href="#" className="underline">
                        Privacy
                    </a>
                    <a href="#" className="underline">
                        Cookie Preferences
                    </a>
                    <a href="#" className="underline">
                        Corporate Information
                    </a>
                    <a href="#" className="underline">
                        Contact Us
                    </a>
                    <a href="https://fast.com/" target="_blank" className="underline">
                        Speed Test
                    </a>
                    <a href="#" className="underline">
                        Legal Notices
                    </a>
                    <a href="#" className="underline">
                        Only on Netflix
                    </a>
                </div>

                {/* Custom Language Selector */}
                <div className="mt-14 flex items-center justify-start relative">
                    <div className="relative inline-block">
                        {/* Dropdown Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center justify-between bg-black text-white border border-gray-500 px-4 py-2 rounded-md focus:outline-none"
                        >
                            <div className="flex items-center">
                                {/* SVG Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    role="img"
                                    viewBox="0 0 16 16"
                                    width="16"
                                    height="16"
                                    aria-hidden="true"
                                    className="mr-2"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                {selectedLanguage}
                            </div>
                            {/* Dropdown Arrow */}
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

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute mt-1 w-full bg-black text-white rounded shadow-lg z-10">
                                {languages.map((lang) => (
                                    <div
                                        key={lang.value}
                                        onClick={() => {
                                            setSelectedLanguage(lang.label);
                                            setIsOpen(false);
                                        }}
                                        className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
                                    >
                                        {lang.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Branding */}
                <p className="mt-8 text-center flex justify-start">Netflix Azerbaijan</p>
            </div>
        </div>
    );
};

export default Footer;
