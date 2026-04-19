import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navItems = [
    { label: 'Solutions', path: '/services' },
    { label: 'Projects', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Plans', path: '/#pricing' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#1a1a1a]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container">
          <nav className="flex justify-between items-center h-16 md:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tight text-white">
                Tec<span className="text-accent">hub</span>ble
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link to="/contact">
                <button className="btn-primary">
                  Start Your Build
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="hamburger-bar"
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="hamburger-bar"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="hamburger-bar"
                animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button (top right) */}
            <button
              className="absolute top-5 right-6 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <span className="hamburger-bar" style={{ transform: 'rotate(45deg) translateY(2px)' }} />
              <span className="hamburger-bar" style={{ transform: 'rotate(-45deg) translateY(-2px)' }} />
            </button>

            <nav className="flex flex-col items-center gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="mobile-nav-link"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
                className="mt-6"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="btn-primary text-lg px-8 py-4">
                    Start Your Build
                  </button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
