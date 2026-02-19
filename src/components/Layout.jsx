import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Terminal from './Terminal';
import { AnimatePresence, motion } from 'framer-motion';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="bg-background-dark text-white font-sans min-h-screen flex flex-col overflow-hidden relative selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      <div className="flex flex-1 overflow-hidden h-[calc(100vh-3.5rem)] relative">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex flex-col w-16 md:w-64 shrink-0 border-r border-gray-700 z-20 sticky top-0 h-full bg-console-dark backdrop-blur-md bg-opacity-95">
           <Sidebar />
        </div>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Sidebar */}
        <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-sidebar"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-0 left-0 h-full w-64 bg-console-dark z-40 md:hidden border-r border-gray-700 shadow-2xl"
          >
            <Sidebar onItemClick={() => setIsMobileMenuOpen(false)} />
          </motion.div>
        )}
        </AnimatePresence>

        <main className="flex-1 overflow-y-auto bg-background-light/5 dark:bg-black/20 p-4 md:p-8 relative scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Floating Terminal Widget */}
      <Terminal />
    </div>
  );
};

export default Layout;
