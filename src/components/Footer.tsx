import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const services = [
    { label: 'AI & ML Solutions', path: '/services' },
    { label: 'Web Development', path: '/services' },
    { label: 'SaaS Products', path: '/services' },
    { label: 'Automation', path: '/services' },
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:contact@techubble.com', label: 'Email' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const founders = [
    { name: 'Sami', color: 'text-primary-400' },
    { name: 'Kazim', color: 'text-primary-400' },
    { name: 'Huzaifa', color: 'text-accent-400' },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/[0.06]">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      {/* Main footer content */}
      <div className="container-lg py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-lg font-semibold text-white">
                Tech<span className="text-gradient">Hubble</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered software solutions for a faster tomorrow. Building intelligent products that scale.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.path}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {service.label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Get in Touch
            </h3>
            <a
              href="mailto:contact@techubble.com"
              className="text-sm text-primary-400 hover:text-primary-300 transition-colors duration-200"
            >
              contact@techubble.com
            </a>
            <div className="mt-6">
              <Link to="/contact">
                <motion.button
                  className="btn-secondary text-sm py-2.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start a Project
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40 text-center md:text-left">
              Founded by{' '}
              {founders.map((founder, index) => (
                <span key={founder.name}>
                  <span className={`font-medium ${founder.color}`}>{founder.name}</span>
                  {index < founders.length - 2 && ', '}
                  {index === founders.length - 2 && ' & '}
                </span>
              ))}
            </p>
            <p className="text-sm text-white/40">
              © {currentYear} TechHubble. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
