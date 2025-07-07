import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ChevronDown,
  Sun,
  Moon,
  ExternalLink,
  Code,
  Database,
  Server,
  Cpu,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import profileImg from './assets/me.jpg';

interface Skill {
  name: string;
  icon: JSX.Element;
  category: 'language' | 'framework' | 'tool';
}

interface Project {
  title: string;
  description: string;
  icon: JSX.Element;
  technologies: string[];
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const skills: Skill[] = [
    { name: 'C', icon: <Code className="w-6 h-6" />, category: 'language' },
    { name: 'C++', icon: <Code className="w-6 h-6" />, category: 'language' },
    { name: 'Python', icon: <Code className="w-6 h-6" />, category: 'language' },
    { name: 'HTML', icon: <Code className="w-6 h-6" />, category: 'language' },
    { name: 'CSS', icon: <Code className="w-6 h-6" />, category: 'language' },
    { name: 'JavaScript', icon: <Code className="w-6 h-6" />, category: 'language' },
    { name: 'Streamlit', icon: <Server className="w-6 h-6" />, category: 'framework' },
    { name: 'Pandas', icon: <Database className="w-6 h-6" />, category: 'framework' },
    { name: 'NumPy', icon: <Cpu className="w-6 h-6" />, category: 'framework' },
    { name: 'Flask', icon: <Server className="w-6 h-6" />, category: 'framework' },
    { name: 'Matplotlib', icon: <Database className="w-6 h-6" />, category: 'framework' },
    { name: 'Scikit-learn', icon: <Cpu className="w-6 h-6" />, category: 'framework' },
    { name: 'Langchain', icon: <Cpu className="w-6 h-6" />, category: 'framework' },
    { name: 'Docker', icon: <Server className="w-6 h-6" />, category: 'tool' },
    { name: 'Git', icon: <Code className="w-6 h-6" />, category: 'tool' },
    { name: 'GitHub', icon: <Github className="w-6 h-6" />, category: 'tool' },
    { name: 'Jenkins', icon: <Server className="w-6 h-6" />, category: 'tool' },
    { name: 'MySQL', icon: <Database className="w-6 h-6" />, category: 'tool' },
    { name: 'Red Hat Linux', icon: <Server className="w-6 h-6" />, category: 'tool' },
  ];

