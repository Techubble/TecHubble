import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

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

const founders = [
  { name: 'Sami', role: 'AI and Data Engineer', bio: 'Visionary leader driving innovation and client success through cutting-edge technology solutions.', expertise: ['Product Strategy', 'Client Relations', 'Innovation'], initials: 'SA', color: '#f5c518', bg: '#f5c518', linkedin: 'https://www.linkedin.com/in/-abdul-sami-khan/' },
  { name: 'Kazim', role: 'Co-Founder & Full-Stack Developer', bio: 'Expert full-stack developer with deep expertise in building scalable applications and leading technical teams.', expertise: ['Full-Stack Development', 'System Architecture', 'Cloud Infrastructure'], initials: 'KA', color: '#888', bg: '#d4d4d4', linkedin: 'https://www.linkedin.com/in/mirza-kazim-husain-/' },
  { name: 'Huzaifa', role: 'Co-Founder & Business Management', bio: 'Strategic business leader driving operational excellence and ensuring sustainable growth across all ventures.', expertise: ['Business Strategy', 'Operations Management', 'Growth Planning'], initials: 'HU', color: '#f5c518', bg: '#f5c518', linkedin: 'https://www.linkedin.com/in/huzaifa-qureshi-513471245/' },
  { name: 'Omer', role: 'Co-Founder & Developer', bio: 'Skilled developer crafting robust and efficient software solutions with a passion for clean, maintainable code.', expertise: ['Software Development', 'Web Applications', 'API Design'], initials: 'OM', color: '#888', bg: '#d4d4d4', linkedin: 'https://www.linkedin.com/in/mohammad-omer-aamir/' },
];

const stats = [
  { label: 'Projects Completed', value: '30+' },
  { label: 'Team Members', value: '4+' },
  { label: 'Technologies', value: '30+' },
  { label: 'Years Experience', value: '10+' },
];

const values = [
  { num: '01', title: 'Excellence', desc: 'We deliver high-quality solutions with attention to detail and commitment to best practices in every project.' },
  { num: '02', title: 'Speed & Agility', desc: 'Fast-paced development cycles meet market demands efficiently while maintaining code quality and scalability.' },
  { num: '03', title: 'Client-Centric', desc: 'Your success is our success. We tailor solutions to accelerate your growth and maximize business impact.' },
  { num: '04', title: 'Innovation', desc: 'Constantly exploring cutting-edge technologies to deliver future-proof solutions for today\'s challenges.' },
];

