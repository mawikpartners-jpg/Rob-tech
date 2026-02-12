import { useState } from 'react';
import Button from './UI/Button';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'O nas', href: '#about' },
    { label: 'Usługi', href: '#services' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Opinie', href: '#testimonials' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-600">Rob-Tech</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              size="md"
            >
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary-600 hover:text-primary-700 focus:outline-none"
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600 rounded transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 py-2">
              <Button
                onClick={() => scrollToSection('#contact')}
                size="md"
                className="w-full"
              >
                Kontakt
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
