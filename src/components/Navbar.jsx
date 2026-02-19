import React from 'react';

const Navbar = ({ onMenuClick }) => {
  return (
    <header className="h-14 bg-console-dark border-b border-gray-700 flex items-center justify-between px-4 z-50 shrink-0 sticky top-0">
      <div className="flex items-center gap-6">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={onMenuClick}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <div className="flex items-center gap-2 text-white">
          <span className="material-symbols-outlined text-primary text-3xl">cloud_circle</span>
          <h1 className="text-lg font-bold tracking-tight hidden sm:block">DevOps Console</h1>
        </div>

        {/* Search Bar - Decorative */}
        <div className="hidden md:flex items-center relative group w-96">
          <span className="material-symbols-outlined absolute left-3 text-gray-400 group-focus-within:text-primary transition-colors text-xl">search</span>
          <input
            className="w-full bg-[#27272a] border border-transparent focus:border-primary/50 text-sm text-white rounded pl-10 pr-4 py-1.5 focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-500"
            placeholder="Search for services, skills, logs..."
            type="text"
            readOnly
          />
          <span className="absolute right-3 text-xs text-gray-500 font-mono">/</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Region Selector - Decorative */}
        <button className="hidden sm:flex items-center gap-1 text-sm text-gray-300 hover:text-primary transition-colors cursor-default">
          <span>Region:</span>
          <span className="font-bold text-primary">ap-south-1</span>
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>

        {/* Tools */}
        <div className="flex items-center gap-2 border-l border-gray-700 pl-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors relative" aria-label="Notifications">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-500 rounded-full"></span>
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors" aria-label="Help">
            <span className="material-symbols-outlined text-[20px]">help</span>
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors" aria-label="Settings">
            <span className="material-symbols-outlined text-[20px]">settings</span>
          </button>
        </div>

        {/* Profile Dropdown Trigger */}
        <button className="flex items-center gap-2 ml-2 hover:bg-[#27272a] p-1 pr-3 rounded transition-colors" aria-label="User Profile">
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border border-primary/50"
          />
          <span className="text-sm font-medium hidden sm:block text-white">Thameesh Kumar</span>
          <span className="material-symbols-outlined text-sm text-gray-400">expand_more</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
