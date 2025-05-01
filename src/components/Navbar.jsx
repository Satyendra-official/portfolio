import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu toggle

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Satyendra</h1>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <li><a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</a></li>
        </ul>
        <DarkModeToggle />
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center space-x-4">
        <DarkModeToggle />
        <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200 focus:outline-none">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 md:hidden z-40 px-6 py-4 shadow-md">
          <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-700 dark:text-gray-200">
            <li><a href="#about" onClick={toggleMenu} className="hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
            <li><a href="#skills" onClick={toggleMenu} className="hover:text-blue-500 dark:hover:text-blue-400">Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu} className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="hover:text-blue-500 dark:hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
