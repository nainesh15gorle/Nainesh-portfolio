import { motion, type Variants, type Easing } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Instagram } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const easeOut: Easing = [0.4, 0, 0.2, 1];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const floatingBadges = [
    { label: 'AI', position: 'top-0 right-0 md:right-8', delay: 0 },
    { label: 'Web', position: 'top-1/4 -right-4 md:right-0', delay: 0.2 },
    { label: 'ML', position: 'bottom-1/4 -left-4 md:left-0', delay: 0.4 },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nainesh15gorle', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nainesh-gorle-156771324', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/nainesh_verse?igsh=bTN3NGNpanp0MHNq', label: 'Instagram' },
    { icon: Mail, href: 'mailto:ng5446@srmist.edu.in', label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[150px]" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-rajdhani font-medium text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground block">GORLE</span>
              <span className="gradient-text">NAINESH</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="font-rajdhani text-xl sm:text-2xl text-muted-foreground">
                The Future of Solutions | <span className="text-primary">CSE</span>, <span className="text-primary">AI/ML</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground font-rajdhani max-w-xl mb-6 leading-relaxed"
            >
              High-potential CSE Freshman leveraging technology for{' '}
              <span className="text-foreground font-semibold">practical and impactful solutions</span>. 
              Building the bridge between innovation and real-world applications.
            </motion.p>

            {/* Location */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span className="font-rajdhani">Chennai, India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-6 py-3 font-rajdhani font-semibold text-primary-foreground bg-primary rounded-xl overflow-hidden inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
                <ArrowDown size={18} className="relative z-10" />
                <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              <motion.a
                href="https://github.com/nainesh15gorle"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-rajdhani font-semibold text-foreground glass-card border border-border rounded-xl hover:border-primary/50 transition-colors duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
                GitHub
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 glass-card rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating Skill Badges */}
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + badge.delay, duration: 0.5, type: 'spring' }}
                  className={`absolute ${badge.position} z-20`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="px-4 py-2 glass-card rounded-full text-sm font-rajdhani font-semibold text-primary border border-primary/30"
                  >
                    {badge.label}
                  </motion.div>
                </motion.div>
              ))}

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-[60px] scale-110" />
              
              {/* Photo Container */}
              <div className="relative group">
                {/* Animated Gradient Ring */}
                <motion.div 
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-75 blur-sm"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Static Border */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-80" />
                
                {/* Photo */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-1 bg-background">
                  <motion.img
                    src={profilePhoto}
                    alt="Gorle Nainesh - CSE Freshman & Web Developer"
                    className="w-full h-full rounded-full object-cover object-top"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Pulse Ring Effect */}
                <motion.div 
                  className="absolute -inset-4 rounded-full border border-primary/40"
                  animate={{ 
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0, 0.4]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#skills"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-rajdhani uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
