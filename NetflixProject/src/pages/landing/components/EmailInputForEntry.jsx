import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const EmailInputForEntry = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }
    navigate("/signup", { state: { email } }); // Pass email to Signup page
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 w-full"
    >
      <div className="relative flex-col flex justify-center align-middle items-center">
        <h3 className="text-white mb-4">
          {t('readyToWatch')}
        </h3>
        <div className="relative flex-grow flex justify-center gap-1 items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailAddress')} //translate
            className="min-w-[22.5rem] p-4 text-white border border-[#5e5e5e] rounded-md bg-[rgba(22,22,22,0.7)] placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-white "
          />
          <button
            type="submit"
            className="flex w-[13.5rem] h-[3.5rem] items-center align-middle justify-center px-8 py-4 text-[1.5rem] text-white bg-red-600 rounded-md font-semibold hover:bg-red-700 transition"
          >
            {t('entryCTA')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              aria-hidden="true"
              className="ml-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4371 8.00153L4.96857 2.53295L6.02923 1.47229L12.0281 7.4712C12.1688 7.61185 12.2478 7.80262 12.2478 8.00153C12.2478 8.20044 12.1688 8.39121 12.0281 8.53186L6.02923 14.5308L4.96857 13.4701L10.4371 8.00153Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmailInputForEntry;
