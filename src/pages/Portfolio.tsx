import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderOpen, Calendar } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    // Top Tier (Startup & Scale)
    {
      id: 1,
      title: 'Moqah.pk',
      description: 'Event discovery and ticketing platform allowing organizers to list events and customers to purchase tickets seamlessly.',
      category: 'web-mobile',
      technologies: ['Web App', 'Mobile Responsive', 'Payment Integration', 'Event Management', 'Full-Stack'],
      year: 2022,
      gradient: 'from-accent-500/10 to-teal-500/10',
      image: 'moqah.jpeg', // Placeholder for later
    },
    {
      id: 2,
      title: 'Karvaan',
      description: 'SaaS platform for tour agencies managing operations, streamlining workflows, and improving operational efficiency.',
      category: 'web-mobile',
      technologies: ['Desktop App', 'SaaS', 'Operations Management', 'Full-Stack', 'Database'],
      year: 2022,
      gradient: 'from-rose-500/10 to-pink-500/10',
      image: 'karvaan.jpeg', // Placeholder for later
    },
    {
      id: 3,
      title: 'SmartScout',
      description: 'Mobile app connecting football players and scouts with features for player profiles, notifications, activity tracking, and subscriptions.',
      category: 'web-mobile',
      technologies: ['React Native', 'iOS', 'Android', 'Subscriptions', 'Real-time Updates'],
      year: 2022,
      gradient: 'from-primary-500/10 to-indigo-500/10',
      image: 'smartscout.jpeg', // Placeholder for later
    },

    // High Complexity ML & AI
    {
      id: 4,
      title: 'CNN-BiLSTM Intrusion Detection Model',
      description: 'Advanced intrusion detection using CNN-BiLSTM with attention mechanisms, SHAP feature selection, and QNN final classifier.',
      category: 'ai-ml',
      technologies: ['TensorFlow', 'CNN', 'LSTM', 'SHAP', 'Attention Mechanisms', 'Deep Learning'],
      year: 2023,
      gradient: 'from-primary-500/10 to-purple-500/10',
      image: '', // Placeholder for later
    },
    {
      id: 5,
      title: 'QNN Binary Classifier',
      description: 'Quantum neural network binary classifier using Qiskit and PyTorch trained on 11GB dataset with hybrid quantum-classical approach.',
      category: 'ai-ml',
      technologies: ['Qiskit', 'PyTorch', 'Quantum Computing', 'Machine Learning', 'Large-scale Training'],
      year: 2023,
      gradient: 'from-violet-500/10 to-indigo-500/10',
      image: '', // Placeholder for later
    },
    {
      id: 6,
      title: 'ESP32-CAM Distributed LLM System',
      description: 'Layer-splitting architecture distributing LLM inference across multiple ESP32 devices with SD-card-based model loading and optimization.',
      category: 'robotics',
      technologies: ['ESP32', 'LLM', 'Edge Computing', 'Model Optimization', 'Distributed Systems'],
      year: 2024,
      gradient: 'from-violet-500/10 to-purple-500/10',
      image: '', // Placeholder for later
    },
    {
      id: 7,
      title: 'Agentic AI Airspace Copilot',
      description: 'Realistic agentic AI system monitoring live flight traffic via OpenSky Network API with intelligent airspace management.',
      category: 'ai-ml',
      technologies: ['Agentic AI', 'OpenSky API', 'Real-time Data', 'LLM', 'Aviation'],
      year: 2024,
      gradient: 'from-cyan-500/10 to-blue-500/10',
      image: '', // Placeholder for later
    },
    {
      id: 8,
      title: 'Real-time CCTV Processing System',
      description: 'Multi-feed CCTV processing on Raspberry Pi 5 with YOLO-based face, person, and pose detection, action recognition, and multi-person face recognition pipeline.',
      category: 'computer-vision',
      technologies: ['Computer Vision', 'YOLO', 'Raspberry Pi 5', 'OpenCV', 'Face Recognition'],
      year: 2024,
      gradient: 'from-primary-500/10 to-purple-500/10',
      image: '', // Placeholder for later
    },
    {
      id: 9,
      title: 'AI-Powered YouTube Shorts Pipeline',
      description: 'End-to-end automation system fetching Reddit videos, analyzing with Gemini AI, trimming, auto-titling and publishing as YouTube Shorts. Generates 50,000+ views every 48 hours.',
      category: 'automation',
      technologies: ['Python', 'Gemini AI', 'YouTube API', 'FFmpeg', 'PRAW'],
      year: 2024,
      gradient: 'from-amber-500/10 to-orange-500/10',
      image: '', // Placeholder for later
    },
    {
      id: 10,
      title: 'NASA Space Apps - CO2 Heatmap',
      description: 'Team project visualizing Seattle\'s CO2 emissions using environmental datasets, interactive heatmaps, and GPT-powered chatbot for climate insights.',
      category: 'ai-ml',
      technologies: ['Python', 'Streamlit', 'Folium', 'GPT', 'Pandas'],
      year: 2023,
      gradient: 'from-accent-500/10 to-teal-500/10',
      image: '', // Placeholder for later
    },

    // Automation & IoT
    {
      id: 11,
      title: 'Heartbeat Sensor with AI Integration',
      description: 'Real-time BPM monitoring system using ESP32 and IR sensors with Gemini API integration for AI-driven insights and interactive health analytics.',
      category: 'iot',
      technologies: ['ESP32', 'Arduino', 'React.js', 'Node.js', 'Gemini AI'],
      year: 2024,
      gradient: 'from-rose-500/10 to-pink-500/10',
    },
    {
      id: 12,
      title: 'Diagnostic Platform with AI',
      description: 'Web-based diagnostic platform using GPT-4o for automated script generation, reducing manual scripting time by 40%.',
      category: 'ai-ml',
      technologies: ['GPT-4o', 'Python', 'Flask', 'React.js', 'Healthcare Tech'],
      year: 2024,
      gradient: 'from-accent-500/10 to-teal-500/10',
    },
    {
      id: 13,
      title: 'ESP32 Rover with Object Tracking',
      description: 'Autonomous rover with real-time object tracking, visual feedback, and integrated chatbot for intelligent navigation and interaction.',
      category: 'robotics',
      technologies: ['ESP32', 'Computer Vision', 'Object Detection', 'Motor Control', 'LLM'],
      year: 2024,
      gradient: 'from-cyan-500/10 to-blue-500/10',
    },
    {
      id: 14,
      title: 'Cricket Pitch Detection with OpenCV',
      description: 'Real-time cricket pitch detection using color and shape-based algorithms with player tracking and AR statistics integration.',
      category: 'computer-vision',
      technologies: ['OpenCV', 'Python', 'Image Processing', 'Shape Detection', 'AR'],
      year: 2023,
      gradient: 'from-accent-500/10 to-emerald-500/10',
    },
    {
      id: 15,
      title: 'Real-time Player Detection & AR Stats',
      description: 'KDD Lab project for detecting players in real-time and overlaying AR statistics during live cricket matches.',
      category: 'computer-vision',
      technologies: ['Computer Vision', 'AR', 'YOLO', 'Real-time Processing', 'OpenCV'],
      year: 2023,
      gradient: 'from-blue-500/10 to-indigo-500/10',
    },
    {
      id: 16,
      title: 'Visualization Chatbot',
      description: 'Upload CSV files and generate interactive graphs and charts through natural language queries using Flask, Matplotlib, and Gemini AI.',
      category: 'ai-ml',
      technologies: ['Flask', 'Matplotlib', 'Gemini AI', 'Python', 'Data Visualization'],
      year: 2024,
      gradient: 'from-primary-500/10 to-blue-500/10',
    },
    {
      id: 17,
      title: 'Jarvis Virtual Assistant',
      description: 'AI-powered virtual assistant with voice interaction, natural language understanding, and multi-function capabilities.',
      category: 'ai-ml',
      technologies: ['LLM', 'Voice Processing', 'Python', 'NLP', 'Speech Recognition'],
      year: 2023,
      gradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      id: 18,
      title: 'AI Agent for Finance',
      description: 'Intelligent quant assistant analyzing financial data, providing market insights, and executing trading strategies with AI guidance.',
      category: 'ai-ml',
      technologies: ['Python', 'Financial APIs', 'Machine Learning', 'Data Analysis', 'LLM'],
      year: 2024,
      gradient: 'from-accent-500/10 to-cyan-500/10',
    },
    {
      id: 19,
      title: 'SQL Chatbot with Oracle Integration',
      description: 'Natural language SQL generation and execution agent with seamless Oracle Database integration for intelligent data querying.',
      category: 'ai-ml',
      technologies: ['LLM', 'SQL', 'Oracle Database', 'Python', 'NLP'],
      year: 2024,
      gradient: 'from-amber-500/10 to-yellow-500/10',
    },
    {
      id: 20,
      title: 'Camera Follow-Intent Agent',
      description: 'Intelligent agent detecting camera follow intent and automatically centering objects via motor control systems.',
      category: 'robotics',
      technologies: ['Computer Vision', 'Motor Control', 'ESP32', 'Object Tracking', 'Real-time Processing'],
      year: 2023,
      gradient: 'from-rose-500/10 to-red-500/10',
    },

    // Trading & Finance
    {
      id: 21,
      title: 'Crypto Scalping Bot',
      description: 'Algorithmic trading bot using Coinalyze API for real-time cryptocurrency analysis and automated scalping strategies.',
      category: 'trading',
      technologies: ['Python', 'Coinalyze API', 'Trading Algorithms', 'API Integration', 'Finance'],
      year: 2024,
      gradient: 'from-accent-500/10 to-emerald-500/10',
    },
    {
      id: 22,
      title: 'Multiple Algorithmic Trading Bots',
      description: 'Suite of trading bots implementing various strategies with portfolio management chatbot and real-time performance tracking.',
      category: 'trading',
      technologies: ['Python', 'Trading Strategies', 'ccxt', 'APIs', 'Portfolio Management'],
      year: 2024,
      gradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      id: 23,
      title: 'TradingView-like Live Terminal',
      description: 'Professional trading terminal built in Python with real-time market data visualization and technical analysis tools.',
      category: 'trading',
      technologies: ['Python', 'Data Visualization', 'Real-time Data', 'APIs', 'Terminal UI'],
      year: 2023,
      gradient: 'from-primary-500/10 to-violet-500/10',
    },
    {
      id: 24,
      title: 'High/Low Breakout Bot',
      description: 'Advanced trading bot implementing high/low breakout strategies using ccxt library with Flask-based UI dashboard.',
      category: 'trading',
      technologies: ['Python', 'ccxt', 'Trading Strategies', 'Flask', 'Technical Analysis'],
      year: 2024,
      gradient: 'from-amber-500/10 to-orange-500/10',
    },

    // Web & Mobile Development
    {
      id: 25,
      title: 'React Native LLM Interface',
      description: 'Mobile app with integrated camera and microphone for capturing inputs and sending to LLM for intelligent responses.',
      category: 'web-mobile',
      technologies: ['React Native', 'LLM API', 'Mobile Development', 'Camera Integration', 'Audio Processing'],
      year: 2024,
      gradient: 'from-cyan-500/10 to-blue-500/10',
    },
    {
      id: 26,
      title: 'Sorting Visualizer',
      description: 'Educational web frontend for visualizing sorting algorithms with Python backend implementation and step-by-step execution.',
      category: 'web-mobile',
      technologies: ['React', 'Python', 'Data Visualization', 'Algorithms', 'Educational'],
      year: 2023,
      gradient: 'from-violet-500/10 to-purple-500/10',
    },

    // Games & Misc
    {
      id: 27,
      title: 'Unity Multiplayer Fighting Game',
      description: 'Full-featured multiplayer platformer fighting game with physics, animations, networking, and competitive gameplay.',
      category: 'games',
      technologies: ['Unity', 'C#', 'Multiplayer', 'Game Physics', 'Networking'],
      year: 2023,
      gradient: 'from-amber-500/10 to-yellow-500/10',
    },
    {
      id: 28,
      title: 'C++ Chess Game',
      description: 'Complete chess game implementation in C++ with AI opponent, move validation, and strategic gameplay.',
      category: 'games',
      technologies: ['C++', 'Game Logic', 'AI', 'Algorithms', 'OOP'],
      year: 2022,
      gradient: 'from-accent-500/10 to-emerald-500/10',
    },
    {
      id: 29,
      title: 'Menagerie Game',
      description: 'Original game developed in C++ featuring unique gameplay mechanics and engaging user experience.',
      category: 'games',
      technologies: ['C++', 'Game Development', 'Graphics', 'Game Design'],
      year: 2022,
      gradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      id: 30,
      title: 'Cafe Management System',
      description: 'Object-oriented café management system demonstrating OOP principles, database management, and user interface design.',
      category: 'misc',
      technologies: ['OOP', 'Database', 'Management System', 'C++/Java', 'System Design'],
      year: 2022,
      gradient: 'from-rose-500/10 to-pink-500/10',
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'computer-vision', label: 'Computer Vision' },
    { id: 'robotics', label: 'Robotics & IoT' },
    { id: 'web-mobile', label: 'Web & Mobile' },
    { id: 'trading', label: 'Trading & Finance' },
    { id: 'games', label: 'Games' },
    { id: 'misc', label: 'Miscellaneous' },
    { id: 'automation', label: 'Automation' }
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
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-glow-top" />

        <div className="relative container-lg">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
              <FolderOpen size={14} className="text-primary-400" />
              <span className="text-sm text-white/70">Our Work</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              30+ projects spanning AI, computer vision, robotics, web development, and more
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-12"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 md:top-18 z-40 py-4 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="container-lg">
          <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-glow-sm'
                  : 'bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section pt-12 relative">
        <div className="container-lg">
          {/* Results count */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <span>Showing</span>
            <span className="text-white font-medium">{filteredProjects.length}</span>
            <span>of</span>
            <span className="text-white font-medium">{projects.length}</span>
            <span>projects</span>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group card card-hover p-6"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Project Image Placeholder/Showcase */}
                    {(project.image !== undefined) && (
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-white/[0.03] border border-white/[0.06] group-hover:border-primary-500/30 transition-colors duration-300">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                            <FolderOpen size={32} className="text-white/10 group-hover:text-primary-400/20 transition-colors duration-500" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                      </div>
                    )}
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="badge">
                        {categories.find(c => c.id === project.category)?.label}
                      </span>
                      {project.year && (
                        <span className="flex items-center gap-1 text-xs text-white/40">
                          <Calendar size={12} />
                          {project.year}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 text-sm mb-5 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tag bg-white/[0.03]">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FolderOpen size={48} className="mx-auto text-white/20 mb-4" />
              <p className="text-white/40 text-lg">No projects found matching your criteria</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchTerm(''); }}
                className="mt-4 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
