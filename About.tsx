import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Dumbbell, BookOpen, Gamepad2 } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: Gamepad2, label: 'Badminton' },
    { icon: Dumbbell, label: 'Gym' },
    { icon: BookOpen, label: 'Reading' },
    { icon: MapPin, label: 'Exploring' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/20 text-primary">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Who I Am</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Visakhapatnam, Andhra Pradesh</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science Engineering student, currently in my 2nd year (3rd semester), 
                with a strong interest in web development and full-stack engineering.
              </p>
              <p>
                I work primarily with web technologies, UI/UX principles, and prompt engineering, 
                and I'm actively expanding my skills in AI/ML, Data Structures & Algorithms, and 
                full-stack development. I enjoy turning ideas into functional, visually clean, 
                and user-friendly applications.
              </p>
              <p>
                As a developer, I'm curious, disciplined, and a fast learner. I like breaking down 
                problems, understanding how things work under the hood, and building solutions that 
                are practical and scalable. I believe consistent learning and hands-on experimentation 
                are key to long-term growth in tech.
              </p>
            </div>

            {/* Education Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-medium">B.Tech CSE - 2nd Year</span>
            </motion.div>
          </motion.div>

          {/* Side Cards */}
          <div className="space-y-6">
            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              <p className="text-lg italic text-foreground/90 leading-relaxed">
                "Constantly learning, experimenting, and growing as a developer"
              </p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </motion.div>

            {/* Interests Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl"
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">Beyond Coding</h4>
              <p className="text-muted-foreground text-sm mb-4">
                These interests help me stay balanced, focused, and motivated.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 p-2 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  >
                    <interest.icon className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-foreground/80">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
