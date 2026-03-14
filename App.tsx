
import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { PROJECTS, SERVICES, WHATSAPP_LINK } from './constants';
import { ProjectCategory, Project } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen hero-gradient custom-scrollbar overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#030712]/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" onClick={scrollToTop} className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>
          <div className="flex gap-8 text-sm font-medium items-center">
            {/* Removed Services and Portfolio links from top bar */}
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-all font-bold shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-6 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            Innovative Tech Solutions
          </div>
          <h1 className="text-5xl md:text-8xl font-outfit font-extrabold mb-8 leading-[1.1]">
            Empowering Ideas Through <br />
            <span className="gradient-text">Future-Ready Software.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl">
            At <span className="text-white font-semibold">Spryzen Technologies</span>, we craft high-performance mobile apps and robust web ecosystems that drive growth and innovation for businesses worldwide.
          </p>
          {/* Removed View Our Work and Our Expertise buttons from Hero Header */}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/5">
          {[
            { label: 'Apps Delivered', value: '25+' },
            { label: 'Web Projects', value: '15+' },
            { label: 'Happy Clients', value: '40+' },
            { label: 'Technologies', value: '12+' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-white mb-1 font-outfit">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-4">Our Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Comprehensive technology solutions designed for scale, speed, and superior user experience.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <ServiceCard 
                key={idx}
                title={service.title} 
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-4">Our Portfolio</h2>
            <p className="text-slate-400 text-lg">Showcasing excellence across diverse industries and technologies.</p>
          </div>
          <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-xl overflow-x-auto max-w-full">
            {['All', ProjectCategory.MOBILE, ProjectCategory.WEB].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'text-slate-400 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Tech Stack Horizontal Scroll */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold tracking-widest text-cyan-400 uppercase">Technologies We Use</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {['Android', 'Kotlin', 'Java', 'React', 'iOS', 'Flutter', 'AI/LLM', 'Node.js', 'AWS', 'Firebase'].map(tech => (
              <span key={tech} className="text-2xl md:text-3xl font-outfit font-extrabold tracking-tight">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-24 relative overflow-hidden bg-gradient-to-br from-cyan-600/20 to-blue-900/40 border border-white/10 text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full"></div>
          <h2 className="text-4xl md:text-7xl font-outfit font-bold mb-8 tracking-tight">Ready to build something <span className="text-cyan-400">extraordinary?</span></h2>
          <p className="text-slate-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Let's discuss your project. We specialize in turning vision into high-impact digital products. Connect with us on WhatsApp for a quick consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-black font-extrabold rounded-2xl hover:bg-cyan-100 transition-all text-xl hover:scale-105 active:scale-95"
            >
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <a href="tel:8565841359" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-xl active:scale-95">
              Call Direct
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-xs">
              <a href="#" onClick={scrollToTop}>
                <Logo className="mb-6 hover:opacity-80 transition-opacity" />
              </a>
              <p className="text-slate-500 text-sm leading-relaxed">
                A premier software development agency delivering high-quality mobile and web solutions since inception. We blend creativity with technical excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 md:gap-24">
              <div>
                <h4 className="text-white font-bold mb-6 font-outfit">Quick Links</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                  <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                  <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 font-outfit">Contact</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href={WHATSAPP_LINK} className="hover:text-cyan-400 transition-colors font-bold">+91 8565841359</a></li>
                  <li>India</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
            <div>
              © {new Date().getFullYear()} Spryzen Technologies. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="p-10 rounded-[2.5rem] glass-card group hover:border-cyan-500/30 hover:-translate-y-2 transition-all duration-500">
    <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-8 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white font-outfit group-hover:text-cyan-400 transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-lg">{description}</p>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group rounded-[2rem] overflow-hidden glass-card hover:border-white/20 transition-all flex flex-col hover:-translate-y-1 duration-300">
    <div className={`h-56 flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${project.category === ProjectCategory.MOBILE ? 'from-indigo-600/20 to-blue-900/40' : 'from-cyan-600/20 to-blue-800/40'}`}>
       <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5" />
          </svg>
       </div>
       <div className="text-slate-300 font-outfit font-bold text-center px-10 text-xl group-hover:scale-110 transition-transform duration-700">
          {project.title}
       </div>
       {project.ongoing && (
         <div className="absolute top-6 right-6 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md">
           Ongoing
         </div>
       )}
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{project.category}</span>
        {project.duration && <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Built in {project.duration}</span>}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors leading-tight font-outfit">{project.title}</h3>
      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] bg-white/5 border border-white/5 px-3 py-1.5 rounded-full text-slate-400 font-bold">#{tag}</span>
        ))}
      </div>
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-8 inline-flex items-center gap-3 text-sm font-extrabold text-white hover:text-cyan-400 transition-colors group/link bg-white/5 hover:bg-cyan-500/10 px-6 py-3 rounded-xl border border-white/5 hover:border-cyan-500/30 active:scale-95"
      >
        View Case Study 
        <svg className="w-5 h-5 transform group-hover/link:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
);

export default App;
