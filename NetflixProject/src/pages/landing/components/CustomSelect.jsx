import React from 'react';

const CustomSelect = ({ selectedOption, setSelectedOption, options }) => {
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <select
            value={selectedOption}
            onChange={handleChange}
            className="px-4 py-2 bg-zinc-800 text-white rounded-lg text-sm">
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default CustomSelect;
