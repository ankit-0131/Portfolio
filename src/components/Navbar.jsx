import { useState, useEffect, useRef } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

/**
 * Navbar — Asymmetrical editorial navigation rail.
 * Uses monospaced section index numbering and focus trapping for mobile.
 */
const navLinks = [
  { label: 'About', href: '#about', index: '01' },
  { label: 'Skills', href: '#skills', index: '02' },
  { label: 'Projects', href: '#projects', index: '03' },
  { label: 'Experience', href: '#experience', index: '04' },
  { label: 'Certificates', href: '#certificates', index: '05' },
  { label: 'Achievements', href: '#achievements', index: '06' },
  { label: 'Education', href: '#education', index: '07' },
  { label: 'Contact', href: '#contact', index: '08' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const wasOpen = useRef(false);

  // Detect scroll for navbar border highlight
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-100px 0px -40% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Focus trap and restoration logic for mobile drawer
  useEffect(() => {
    if (menuOpen) {
      wasOpen.current = true;

      // Find all focusable interactive links in the drawer menu
      const focusableLinks = menuRef.current ? menuRef.current.querySelectorAll('a') : [];
      if (focusableLinks.length > 0) {
        focusableLinks[0].focus();
      }

      // Lock body scroll to prevent background scroll
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setMenuOpen(false);
          return;
        }

        if (e.key === 'Tab') {
          const links = menuRef.current ? Array.from(menuRef.current.querySelectorAll('a')) : [];
          const focusable = [...links];
          if (triggerRef.current) {
            focusable.push(triggerRef.current);
          }

          if (focusable.length === 0) return;

          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first || !focusable.includes(document.activeElement)) {
              last.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === last || !focusable.includes(document.activeElement)) {
              first.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      if (wasOpen.current && triggerRef.current) {
        triggerRef.current.focus();
      }
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-grid">
        {/* Left Column: Brand Initials & Crimson Availability Dot */}
        <div className="navbar-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="brand-logo">A.K.S.</span>
          <span className="brand-status-dot" title="Available for work/collaboration" aria-label="Available for work/collaboration"></span>
        </div>

        {/* Right Column: Links & Controls */}
        <div className="navbar-nav-group">
          <ul
            ref={menuRef}
            id="mobile-drawer"
            className={`navbar-links ${menuOpen ? 'open' : ''}`}
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  <span className="nav-index mono">{link.index}</span>
                  <span className="nav-label">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-controls">
            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            {/* Mobile Hamburger */}
            <button
              ref={triggerRef}
              className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
