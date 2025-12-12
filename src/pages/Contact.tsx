import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MessageSquare, Send } from 'lucide-react';
import { submitContactForm } from '../services/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'web-development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', projectType: 'web-development', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'Web Development',
    'Mobile App',
    'AI/ML Solution',
    'Data Science',
    'Automation',
    'SaaS Product',
    'E-commerce',
    'Other'
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Build Something Intelligent
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your ideas into powerful, AI-driven solutions? Let's talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    {projectTypes.map(type => (
                      <option key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500 text-green-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="p-4 rounded-lg bg-red-500/20 border border-red-500 text-red-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Error sending message. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                <Mail className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <a href="mailto:contact@techubble.com" className="text-blue-400 hover:text-blue-300 transition">
                  contact@techubble.com
                </a>
              </div>

              <div className="p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                <Phone className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                <a href="https://wa.me/1234567890" className="text-green-400 hover:text-green-300 transition">
                  Chat with us on WhatsApp
                </a>
              </div>

              <div className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                <Linkedin className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <div className="space-y-2">
                  <a href="https://linkedin.com/in/sami" className="text-blue-400 hover:text-blue-300 transition block">
                    Sami
                  </a>
                  <a href="https://linkedin.com/in/mirza-kazim-husain" className="text-blue-400 hover:text-blue-300 transition block">
                    Kazim
                  </a>
                  <a href="https://linkedin.com/in/huzaifa" className="text-blue-400 hover:text-blue-300 transition block">
                    Huzaifa
                  </a>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                <MessageSquare className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Response Time</h3>
                <p className="text-gray-300">
                  We typically respond within 24 hours. For urgent matters, reach out via WhatsApp.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Location Section (Optional) */}
      <section className="py-20 border-t border-blue-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose TechHubble?</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">
                Agile development process ensures your project ships faster without compromising quality.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">
                Experienced founders and developers with proven track records in AI, ML, and full-stack development.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">Scalable Solutions</h3>
              <p className="text-gray-300">
                Build products that grow with you. Our architecture supports startups to enterprise scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
