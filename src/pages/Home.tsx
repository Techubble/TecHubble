import { motion } from 'framer-motion';
import { ArrowRight, Zap, BarChart3, Brain, Cpu, Shield, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Development',
      description: 'Agile and fast-paced approach to meet market demands efficiently'
    },
    {
      icon: Brain,
      title: 'AI & ML Integration',
      description: 'Professional data scientists leveraging AI for smarter solutions'
    },
    {
      icon: BarChart3,
      title: 'Scalable Solutions',
      description: 'Expertise in delivering reliable solutions that grow with your business'
    },
    {
      icon: Cpu,
      title: 'Cutting-Edge Tech',
      description: 'Built on the latest technologies and industry best practices'
    },
    {
      icon: Shield,
      title: 'Client Focused',
      description: 'Tailored solutions designed to accelerate your growth and impact'
    },
    {
      icon: Rocket,
      title: 'Product Innovation',
      description: 'Extensive experience building digital products for startups and enterprises'
    }
  ];

  const projects = [
    {
      title: 'AI-Powered YouTube Shorts Pipeline',
      description: 'Automation system that fetches, analyzes, and auto-publishes content generating 50K+ views every 48 hours',
      tags: ['Python', 'Gemini AI', 'YouTube API'],
      category: 'Automation'
    },
    {
      title: 'Real-time CCTV Processing System',
      description: 'Multi-feed CCTV system on Raspberry Pi 5 with YOLO-based detection for faces, persons, and poses',
      tags: ['Computer Vision', 'YOLO', 'Raspberry Pi'],
      category: 'Computer Vision'
    },
    {
      title: 'Agentic AI Airspace Copilot',
      description: 'Intelligent system monitoring live flight traffic using OpenSky Network API with agentic AI components',
      tags: ['Agentic AI', 'APIs', 'Real-time Data'],
      category: 'AI & ML'
    }
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-black to-green-500/20 opacity-50" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-white to-green-400 bg-clip-text text-transparent">
                AI-Powered Software
              </span>
              <br />
              <span className="text-white">for a Faster Tomorrow</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Founded by Sami, Kazim, and Huzaifa — building intelligent products, automation systems, and high-performance software.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold flex items-center space-x-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Work With Us</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button
                className="px-8 py-3 border-2 border-blue-500 text-white rounded-lg font-semibold hover:bg-blue-500/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Portfolio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-green-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To provide the latest technology solutions to our customers at the fastest pace possible. We're committed to helping fast-growing companies ship faster and scale efficiently.
              </p>
            </motion.div>

            <motion.div
              className="p-12 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower startups and businesses with cutting-edge products, including AI-driven insights, to succeed in a fast-paced global market. Building the future, one intelligent solution at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="group p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 hover:border-blue-500/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Projects</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
