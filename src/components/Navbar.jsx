import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import '../App.css';
import gsap from 'gsap';
import Resume from '../assets/Resume.pdf'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const navRef = useRef();

    useEffect(() => {
        gsap.from(navRef.current, {
            y: -50,
            opacity: 0,
            duration: 1,
            delay: 1,
            ease: 'power3.out'
        });
    }, []);

    return (
        <>
            <nav className="nav-container" ref={navRef}>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </div>
                <ul className="nav-links nav-left">
                    <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                    <li><Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link></li>
                </ul>
                <div className="nav-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <ul className="nav-links nav-right">
                    <li><a href="mailto:laluiman468@mgmail.com" className="nav-link">Email</a></li>
                    <li><a href={Resume}  className="nav-link" download>Resume</a></li>
                </ul>
            </nav>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="nav-mobile-dropdown">
                    <ul className="nav-mobile-links">
                        <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link></li>
                        <li><a href="mailto:laluiman468@mgmail.com" className="nav-link" onClick={closeMenu}>Email</a></li>
                        <li><a href={Resume} className="nav-link" download onClick={closeMenu}>Resume</a></li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
