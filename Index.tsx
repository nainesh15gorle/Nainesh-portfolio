import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gorle Nainesh | CSE Freshman | AI/ML & Web Development</title>
        <meta 
          name="description" 
          content="Gorle Nainesh - A high-potential CSE Freshman at SRM University focused on AI/ML and building impactful web solutions. Explore my portfolio of projects and skills." 
        />
        <meta name="keywords" content="Gorle Nainesh, Web Developer, AI ML, CSE Freshman, SRM University, React Developer, Portfolio" />
        <meta property="og:title" content="Gorle Nainesh | The Future of Solutions" />
        <meta property="og:description" content="CSE Freshman focused on AI/ML & Impact-Driven Solutions. Explore my work and let's connect." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://nainesh15gorle.github.io/nainesh-portfolio/" />
      </Helmet>

      <main className="relative min-h-screen overflow-hidden custom-scrollbar cosmic-grid">
        {/* Particle Background */}
        <ParticleBackground />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
