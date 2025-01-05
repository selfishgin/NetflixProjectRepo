import { div, h3 } from "motion/react-client";
import React, { useState } from "react";

const EmailInput = ({ onSubmit }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === "") {
            alert("Please enter a valid email address.");
            return;
        }
        onSubmit(email);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 w-full"
        >
            <div className="relative flex-col flex justify-center align-middle items-center">
                <h3 className="text-white mb-4">Ready to watch? Enter your email to create or restart your membership.</h3>
                {/* Email Input */}
                <div className="relative flex-grow flex justify-center gap-1 items-center">

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        className="min-w-[22.5rem] p-4 text-white border border-[#5e5e5e] rounded-md bg-[rgba(22,22,22,0.7)] placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                    />
                    <button
                        type="submit"
                        className="flex w-[13.5rem] h-[3.5rem] items-center align-middle justify-center px-8 py-4 text-[1.5rem] text-white bg-red-600 rounded-md font-semibold hover:bg-red-700 transition"
                    >
                        Get Started
                        <span className="ml-2 text-lg">&rarr;</span>
                    </button>
                </div>
            </div>

            {/* Get Started Button */}
        </form>
    );
};

export default EmailInput;
