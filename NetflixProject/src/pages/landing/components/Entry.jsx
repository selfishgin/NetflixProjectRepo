import React from 'react';
import Navbar from './Navbar';
import EmailInputForEntry from './EmailInputForEntry';
import { useTranslation } from 'react-i18next';

const Entry = () => {
    const { t } = useTranslation();

    return (
        <div className="relative h-screen">
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-[url('src/assets/NetflixBackground.jpg')] bg-cover brightness-50 z-0"
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Navbar */}
            <div className="relative z-10">
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="flex flex-col justify-center text-center items-center mt-[80px]">
                <h1 className="relative font-black text-[3.5rem] w-[36.5rem] text-white mb-3">
                    {t('entryTitle')}
                </h1>
                <p className="relative font-medium text-[1.25rem] w-[36.5rem] text-white mb-5">
                    {t('entrySubtitle')}
                </p>
                <EmailInputForEntry />
            </div>
        </div>
    );
};

export default Entry;