const capabilities = [
  { category: 'Backend Development', skills: ['Python', 'Node.js', 'Flask', 'Express', 'PostgreSQL', 'MongoDB'] },
  { category: 'Frontend Development', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'UI/UX'] },
  { category: 'Mobile Development', skills: ['React Native', 'iOS', 'Android', 'Flutter', 'Firebase'] },
  { category: 'AI & Machine Learning', skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Deep Learning'] },
  { category: 'Computer Vision', skills: ['OpenCV', 'YOLO', 'Face Recognition', 'Object Detection', 'Video Processing'] },
  { category: 'Cloud & DevOps', skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Firebase'] },
];

/* ───── Team Accordion (same as Home) ───── */
function FounderAccordion() {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row gap-0 w-full overflow-hidden"
      style={{ minHeight: '520px' }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {founders.map((f, i) => {
        const isActive = hovered === i;
        const isAnyHovered = hovered !== null;
        return (
          <motion.div
            key={f.name}
            className="relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            animate={{ flex: isActive ? 3 : isAnyHovered ? 0.8 : 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ backgroundColor: isActive ? f.bg : '#111', minHeight: '520px' }}
          >
            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
              <motion.span
                className="text-xs uppercase tracking-[0.15em] font-medium"
                animate={{ color: isActive ? '#000' : '#888' }}
                transition={{ duration: 0.4 }}
              >
                {f.role}
              </motion.span>

              <div className="flex-1 flex flex-col justify-center py-8">
                <motion.h3
                  className="font-bold leading-none mb-4"
                  animate={{
                    fontSize: isActive ? 'clamp(2.5rem, 5vw, 4rem)' : 'clamp(1.5rem, 3vw, 2rem)',
                    color: isActive ? '#000' : '#fff',
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ fontStyle: 'italic', letterSpacing: '-0.02em' }}
                >
                  {f.name}
                </motion.h3>
                <motion.p
                  className="text-sm leading-relaxed max-w-sm mb-4"
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10, color: isActive ? '#000' : '#888' }}
                  transition={{ duration: 0.4, delay: isActive ? 0.15 : 0 }}
                >
                  {f.bio}
                </motion.p>
                {/* Expertise tags that reveal on hover */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                  transition={{ duration: 0.4, delay: isActive ? 0.25 : 0 }}
                >
                  {f.expertise.map((exp) => (
                    <span key={exp} className="px-3 py-1 text-xs text-black/70 border border-black/20">
                      {exp}
                    </span>
                  ))}
                </motion.div>
              </div>

              <motion.a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
                animate={{ opacity: isActive ? 1 : 0.5, color: isActive ? '#000' : '#666' }}
              >
                Visit Portfolio →
              </motion.a>
            </div>

            <motion.div
              className="absolute top-1/2 right-4 -translate-y-1/2 font-black select-none pointer-events-none"
              animate={{ fontSize: isActive ? '12rem' : '6rem', opacity: isActive ? 0.08 : 0.03, color: isActive ? '#000' : '#fff' }}
              transition={{ duration: 0.6 }}
              style={{ lineHeight: 1 }}
            >
              {f.initials}
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container">
          <FadeIn>
            <span className="section-label block mb-4">Our Story</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="hero-heading text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              <TextReveal text="About TecHubble" />
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="body-text mt-6 max-w-xl">
              Building the future with intelligent technology solutions.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <a
              href={`${import.meta.env.BASE_URL}incorporation-letter.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-5 py-3 border border-[#1a1a1a] text-sm text-muted hover:border-accent hover:text-accent transition-colors duration-200 group"
            >
              <span className="text-accent text-base">&#10515;</span>
              <span>Company Incorporation Certificate</span>
              <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">.pdf</span>
            </a>
          </FadeIn>
        </div>
      </section>

      <div className="container"><div className="section-divider" /></div>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <div className="stat-number text-accent mb-2">{stat.value}</div>
                <span className="text-xs text-muted uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="section-divider" /></div>

      {/* Founders — Accordion */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-12">
              <span className="section-number">01</span>
              <span className="section-label">Our Founders</span>
            </div>
          </FadeIn>
        </div>
        <FounderAccordion />
      </section>

      <div className="container"><div className="section-divider" /></div>

      {/* Capabilities */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="section-number">02</span>
              <span className="section-label">Team Capabilities</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-lg text-white mb-12 max-w-xl">
              <TextReveal text="Our combined expertise across technologies." />
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.category} delay={i * 0.08}>
                <motion.div
                  className="card"
                  whileHover={{ y: -4, borderColor: '#333' }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="heading-sm text-white mb-4">{cap.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cap.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-xs text-muted border border-[#1a1a1a] hover:border-accent hover:text-accent transition-colors duration-200 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="section-divider" /></div>

      {/* Values */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="section-number">03</span>
              <span className="section-label">Our Values</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-lg text-white mb-16 max-w-xl">
              <TextReveal text="What drives us to deliver excellence." />
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {values.map((value, i) => (
              <FadeIn key={value.num} delay={i * 0.1}>
                <motion.div
                  className="flex gap-5 group cursor-default"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-bold text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">{value.num}</span>
                  <div>
                    <h4 className="heading-sm text-white mb-2 group-hover:text-accent transition-colors duration-300">{value.title}</h4>
                    <p className="body-text text-sm">{value.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
