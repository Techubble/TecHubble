import { motion } from 'framer-motion';
import { Brain, Smartphone, Zap, ShoppingCart, Code, Cpu, Database, Workflow, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Custom machine learning solutions including object detection, face recognition, action recognition, and predictive analytics',
      features: [
        'Agentic AI Systems',
        'Object Detection & Tracking',
        'Face & Action Recognition',
        'ML Model Training',
        'Predictive Analytics',
        'Real-time CV Pipelines'
      ],
      color: 'from-purple-500/20 to-primary-500/20',
      iconColor: 'text-purple-400',
      iconBg: 'bg-purple-500/10',
    },
    {
      icon: Code,
      title: 'SaaS Product Development',
      description: 'End-to-end SaaS platforms tailored for startups and enterprises looking to scale',
      features: [
        'MVP Development',
        'Scalable Architecture',
        'Multi-tenant Systems',
        'Analytics Dashboards',
        'User Management',
        'Integration APIs'
      ],
      color: 'from-primary-500/20 to-blue-500/20',
      iconColor: 'text-primary-400',
      iconBg: 'bg-primary-500/10',
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Development',
      description: 'Full-stack web and mobile applications using cutting-edge technologies',
      features: [
        'React & React Native',
        'Node.js Backend',
        'iOS & Android Apps',
        'Progressive Web Apps',
        'Real-time Features',
        'Cloud Integration'
      ],
      color: 'from-cyan-500/20 to-teal-500/20',
      iconColor: 'text-cyan-400',
      iconBg: 'bg-cyan-500/10',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Scalable online stores and marketplaces with secure payment integration',
      features: [
        'Custom Storefronts',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing',
        'Analytics & Reporting',
        'Mobile Commerce'
      ],
      color: 'from-accent-500/20 to-emerald-500/20',
      iconColor: 'text-accent-400',
      iconBg: 'bg-accent-500/10',
    },
    {
      icon: Zap,
      title: 'Automation Systems',
      description: 'Intelligent automation to streamline workflows and reduce manual processes',
      features: [
        'Workflow Automation',
        'Data Processing Pipelines',
        'API Automation',
        'Content Generation',
        'Task Scheduling',
        'System Integration'
      ],
      color: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-500/10',
    },
    {
      icon: Cpu,
      title: 'Embedded Systems & IoT',
      description: 'IoT solutions and embedded systems for robotics and real-time monitoring',
      features: [
        'ESP32 Development',
        'Raspberry Pi Projects',
        'Robotics Control',
        'Sensor Integration',
        'Real-time Processing',
        'Hardware Integration'
      ],
      color: 'from-rose-500/20 to-pink-500/20',
      iconColor: 'text-rose-400',
      iconBg: 'bg-rose-500/10',
    },
    {
      icon: Database,
      title: 'Data Science & Analytics',
      description: 'Data-driven insights and business intelligence solutions',
      features: [
        'Data Analysis',
        'Visualization Systems',
        'Predictive Models',
        'Statistical Analysis',
        'BI Dashboards',
        'Data Engineering'
      ],
      color: 'from-violet-500/20 to-purple-500/20',
      iconColor: 'text-violet-400',
      iconBg: 'bg-violet-500/10',
    },
    {
      icon: Workflow,
      title: 'Payment Integrations',
      description: 'Secure and seamless payment systems for your business',
      features: [
        'Stripe Integration',
        'Payment Processing',
        'Multi-currency Support',
        'Invoice Generation',
        'Subscription Management',
        'PCI Compliance'
      ],
      color: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400',
      iconBg: 'bg-blue-500/10',
    }
  ];

  const technologies = [
    { name: 'Python', category: 'Backend' },
    { name: 'JavaScript/TypeScript', category: 'Full Stack' },
    { name: 'React', category: 'Frontend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Flask', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'TensorFlow', category: 'ML' },
    { name: 'PyTorch', category: 'ML' },
    { name: 'OpenCV', category: 'Computer Vision' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'YOLO', category: 'ML' },
    { name: 'Gemini AI', category: 'LLM' }
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
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-glow-top" />

        <div className="relative container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
          >
            <Code size={14} className="text-primary-400" />
            <span className="text-sm text-white/70">What We Build</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Services & <span className="text-gradient">Expertise</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive technology solutions tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section pt-0 relative">
        <div className="container-lg">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group card card-hover p-8"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${service.iconColor}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-white/50 text-sm mb-5 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features grid */}
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                              <Check size={14} className="text-accent-400 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section relative">
        {/* Divider */}
        <div className="section-divider mb-20" />

        <div className="container-lg">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Technology <span className="text-gradient">Stack</span>
            </h2>
            <p className="section-subtitle">
              We use modern, battle-tested technologies
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group card card-hover p-4 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-white font-medium text-sm mb-1 group-hover:text-primary-400 transition-colors duration-300">
                  {tech.name}
                </p>
                <p className="text-xs text-white/40">{tech.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative">
        <div className="container-md">
          <motion.div
            className="card card-glass p-10 md:p-16 text-center gradient-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get <span className="text-gradient">Started</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
              Let's discuss how we can help your business scale with intelligent technology solutions
            </p>
            <Link to="/contact">
              <motion.button
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
