import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-blue-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-white font-bold text-lg">T</span>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              TechHubble
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-gray-300 hover:text-white transition-colors group"
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Work With Us
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            className="md:hidden pb-4 space-y-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-500/10 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
