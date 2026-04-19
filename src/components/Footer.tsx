import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Solutions', path: '/services' },
    { label: 'Projects', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Plans', path: '/#pricing' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="border-t border-[#1a1a1a]">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-tight text-white">
            Tec<span className="text-accent">Hub</span>ble
          </Link>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-dim">
            © {currentYear} TecHubble. Built for ambitious businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
