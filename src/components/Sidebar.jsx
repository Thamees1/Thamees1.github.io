import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ onItemClick }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: 'dashboard' },
    { name: 'Experience', path: '/experience', icon: 'history' },
    { name: 'Skills', path: '/skills', icon: 'terminal' },
    { name: 'Projects', path: '/projects', icon: 'folder_open' },
  ];

  return (
    <aside className="w-full h-full bg-console-dark/95 backdrop-blur border-r border-gray-700 flex flex-col justify-between shrink-0 transition-all duration-300">
      <div className="flex flex-col py-6 gap-2">
        <div className="px-6 py-2 hidden md:block">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Navigation</h3>
        </div>

        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={onItemClick}
            className={({ isActive }) => `
              relative flex items-center gap-3 px-3 md:px-6 py-2.5 transition-all group overflow-hidden
              ${isActive
                ? 'text-primary'
                : 'text-gray-400 hover:text-white hover:bg-white/5'}
            `}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_10px_2px_rgba(249,164,6,0.5)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                <span className={`material-symbols-outlined transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-primary drop-shadow-[0_0_8px_rgba(249,164,6,0.5)]' : ''}`}>{item.icon}</span>
                <span className="hidden md:block text-sm font-medium tracking-wide">{item.name}</span>
                <span className="md:hidden text-sm font-medium ml-2">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}

        <div className="px-6 py-2 mt-6 hidden md:block border-t border-gray-800/50 pt-4">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">External Links</h3>
        </div>

        <a href="https://www.linkedin.com/in/thameesh-kumar-051a1b239/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 md:px-6 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors group">
          <span className="material-symbols-outlined group-hover:text-blue-400 transition-colors">link</span>
          <span className="hidden md:block text-sm font-medium">LinkedIn</span>
          <span className="md:hidden text-sm font-medium ml-2">LinkedIn</span>
        </a>
        <a href="mailto:thameesh31052000@gmail.com" className="flex items-center gap-3 px-3 md:px-6 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors group">
          <span className="material-symbols-outlined group-hover:text-red-400 transition-colors">mail</span>
          <span className="hidden md:block text-sm font-medium">Email</span>
           <span className="md:hidden text-sm font-medium ml-2">Email</span>
        </a>
      </div>

      <div className="p-4 border-t border-gray-700/50 hidden md:block bg-gradient-to-t from-black/20 to-transparent">
        <div className="bg-[#27272a]/50 backdrop-blur rounded p-3 border border-gray-700/50 hover:border-primary/30 transition-colors group cursor-default">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold group-hover:text-primary transition-colors">System Status</p>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            </span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-lg font-bold text-green-500 font-mono tracking-tighter">99.9%</span>
            <span className="text-[10px] text-gray-500 mb-1 font-mono">UPTIME</span>
          </div>
          <div className="w-full h-1 bg-gray-700/50 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-green-500 w-[99%] shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
