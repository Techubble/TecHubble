import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { submitContactForm } from '../services/supabase';

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

function TextReveal({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const words = text.split(' ');
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span key={i} className="inline-block mr-[0.3em]" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: delay + i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}>
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', projectType: 'web-development', message: ''
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
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'Web Development', 'Mobile App', 'AI/ML Solution', 'Data Science',
    'Automation', 'SaaS Product', 'E-commerce', 'Other'
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container">
          <FadeIn>
            <span className="section-label block mb-4">Let's Connect</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="hero-heading text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontStyle: 'italic' }}>
              <TextReveal text="Let's Build Something Great" />
            </h1>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="body-text mt-6 max-w-xl">
              Ready to transform your ideas into powerful, AI-driven solutions? Let's talk.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container"><div className="section-divider" /></div>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <FadeIn>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name', required: true },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com', required: true },
                  { label: 'Phone (Optional)', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: false },
                ].map((field, i) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <label className="input-label">{field.label}</label>
                    <input
                      type={field.type} name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange} required={field.required}
                      placeholder={field.placeholder} className="input"
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <label className="input-label">Project Type</label>
                  <select name="projectType" value={formData.projectType} onChange={handleChange} className="input">
                    {projectTypes.map(type => (
                      <option key={type} value={type.toLowerCase().replace(/\s+/g, '-')} style={{ backgroundColor: '#0a0a0a' }}>
                        {type}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <label className="input-label">Message</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange}
                    required rows={5} placeholder="Tell us about your project..."
                    className="input resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : 'Send Message →'}
                  </motion.button>
                </motion.div>

                {submitStatus === 'success' && (
                  <motion.div
                    className="p-4 border border-accent/30 text-accent text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    className="p-4 border border-red-500/30 text-red-400 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✗ Error sending message. Please try again.
                  </motion.div>
                )}
              </form>
            </FadeIn>

            {/* Contact Info */}
            <div className="space-y-8">
              {[
                { label: 'Email', content: 'contact@husaka.com', href: 'mailto:contact@husaka.com' },
                { label: 'WhatsApp', content: 'Chat with us →', href: 'https://wa.me/1234567890' },
              ].map((item, i) => (
                <FadeIn key={item.label} delay={0.15 + i * 0.1}>
                  <div>
                    <span className="section-label block mb-3">{item.label}</span>
                    <motion.a
                      href={item.href}
                      className="text-white hover:text-accent transition-colors text-lg inline-block"
                      whileHover={{ x: 6 }}
                    >
                      {item.content}
                    </motion.a>
                  </div>
                </FadeIn>
              ))}

              <FadeIn delay={0.35}>
                <div>
                  <span className="section-label block mb-3">Response Time</span>
                  <p className="body-text text-sm">
                    We typically respond within 24 hours. For urgent matters, reach out via WhatsApp.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.45}>
                <div className="border-t border-[#1a1a1a] pt-8">
                  <span className="section-label block mb-4">Connect with the team</span>
                  <div className="flex gap-3">
                    {['Sami', 'Kazim', 'Huzaifa'].map((name, i) => (
                      <motion.a
                        key={name}
                        href={`https://linkedin.com/in/${name.toLowerCase()}`}
                        className="px-4 py-2 text-sm text-muted border border-[#1a1a1a] hover:border-accent hover:text-accent transition-colors duration-200"
                        whileHover={{ y: -3 }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        {name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
