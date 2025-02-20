import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Network, Code, Github, Linkedin, Mail, Lock, Cpu, Database } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      {/* Matrix-like background animation */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-500 animate-matrix-fall"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: '12px'
              }}
            >
              {[...Array(50)].map((_, j) => (
                <div key={j}>
                  {String.fromCharCode(33 + Math.random() * 93)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent animate-scanline"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <nav className={`fixed w-full transition-all duration-300 ${scrolled ? 'bg-black/90 shadow-lg shadow-green-500/20' : ''}`}>
          <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
            <div className="flex items-center gap-3 glitch-effect">
              <Terminal className="w-8 h-8" />
              <span className="text-green-500 font-bold text-lg">imtisalbaloch</span>
            </div>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-white transition-colors hover:animate-glitch">About</a>
              <a href="#skills" className="hover:text-white transition-colors hover:animate-glitch">Skills</a>
              <a href="#contact" className="hover:text-white transition-colors hover:animate-glitch">Contact</a>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 pt-24">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20 min-h-screen">
            <div className="flex-1 space-y-6">
              <div className="inline-block">
                <h1 className="text-4xl md:text-6xl font-bold mb-2 glitch-effect">
                  <span className="text-white">Cyber</span>security
                  <span className="text-red-500">_</span>
                </h1>
                <div className="h-1 w-full bg-gradient-to-r from-green-500 to-transparent"></div>
              </div>
              <p className="text-lg text-green-400 terminal-shadow bg-black/50 p-4 rounded-lg border border-green-500/20">
                &gt; Protecting digital assets through advanced security solutions and network expertise_
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
                  View Projects
                </button>
                <button className="px-6 py-3 border border-green-500 rounded hover:bg-green-500/10 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-green-500/50 relative terminal-shadow hover:scale-105 transition-transform duration-300">
                <img
                  src="/src/imtisal.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-green-500/10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <section id="skills" className="mb-20 py-20">
            <h2 className="text-3xl font-bold mb-8 text-white glitch-effect">Expertise_</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Security Analysis",
                  description: "Advanced threat detection and vulnerability assessment"
                },
                {
                  icon: Network,
                  title: "Network Security",
                  description: "Infrastructure protection and network optimization"
                },
                {
                  icon: Code,
                  title: "Secure Development",
                  description: "Implementation of secure coding practices"
                },
                {
                  icon: Lock,
                  title: "Penetration Testing",
                  description: "Identifying and exploiting security vulnerabilities"
                },
                {
                  icon: Cpu,
                  title: "System Hardening",
                  description: "Implementing robust security measures"
                },
                {
                  icon: Database,
                  title: "Data Protection",
                  description: "Securing sensitive information and databases"
                }
              ].map((skill, index) => (
                <div
                  key={index}
                  className="p-6 border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 terminal-shadow bg-black/50"
                >
                  <skill.icon className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-green-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="text-center py-20">
            <h2 className="text-3xl font-bold mb-8 text-white glitch-effect">Get In Touch_</h2>
            <div className="flex justify-center gap-6">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 border border-green-500/20 rounded-full hover:border-green-500/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-green-500/20 terminal-shadow"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;