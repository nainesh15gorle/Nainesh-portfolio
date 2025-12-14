import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/30">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="font-orbitron text-xl font-bold gradient-text mb-2 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              NAINESH<span className="text-primary">.</span>
            </motion.a>
            <p className="font-rajdhani text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              © {new Date().getFullYear()} Gorle Nainesh. Built with{' '}
              <Heart size={14} className="text-red-500 fill-red-500" /> and React
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            {['Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-rajdhani text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 glass-card rounded-xl text-muted-foreground hover:text-primary hover:neon-border transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 font-rajdhani text-muted-foreground text-sm"
        >
          <span className="text-primary">The Future of Solutions</span> — Transforming ideas into reality, one line of code at a time.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
