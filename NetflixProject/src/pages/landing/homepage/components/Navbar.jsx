import React from 'react';
import netflixLogo from 'src/assets/NetflixLogo.png';

const Navbar = ({ selectedTab, setSelectedTab, tabItems }) => {
  return (
    <nav className="absolute top-0 left-0 max-w-[1440px] w-screen z-10 flex items-center justify-between px-6 py-4 ">
      {/* Netflix Logo */}
      <img
        src={netflixLogo}
        alt="Netflix Logo"
        className="w-20 h-auto cursor-pointer"
        onClick={() => setSelectedTab(tabItems[0])} // Optional: Reset to Home when clicking logo
      />

      {/* Tab Buttons */}
      <div className="flex items-center gap-6">
        {tabItems.map((item) => (
          <button
            key={item.value}
            className={`text-sm md:text-base ${
              selectedTab.value === item.value
                ? 'font-bold text-white'
                : 'text-zinc-300'
            } hover:text-white`}
            onClick={() => setSelectedTab(item)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
