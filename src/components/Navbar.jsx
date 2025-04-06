function Navbar() {
    return (
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold text-blue-600">Satyendra</h1>
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  