import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    // Automation & AI
    {
      id: 1,
      title: 'AI-Powered YouTube Shorts Pipeline',
      description: 'End-to-end automation system fetching Reddit videos, analyzing with Gemini AI, trimming, auto-titling and publishing as YouTube Shorts. Generates 50,000+ views every 48 hours.',
      category: 'automation',
      technologies: ['Python', 'Gemini AI', 'YouTube API', 'FFmpeg', 'PRAW'],
      year: 2024
    },
    {
      id: 2,
      title: 'Heartbeat Sensor with AI Integration',
      description: 'Real-time BPM monitoring system using ESP32 and IR sensors with Gemini API integration for AI-driven insights and interactive health analytics.',
      category: 'iot',
      technologies: ['ESP32', 'Arduino', 'React.js', 'Node.js', 'Gemini AI'],
      year: 2024
    },
    {
      id: 3,
      title: 'NASA Space Apps - CO2 Heatmap',
      description: 'Team project visualizing Seattle\'s CO2 emissions using environmental datasets, interactive heatmaps, and GPT-powered chatbot for climate insights.',
      category: 'ai-ml',
      technologies: ['Python', 'Streamlit', 'Folium', 'GPT', 'Pandas'],
      year: 2023
    },

    // Computer Vision & Robotics
    {
      id: 4,
      title: 'Real-time CCTV Processing System',
      description: 'Multi-feed CCTV processing on Raspberry Pi 5 with YOLO-based face, person, and pose detection, action recognition, and multi-person face recognition pipeline.',
      category: 'computer-vision',
      technologies: ['Computer Vision', 'YOLO', 'Raspberry Pi 5', 'OpenCV', 'Face Recognition'],
      year: 2024
    },
    {
      id: 5,
      title: 'ESP32 Rover with Object Tracking',
      description: 'Autonomous rover with real-time object tracking, visual feedback, and integrated chatbot for intelligent navigation and interaction.',
      category: 'robotics',
      technologies: ['ESP32', 'Computer Vision', 'Object Detection', 'Motor Control', 'LLM'],
      year: 2024
    },
    {
      id: 6,
      title: 'ESP32-CAM Distributed LLM System',
      description: 'Layer-splitting architecture distributing LLM inference across multiple ESP32 devices with SD-card-based model loading and optimization.',
      category: 'robotics',
      technologies: ['ESP32', 'LLM', 'Edge Computing', 'Model Optimization', 'Distributed Systems'],
      year: 2024
    },
    {
      id: 7,
      title: 'Cricket Pitch Detection with OpenCV',
      description: 'Real-time cricket pitch detection using color and shape-based algorithms with player tracking and AR statistics integration.',
      category: 'computer-vision',
      technologies: ['OpenCV', 'Python', 'Image Processing', 'Shape Detection', 'AR'],
      year: 2023
    },
    {
      id: 8,
      title: 'Real-time Player Detection & AR Stats',
      description: 'KDD Lab project for detecting players in real-time and overlaying AR statistics during live cricket matches.',
      category: 'computer-vision',
      technologies: ['Computer Vision', 'AR', 'YOLO', 'Real-time Processing', 'OpenCV'],
      year: 2023
    },

    // AI & LLM Agents
    {
      id: 9,
      title: 'Visualization Chatbot',
      description: 'Upload CSV files and generate interactive graphs and charts through natural language queries using Flask, Matplotlib, and Gemini AI.',
      category: 'ai-ml',
      technologies: ['Flask', 'Matplotlib', 'Gemini AI', 'Python', 'Data Visualization'],
      year: 2024
    },
    {
      id: 10,
      title: 'Jarvis Virtual Assistant',
      description: 'AI-powered virtual assistant with voice interaction, natural language understanding, and multi-function capabilities.',
      category: 'ai-ml',
      technologies: ['LLM', 'Voice Processing', 'Python', 'NLP', 'Speech Recognition'],
      year: 2023
    },
    {
      id: 11,
      title: 'AI Agent for Finance',
      description: 'Intelligent quant assistant analyzing financial data, providing market insights, and executing trading strategies with AI guidance.',
      category: 'ai-ml',
      technologies: ['Python', 'Financial APIs', 'Machine Learning', 'Data Analysis', 'LLM'],
      year: 2024
    },
    {
      id: 12,
      title: 'SQL Chatbot with Oracle Integration',
      description: 'Natural language SQL generation and execution agent with seamless Oracle Database integration for intelligent data querying.',
      category: 'ai-ml',
      technologies: ['LLM', 'SQL', 'Oracle Database', 'Python', 'NLP'],
      year: 2024
    },
    {
      id: 13,
      title: 'Camera Follow-Intent Agent',
      description: 'Intelligent agent detecting camera follow intent and automatically centering objects via motor control systems.',
      category: 'robotics',
      technologies: ['Computer Vision', 'Motor Control', 'ESP32', 'Object Tracking', 'Real-time Processing'],
      year: 2023
    },

    // Trading & Finance
    {
      id: 14,
      title: 'Crypto Scalping Bot',
      description: 'Algorithmic trading bot using Coinalyze API for real-time cryptocurrency analysis and automated scalping strategies.',
      category: 'trading',
      technologies: ['Python', 'Coinalyze API', 'Trading Algorithms', 'API Integration', 'Finance'],
      year: 2024
    },
    {
      id: 15,
      title: 'Multiple Algorithmic Trading Bots',
      description: 'Suite of trading bots implementing various strategies with portfolio management chatbot and real-time performance tracking.',
      category: 'trading',
      technologies: ['Python', 'Trading Strategies', 'ccxt', 'APIs', 'Portfolio Management'],
      year: 2024
    },
    {
      id: 16,
      title: 'TradingView-like Live Terminal',
      description: 'Professional trading terminal built in Python with real-time market data visualization and technical analysis tools.',
      category: 'trading',
      technologies: ['Python', 'Data Visualization', 'Real-time Data', 'APIs', 'Terminal UI'],
      year: 2023
    },
    {
      id: 17,
      title: 'High/Low Breakout Bot',
      description: 'Advanced trading bot implementing high/low breakout strategies using ccxt library with Flask-based UI dashboard.',
      category: 'trading',
      technologies: ['Python', 'ccxt', 'Trading Strategies', 'Flask', 'Technical Analysis'],
      year: 2024
    },

    // Web & Mobile Development
    {
      id: 18,
      title: 'React Native LLM Interface',
      description: 'Mobile app with integrated camera and microphone for capturing inputs and sending to LLM for intelligent responses.',
      category: 'web-mobile',
      technologies: ['React Native', 'LLM API', 'Mobile Development', 'Camera Integration', 'Audio Processing'],
      year: 2024
    },
    {
      id: 19,
      title: 'Sorting Visualizer',
      description: 'Educational web frontend for visualizing sorting algorithms with Python backend implementation and step-by-step execution.',
      category: 'web-mobile',
      technologies: ['React', 'Python', 'Data Visualization', 'Algorithms', 'Educational'],
      year: 2023
    },
    {
      id: 20,
      title: 'Moqah.pk',
      description: 'Event discovery and ticketing platform allowing organizers to list events and customers to purchase tickets seamlessly.',
      category: 'web-mobile',
      technologies: ['Web App', 'Mobile Responsive', 'Payment Integration', 'Event Management', 'Full-Stack'],
      year: 2022
    },
    {
      id: 21,
      title: 'SmartScout',
      description: 'Mobile app connecting football players and scouts with features for player profiles, notifications, activity tracking, and subscriptions.',
      category: 'web-mobile',
      technologies: ['React Native', 'iOS', 'Android', 'Subscriptions', 'Real-time Updates'],
      year: 2022
    },
    {
      id: 22,
      title: 'Karvaan',
      description: 'SaaS platform for tour agencies managing operations, streamlining workflows, and improving operational efficiency.',
      category: 'web-mobile',
      technologies: ['Desktop App', 'SaaS', 'Operations Management', 'Full-Stack', 'Database'],
      year: 2022
    },

    // Machine Learning
    {
      id: 23,
      title: 'CNN-BiLSTM Intrusion Detection Model',
      description: 'Advanced intrusion detection using CNN-BiLSTM with attention mechanisms, SHAP feature selection, and QNN final classifier.',
      category: 'ai-ml',
      technologies: ['TensorFlow', 'CNN', 'LSTM', 'SHAP', 'Attention Mechanisms', 'Deep Learning'],
      year: 2023
    },
    {
      id: 24,
      title: 'QNN Binary Classifier',
      description: 'Quantum neural network binary classifier using Qiskit and PyTorch trained on 11GB dataset with hybrid quantum-classical approach.',
      category: 'ai-ml',
      technologies: ['Qiskit', 'PyTorch', 'Quantum Computing', 'Machine Learning', 'Large-scale Training'],
      year: 2023
    },

    // Games & Misc
    {
      id: 25,
      title: 'Unity Multiplayer Fighting Game',
      description: 'Full-featured multiplayer platformer fighting game with physics, animations, networking, and competitive gameplay.',
      category: 'games',
      technologies: ['Unity', 'C#', 'Multiplayer', 'Game Physics', 'Networking'],
      year: 2023
    },
    {
      id: 26,
      title: 'C++ Chess Game',
      description: 'Complete chess game implementation in C++ with AI opponent, move validation, and strategic gameplay.',
      category: 'games',
      technologies: ['C++', 'Game Logic', 'AI', 'Algorithms', 'OOP'],
      year: 2022
    },
    {
      id: 27,
      title: 'Menagerie Game',
      description: 'Original game developed in C++ featuring unique gameplay mechanics and engaging user experience.',
      category: 'games',
      technologies: ['C++', 'Game Development', 'Graphics', 'Game Design'],
      year: 2022
    },
    {
      id: 28,
      title: 'Cafe Management System',
      description: 'Object-oriented café management system demonstrating OOP principles, database management, and user interface design.',
      category: 'misc',
      technologies: ['OOP', 'Database', 'Management System', 'C++/Java', 'System Design'],
      year: 2022
    },

    // Additional AI & ML Projects
    {
      id: 29,
      title: 'Agentic AI Airspace Copilot',
      description: 'Realistic agentic AI system monitoring live flight traffic via OpenSky Network API with intelligent airspace management.',
      category: 'ai-ml',
      technologies: ['Agentic AI', 'OpenSky API', 'Real-time Data', 'LLM', 'Aviation'],
      year: 2024
    },
    {
      id: 30,
      title: 'Diagnostic Platform with AI',
      description: 'Web-based diagnostic platform using GPT-4o for automated script generation, reducing manual scripting time by 40%.',
      category: 'ai-ml',
      technologies: ['GPT-4o', 'Python', 'Flask', 'React.js', 'Healthcare Tech'],
      year: 2024
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
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              30+ projects spanning AI, computer vision, robotics, web development, and more
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900/50 border border-blue-500/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-blue-500/20 sticky top-16 z-40 backdrop-blur-md bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-3 pb-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white'
                    : 'bg-gray-900 text-gray-300 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-400 mb-8">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                  className="group p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-blue-500/20 hover:border-blue-500/50 transition-all cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                    {project.year && (
                      <span className="text-xs text-gray-400">{project.year}</span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-400 text-lg">No projects found matching your criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
