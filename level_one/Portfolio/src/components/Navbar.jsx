import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          <span className="text-blue-600 dark:text-blue-400">NonWare</span>.dev
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-xl ml-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <a
            href="#contact"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="text-xl text-gray-700 dark:text-gray-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full text-center mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}
