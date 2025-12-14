import { motion } from 'framer-motion';
import { Users, Award, Zap, Target, Sparkles } from 'lucide-react';

export default function About() {
  const founders = [
    {
      name: 'Sami',
      role: 'Co-Founder & Lead Strategist',
      bio: 'Visionary leader driving innovation and client success through cutting-edge technology solutions.',
      expertise: ['Product Strategy', 'Client Relations', 'Innovation'],
      gradient: 'from-primary-500 to-purple-500',
    },
    {
      name: 'Kazim',
      role: 'Co-Founder & Full-Stack Developer',
      bio: 'Expert full-stack developer with deep expertise in building scalable applications and leading technical teams.',
      expertise: ['Full-Stack Development', 'System Architecture', 'Cloud Infrastructure'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Huzaifa',
      role: 'Co-Founder & ML Engineer',
      bio: 'Machine learning specialist focused on AI-driven solutions and data science innovations.',
      expertise: ['Machine Learning', 'Data Science', 'AI Systems'],
      gradient: 'from-accent-500 to-teal-500',
    }
  ];

  const capabilities = [
    {
      category: 'Backend Development',
      skills: ['Python', 'Node.js', 'Flask', 'Express', 'PostgreSQL', 'MongoDB', 'Microservices']
    },
    {
      category: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Responsive Design', 'UI/UX']
    },
    {
      category: 'Mobile Development',
      skills: ['React Native', 'iOS', 'Android', 'Flutter', 'Firebase', 'Mobile Optimization']
    },
    {
      category: 'AI & Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Deep Learning']
    },
    {
      category: 'Computer Vision',
      skills: ['OpenCV', 'YOLO', 'Face Recognition', 'Object Detection', 'Video Processing', 'Image Analysis']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Firebase', 'Deployment Automation']
    },
    {
      category: 'Robotics & IoT',
      skills: ['ESP32', 'Raspberry Pi', 'Embedded Systems', 'MQTT', 'Hardware Integration', 'Real-time Systems']
    },
    {
      category: 'Data Engineering',
      skills: ['Big Data', 'ETL Pipelines', 'Apache Spark', 'Data Warehousing', 'Analytics', 'BI Tools']
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '30+', suffix: '' },
    { label: 'Team Members', value: '3+', suffix: '' },
    { label: 'Technologies', value: '30+', suffix: '' },
    { label: 'Years Experience', value: '10+', suffix: '' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver high-quality solutions with attention to detail and commitment to best practices in every project.',
      color: 'from-primary-500/20 to-purple-500/20',
      iconColor: 'text-primary-400',
    },
    {
      icon: Zap,
      title: 'Speed & Agility',
      description: 'Fast-paced development cycles meet market demands efficiently while maintaining code quality and scalability.',
      color: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400',
    },
    {
      icon: Target,
      title: 'Client-Centric',
      description: 'Your success is our success. We tailor solutions to accelerate your growth and maximize business impact.',
      color: 'from-accent-500/20 to-teal-500/20',
      iconColor: 'text-accent-400',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Constantly exploring cutting-edge technologies to deliver future-proof solutions for today\'s challenges.',
      color: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400',
    }
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
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-glow-top" />

        <div className="relative container-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
          >
            <Users size={14} className="text-primary-400" />
            <span className="text-sm text-white/70">Our Story</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About <span className="text-gradient">TechHubble</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building the future with intelligent technology solutions
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 relative">
        <div className="section-divider" />
        <div className="container-lg py-12">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="section-divider" />
      </section>

      {/* Founders Section */}
      <section className="section relative">
        <div className="container-lg">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Our <span className="text-gradient">Founders</span>
            </h2>
            <p className="section-subtitle">
              The team behind TechHubble's innovation
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {founders.map((founder, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group text-center"
              >
                {/* Avatar */}
                <div className="relative mx-auto mb-6 w-32 h-32">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${founder.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className={`absolute inset-1 rounded-full bg-gradient-to-br ${founder.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
                      <Users size={40} className="text-white/40 group-hover:text-white/60 transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {founder.name}
                </h3>
                <p className="text-primary-400 text-sm font-medium mb-4">
                  {founder.role}
                </p>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  {founder.bio}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {founder.expertise.map((exp) => (
                    <span key={exp} className="badge">
                      {exp}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Capabilities */}
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
              Team <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="section-subtitle">
              Our combined expertise across technologies
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {capabilities.map((capability, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="card card-hover p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  {capability.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {capability.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section relative">
        <div className="absolute inset-0 bg-glow-center" />

        <div className="relative container-lg">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="section-subtitle">
              What drives us to deliver excellence
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group card card-glass card-hover p-8"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${value.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
