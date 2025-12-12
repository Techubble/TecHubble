import { motion } from 'framer-motion';
import { Brain, Smartphone, Zap, ShoppingCart, Code, Cpu, Database, Workflow } from 'lucide-react';

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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Services & Expertise
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive technology solutions tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  className="group p-8 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-blue-500/20 hover:border-blue-500/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 2) * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-10 h-10 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-xs text-blue-300 flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-green-500/10 border border-blue-500/20 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-white font-semibold text-sm">{tech.name}</p>
                <p className="text-xs text-gray-400 mt-1">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative border-t border-blue-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help your business scale with intelligent technology solutions
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
