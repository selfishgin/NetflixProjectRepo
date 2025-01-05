import React from "react";
import EmailInput from "./EmailInput";

const Footer = () => {
    return (
        <div className="bg-black text-white/70 mt-20 mb-24">
            {/* Top Section */}


            <EmailInput />


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
                    <a href="#" className="underline">
                        Speed Test
                    </a>
                    <a href="#" className="underline">
                        Legal Notices
                    </a>
                    <a href="#" className="underline">
                        Only on Netflix
                    </a>
                </div>

                {/* Language Selector */}
                <div className="mt-14 flex items-center justify-start">
                    <select
                        className="bg-black text-white border border-gray-500 px-4 py-2 rounded-md focus:outline-none"
                    >
                        <option value="en">English</option>
                        <option value="az">Azərbaycan</option>
                    </select>
                </div>

                {/* Footer Branding */}
                <p className="mt-8 text-center flex justify-start">Netflix Azerbaijan</p>
            </div>
        </div>
    );
};

export default Footer;
