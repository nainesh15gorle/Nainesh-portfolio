import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  Globe,
  MessageCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ng5446@srmist.edu.in',
    href: 'mailto:ng5446@srmist.edu.in',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98632 55092',
    href: 'tel:+919863255092',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, India',
    href: '#',
    color: 'from-orange-500 to-red-500',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/nainesh15gorle',
    color: 'hover:text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nainesh-gorle-156771324',
    color: 'hover:text-blue-400',
  },
];

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Telugu', level: 'Native' },
  { name: 'Bengali', level: 'Fluent' },
  { name: 'French', level: 'Basic' },
  { name: 'Tamil', level: 'Basic' },
];

const Contact = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

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
            GET IN TOUCH
          </span>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="font-rajdhani text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center gap-5 glass-card p-5 rounded-xl hover-lift"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <p className="font-rajdhani text-sm text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="font-rajdhani text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-5 rounded-xl"
            >
              <p className="font-rajdhani text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Connect on Social
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 glass-card rounded-xl text-muted-foreground ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Languages & Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Languages */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-primary" size={24} />
                <h3 className="font-orbitron text-xl font-semibold text-foreground">
                  Languages
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                  >
                    <span className="font-rajdhani font-medium text-foreground">
                      {lang.name}
                    </span>
                    <span className={`font-rajdhani text-xs px-2 py-1 rounded-full ${
                      lang.level === 'Native' 
                        ? 'bg-primary/20 text-primary' 
                        : lang.level === 'Fluent' 
                        ? 'bg-secondary/20 text-secondary'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {lang.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Message CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary p-4">
                <MessageCircle className="w-full h-full text-white" />
              </div>
              <h3 className="font-orbitron text-xl font-semibold text-foreground mb-2">
                Ready to Collaborate?
              </h3>
              <p className="font-rajdhani text-muted-foreground mb-6">
                Let's build something amazing together
              </p>
              <motion.a
                href="mailto:ng5446@srmist.edu.in"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-neon rounded-xl font-rajdhani font-semibold text-background"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                Send a Message
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
