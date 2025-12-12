import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                TechHubble
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              AI-powered software for a faster tomorrow
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="/portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">AI & ML Solutions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">SaaS Products</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Automation</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="flex space-x-4">
              <motion.a
                href="mailto:contact@techubble.com"
                className="text-gray-400 hover:text-blue-400 transition"
                whileHover={{ scale: 1.2 }}
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
                whileHover={{ scale: 1.2 }}
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              Founded by <span className="text-blue-400 font-semibold">Sami</span>,{' '}
              <span className="text-blue-400 font-semibold">Kazim</span>, and{' '}
              <span className="text-green-400 font-semibold">Huzaifa</span>
            </p>
            <p className="mt-4 md:mt-0">
              &copy; 2024 TechHubble. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
