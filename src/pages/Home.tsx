import { motion } from 'framer-motion';
import { ArrowRight, Zap, BarChart3, Brain, Cpu, Shield, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Development',
      description: 'Agile and fast-paced approach to meet market demands efficiently',
      color: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400',
    },
    {
      icon: Brain,
      title: 'AI & ML Integration',
      description: 'Professional data scientists leveraging AI for smarter solutions',
      color: 'from-primary-500/20 to-purple-500/20',
      iconColor: 'text-primary-400',
    },
    {
      icon: BarChart3,
      title: 'Scalable Solutions',
      description: 'Expertise in delivering reliable solutions that grow with your business',
      color: 'from-accent-500/20 to-teal-500/20',
      iconColor: 'text-accent-400',
    },
    {
      icon: Cpu,
      title: 'Cutting-Edge Tech',
      description: 'Built on the latest technologies and industry best practices',
      color: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Shield,
      title: 'Client Focused',
      description: 'Tailored solutions designed to accelerate your growth and impact',
      color: 'from-rose-500/20 to-pink-500/20',
      iconColor: 'text-rose-400',
    },
    {
      icon: Rocket,
      title: 'Product Innovation',
      description: 'Extensive experience building digital products for startups and enterprises',
      color: 'from-violet-500/20 to-purple-500/20',
      iconColor: 'text-violet-400',
    }
  ];

  const projects = [
    {
      title: 'AI-Powered YouTube Shorts Pipeline',
      description: 'Automation system that fetches, analyzes, and auto-publishes content generating 50K+ views every 48 hours',
      tags: ['Python', 'Gemini AI', 'YouTube API'],
      category: 'Automation',
      gradient: 'from-primary-500/10 to-purple-500/10',
    },
    {
      title: 'Real-time CCTV Processing System',
      description: 'Multi-feed CCTV system on Raspberry Pi 5 with YOLO-based detection for faces, persons, and poses',
      tags: ['Computer Vision', 'YOLO', 'Raspberry Pi'],
      category: 'Computer Vision',
      gradient: 'from-accent-500/10 to-teal-500/10',
    },
    {
      title: 'Agentic AI Airspace Copilot',
      description: 'Intelligent system monitoring live flight traffic using OpenSky Network API with agentic AI components',
      tags: ['Agentic AI', 'APIs', 'Real-time Data'],
      category: 'AI & ML',
      gradient: 'from-cyan-500/10 to-blue-500/10',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-glow-top" />

        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative z-10 container-lg text-center py-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
          >
            <Sparkles size={14} className="text-primary-400" />
            <span className="text-sm text-white/70">AI-Powered Software Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-gradient animate-gradient-x">AI-Powered Software</span>
            <br />
            <span className="text-white">for a Faster Tomorrow</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Founded by Sami, Kazim, and Huzaifa — building intelligent products,
            automation systems, and high-performance software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact">
              <motion.button
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Work With Us</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button
                className="btn-secondary inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>See Portfolio</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* Why Choose Us Section */}
      <section className="section relative">
        <div className="container-lg">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Why Choose <span className="text-gradient">Us</span>
            </h2>
            <p className="section-subtitle">
              We combine technical excellence with creative problem-solving
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group card card-hover"
                >
                  {/* Icon container */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section relative">
        {/* Background accent */}
        <div className="absolute inset-0 bg-glow-center" />

        <div className="relative container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="card card-glass p-8 md:p-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6">
                <div className="w-3 h-3 rounded-full bg-primary-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                To provide the latest technology solutions to our customers at the fastest pace possible.
                We're committed to helping fast-growing companies ship faster and scale efficiently.
              </p>
            </motion.div>

            <motion.div
              className="card card-glass p-8 md:p-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-6">
                <div className="w-3 h-3 rounded-full bg-accent-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                To empower startups and businesses with cutting-edge products, including AI-driven insights,
                to succeed in a fast-paced global market. Building the future, one intelligent solution at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section relative">
        <div className="container-lg">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subtitle">
              Showcasing our latest work in AI, automation, and software development
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group card card-hover p-8"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Category badge */}
                  <div className="mb-5">
                    <span className="badge">{project.category}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-white/50 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/portfolio">
              <motion.button
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View All Projects</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative">
        <div className="absolute inset-0 bg-mesh opacity-50" />

        <div className="relative container-md">
          <motion.div
            className="card card-glass p-10 md:p-16 text-center gradient-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something{' '}
              <span className="text-gradient">Amazing</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
              Let's discuss how we can help your business scale with intelligent technology solutions.
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
