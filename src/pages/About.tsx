import { motion } from 'framer-motion';
import { Users, Award, Zap, Target } from 'lucide-react';

export default function About() {
  const founders = [
    {
      name: 'Sami',
      role: 'Co-Founder & Lead Strategist',
      bio: 'Visionary leader driving innovation and client success through cutting-edge technology solutions.',
      expertise: ['Product Strategy', 'Client Relations', 'Innovation']
    },
    {
      name: 'Kazim',
      role: 'Co-Founder & Full-Stack Developer',
      bio: 'Expert full-stack developer with deep expertise in building scalable applications and leading technical teams.',
      expertise: ['Full-Stack Development', 'System Architecture', 'Cloud Infrastructure']
    },
    {
      name: 'Huzaifa',
      role: 'Co-Founder & ML Engineer',
      bio: 'Machine learning specialist focused on AI-driven solutions and data science innovations.',
      expertise: ['Machine Learning', 'Data Science', 'AI Systems']
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
    { label: 'Projects Completed', value: '30+' },
    { label: 'Team Members', value: '3+' },
    { label: 'Technologies', value: '30+' },
    { label: 'Years Experience', value: '10+' }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About TechHubble
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building the future with intelligent technology solutions
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 relative border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Founders</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <Users size={48} className="text-blue-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
                <p className="text-blue-400 font-semibold mb-4">{founder.role}</p>
                <p className="text-gray-300 mb-6">{founder.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {founder.expertise.map((exp) => (
                    <span key={exp} className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                      {exp}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Capabilities */}
      <section className="py-20 relative border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Team Capabilities</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-blue-500/20"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{capability.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {capability.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-300">
                We deliver high-quality solutions with attention to detail and commitment to best practices in every project.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Zap className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Speed & Agility</h3>
              <p className="text-gray-300">
                Fast-paced development cycles meet market demands efficiently while maintaining code quality and scalability.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Target className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Client-Centric</h3>
              <p className="text-gray-300">
                Your success is our success. We tailor solutions to accelerate your growth and maximize business impact.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">
                Constantly exploring cutting-edge technologies to deliver future-proof solutions for today's challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
