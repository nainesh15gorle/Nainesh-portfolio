import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Palette, 
  FolderKanban, 
  Globe, 
  Cpu,
  Braces,
  FileCode
} from 'lucide-react';

const skills = [
  {
    name: 'Web Development',
    description: 'Building responsive, modern web applications with React, HTML, CSS, and JavaScript',
    icon: Globe,
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500/30',
    glowColor: 'group-hover:shadow-cyan-500/30',
    level: 85,
  },
  {
    name: 'Java',
    description: 'Object-oriented programming, data structures, and algorithm implementation',
    icon: Braces,
    color: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500/30',
    glowColor: 'group-hover:shadow-orange-500/30',
    level: 80,
  },
  {
    name: 'SQL',
    description: 'Database design, queries, and data management for robust applications',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/30',
    glowColor: 'group-hover:shadow-purple-500/30',
    level: 75,
  },
  {
    name: 'React',
    description: 'Component-based architecture, hooks, state management, and modern UI patterns',
    icon: Code2,
    color: 'from-blue-400 to-cyan-400',
    borderColor: 'border-blue-400/30',
    glowColor: 'group-hover:shadow-blue-400/30',
    level: 78,
  },
  {
    name: 'Python',
    description: 'Scripting, automation, and foundations for AI/ML development',
    icon: FileCode,
    color: 'from-yellow-500 to-green-500',
    borderColor: 'border-yellow-500/30',
    glowColor: 'group-hover:shadow-yellow-500/30',
    level: 70,
  },
  {
    name: 'Branding',
    description: 'Visual identity design, color theory, and cohesive brand experiences',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500/30',
    glowColor: 'group-hover:shadow-pink-500/30',
    level: 72,
  },
  {
    name: 'Project Management',
    description: 'Team coordination, agile methodologies, and delivering results on schedule',
    icon: FolderKanban,
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/30',
    glowColor: 'group-hover:shadow-emerald-500/30',
    level: 75,
  },
  {
    name: 'AI/ML Interest',
    description: 'Exploring machine learning concepts, neural networks, and intelligent solutions',
    icon: Cpu,
    color: 'from-violet-500 to-purple-500',
    borderColor: 'border-violet-500/30',
    glowColor: 'group-hover:shadow-violet-500/30',
    level: 65,
  },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={`skill-card p-6 h-full ${skill.borderColor} border hover:border-opacity-100 ${skill.glowColor} hover:shadow-lg transition-all duration-500`}
      >
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}>
          <skill.icon className="w-full h-full text-white" />
        </div>

        {/* Content */}
        <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {skill.name}
        </h3>
        <p className="font-rajdhani text-muted-foreground text-sm leading-relaxed">
          {skill.description}
        </p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
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
            EXPERTISE
          </span>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="font-rajdhani text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse toolkit of technologies and competencies that I leverage to build 
            innovative, impactful solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
