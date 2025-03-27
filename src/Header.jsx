import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-blue-600">
         Digital Bootup
        </a>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-blue-600">Home</button>
          <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-blue-600">About</button>
          <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600">Services</button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600">Contact</button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t p-4">
          <button onClick={() => scrollToSection("home")} className="block py-2 text-gray-700 hover:text-blue-600">Home</button>
          <button onClick={() => scrollToSection("about")} className="block py-2 text-gray-700 hover:text-blue-600">About</button>
          <button onClick={() => scrollToSection("services")} className="block py-2 text-gray-700 hover:text-blue-600">Services</button>
          <button onClick={() => scrollToSection("contact")} className="block py-2 text-gray-700 hover:text-blue-600">Contact</button>
        </nav>
      )}
    </header>
  );
};
