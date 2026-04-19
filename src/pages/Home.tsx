import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ───── Animated section wrapper with slide-up reveal ───── */
function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ───── Text reveal animation (word by word) ───── */
function TextReveal({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const words = text.split(' ');
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ───── Parallax text (moves slower than scroll) ───── */
function ParallaxText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* ───── Data ───── */
const services = [
  { num: '01', title: 'Digital Platforms', tags: ['Web Products', 'Customer Portals', 'Dashboards', 'SaaS'] },
  { num: '02', title: 'AI & Automation', tags: ['Computer Vision', 'ML Pipelines', 'Agentic AI', 'Data Science'] },
  { num: '03', title: 'Mobile & IoT', tags: ['React Native', 'Embedded Systems', 'ESP32', 'Real-time Apps'] },
];

const team = [
  { role: 'AI and Data Engineer', name: 'Sami', bio: 'Turns business ideas into clear product roadmaps and fast execution plans', initials: 'SA', color: '#f5c518', bg: '#f5c518', linkedin: 'https://www.linkedin.com/in/-abdul-sami-khan/' },
  { role: 'Full-Stack', name: 'Kazim', bio: 'Builds scalable applications and leads technical architecture end-to-end', initials: 'KA', color: '#888', bg: '#d4d4d4', linkedin: 'https://www.linkedin.com/in/mirza-kazim-husain-/' },
  { role: 'Business Management', name: 'Huzaifa', bio: 'Drives operational excellence and strategic growth across all business verticals', initials: 'HU', color: '#f5c518', bg: '#f5c518', linkedin: 'https://www.linkedin.com/in/huzaifa-qureshi-513471245/' },
  { role: 'Developer', name: 'Omer', bio: 'Crafts robust software solutions with a passion for clean code and seamless user experiences', initials: 'OM', color: '#888', bg: '#d4d4d4', linkedin: 'https://www.linkedin.com/in/mohammad-omer-aamir/' },
];

const stats = [
  { value: '30+', label: 'Products shipped' },
  { value: '99%', label: 'Client retention' },
  { value: '4×', label: 'Revenue uplift avg.' },
  { value: '10d', label: 'First sprint live' },
];

const processSteps = [
  { title: 'Insight Session', desc: 'We map your goals, users, and bottlenecks to define the right product direction.' },
  { title: 'Blueprint & Scope', desc: 'You get a clear roadmap, delivery milestones, and transparent commercial plan.' },
  { title: 'Sprint Delivery', desc: 'We ship in focused sprints with frequent demos and decision checkpoints.' },
  { title: 'Launch & Scale', desc: 'After launch, we optimize performance, add features, and support growth.' },
];

const whyUs = [
  { num: '01', title: 'Senior product thinking', desc: 'We solve business problems first, then engineer the simplest path to measurable impact.' },
  { num: '02', title: 'Clear weekly momentum', desc: 'You receive visible progress every week, with priorities aligned to outcomes.' },
  { num: '03', title: 'Built to scale cleanly', desc: 'We architect systems that are reliable today and ready for tomorrow\'s growth.' },
  { num: '04', title: 'Long-term technical partner', desc: 'From roadmap to rollout, we stay with you to improve, optimize, and expand.' },
];



const projects = [
  { num: '01', category: 'Web Platform', title: 'Moqah.pk', result: 'Event discovery and ticketing — streamlined organizer workflows by 60%.' },
  { num: '02', category: 'SaaS Product', title: 'Karvaan', result: 'SaaS for tour agencies — operations management with real-time analytics.' },
  { num: '03', category: 'Mobile App', title: 'SmartScout', result: 'Connecting football players and scouts — real-time notifications and tracking.' },
];

/* ───── Team Accordion Component ───── */
function TeamAccordion() {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row gap-0 w-full overflow-hidden"
      style={{ minHeight: '500px' }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {team.map((member, i) => {
        const isActive = hovered === i;
        const isAnyHovered = hovered !== null;

        return (
          <motion.div
            key={member.name}
            className="relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              flex: isActive ? 3 : isAnyHovered ? 0.8 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              backgroundColor: isActive ? member.bg : '#111',
              minHeight: '500px',
            }}
          >
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
              {/* Top: Role */}
              <div>
                <motion.span
                  className="text-xs uppercase tracking-[0.15em] font-medium"
                  animate={{ color: isActive ? '#000' : '#888' }}
                  transition={{ duration: 0.4 }}
                >
                  {member.role}
                </motion.span>
              </div>

              {/* Center: Name + Bio */}
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
                  {member.name}
                </motion.h3>

                <motion.p
                  className="text-sm leading-relaxed max-w-sm"
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 10,
                    color: isActive ? '#000' : '#888',
                  }}
                  transition={{ duration: 0.4, delay: isActive ? 0.15 : 0 }}
                >
                  {member.bio}
                </motion.p>
              </div>

              {/* Bottom: LinkedIn */}
              <motion.div
                animate={{ opacity: isActive ? 1 : 0.6 }}
                transition={{ duration: 0.4 }}
              >
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium"
                  style={{ color: isActive ? '#000' : '#666' }}
                >
                  LinkedIn →
                </a>
              </motion.div>
            </div>

            {/* Large initials watermark */}
            <motion.div
              className="absolute top-1/2 right-4 -translate-y-1/2 font-black select-none pointer-events-none"
              animate={{
                fontSize: isActive ? '12rem' : '6rem',
                opacity: isActive ? 0.08 : 0.03,
                color: isActive ? '#000' : '#fff',
              }}
              transition={{ duration: 0.6 }}
              style={{ lineHeight: 1 }}
            >
              {member.initials}
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* ───── Main Component ───── */
export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.95]);
  const heroY = useTransform(heroScroll, [0, 1], [0, 100]);

  return (
    <div>
      {/* ═══════ HERO ═══════ */}
      <section ref={heroRef} id="hero" className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-10"
        >
          <motion.h1
            className="hero-heading text-white mb-6"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Art Meets<br />Technology
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/#services" className="link-arrow text-base mt-4 inline-flex">
              Enter Experience ↓
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative background text (parallax) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: useTransform(heroScroll, [0, 0.5], [0.03, 0]) }}
        >
          <span className="text-[14vw] font-black text-white leading-none tracking-tighter">
            TECHUBBLE
          </span>
        </motion.div>

        {/* Scroll prompt */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="scroll-prompt">Scroll ↓</span>
        </motion.div>
      </section>

      {/* ═══════ SERVICES (01) ═══════ */}
      <section id="services" className="section">
        <div className="container">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="section-number">01</span>
              <span className="section-label">Digital Solutions</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="heading-lg text-white mb-12 max-w-2xl">
              <TextReveal text="We design and build digital products that drive measurable growth." />
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.12}>
                <motion.div
                  className="card card-service group h-full"
                  whileHover={{ y: -6, borderColor: '#f5c518' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-start mb-8">
                    <span className="section-number italic">{s.num}</span>
                    <motion.span
                      className="arrow-icon text-muted text-lg"
                      whileHover={{ rotate: 45 }}
                    >
                      ↗
                    </motion.span>
                  </div>
                  <h3 className="heading-md text-white mb-6">{s.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag, ti) => (
                      <span key={tag} className="text-xs text-muted">
                        {tag}{ti < s.tags.length - 1 && <span className="ml-2">·</span>}
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

      {/* ═══════ TEAM (01) ═══════ */}
      <section id="team" className="section">
        <div className="container">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-12">
              <span className="section-number">01</span>
              <span className="section-label">Meet the team</span>
            </div>
          </FadeIn>
        </div>

        {/* Full-width team accordion */}
        <TeamAccordion />

        <div className="container">
          {/* Stats row */}
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-[#1a1a1a]">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="stat-number text-white mb-2">{stat.value}</div>
                  <span className="text-xs text-muted uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container"><div className="section-divider" /></div>

      {/* ═══════ PROCESS (02) ═══════ */}
      <section id="process" className="section">
        <div className="container">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="section-number">02</span>
              <span className="section-label">How we execute</span>
            </div>
          </FadeIn>

          <ParallaxText className="mb-16">
            <h2 className="heading-lg text-white max-w-2xl">
              <TextReveal text="From first call to live product in weeks, not months." />
            </h2>
          </ParallaxText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="step-number mb-4">{String(i + 1).padStart(2, '0')}</div>
                  <h4 className="heading-sm text-white mb-3">{step.title}</h4>
                  <p className="body-text text-sm">{step.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Testimonial */}
          <FadeIn>
            <div className="mt-20 pt-12 border-t border-[#1a1a1a]">
              <div className="max-w-3xl">
                <motion.div
                  className="text-6xl text-[#222] font-serif mb-4 leading-none"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  "
                </motion.div>
                <p className="testimonial-quote mb-8">
                  TecHubble delivered our new client portal in{' '}
                  <span className="testimonial-highlight">18 days</span>. Our team now handles
                  twice the volume with less manual work and far better customer experience.
                </p>
                <div className="flex items-center gap-4">
                  <div className="avatar-initials bg-[#333] text-white text-sm">NA</div>
                  <div>
                    <p className="text-sm font-semibold text-white">Nadia Ali</p>
                    <p className="text-xs text-muted">Founder, Craftline Co.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container"><div className="section-divider" /></div>

      {/* ═══════ WHY CHOOSE US (03) ═══════ */}
      <section id="why" className="section">
        <div className="container">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="section-number">03</span>
              <span className="section-label">Why choose us</span>
            </div>
          </FadeIn>

          <ParallaxText className="mb-16">
            <h2 className="heading-lg text-white max-w-xl">
              <TextReveal text="Built for ambitious teams who ship fast." />
            </h2>
          </ParallaxText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {whyUs.map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.1}>
                <motion.div
                  className="flex gap-5 group cursor-default"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-bold text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="heading-sm text-white mb-2 group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                    <p className="body-text text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Second testimonial */}
          <FadeIn>
            <div className="mt-20 pt-12 border-t border-[#1a1a1a]">
              <div className="max-w-3xl">
                <div className="stars mb-4">★★★★★</div>
                <p className="testimonial-quote mb-8">
                  "The team turned our messy operations into one smooth digital flow. We saved hours daily in the first month alone."
                </p>
                <div className="flex items-center gap-4">
                  <div className="avatar-initials bg-accent text-black text-sm font-bold">FH</div>
                  <div>
                    <p className="text-sm font-semibold text-white">Faraz Hussain</p>
                    <p className="text-xs text-muted">Operations Lead, Northline Group</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container"><div className="section-divider" /></div>

      {/* ═══════ PRICING (04) ═══════ */}
      <section id="pricing" className="section">
        <div className="container">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="section-number">04</span>
              <span className="section-label">Pricing</span>
            </div>
          </FadeIn>

          <ParallaxText className="mb-12">
            <h2 className="heading-lg text-white max-w-2xl">
              <TextReveal text="Get in touch for custom pricing tailored to your project." />
            </h2>
          </ParallaxText>

          <FadeIn delay={0.2}>
            <motion.div
              className="card"
              style={{ borderColor: '#1a1a1a', padding: '3rem' }}
              whileHover={{ borderColor: '#f5c518', y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <p className="body-text text-lg mb-8 max-w-xl">
                Every project is unique. Contact us to discuss your requirements and receive a transparent, no-obligation quote.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <a href="tel:03335752043" className="flex items-center gap-3 group">
                  <span className="text-accent text-xl">✆</span>
                  <span className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300" style={{ letterSpacing: '0.04em' }}>
                    0333-575-2043
                  </span>
                </a>
                <Link to="/contact">
                  <motion.span
                    className="link-arrow text-base text-white hover:text-accent"
                    whileHover={{ x: 6 }}
                  >
                    Or send us a message →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <div className="container"><div className="section-divider" /></div>

      {/* ═══════ PROJECTS (05) ═══════ */}
      <section id="projects" className="section">
        <div className="container">
          <FadeIn>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="section-number">05</span>
              <span className="section-label">Selected work</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="heading-lg text-white mb-16 max-w-xl">
              <TextReveal text="Real results for real businesses." />
            </h2>
          </FadeIn>

          <div>
            {projects.map((project, i) => (
              <FadeIn key={project.num} delay={i * 0.12}>
                <motion.div
                  whileHover={{ x: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/portfolio" className="project-entry group block">
                    <span className="section-number shrink-0">{project.num}</span>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-muted uppercase tracking-wider">{project.category}</span>
                      <h4 className="heading-md text-white group-hover:text-accent transition-colors duration-200 mt-1">
                        {project.title}
                      </h4>
                      <p className="body-text text-sm mt-2">{project.result}</p>
                    </div>
                    <motion.span
                      className="text-muted text-lg shrink-0 group-hover:text-accent transition-colors"
                      whileHover={{ rotate: 45 }}
                    >
                      ↗
                    </motion.span>
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-12">
              <Link to="/portfolio" className="link-arrow text-base">
                View All Projects →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container"><div className="section-divider" /></div>

      {/* ═══════ CTA / CONTACT ═══════ */}
      <section id="contact" className="section">
        <div className="container">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="heading-lg text-white mb-4" style={{ fontStyle: 'italic' }}>
                <TextReveal text="Ready to Launch Something Better?" />
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="body-text mb-10">
                Book a free 30-minute product call and leave with a clear execution plan.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <Link to="/contact">
                  <motion.span
                    className="link-arrow text-base text-white hover:text-accent"
                    whileHover={{ x: 6 }}
                  >
                    Book a Strategy Call →
                  </motion.span>
                </Link>
                <a href="mailto:contact@techubble.com">
                  <motion.span className="link-arrow text-base" whileHover={{ x: 6 }}>
                    contact@techubble.com
                  </motion.span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
