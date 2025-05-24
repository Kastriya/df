
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Rocket, Zap, Shield, Globe, Star, ArrowRight, Menu, X, Trophy, Users, Calendar, Code } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchText, setGlitchText] = useState("ASTRA");

  // Mouse tracking for enhanced parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Glitch effect for ASTRA text
  useEffect(() => {
    const glitchChars = "ÆSTRA∆STRAASTRAASTRAÆSTRA";
    const originalText = "ASTRA";
    let timeoutId: NodeJS.Timeout;

    const glitch = () => {
      const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      const randomIndex = Math.floor(Math.random() * originalText.length);
      const glitched = originalText.split('').map((char, index) => 
        index === randomIndex ? randomChar : char
      ).join('');
      
      setGlitchText(glitched);
      
      timeoutId = setTimeout(() => {
        setGlitchText(originalText);
      }, 100);
    };

    const intervalId = setInterval(glitch, 3000);
    
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  // Generate floating particles
  const generateParticles = () => {
    return [...Array(30)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      />
    ));
  };

  // Generate matrix-style falling code
  const generateMatrixRain = () => {
    return [...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute text-green-400 text-xs opacity-20 font-mono animate-pulse"
        style={{
          left: `${i * 7}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: '10s',
        }}
      >
        {['01', '10', '11', '00', '01'][Math.floor(Math.random() * 5)]}
      </div>
    ));
  };

  // Generate hexagonal grid pattern
  const generateHexGrid = () => {
    return [...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-8 h-8 border border-purple-500/10 rotate-45 animate-pulse"
        style={{
          left: `${(i % 5) * 20}%`,
          top: `${Math.floor(i / 5) * 25}%`,
          animationDelay: `${i * 0.2}s`,
          animationDuration: '4s'
        }}
      />
    ));
  };

  const teamMembers = [
    {
      name: "AVSC",
      role: "Founder",
      specialty: "Strategy & Electronics",
      image: "/placeholder.svg"
    },
    {
      name: "Himanshu",
      role: "HOD of Hacking (C Kastariya Verna)",
      specialty: "Hacking & Design",
      image: "/placeholder.svg"
    }
  ];

  const events = [
    {
      title: "CyberStorm CTF Mumbai",
      date: "2024",
      result: "Participated",
      description: "India's Largest CTF - Showcased our cybersecurity skills and strategic thinking."
    },
    {
      title: "Technoxian Robo Race",
      date: "2024", 
      result: "RC Car Challenge",
      description: "Competed with our custom-built brushless motor RC car in this prestigious robotics competition."
    }
  ];

  const projects = [
    {
      title: "CyberStorm Participation Project",
      category: "Cybersecurity",
      description: "Comprehensive CTF preparation including tools development, OSINT techniques, and strategic methodologies.",
      tech: ["OSINT", "CTF Tools", "Strategy", "Cybersecurity"]
    },
    {
      title: "RC Car Project",
      category: "Robotics",
      description: "Brushless motor setup under ₹6000 with gear-driven design, specifically built for Technoxian competition.",
      tech: ["Brushless Motors", "Gear Systems", "Electronics", "Mechanical Design"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        
        {/* Floating particles */}
        {generateParticles()}
        
        {/* Matrix rain effect */}
        {generateMatrixRain()}
        
        {/* Hexagonal grid */}
        {generateHexGrid()}
        
        {/* Animated circuit lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"
              style={{
                top: `${10 + i * 12}%`,
                width: '100%',
                animationDelay: `${i * 0.8}s`,
                animationDuration: '6s'
              }}
            />
          ))}
        </div>
        
        {/* Enhanced glowing orbs with movement */}
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.03 + Math.sin(Date.now() * 0.001) * 50}px, ${mousePosition.y * 0.03 + Math.cos(Date.now() * 0.001) * 50}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.02 + Math.cos(Date.now() * 0.0015) * 30}px, ${mousePosition.y * -0.02 + Math.sin(Date.now() * 0.0015) * 30}px)`,
            right: '10%',
            bottom: '20%'
          }}
        />
      </div>

      {/* Enhanced Navigation with tech border */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b-2 border-cyan-400/30 shadow-lg shadow-cyan-400/10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Star className="h-10 w-10 text-cyan-400 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-0 h-10 w-10 text-cyan-400 animate-ping opacity-30">
                  <Star className="h-10 w-10" />
                </div>
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-mono tracking-wider">
                  {glitchText}
                </span>
                <div className="text-xs text-cyan-300 tracking-[0.3em] font-mono animate-pulse">
                  INNOVATION • DISCIPLINE • AMBITION
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation with hover effects */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Team', 'Events', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group font-mono"
                >
                  {item}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500 shadow-lg shadow-cyan-400/50"></div>
                  <div className="absolute inset-0 bg-cyan-400/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded -z-10"></div>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <div className="absolute inset-0 bg-cyan-400/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-cyan-400/30 bg-black/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'About', 'Team', 'Events', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors font-mono hover:bg-cyan-400/10 rounded"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="relative inline-block">
                <Star className="h-32 w-32 text-cyan-400 mx-auto mb-6 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-0 h-32 w-32 text-cyan-400 animate-ping opacity-20">
                  <Star className="h-32 w-32" />
                </div>
                <div className="absolute inset-0 h-32 w-32 text-purple-400 animate-pulse opacity-30">
                  <Star className="h-32 w-32" />
                </div>
              </div>
              
              <h1 className="text-8xl md:text-9xl font-bold mb-4 font-mono tracking-wider relative">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  {glitchText}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-xl -z-10 animate-pulse"></div>
              </h1>
              
              <div className="text-lg md:text-xl text-cyan-300 tracking-[0.3em] mb-8 font-mono animate-pulse">
                INNOVATION • DISCIPLINE • AMBITION
              </div>
            </div>
            
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-mono">
                <span className="text-cyan-400 animate-pulse">Born to Lead,</span>
                <br />
                <span className="text-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }}>Trained to Win</span>
              </h2>
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 blur-3xl -z-10 animate-pulse"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-mono">
              We are the next generation of innovators, engineers, and leaders. 
              Through cutting-edge technology and relentless ambition, we shape the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-10 py-4 text-lg border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 font-mono relative group overflow-hidden"
                onClick={() => scrollToSection('about')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <Rocket className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Explore Our Mission</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 px-10 py-4 text-lg font-mono relative group overflow-hidden backdrop-blur-sm"
                onClick={() => scrollToSection('projects')}
              >
                <div className="absolute inset-0 bg-cyan-400/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <Code className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">View Projects</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 font-mono">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                About ASTRA
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8 animate-pulse shadow-lg shadow-cyan-500/50"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-purple-500/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-blue-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <CardHeader className="relative z-10">
                <Rocket className="h-12 w-12 text-purple-400 mb-4 animate-pulse" />
                <CardTitle className="text-2xl text-white font-mono">Mission</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-300 text-lg font-mono">
                  ASTRA is a youth-led, mission-driven team formed to conquer tech, robotics, and cybersecurity challenges across India and beyond.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-2 border-blue-500/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <CardHeader className="relative z-10">
                <Zap className="h-12 w-12 text-blue-400 mb-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <CardTitle className="text-2xl text-white font-mono">Vision</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-300 text-lg font-mono">
                  To become the premier competitive tech organization, known for excellence in 
                  robotics, AI, and cybersecurity, inspiring innovation across industries.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border-2 border-cyan-500/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <CardHeader className="relative z-10">
                <Shield className="h-12 w-12 text-cyan-400 mb-4 animate-pulse" style={{ animationDelay: '1s' }} />
                <CardTitle className="text-2xl text-white font-mono">Values</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-300 text-lg font-mono">
                  Innovation drives us, discipline guides us, and ambition propels us. We believe in 
                  collaborative excellence, ethical technology, and continuous learning.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* HOD Details with enhanced styling */}
          <div className="mt-16">
            <Card className="bg-gradient-to-br from-gray-900/60 to-purple-900/30 border-2 border-purple-500/30 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-cyan-400/5 to-purple-400/5 animate-pulse"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-white text-center font-mono animate-pulse">HOD Spotlight</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-purple-400 mb-4 font-mono animate-pulse">Himanshu (C Kastariya Verna)</h3>
                  <p className="text-gray-300 leading-relaxed font-mono">
                    Our Head of Hacking brings diverse expertise in coding, hacking, and ethical cybersecurity. 
                    Beyond tech, Himanshu excels in cricket, graphic design, and chess. He finds balance through 
                    meditation, prayer, fitness, and wisdom from sacred texts including the Bhagavad Gita, 
                    Chanakya Neeti, and Quran.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section id="team" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 font-mono">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Our Team
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 animate-pulse shadow-lg shadow-blue-500/50"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              Meet the brilliant minds behind ASTRA's innovations and achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/60 to-purple-900/30 border-2 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-cyan-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
                <CardHeader className="text-center relative z-10">
                  <div className="relative mx-auto mb-4">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1 animate-pulse">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-gray-800"
                      />
                    </div>
                    <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 group-hover:scale-110 transition-transform duration-500 animate-pulse"></div>
                  </div>
                  <CardTitle className="text-white text-xl font-mono">{member.name}</CardTitle>
                  <CardDescription className="text-purple-400 font-semibold font-mono">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className="text-gray-300 font-mono">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Events Section */}
      <section id="events" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 font-mono">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Events & Competitions
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8 animate-pulse shadow-lg shadow-cyan-500/50"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              Our track record of excellence in competitive technology events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/80 to-blue-900/30 border-2 border-blue-500/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <Trophy className="h-8 w-8 text-yellow-400 animate-pulse" />
                    <span className="text-sm text-blue-400 font-semibold font-mono animate-pulse">{event.date}</span>
                  </div>
                  <CardTitle className="text-white text-xl font-mono">{event.title}</CardTitle>
                  <div className="text-lg font-bold text-yellow-400 font-mono animate-pulse">{event.result}</div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-300 font-mono">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 font-mono">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Projects & Innovations
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8 animate-pulse shadow-lg shadow-purple-500/50"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              Cutting-edge projects that showcase our technical expertise and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/80 to-purple-900/30 border-2 border-purple-500/30 backdrop-blur-sm hover:scale-102 transition-all duration-500 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-cyan-400/10 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <Code className="h-8 w-8 text-purple-400 animate-pulse" />
                    <span className="text-sm text-purple-400 font-semibold bg-purple-500/30 px-2 py-1 rounded font-mono border border-purple-400/50">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-white text-xl font-mono">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-300 mb-4 font-mono">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 px-2 py-1 rounded border border-blue-500/50 font-mono animate-pulse"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 font-mono">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Join the Mission
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8 animate-pulse shadow-lg shadow-cyan-500/50"></div>
            <p className="text-xl text-gray-300 font-mono">
              Ready to push the boundaries of technology? Connect with ASTRA today.
            </p>
          </div>
          
          <Card className="bg-gradient-to-br from-gray-900/80 to-purple-900/30 border-2 border-purple-500/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-cyan-400/5 animate-pulse"></div>
            <CardContent className="p-8 relative z-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                      Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="Your name"
                      className="bg-black/70 border-2 border-purple-500/50 text-white placeholder:text-gray-500 focus:border-cyan-400 font-mono backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-black/70 border-2 border-purple-500/50 text-white placeholder:text-gray-500 focus:border-cyan-400 font-mono backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your goals, skills, or how you'd like to collaborate..."
                    rows={4}
                    className="bg-black/70 border-2 border-purple-500/50 text-white placeholder:text-gray-500 focus:border-cyan-400 font-mono backdrop-blur-sm"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-2 border-purple-500/50 shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/50 transition-all duration-500 font-mono relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <Rocket className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">Launch Your Journey</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-cyan-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Star className="h-8 w-8 text-cyan-400 animate-spin" style={{ animationDuration: '20s' }} />
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-mono">
              ASTRA
            </span>
          </div>
          <div className="text-sm text-cyan-300 tracking-[0.3em] mb-4 font-mono animate-pulse">
            INNOVATION • DISCIPLINE • AMBITION
          </div>
          <p className="text-gray-400 mb-4 font-mono">
            Shaping the future through technology, one innovation at a time.
          </p>
          <p className="text-sm text-gray-500 font-mono">
            © 2024 ASTRA. Born to Lead, Trained to Win.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
