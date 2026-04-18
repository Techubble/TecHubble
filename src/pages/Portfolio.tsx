import { useState, useMemo, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    { id: 1, title: 'Moqah.pk', description: 'Event discovery and ticketing platform allowing organizers to list events and customers to purchase tickets seamlessly.', category: 'web-mobile', technologies: ['Web App', 'Payment', 'Event Management'], year: 2022, image: '/images/moqah.jpeg' },
    { id: 2, title: 'Karvaan', description: 'SaaS platform for tour agencies managing operations, streamlining workflows, and improving operational efficiency.', category: 'web-mobile', technologies: ['Desktop App', 'SaaS', 'Operations'], year: 2022, image: '/images/karvaan.jpeg' },
    { id: 3, title: 'SmartScout', description: 'Mobile app connecting football players and scouts with real-time notifications and activity tracking.', category: 'web-mobile', technologies: ['React Native', 'Mobile', 'Sports Tech'], year: 2022, image: '/images/smartscout.jpeg' },
    { id: 4, title: 'CNN-BiLSTM Intrusion Detection', description: 'Advanced intrusion detection using CNN-BiLSTM with attention mechanisms and QNN classifier.', category: 'ai-ml', technologies: ['TensorFlow', 'CNN', 'LSTM', 'Deep Learning'], year: 2023 },
    { id: 5, title: 'QNN Binary Classifier', description: 'Quantum neural network binary classifier using Qiskit and PyTorch on 11GB dataset.', category: 'ai-ml', technologies: ['Qiskit', 'PyTorch', 'Quantum Computing'], year: 2023 },
    { id: 6, title: 'ESP32-CAM Distributed LLM', description: 'Layer-splitting architecture distributing LLM inference across multiple ESP32 devices.', category: 'robotics', technologies: ['ESP32', 'LLM', 'Edge Computing'], year: 2024 },
    { id: 7, title: 'Agentic AI Airspace Copilot', description: 'Agentic AI system monitoring live flight traffic via OpenSky Network API.', category: 'ai-ml', technologies: ['Agentic AI', 'OpenSky API', 'Real-time'], year: 2024 },
    { id: 8, title: 'Real-time CCTV Processing', description: 'Multi-feed CCTV processing on Raspberry Pi 5 with YOLO-based detection pipeline.', category: 'computer-vision', technologies: ['YOLO', 'Raspberry Pi', 'OpenCV'], year: 2024 },
    { id: 9, title: 'AI YouTube Shorts Pipeline', description: 'End-to-end automation generating 50,000+ views every 48 hours via Reddit + Gemini AI.', category: 'automation', technologies: ['Python', 'Gemini AI', 'YouTube API'], year: 2024 },
    { id: 10, title: 'NASA Space Apps CO2 Heatmap', description: 'Visualizing Seattle\'s CO2 emissions with interactive heatmaps and GPT-powered chatbot.', category: 'ai-ml', technologies: ['Streamlit', 'GPT', 'Pandas'], year: 2023 },
    { id: 11, title: 'Heartbeat Sensor with AI', description: 'Real-time BPM monitoring with ESP32 and Gemini API for AI-driven health insights.', category: 'robotics', technologies: ['ESP32', 'Gemini AI', 'React'], year: 2024 },
    { id: 12, title: 'Diagnostic Platform with AI', description: 'Web-based diagnostic platform using GPT-4o for automated script generation.', category: 'ai-ml', technologies: ['GPT-4o', 'Flask', 'Healthcare'], year: 2024 },
    { id: 13, title: 'ESP32 Rover with Tracking', description: 'Autonomous rover with real-time object tracking and integrated chatbot.', category: 'robotics', technologies: ['ESP32', 'Computer Vision', 'LLM'], year: 2024 },
    { id: 14, title: 'Cricket Pitch Detection', description: 'Real-time cricket pitch detection using color and shape-based algorithms with AR stats.', category: 'computer-vision', technologies: ['OpenCV', 'Python', 'AR'], year: 2023 },
    { id: 15, title: 'AI Agent for Finance', description: 'Intelligent quant assistant analyzing financial data and executing trading strategies.', category: 'ai-ml', technologies: ['Python', 'ML', 'Financial APIs'], year: 2024 },
    { id: 16, title: 'Crypto Scalping Bot', description: 'Algorithmic trading bot for real-time cryptocurrency analysis and automated scalping.', category: 'trading', technologies: ['Python', 'Trading', 'APIs'], year: 2024 },
    { id: 17, title: 'Unity Multiplayer Fighting Game', description: 'Full-featured multiplayer platformer fighting game with physics and networking.', category: 'games', technologies: ['Unity', 'C#', 'Multiplayer'], year: 2023 },
    { id: 18, title: 'TradingView-like Terminal', description: 'Professional trading terminal with real-time market data visualization.', category: 'trading', technologies: ['Python', 'Data Viz', 'APIs'], year: 2023 },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'computer-vision', label: 'Computer Vision' },
    { id: 'robotics', label: 'Robotics & IoT' },
    { id: 'web-mobile', label: 'Web & Mobile' },
    { id: 'trading', label: 'Trading' },
    { id: 'automation', label: 'Automation' },
    { id: 'games', label: 'Games' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container">
          <FadeIn>
            <span className="section-label block mb-4">Our Work</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="hero-heading text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              <TextReveal text="Portfolio" />
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="body-text mt-6 max-w-xl">
              30+ projects spanning AI, computer vision, robotics, web development, and more.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 max-w-lg">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-16 md:top-[72px] z-40 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="container py-4">
          <div className="flex overflow-x-auto gap-2 no-scrollbar">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-accent text-black'
                    : 'text-muted border border-[#1a1a1a] hover:text-white hover:border-[#333]'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <section className="section pt-12">
        <div className="container">
          <motion.div
            className="text-sm text-muted mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Showing <span className="text-white font-medium">{filteredProjects.length}</span> of <span className="text-white font-medium">{projects.length}</span> projects
          </motion.div>

          <div className="space-y-0">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                >
                  <motion.div
                    className="project-entry group"
                    whileHover={{ x: 12, backgroundColor: 'rgba(255,255,255,0.02)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="section-number shrink-0 w-8">{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs text-muted uppercase tracking-wider">
                          {categories.find(c => c.id === project.category)?.label}
                        </span>
                        <span className="text-xs text-dim">{project.year}</span>
                      </div>
                      <h3 className="heading-sm text-white group-hover:text-accent transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="body-text text-sm mt-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies.map((tech, ti) => (
                          <span key={tech} className="text-xs text-dim">
                            {tech}{ti < project.technologies.length - 1 && ' ·'}
                          </span>
                        ))}
                      </div>
                    </div>
                    {'image' in project && project.image && (
                      <motion.div
                        className="shrink-0 overflow-hidden rounded-sm border border-[#1a1a1a]"
                        style={{ width: '80px', height: '56px' }}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={(project as typeof project & { image: string }).image}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.div>
                    )}
                    <motion.span
                      className="text-muted text-lg group-hover:text-accent transition-colors shrink-0"
                      whileHover={{ rotate: 45 }}
                    >
                      ↗
                    </motion.span>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted text-lg mb-4">No projects found matching your criteria</p>
              <button onClick={() => { setActiveCategory('all'); setSearchTerm(''); }} className="text-accent hover:underline text-sm">
                Clear filters
              </button>
            </motion.div>
          )}

          {/* CTA */}
          <FadeIn>
            <div className="mt-20 pt-12 border-t border-[#1a1a1a]">
              <h3 className="heading-md text-white mb-4" style={{ fontStyle: 'italic' }}>
                Have a project in mind?
              </h3>
              <Link to="/contact" className="link-arrow text-base text-white hover:text-accent">
                Start a Conversation →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