  const projects: Project[] = [
    {
      title: 'Finance Management System',
      description: 'Console-based C++ application to manage customer loan records and EMI calculations with advanced data structures.',
      icon: <Database className="w-8 h-8" />,
      technologies: ['C++', 'Data Structures', 'File Management']
    },
    {
      title: 'Bank Management System',
      description: 'Python + Streamlit + MySQL app for user creation, deposit/withdrawal, and transaction viewing via a clean interface.',
      icon: <Server className="w-8 h-8" />,
      technologies: ['Python', 'Streamlit', 'MySQL', 'Web App']
    },
    {
      title: 'CI/CD DevOps Project',
      description: 'Docker + Jenkins pipeline setup under Linux World Internship with automated container management and deployment.',
      icon: <Cpu className="w-8 h-8" />,
      technologies: ['Docker', 'Jenkins', 'Linux', 'CI/CD']
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border-b border-white/20 dark:border-gray-700/20">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#42CEFF] to-[#0099CC] bg-clip-text text-transparent">
            Sawan Gupta
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-800 dark:text-gray-200 hover:text-[#00C9A7] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-800 dark:text-gray-200 hover:text-[#00C9A7] transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-800 dark:text-gray-200 hover:text-[#00C9A7] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 dark:text-gray-200 hover:text-[#00C9A7] transition-colors"
            >
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center neon-cursor">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C9A7]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#42CEFF]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#0099CC]/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center">
          {/* Profile Image - Centered, Square, No Neon, Pulled Down */}
          <div className="mb-6 mt-12 flex justify-center">
            <div className="relative">
              <img
                src={profileImg}
                alt="Profile"
                className="w-48 h-48 object-contain border-4 border-gray-700 rounded-lg shadow-lg"
                style={{ marginTop: '24px' }}
              />
            </div>
          </div>

          {/* Animated Intro Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold mb-8 neon-typewriter animate-typewriter">
            I am Sawan Gupta
          </h1>
          {/* Tagline */}
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-300 animate-fade-in-delay">
            AI Enthusiast | Developer | DevOps Learner
          </h2>
          {/* Brief Intro */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Passionate about AI innovation and DevOps, crafting solutions that blend technology and creativity
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 neon-btn font-semibold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-xl border-2 border-[#00fff7]"
            >
              My Projects
            </button>
            <a
              href="/assets/resume.pdf"
              download
              className="px-8 py-4 neon-btn-outline font-semibold rounded-full flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('skills')}
            className="animate-bounce text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black transition-colors border-t-2 border-[#00ff99]/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#00ff99] to-[#00fff7] bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit for AI development and DevOps engineering
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="bg-black/70 neon-glow-profile rounded-2xl p-6 border-2 border-[#00fff7]/40">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-[#00fff7] to-[#00ff99] bg-clip-text text-transparent flex items-center gap-2">
                <Code className="w-6 h-6 text-[#00fff7]" />
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.filter(skill => skill.category === 'language').map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-black/60 neon-glow-profile rounded-lg hover:scale-105 transition-transform"
                  >
                    <div className="text-[#00fff7]">{skill.icon}</div>
                    <span className="text-gray-100 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-black/70 neon-glow-profile rounded-2xl p-6 border-2 border-[#00ff99]/40">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-[#00ff99] to-[#00fff7] bg-clip-text text-transparent flex items-center gap-2">
                <Server className="w-6 h-6 text-[#00ff99]" />
                Frameworks
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {skills.filter(skill => skill.category === 'framework').map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-black/60 neon-glow-profile rounded-lg hover:scale-105 transition-transform"
                  >
                    <div className="text-[#00ff99]">{skill.icon}</div>
                    <span className="text-gray-100 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-black/70 neon-glow-profile rounded-2xl p-6 border-2 border-[#00fff7]/40">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-[#00fff7] to-[#00ff99] bg-clip-text text-transparent flex items-center gap-2">
                <Cpu className="w-6 h-6 text-[#00fff7]" />
                Tools
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {skills.filter(skill => skill.category === 'tool').map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-black/60 neon-glow-profile rounded-lg hover:scale-105 transition-transform"
                  >
                    <div className="text-[#00fff7]">{skill.icon}</div>
                    <span className="text-gray-100 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black transition-colors border-t-2 border-[#00ff99]/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#00ff99] to-[#00fff7] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
            Innovative solutions showcasing my expertise in AI, development, and DevOps
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-black/70 neon-glow-profile rounded-2xl p-6 border-2 border-[#00ff99]/40 flex flex-col items-center text-center">
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[#00ff99] to-[#00fff7] bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-black/60 neon-glow-profile text-[#00fff7] border border-[#00fff7]/40">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Project Code Button */}
                <a
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 neon-btn font-semibold rounded-full px-6 py-2 inline-block"
                >
                  Project Code
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Hands-on experience in AI and DevOps technologies
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-gray-700/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#42CEFF] to-[#0099CC] rounded-xl text-white">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Linux World Internship (Agentic AI)
                  </h3>
                  <p className="text-[#00C9A7] font-medium">June 2025 - Ongoing</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Key Responsibilities:</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#00C9A7] rounded-full mt-2 flex-shrink-0"></div>
                      Launching Red Hat Linux VM on Windows
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#00C9A7] rounded-full mt-2 flex-shrink-0"></div>
                      Docker containerization on Red Hat VM
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#00C9A7] rounded-full mt-2 flex-shrink-0"></div>
                      Automated posting to Twitter, Instagram, WhatsApp
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Advanced Tasks:</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#42CEFF] rounded-full mt-2 flex-shrink-0"></div>
                      Running DinD (Docker-in-Docker) containers
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#42CEFF] rounded-full mt-2 flex-shrink-0"></div>
                      Exploring Machine Learning Full-Stack
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#42CEFF] rounded-full mt-2 flex-shrink-0"></div>
                      Advanced DevOps practices and automation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Education
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Academic foundation in Artificial Intelligence and Computer Science
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* B.Tech */}
            <div className="bg-gradient-to-br from-white/20 to-gray-50/20 dark:from-gray-700/20 dark:to-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-gray-700/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#42CEFF] to-[#0099CC] rounded-xl text-white">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    B.Tech in Artificial Intelligence
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Arya College of Engineering, Jaipur
                  </p>
                  <p className="text-[#00C9A7] font-medium">2023 – 2027 (Expected Graduation)</p>
                </div>
              </div>
            </div>

            {/* School Education */}
            <div className="bg-gradient-to-br from-white/20 to-gray-50/20 dark:from-gray-700/20 dark:to-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-gray-700/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#00C9A7] to-[#42CEFF] rounded-xl text-white">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Secondary & Higher Secondary Education
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    St. D.N. Public School
                  </p>
                  <p className="text-[#00C9A7] font-medium">10th & 12th Standard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Let's Connect
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to collaborate on exciting AI and DevOps projects
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
                
                <a
                  href="tel:+919983455522"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group"
                >
                  <div className="p-3 bg-[#00C9A7] rounded-xl text-white group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+91 9983455522</p>
                  </div>
                </a>

                <a
                  href="mailto:sawangupta2807@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group"
                >
                  <div className="p-3 bg-[#42CEFF] rounded-xl text-white group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">sawangupta2807@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Sawangupta043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group"
                >
                  <div className="p-3 bg-[#0099CC] rounded-xl text-white group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-medium">GitHub</p>
                    <p className="text-gray-300">@Sawangupta043</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/sawan-gupta-7a30ba290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors group"
                >
                  <div className="p-3 bg-[#00C9A7] rounded-xl text-white group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <p className="text-gray-300">Connect with me</p>
                  </div>
                </a>
              </div>

              {/* Resume Download */}
              <div className="flex flex-col justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Download Resume
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Get a detailed overview of my skills, projects, and experience
                  </p>
                  <a
                    href="/assets/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#42CEFF] to-[#0099CC] text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                </div>

                {/* Quote */}
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-[#00C9A7]">
                  <p className="text-gray-300 italic mb-4">
                    "Sawan's passion for AI and DevOps is truly inspiring! His dedication to learning and building innovative solutions makes him a valuable addition to any team."
                  </p>
                  <p className="text-[#00C9A7] font-medium">- Industry Mentor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          {/* Animated Wave */}
          <div className="relative mb-8 overflow-hidden">
            <svg
              className="w-full h-24 text-[#00C9A7] opacity-20"
              viewBox="0 0 1200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
                fill="currentColor"
              >
                <animate
                  attributeName="d"
                  dur="10s"
                  repeatCount="indefinite"
                  values="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z;
                          M0,60 C150,20 350,120 600,60 C850,0 1050,100 1200,60 L1200,120 L0,120 Z;
                          M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
                />
              </path>
            </svg>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2025 Sawan Gupta. Built with 💻 & ☕
            </p>
            <p className="text-gray-500 text-sm">
              Crafted with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;