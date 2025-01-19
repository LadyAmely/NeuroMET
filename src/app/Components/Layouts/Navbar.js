'use client';
import Link from 'next/link';
import "../../CSS/navbar.css";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">

            <div className="logo">
                <a>
                    <img src="img.png" alt="Logo" />
                </a>
            </div>

            <ul className="nav-links">
                <li>
                    <Link href="#registration" legacyBehavior>
                        <a>Rejestracja</a>
                    </Link>
                </li>
                <li>
                    <Link href="#program" legacyBehavior>
                        <a>Program</a>
                    </Link>
                </li>
                <li>
                    <Link href="#seminar" legacyBehavior>
                        <a>Archiwum</a>
                    </Link>
                </li>
                <li>
                    <Link href="#contact" legacyBehavior>
                        <a>Kontakt</a>
                    </Link>
                </li>
            </ul>

            <div className="container-hamburger" onClick={toggleMenu}>
                <div className="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={`menu ${isMenuOpen ? "open" : ""}`}>

                <button className="close-button" onClick={() => setIsMenuOpen(false)}>
                    ✖
                </button>

                <ul>
                    <li>
                        <a href="#registration" onClick={() => setIsMenuOpen(false)}>Rejestracja</a>
                    </li>
                    <li>
                        <a href="#program" onClick={() => setIsMenuOpen(false)}>Program</a>
                    </li>
                    <li>
                        <a href="#seminar" onClick={() => setIsMenuOpen(false)}>Archiwum</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
