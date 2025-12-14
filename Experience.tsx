import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Users, Award, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    title: 'Bachelor of Technology',
    organization: 'SRM University, Chennai',
    period: '2024 - 2028',
    description: 'Pursuing Computer Science & Engineering with a focus on AI/ML and modern software development practices.',
    icon: GraduationCap,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    type: 'experience',
    title: 'Corporate Member',
    organization: 'Microsoft Student Ambassadors SRM',
    period: '2024 - Present',
    description: 'Engaging with the tech community, organizing events, and promoting Microsoft technologies among students.',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
  {
    type: 'experience',
    title: 'Committee Member',
    organization: 'AARUUSH, SRM University',
    period: '2024 - Present',
    description: 'Contributing to one of India\'s largest technical festivals, coordinating events and fostering innovation.',
    icon: Award,
    color: 'from-orange-500 to-red-500',
  },
];

const TimelineItem = ({ item, index, isLast }: { item: typeof experiences[0]; index: number; isLast: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-20 w-0.5 h-full timeline-line hidden md:block" />
      )}

      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`flex flex-col md:flex-row items-center gap-6 ${
          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        {/* Content Card */}
        <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
          <motion.div
            className="glass-card p-6 hover-lift group"
            whileHover={{ scale: 1.02 }}
          >
            {/* Type Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${
              item.type === 'education' 
                ? 'bg-cyan-500/10 text-cyan-400' 
                : 'bg-purple-500/10 text-purple-400'
            }`}>
              <span className="text-xs font-rajdhani font-semibold uppercase tracking-wider">
                {item.type}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-orbitron text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {item.title}
            </h3>

            {/* Organization */}
            <p className="font-rajdhani text-primary font-semibold mb-2">
              {item.organization}
            </p>

            {/* Period */}
            <div className="flex items-center gap-2 mb-3 text-muted-foreground justify-start md:justify-end">
              {!isEven && <Calendar size={14} />}
              <span className="font-rajdhani text-sm">{item.period}</span>
              {isEven && <Calendar size={14} />}
            </div>

            {/* Description */}
            <p className="font-rajdhani text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        </div>

        {/* Center Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: 'spring' }}
          className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} p-4 flex items-center justify-center timeline-dot`}
        >
          <item.icon className="w-full h-full text-white" />
        </motion.div>

        {/* Empty space for alignment */}
        <div className="flex-1 hidden md:block" />
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="experience" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] -translate-y-1/2" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass-card text-secondary text-sm font-rajdhani font-medium mb-4">
            JOURNEY
          </span>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="font-rajdhani text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and leadership experiences that shape my growth as a 
            technologist and problem solver.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((item, index) => (
            <TimelineItem
              key={item.title}
              item={item}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
