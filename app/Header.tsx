import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaNodeJs } from 'react-icons/fa6';
import { HiMenu, HiX } from "react-icons/hi";

const Header = ({ logo }: { logo: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  if (!mounted) return null;

  return (
    <header className="w-full flex items-center justify-between h-20 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 md:px-10 lg:px-16 xl:px-24 sticky top-0 z-30">
      <Link href="#home" className="font-bold text-xl md:text-2xl flex items-center gap-2">
        <FaNodeJs className="text-violet-600" />
        {logo}
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      {/* Desktop Dark Mode */}
      <div className="hidden md:flex items-center gap-4">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 bg-gray-200 rounded-full dark:bg-gray-800 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all duration-300"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <BiSun /> : <BiMoon />}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center gap-2">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 bg-gray-200 rounded-full dark:bg-gray-800 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all duration-300"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <BiSun /> : <BiMoon />}
        </button>

        <button
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 p-2 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center hover:ring-2 ring-gray-300 transition-all duration-300"
        >
          {menuOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-6 text-white text-lg md:hidden"
          onClick={() => setMenuOpen(false)} // close menu if overlay clicked
        >
          <div className="flex flex-col items-center gap-6" onClick={e => e.stopPropagation()}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
