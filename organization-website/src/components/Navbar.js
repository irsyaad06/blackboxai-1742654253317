import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0A0F30] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and company name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">Organization</span>
            </Link>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/members"
                className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Members
              </Link>
              <Link
                to="/timeline"
                className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Timeline
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/members"
                className="hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={toggleMenu}
              >
                Members
              </Link>
              <Link
                to="/timeline"
                className="hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={toggleMenu}
              >
                Timeline
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;