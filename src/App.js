import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, Github, Linkedin, ExternalLink, Code, Palette, Database, Cpu, Moon, Sun, ChevronDown, Terminal, Award, Briefcase, GraduationCap, Calendar, MapPin, Star, TrendingUp, Zap, Heart, Coffee, Music, Camera, Book, Rocket, ArrowRight, Download, Send, Check } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const canvasRef = useRef(null);

  const roles = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  const skills = [
    { name: 'React.js', icon: Code, color: 'from-blue-500 to-cyan-500', level: 95 },
    { name: 'Node.js', icon: Cpu, color: 'from-green-500 to-emerald-500', level: 90 },
    { name: 'TypeScript', icon: Code, color: 'from-blue-600 to-blue-400', level: 88 },
    { name: 'Tailwind CSS', icon: Palette, color: 'from-cyan-500 to-blue-500', level: 92 },
    { name: 'MongoDB', icon: Database, color: 'from-green-600 to-green-400', level: 85 },
    { name: 'PostgreSQL', icon: Database, color: 'from-blue-700 to-blue-500', level: 87 },
    { name: 'Next.js', icon: Code, color: 'from-gray-700 to-gray-900', level: 93 },
    { name: 'GraphQL', icon: Cpu, color: 'from-pink-500 to-purple-500', level: 82 },
    { name: 'Docker', icon: Terminal, color: 'from-blue-600 to-cyan-600', level: 80 },
    { name: 'AWS', icon: Database, color: 'from-orange-500 to-yellow-500', level: 78 },
    { name: 'Python', icon: Code, color: 'from-yellow-500 to-blue-500', level: 85 },
    { name: 'Redis', icon: Database, color: 'from-red-600 to-red-400', level: 75 },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard. Features include AI-powered product recommendations, advanced search filters, and multi-vendor support.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS'],
      image: '🛍️',
      github: '#',
      demo: '#',
      category: 'fullstack',
      featured: true,
      metrics: { users: '10K+', rating: 4.8, downloads: '5K+' }
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool using GPT-4 API with customizable templates and export functionality. Supports multiple languages, SEO optimization, and content scheduling.',
      tech: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Tailwind', 'Python'],
      image: '🤖',
      github: '#',
      demo: '#',
      category: 'ai',
      featured: true,
      metrics: { users: '15K+', rating: 4.9, downloads: '8K+' }
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management platform with real-time updates, team chat, and analytics dashboard. Includes Kanban boards, Gantt charts, and time tracking.',
      tech: ['React', 'Firebase', 'TypeScript', 'Material-UI', 'Socket.io'],
      image: '📋',
      github: '#',
      demo: '#',
      category: 'fullstack',
      featured: false,
      metrics: { users: '8K+', rating: 4.7, downloads: '4K+' }
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with 7-day forecast, interactive maps, and location-based alerts. Features air quality index, UV index, and historical weather data.',
      tech: ['React', 'Weather API', 'Chart.js', 'Tailwind', 'Mapbox'],
      image: '🌤️',
      github: '#',
      demo: '#',
      category: 'frontend',
      featured: false,
      metrics: { users: '12K+', rating: 4.6, downloads: '6K+' }
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics platform for social media metrics with data visualization and automated reporting. Supports Instagram, Twitter, Facebook, and LinkedIn integration.',
      tech: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js', 'FastAPI'],
      image: '📊',
      github: '#',
      demo: '#',
      category: 'fullstack',
      featured: true,
      metrics: { users: '20K+', rating: 4.9, downloads: '12K+' }
    },
    {
      title: 'Crypto Trading Bot',
      description: 'Automated cryptocurrency trading bot with machine learning algorithms for price prediction and portfolio optimization.',
      tech: ['Python', 'TensorFlow', 'Node.js', 'WebSocket', 'Docker'],
      image: '💹',
      github: '#',
      demo: '#',
      category: 'ai',
      featured: false,
      metrics: { users: '5K+', rating: 4.5, downloads: '3K+' }
    },
    {
      title: 'Video Streaming Platform',
      description: 'Netflix-like streaming service with adaptive bitrate streaming, user recommendations, and offline download support.',
      tech: ['React', 'Node.js', 'FFmpeg', 'AWS S3', 'MongoDB'],
      image: '🎬',
      github: '#',
      demo: '#',
      category: 'fullstack',
      featured: false,
      metrics: { users: '25K+', rating: 4.8, downloads: '15K+' }
    },
    {
      title: 'Portfolio Builder',
      description: 'Drag-and-drop portfolio website builder with customizable templates, hosting, and analytics.',
      tech: ['React', 'Node.js', 'Vercel', 'Tailwind', 'PostgreSQL'],
      image: '🎨',
      github: '#',
      demo: '#',
      category: 'frontend',
      featured: false,
      metrics: { users: '7K+', rating: 4.7, downloads: '4.5K+' }
    }
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading development of microservices architecture and mentoring junior developers.',
      achievements: ['Reduced server costs by 40%', 'Improved app performance by 60%', 'Led team of 5 developers']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      location: 'Remote',
      description: 'Developed and maintained multiple client projects using modern web technologies.',
      achievements: ['Delivered 15+ projects', 'Client satisfaction rate: 98%', 'Implemented CI/CD pipeline']
    },
    {
      title: 'Frontend Developer',
      company: 'StartUp Hub',
      period: '2019 - 2020',
      location: 'New York, NY',
      description: 'Built responsive web applications and improved user experience.',
      achievements: ['Redesigned main product UI', 'Increased user engagement by 45%', 'Reduced bounce rate by 30%']
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Stanford University',
      period: '2017 - 2019',
      gpa: '3.9/4.0',
      achievements: ['Dean\'s List', 'Research in Machine Learning', 'Published 2 papers']
    },
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'MIT',
      period: '2013 - 2017',
      gpa: '3.8/4.0',
      achievements: ['Summa Cum Laude', 'President of Coding Club', 'Hackathon Winner']
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon', year: '2023' },
    { name: 'Google Cloud Professional', issuer: 'Google', year: '2022' },
    { name: 'React Advanced Patterns', issuer: 'Frontend Masters', year: '2023' },
    { name: 'Node.js Certification', issuer: 'OpenJS Foundation', year: '2021' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      content: 'Working with John was an absolute pleasure. His technical expertise and dedication to quality are unmatched.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      content: 'John delivered our project ahead of schedule with exceptional quality. Highly recommend!',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Startup Founder',
      content: 'Outstanding developer who truly understands both business needs and technical requirements.',
      rating: 5,
      avatar: '👩‍🚀'
    }
  ];

  const hobbies = [
    { name: 'Photography', icon: Camera, color: 'from-purple-500 to-pink-500' },
    { name: 'Music', icon: Music, color: 'from-green-500 to-teal-500' },
    { name: 'Reading', icon: Book, color: 'from-blue-500 to-indigo-500' },
    { name: 'Coffee', icon: Coffee, color: 'from-amber-700 to-amber-500' }
  ];

  const stats = [
    { label: 'Years Experience', value: '5+', icon: TrendingUp },
    { label: 'Projects Completed', value: '50+', icon: Rocket },
    { label: 'Happy Clients', value: '30+', icon: Heart },
    { label: 'Code Commits', value: '10K+', icon: Github }
  ];

  // Typing animation effect
  useEffect(() => {
    const text = roles[currentRole];
    
    if (isTyping) {
      if (typedText.length < text.length) {
        const timeout = setTimeout(() => {
          setTypedText(text.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [typedText, isTyping, currentRole, roles]);

  // Mouse position tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = isDarkMode ? `rgba(59, 130, 246, ${this.opacity})` : `rgba(99, 102, 241, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDarkMode]);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Intersection Observer for fade-in animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      }, observerOptions);

      // Observe all sections and cards
      document.querySelectorAll('[data-fade]').forEach(el => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Project filtering
  useEffect(() => {
    if (activeFilter === 'all') {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(p => p.category === activeFilter));
    }
  }, [activeFilter]);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const bgClass = isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const cardBgClass = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const hoverCardClass = isDarkMode ? 'hover:bg-gray-750' : 'hover:bg-gray-50';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300 overflow-hidden`}>
      {/* Custom Cursor */}
      <div
        className="fixed w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-[100] transition-transform duration-100 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${cursorVariant === 'hover' ? 1.5 : 1})`
        }}
      />

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-50"
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? (isDarkMode ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-white/95 backdrop-blur-lg shadow-lg') : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              JD.Dev
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className={`capitalize transition-all duration-300 relative group ${
                    activeSection === item
                      ? 'text-blue-500'
                      : secondaryTextClass + ' hover:text-blue-500'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full ${
                    activeSection === item ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300`}
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-indigo-600" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className={`px-4 py-4 space-y-3 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            {['home', 'about', 'experience', 'skills', 'projects', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left capitalize py-2 px-4 rounded-lg transition-all ${
                  activeSection === item ? 'text-blue-500 bg-blue-500/10' : secondaryTextClass
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="text-center z-10 px-4 max-w-5xl mx-auto w-full">
          <div className="mb-8">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <span className="text-blue-400">👋 Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 break-words">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient block sm:inline">
                Mengly
              </span>
            </h1>
            
            <div className="h-16 mb-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-400">
                <span className="text-blue-400">{typedText}</span>
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto px-4">
              Crafting exceptional digital experiences with clean code and creative solutions. 
              Let's build something amazing together.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12 md:mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-2xl flex items-center gap-2 text-sm sm:text-base"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-200 ${textClass} flex items-center gap-2 text-sm sm:text-base`}
            >
              <Mail size={20} />
              Contact Me
            </button>
            <button
              className={`px-6 sm:px-8 py-3 sm:py-4 border-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg font-semibold hover:border-blue-500 transition-all duration-200 ${textClass} flex items-center gap-2 text-sm sm:text-base`}
            >
              <Download size={20} />
              Download CV
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 md:mb-16 px-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${cardBgClass} p-4 sm:p-6 rounded-xl backdrop-blur-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 transition-transform duration-300`}
              >
                <stat.icon className="mx-auto mb-2 text-blue-500" size={24} />
                <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-1">{stat.value}</div>
                <div className={`text-xs sm:text-sm ${secondaryTextClass}`}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4" data-fade>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 ${visibleElements.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Me
          </h2>
          <p className={`text-center text-gray-400 mb-12 transition-all duration-1000 delay-100 ${visibleElements.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Get to know me better</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${cardBgClass} rounded-2xl p-8 shadow-xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-1000 delay-200 ${visibleElements.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-8xl">
                👨‍💻
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-center">Professional Journey</h3>
              <p className={`${secondaryTextClass} text-lg mb-6 leading-relaxed`}>
                I'm a passionate Full Stack Developer with 5+ years of experience building modern web applications. 
                I specialize in creating scalable, user-friendly solutions that solve real-world problems. 
                My journey in tech started with a curiosity about how things work, and it has evolved into a career 
                I'm deeply passionate about.
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {['JavaScript', 'React', 'Node.js', 'AWS', 'Docker'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className={`${cardBgClass} rounded-2xl p-8 shadow-xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-1000 delay-300 ${visibleElements.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Heart className="text-red-500" size={28} />
                  Hobbies & Interests
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {hobbies.map((hobby, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl bg-gradient-to-br ${hobby.color} bg-opacity-10 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 transition-transform cursor-pointer`}
                    >
                      <hobby.icon className="mb-2" size={24} />
                      <div className="font-semibold">{hobby.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${cardBgClass} rounded-2xl p-8 shadow-xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-1000 delay-400 ${visibleElements.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="text-yellow-500" size={28} />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.slice(0, 3).map((cert, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}
                    >
                      <div>
                        <div className="font-semibold text-sm">{cert.name}</div>
                        <div className="text-xs text-gray-400">{cert.issuer}</div>
                      </div>
                      <div className="text-blue-500 text-sm font-bold">{cert.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className={`py-20 px-4 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`} data-fade>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 ${visibleElements.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Experience & Education
          </h2>
          <p className={`text-center text-gray-400 mb-12 transition-all duration-1000 delay-100 ${visibleElements.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>My professional journey</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="text-blue-500" size={28} />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`${cardBgClass} rounded-xl p-6 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group ${visibleElements.has('experience') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold mb-2">{exp.title}</h4>
                      <div className="text-blue-500 font-semibold mb-2">{exp.company}</div>
                      <div className="flex flex-wrap gap-3 mb-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                      <p className={`${secondaryTextClass} mb-4`}>{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Zap className="text-yellow-500 flex-shrink-0 mt-1" size={16} />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-purple-500" size={28} />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`${cardBgClass} rounded-xl p-6 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-[1.02] transition-all duration-300 relative overflow-hidden ${visibleElements.has('experience') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-600"></div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                      <div className="text-purple-500 font-semibold mb-2">{edu.institution}</div>
                      <div className="flex flex-wrap gap-3 mb-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star size={16} />
                          GPA: {edu.gpa}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Award className="text-yellow-500 flex-shrink-0 mt-1" size={16} />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Certifications Summary */}
                <div className={`${cardBgClass} rounded-xl p-6 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Award className="text-yellow-500" size={24} />
                    Recent Certifications
                  </h4>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'} hover:scale-[1.02] transition-transform`}
                      >
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{cert.name}</div>
                          <div className="text-xs text-gray-400">{cert.issuer}</div>
                        </div>
                        <div className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-xs font-bold">
                          {cert.year}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4" data-fade>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 ${visibleElements.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Technical Skills
          </h2>
          <p className={`text-center text-gray-400 mb-12 transition-all duration-1000 delay-100 ${visibleElements.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Technologies I work with</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${cardBgClass} rounded-xl shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group ${visibleElements.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 2) * 50}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                      <skill.icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{skill.name}</h3>
                      <p className="text-sm text-gray-400">Proficiency: {skill.level}%</p>
                    </div>
                  </div>
                  
                  <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`} data-fade>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 ${visibleElements.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured Projects
          </h2>
          <p className={`text-center text-gray-400 mb-12 transition-all duration-1000 delay-100 ${visibleElements.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Some of my recent work</p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'fullstack', 'frontend', 'ai'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white scale-105'
                    : `${cardBgClass} ${secondaryTextClass} hover:scale-105`
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className={`${cardBgClass} rounded-xl overflow-hidden shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group relative ${visibleElements.has('projects') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                )}
                
                <div className="h-56 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-7xl relative overflow-hidden">
                  {project.image}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold flex-1">{project.title}</h3>
                    <div className={`px-2 py-1 rounded text-xs ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      {project.category}
                    </div>
                  </div>
                  
                  <p className={`${secondaryTextClass} mb-4 line-clamp-2 text-sm`}>
                    {project.description}
                  </p>
                  
                  {/* Project Metrics */}
                  <div className="flex gap-4 mb-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-500" />
                      <span>{project.metrics.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp size={14} className="text-green-500" />
                      <span>{project.metrics.users}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download size={14} className="text-blue-500" />
                      <span>{project.metrics.downloads}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className={`px-3 py-1 text-xs rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors text-sm font-semibold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors text-sm font-semibold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`${cardBgClass} rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-600 p-6 z-10">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <div className="flex gap-4 text-white/80 text-sm">
                    <span className="flex items-center gap-1">
                      <Star size={16} />
                      {selectedProject.metrics.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp size={16} />
                      {selectedProject.metrics.users}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download size={16} />
                      {selectedProject.metrics.downloads}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-8">
              <div className="h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-9xl mb-6 shadow-lg">
                {selectedProject.image}
              </div>
              
              <h4 className="text-xl font-bold mb-3">About This Project</h4>
              <p className={`${secondaryTextClass} text-lg mb-6 leading-relaxed`}>
                {selectedProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-lg">Technologies Used:</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} font-semibold hover:scale-105 transition-transform`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-lg">Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Real-time updates', 'Responsive design', 'Cloud deployment', 'API integration', 'User authentication', 'Data analytics'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="text-green-500" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  <Github size={20} />
                  View Source Code
                </a>
                <a
                  href={selectedProject.demo}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4" data-fade>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 ${visibleElements.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Client Testimonials
          </h2>
          <p className={`text-center text-gray-400 mb-12 transition-all duration-1000 delay-100 ${visibleElements.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>What people say about working with me</p>

          <div className={`relative transition-all duration-1000 delay-200 ${visibleElements.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`${cardBgClass} rounded-2xl p-8 md:p-12 shadow-xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} min-h-[300px] flex flex-col justify-center`}>
              <div className="text-6xl mb-6 text-center">{testimonials[testimonialIndex].avatar}</div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500" fill="currentColor" />
                ))}
              </div>
              
              <p className={`${secondaryTextClass} text-lg md:text-xl text-center mb-6 italic leading-relaxed`}>
                "{testimonials[testimonialIndex].content}"
              </p>
              
              <div className="text-center">
                <div className="font-bold text-xl">{testimonials[testimonialIndex].name}</div>
                <div className="text-blue-500">{testimonials[testimonialIndex].role}</div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === testimonialIndex
                      ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-600'
                      : `${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`} data-fade>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 ${visibleElements.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get In Touch
          </h2>
          <p className={`text-center text-gray-400 mb-12 transition-all duration-1000 delay-100 ${visibleElements.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Let's create something amazing together</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`transition-all duration-1000 delay-200 ${visibleElements.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className={`${secondaryTextClass} mb-8 text-lg`}>
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:john.doe@example.com"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className={`flex items-center gap-4 p-4 ${cardBgClass} rounded-lg hover:scale-105 transition-all duration-300 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-gray-400">john.doe@example.com</div>
                  </div>
                </a>
                
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className={`flex items-center gap-4 p-4 ${cardBgClass} rounded-lg hover:scale-105 transition-all duration-300 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Github className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm text-gray-400">github.com/johndoe</div>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className={`flex items-center gap-4 p-4 ${cardBgClass} rounded-lg hover:scale-105 transition-all duration-300 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm text-gray-400">linkedin.com/in/johndoe</div>
                  </div>
                </a>
              </div>

              <div className={`${cardBgClass} p-6 rounded-xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h4 className="font-bold mb-3">Response Time</h4>
                <p className="text-sm text-gray-400">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
            
            <div className={`${cardBgClass} p-8 rounded-xl shadow-xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-1000 delay-300 ${visibleElements.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Send size={24} className="text-blue-500" />
                Send a Message
              </h3>
              
              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-2">
                  <Check className="text-green-500" size={20} />
                  <span className="text-green-500 font-semibold">Message sent successfully!</span>
                </div>
              )}
              
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-semibold">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    required
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-semibold">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    required
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-semibold">Your Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none`}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                JD.Dev
              </div>
              <p className={secondaryTextClass}>
                Building digital experiences that make a difference. Let's create something amazing together.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className={`block ${secondaryTextClass} hover:text-blue-500 transition-colors`}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} flex items-center justify-center hover:scale-110 transition-transform`}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} flex items-center justify-center hover:scale-110 transition-transform`}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:john.doe@example.com"
                  className={`w-10 h-10 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} flex items-center justify-center hover:scale-110 transition-transform`}
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className={`text-sm ${secondaryTextClass}`}>
                Available for freelance opportunities and collaborations.
              </p>
            </div>
          </div>

          <div className={`pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} text-center`}>
            <p className={secondaryTextClass}>
              © 2024 John Doe. Crafted with <Heart size={16} className="inline text-red-500" fill="currentColor" /> using React & Tailwind CSS
            </p>
            <p className={`text-sm ${secondaryTextClass} mt-2`}>
              All rights reserved. Design & Development by John Doe
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40"
          aria-label="Scroll to top"
        >
          <ChevronDown size={24} className="rotate-180" />
        </button>
      )}

      {/* Background Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: ${isDarkMode ? '#1f2937' : '#f3f4f6'};
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
}