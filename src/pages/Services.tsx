import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
}

const services = [
  {
    title: 'AI & Machine Learning',
    desc: 'Custom machine learning solutions including object detection, face recognition, action recognition, and predictive analytics.',
    features: ['Agentic AI Systems', 'Object Detection & Tracking', 'Face & Action Recognition', 'ML Model Training', 'Predictive Analytics', 'Real-time CV Pipelines'],
  },
  {
    title: 'SaaS Product Development',
    desc: 'End-to-end SaaS platforms tailored for startups and enterprises looking to scale.',
    features: ['MVP Development', 'Scalable Architecture', 'Multi-tenant Systems', 'Analytics Dashboards', 'User Management', 'Integration APIs'],
  },
  {
    title: 'Web & Mobile Development',
    desc: 'Full-stack web and mobile applications using cutting-edge technologies.',
    features: ['React & React Native', 'Node.js Backend', 'iOS & Android Apps', 'Progressive Web Apps', 'Real-time Features', 'Cloud Integration'],
  },
  {
    title: 'E-commerce Solutions',
    desc: 'Scalable online stores and marketplaces with secure payment integration.',
    features: ['Custom Storefronts', 'Payment Gateway Integration', 'Inventory Management', 'Order Processing', 'Analytics & Reporting', 'Mobile Commerce'],
  },
  {
    title: 'Automation Systems',
    desc: 'Intelligent automation to streamline workflows and reduce manual processes.',
    features: ['Workflow Automation', 'Data Processing Pipelines', 'API Automation', 'Content Generation', 'Task Scheduling', 'System Integration'],
  },
  {
    title: 'Embedded Systems & IoT',
    desc: 'IoT solutions and embedded systems for robotics and real-time monitoring.',
    features: ['ESP32 Development', 'Raspberry Pi Projects', 'Robotics Control', 'Sensor Integration', 'Real-time Processing', 'Hardware Integration'],
  },
];

const technologies = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Node.js',
  'Flask', 'PostgreSQL', 'MongoDB', 'TensorFlow', 'PyTorch', 'OpenCV',
  'AWS', 'Docker', 'Kubernetes', 'YOLO', 'Gemini AI', 'Next.js',
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container">
          <FadeIn>
            <span className="section-label block mb-4">What We Build</span>
            <h1 className="hero-heading text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Services &<br />Expertise
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="body-text mt-6 max-w-xl">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container"><div className="section-divider" /></div>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="card h-full">
                  <h3 className="heading-md text-white mb-3">{service.title}</h3>
                  <p className="body-text text-sm mb-6">{service.desc}</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted">
                        <span className="text-accent text-xs">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="section-divider" /></div>

      {/* Technology Stack */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-12">
              <span className="section-number">—</span>
              <span className="section-label">Technology Stack</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border border-[#1a1a1a] text-sm text-muted hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container"><div className="section-divider" /></div>

      {/* CTA */}
      <section className="section">
        <div className="container max-w-2xl">
          <FadeIn>
            <h2 className="heading-lg text-white mb-4" style={{ fontStyle: 'italic' }}>
              Ready to Get Started?
            </h2>
            <p className="body-text mb-8">
              Let's discuss how we can help your business scale with intelligent technology solutions.
            </p>
            <Link to="/contact">
              <button className="btn-primary">Start Your Project →</button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
