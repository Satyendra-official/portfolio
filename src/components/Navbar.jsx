import DarkModeToggle from './DarkModeToggle';


function Navbar() {
    return (
      <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
  {/* Logo */}
  <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Satyendra</h1>

  {/* Nav Links + Toggle */}
  <div className="flex items-center space-x-6">
    <ul className="flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-200">
      <li><a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
      <li><a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400">Skills</a></li>
      <li><a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a></li>
      <li><a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</a></li>
    </ul>
    
    {/* Toggle Button */}
    <DarkModeToggle />
  </div>
</nav>

    );
  }
  
  export default Navbar;
  