import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MessageSquare, Send, ArrowRight, CheckCircle, XCircle, Sparkles } from 'lucide-react';
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
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@techubble.com',
      href: 'mailto:contact@techubble.com',
      gradient: 'from-primary-500/20 to-purple-500/20',
      iconColor: 'text-primary-400',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: 'Chat with us on WhatsApp',
      href: 'https://wa.me/1234567890',
      gradient: 'from-accent-500/20 to-teal-500/20',
      iconColor: 'text-accent-400',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Connect with our team',
      href: '#',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
    },
  ];

  const benefits = [
    {
      title: 'Fast Delivery',
      description: 'Agile development process ensures your project ships faster without compromising quality.',
    },
    {
      title: 'Expert Team',
      description: 'Experienced founders and developers with proven track records in AI, ML, and full-stack development.',
    },
    {
      title: 'Scalable Solutions',
      description: 'Build products that grow with you. Our architecture supports startups to enterprise scale.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-glow-top" />

        <div className="relative container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
          >
            <Sparkles size={14} className="text-primary-400" />
            <span className="text-sm text-white/70">Let's Connect</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's Build Something{' '}
            <span className="text-gradient">Intelligent</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to transform your ideas into powerful, AI-driven solutions? Let's talk.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section pt-0 relative">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="input-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="input-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="input"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="input-label">Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="input"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="input-label">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="input"
                  >
                    {projectTypes.map(type => (
                      <option key={type} value={type.toLowerCase().replace(/\s+/g, '-')} className="bg-[#0a0a0a]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="input-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="input resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="flex items-center gap-3 p-4 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={20} />
                    <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <XCircle size={20} />
                    <span className="text-sm">Error sending message. Please try again.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={i}
                    href={info.href}
                    variants={itemVariants}
                    className="group card card-hover p-6 flex items-start gap-5 block"
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />

                    <div className="relative z-10 flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-5 h-5 ${info.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-white/50 text-sm">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}

              {/* Response Time Card */}
              <motion.div
                variants={itemVariants}
                className="card card-glass p-6"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Response Time
                    </h3>
                    <p className="text-white/50 text-sm">
                      We typically respond within 24 hours. For urgent matters, reach out via WhatsApp.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Team LinkedIn */}
              <motion.div
                variants={itemVariants}
                className="card card-glass p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Connect with the Team</h3>
                <div className="flex flex-wrap gap-3">
                  {['Sami', 'Kazim', 'Huzaifa'].map((name) => (
                    <a
                      key={name}
                      href={`https://linkedin.com/in/${name.toLowerCase()}`}
                      className="tag hover:bg-primary-500/10 hover:text-primary-400 hover:border-primary-500/20 transition-all duration-200"
                    >
                      <Linkedin size={14} />
                      <span>{name}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section relative">
        <div className="section-divider mb-20" />

        <div className="container-lg">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Why Choose <span className="text-gradient">TechHubble</span>?
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group card card-glass card-hover p-8 text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 mb-6">Have a specific project in mind?</p>
            <motion.button
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start a Conversation</span>
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
