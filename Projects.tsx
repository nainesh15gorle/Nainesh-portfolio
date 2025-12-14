import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder, Star } from 'lucide-react';

const projects = [
  {
    title: 'SRM E-YANTRA Lab Inventory',
    description: 'A comprehensive inventory management system for SRM\'s E-Yantra lab, streamlining equipment tracking, borrowing, and maintenance schedules with an intuitive dashboard.',
    technologies: ['React', 'SQL', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/nainesh15gorle',
    featured: true,
    status: 'In Development',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'QuickNeed',
    description: 'A rapid service discovery platform connecting users with essential services and resources, featuring location-based search and real-time availability.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/nainesh15gorle/QuickNeed',
    featured: true,
    color: 'from-purple-500 to-pink-500',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div className="glass-card h-full p-6 hover-lift overflow-hidden">
        {/* Gradient Accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
            <Folder className="w-full h-full text-white" />
          </div>
          <div className="flex items-center gap-3">
            {project.featured && (
              <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-rajdhani">
                <Star size={12} fill="currentColor" />
                Featured
              </span>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
            {'live' in project && (project as { live?: string }).live && (
              <a
                href={(project as { live?: string }).live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-orbitron text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Status Badge (if applicable) */}
        {project.status && (
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-rajdhani font-medium mb-3">
            {project.status}
          </span>
        )}

        {/* Description */}
        <p className="font-rajdhani text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-rajdhani font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass-card text-primary text-sm font-rajdhani font-medium mb-4">
            PORTFOLIO
          </span>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="font-rajdhani text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills in web development, 
            problem-solving, and creating impactful solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/nainesh15gorle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-xl text-foreground hover:text-primary hover:border-primary transition-all duration-300 font-rajdhani font-semibold"
          >
            <Github size={20} />
            View More on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
