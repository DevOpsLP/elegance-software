import React, { useState, useEffect } from "react";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about-us" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Contact Us", href: "#contact-us"}
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scrolling logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 65) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
      setIsScrolled(currentScrollY > 65); // Add shadow after scrolling down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    event.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Placeholder div to prevent layout shift */}
      <div className={`${isScrolled ? "h-32" : ""}`}></div>

      <nav
        className={`w-full h-32 flex items-center justify-between lg:px-16 md:px-10 px-6 transition-transform duration-300 ${
          isScrolled ? "shadow-md bg-slate-50 fixed top-0 left-0" : "sticky top-0"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"} z-40`}
      >
        {/* Logo */}
        <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>
          <img
            src="assets/logo.svg"
            alt="Logo"
            className="md:h-26 md:w-auto w-40 my-5"
          />
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 flex-grow-0">
          {navLinks.map((link) => (
            <li key={link.name} className="relative overflow-hidden">
              <div className="spin-container flex flex-col relative transition-transform duration-500 ease-in-out">
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-gray-800 text-xl uppercase font-light"
                >
                  {link.name}
                </a>
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="move-down text-gray-800 text-xl uppercase font-light"
                >
                  {link.name}
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => toggleMenu()}
            className="text-gray-700"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen transform transition-transform duration-300 ease-in-out z-30 ${
            isMenuOpen ? "translate-y-0 bg-slate-200" : "-translate-y-full"
          }`}
        >
          {/* Close Button */}
          {isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-12 right-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
              aria-label="Close Menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          {/* Logo mobile version*/}
          {isMenuOpen && (
            <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>
              <img
                src="assets/logo.svg"
                alt="Logo"
                className="w-1/2 mx-auto my-5"
              />
            </a>
          )}

          <ul className="flex flex-col items-center mt-16 space-y-8 h-full">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href);
                    setIsMenuOpen(false);
                  }}
                  className="text-4xl text-gray-800 font-light"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
