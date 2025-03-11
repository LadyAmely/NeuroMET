'use client';
import Link from 'next/link';
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Close menu when screen size changes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // md breakpoint is 768px
                setIsMenuOpen(false);
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar flex justify-between items-center">
            {/* Logo - centered on mobile, left-aligned on desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none md:flex-grow-0 h-[70px] w-[70px] flex items-center">
                <a className="cursor-pointer">
                    <img 
                        src="img.png" 
                        alt="Logo" 
                        className="max-h-full w-auto rounded-full transition-transform duration-300 hover:scale-110"
                    />
                </a>
            </div>

            {/* Hamburger menu button (mobile only) */}
            <button 
                className="md:hidden z-10 w-[30px] h-[25px] flex flex-col justify-around items-center bg-transparent border-0"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className={`block w-full h-[4px] bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-[9px]' : ''}`}></span>
                <span className={`block w-full h-[4px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-full h-[4px] bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-[9px]' : ''}`}></span>
            </button>
            
            {/* Desktop navigation */}
            <ul className="hidden md:flex list-none gap-5 items-center ml-auto">
                <li className="relative">
                    <Link 
                        href="#registration" 
                        className="no-underline text-white text-base font-medium py-[10px] px-[15px] rounded-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-[var(--navbar-bg)] to-transparent hover:text-[var(--navbar-accent)] hover:scale-105"
                    >
                        Rejestracja
                    </Link>
                </li>
                <li className="relative">
                    <Link 
                        href="#program" 
                        className="no-underline text-white text-base font-medium py-[10px] px-[15px] rounded-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-[var(--navbar-bg)] to-transparent hover:text-[var(--navbar-accent)] hover:scale-105"
                    >
                        Program
                    </Link>
                </li>
                <li className="relative">
                    <Link 
                        href="#seminar" 
                        className="no-underline text-white text-base font-medium py-[10px] px-[15px] rounded-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-[var(--navbar-bg)] to-transparent hover:text-[var(--navbar-accent)] hover:scale-105"
                    >
                        Archiwum
                    </Link>
                </li>
                <li className="relative">
                    <Link 
                        href="#contact" 
                        className="no-underline text-white text-base font-medium py-[10px] px-[15px] rounded-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-[var(--navbar-bg)] to-transparent hover:text-[var(--navbar-accent)] hover:scale-105"
                    >
                        Kontakt
                    </Link>
                </li>
            </ul>

            {/* Right side - empty space for mobile to balance hamburger */}
            <div className="w-[30px] md:hidden"></div>

            {/* Mobile side menu - slide in from right */}
            <div className={`fixed top-0 ${isMenuOpen ? 'right-0' : '-right-full'} w-[250px] h-full bg-[var(--navbar-bg)] flex flex-col justify-center items-center transition-all duration-300 z-[999] md:hidden`}>
                <button 
                    className="absolute top-[10px] right-[15px] bg-transparent border-none text-2xl text-white cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                >
                    ✖
                </button>

                <ul className="list-none p-0 m-0">
                    <li className="my-[15px]">
                        <a 
                            href="#registration" 
                            onClick={() => setIsMenuOpen(false)}
                            className="no-underline text-white text-lg font-bold"
                        >
                            Rejestracja
                        </a>
                    </li>
                    <li className="my-[15px]">
                        <a 
                            href="#program" 
                            onClick={() => setIsMenuOpen(false)}
                            className="no-underline text-white text-lg font-bold"
                        >
                            Program
                        </a>
                    </li>
                    <li className="my-[15px]">
                        <a 
                            href="#seminar" 
                            onClick={() => setIsMenuOpen(false)}
                            className="no-underline text-white text-lg font-bold"
                        >
                            Archiwum
                        </a>
                    </li>
                    <li className="my-[15px]">
                        <a 
                            href="#contact" 
                            onClick={() => setIsMenuOpen(false)}
                            className="no-underline text-white text-lg font-bold"
                        >
                            Kontakt
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;