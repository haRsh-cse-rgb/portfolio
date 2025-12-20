'use client';

import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  ExternalLink,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const portfolioData = {
  profile: {
    name: 'Kumar Harsh',
    title: 'Full Stack Developer with AI Integration',
    email: 'kumarharshrivastava@gmail.com',
    phone: '+91 9572301358',
    linkedin: 'https://linkedin.com/in/kumar-harsh-b69035242',
    github: 'https://github.com/harsh-cse-rgb',
    summary: {
      intro: `I’m a Full Stack Software Engineer who enjoys building production-grade systems that scale, perform, and solve real problems.`,
      
      experience: `I’ve worked across startup and institutional environments, including Indian Institute of Science (IISc), Bengaluru, where I led end-to-end development of large-scale platforms used by 500+ real users, reducing manual operations by up to 90%.`,
      
      ownership: `From architecting backend systems to crafting intuitive frontends, I enjoy owning products from idea to deployment.`,
      
      ai: `I’ve been exploring Generative AI integrations—building AI-powered resume analysis, intelligent automation, and improving matching accuracy with a strong focus on reliability, fallback handling, and measurable impact.`,
      
      founder: `I’m also the Founder & Developer of india-jobs.in, where I built a high-performance job aggregation platform with sub-second APIs, AI-based resume insights, and scalable AWS infrastructure.`,
      
      drives: [
        'Writing clean, maintainable code',
        'Designing systems that scale under real load',
        'Turning complex problems into simple, usable solutions',
        'Continuous learning across system design, cloud, and AI'
      ],
      
      openTo: 'Software Engineer / Full Stack Developer / Backend Developer / Frontend Developer / SDET',
      interests: 'Backend systems, scalable web apps, cloud architecture, Generative AI'
    },
    location: 'Bengaluru, India'
  }
};

 skills: [
  // Frontend
  { id: '1', category: 'Frontend', name: 'React', order: 1 },
  { id: '2', category: 'Frontend', name: 'Next.js', order: 2 },
  { id: '3', category: 'Frontend', name: 'JavaScript', order: 3 },
  { id: '4', category: 'Frontend', name: 'TypeScript', order: 4 },
  { id: '5', category: 'Frontend', name: 'Tailwind CSS', order: 5 },
  { id: '6', category: 'Frontend', name: 'Leaflet.js', order: 6 },

  // Backend
  { id: '7', category: 'Backend', name: 'Java', order: 1 },
  { id: '8', category: 'Backend', name: 'Spring Boot', order: 2 },
  { id: '9', category: 'Backend', name: 'Spring Security', order: 3 },
  { id: '10', category: 'Backend', name: 'Node.js', order: 4 },
  { id: '11', category: 'Backend', name: 'Express.js', order: 5 },
  { id: '12', category: 'Backend', name: 'REST APIs', order: 6 },
  { id: '13', category: 'Backend', name: 'JWT Authentication', order: 7 },
  { id: '14', category: 'Backend', name: 'WebSockets (STOMP)', order: 8 },

  // Databases
  { id: '15', category: 'Databases', name: 'MongoDB', order: 1 },
  { id: '16', category: 'Databases', name: 'Amazon DynamoDB', order: 2 },
  { id: '17', category: 'Databases', name: 'Supabase', order: 3 },

  // Cloud & DevOps
  { id: '18', category: 'Cloud & DevOps', name: 'AWS EC2', order: 1 },
  { id: '19', category: 'Cloud & DevOps', name: 'AWS S3', order: 2 },
  { id: '20', category: 'Cloud & DevOps', name: 'AWS CloudFront', order: 3 },
  { id: '21', category: 'Cloud & DevOps', name: 'AWS CloudWatch', order: 4 },
  { id: '22', category: 'Cloud & DevOps', name: 'Docker', order: 5 },
  { id: '23', category: 'Cloud & DevOps', name: 'NGINX (Reverse Proxy)', order: 6 },

  // Integrations & Platforms
  { id: '24', category: 'Integrations', name: 'Razorpay Payments', order: 1 },
  { id: '25', category: 'Integrations', name: 'Google Sheets API', order: 2 },
  { id: '26', category: 'Integrations', name: 'Nodemailer', order: 3 },
  { id: '27', category: 'Integrations', name: 'Service Workers', order: 4 },
  { id: '28', category: 'Integrations', name: 'Progressive Web Apps (PWA)', order: 5 },

  // Generative AI & Tools
  { id: '29', category: 'AI & Tools', name: 'OpenAI APIs', order: 1 },
  { id: '30', category: 'AI & Tools', name: 'Google Gemini APIs', order: 2 },
  { id: '31', category: 'AI & Tools', name: 'LangChain', order: 3 },
  { id: '32', category: 'AI & Tools', name: 'Prompt Engineering', order: 4 },
  { id: '33', category: 'AI & Tools', name: 'AI Resume Parsing & Matching', order: 5 },

  // Programming Languages
  { id: '34', category: 'Programming Languages', name: 'Java', order: 1 },
  { id: '35', category: 'Programming Languages', name: 'JavaScript', order: 2 },
  { id: '36', category: 'Programming Languages', name: 'TypeScript', order: 3 },
  { id: '37', category: 'Programming Languages', name: 'Python', order: 4 },
  { id: '38', category: 'AI & Tools', name: 'Cursor AI', order: 6 },
  { id: '39', category: 'AI & Tools', name: 'Perplexity', order: 7 },
  { id: '40', category: 'Cloud & DevOps', name: 'AWS Lambda', order: 7 },
],

  experiences: [
    {
      id: '1',
      company: 'Indian Institute of Science (IISc)',
      position: 'Full Stack Developer',
      location: 'Bengaluru, India',
      startDate: 'July 2025',
      endDate: 'December 2025',
      description: [
        'Led end-to-end development of international conference management system, automating registration, abstract submission, and payments for 500+ participants, eliminating 90% manual paperwork',
        'Integrated secure multi-currency payments (INR/USD) using Razorpay with webhook verification and transaction validation',
        'Built role-based admin dashboard with real-time Google Sheets synchronization, improving efficiency by 75%',
        'Engineered full-stack Progressive Web App (PWA) for 4-day conference with real-time updates via WebSocket',
        'Implemented JWT-based authentication supporting 100+ concurrent users with sub-second latency',
        'Developed geospatial analytics platform mapping 2,500+ industrial plants across India'
      ],
      technologies: ['Spring Boot', 'MongoDB', 'React', 'Next.js', 'WebSocket', 'JWT', 'Leaflet', 'Supabase', 'NGINX', 'PM2', 'Cloudinary', 'AWS'],
      companyUrl: 'https://iisc.ac.in'
    },
    {
      id: '2',
      company: 'india-jobs.in',
      position: 'Founder & Full Stack Engineer',
      location: 'Remote',
      startDate: 'September 2025',
      endDate: 'Present',
      description: [
        'Founded and built job aggregation platform delivering sub-second API responses for large-scale job filtering',
        'Developed AI-powered resume analysis system using Google Gemini API with 99.9% reliability',
        'Designed production-grade AWS infrastructure with optimized DynamoDB, CloudFront CDN, and horizontal scaling'
      ],
      technologies: ['Next.js 14', 'TypeScript', 'Express.js', 'AWS', 'DynamoDB', 'S3', 'EC2', 'NGINX', 'Tailwind'],
      companyUrl: 'https://india-jobs.in'
    },
    {
      id: '3',
      company: 'Biharinath Organic Farms',
      position: 'Freelance Full Stack Developer (Part-time)',
      location: 'Remote',
      startDate: 'November 2025',
      endDate: 'November 2025',
      description: [
        'Built a full-stack e-commerce platform using Next.js, TypeScript, and MongoDB, implementing product management, cart, order processing, and an admin dashboard',
'Integrated Razorpay payments (Online & COD), JWT-based authentication with OTP verification, and automated email notifications using Nodemailer',
'Converted the platform into a Progressive Web App using Capacitor, enabling single-codebase deployment for Web, iOS, and Android'
      ],
      technologies: ['Next.js', 'Node.js', 'PWA', 'REST APIs', 'Express.js', 'Tailwind', 'Razorpay Integration', 'MongoDB', 'Cursor'],
      companyUrl: 'https://biharinathorganicfarms.com'
    },
    {
      id: '4',
      company: 'Intervue.io',
      position: 'SDE Intern',
      location: 'Bengaluru, India',
      startDate: 'November 2025',
      endDate: 'December 2025',
      description: [
        'Automated rubric creation using OpenAI APIs, reducing manual effort by 75%',
        'Engineered 15+ platform features including real-time assessment interfaces and user dashboards',
        'Improved AI-driven skill matching accuracy from 65% to 72% through text normalization',
        'Contributed to Agile development cycles with sprint planning and code reviews'
      ],
      technologies: ['Next.js', 'Node.js', 'REST APIs', 'Express.js', 'AWS'],
      companyUrl: 'https://intervue.io'
    }
  ],
  education: [
    {
      id: '1',
      institution: 'Chandigarh University',
      degree: 'Bachelor of Engineering (7.4 cgpa)',
      field: 'Computer Science and Engineering',
      startDate: 'September 2020',
      endDate: 'May 2024',
      location: 'Chandigarh, India',
      type: 'university'
    },
    {
      id: '2',
      institution: 'Tender Heart Sr. Sec. School',
      degree: '12th Grade (82%)',
      field: 'PCM',
      startDate: '2018',
      endDate: '2019',
      location: 'India',
      type: 'secondary'
    },
    {
      id: '3',
      institution: 'Tender Heart Sr. Sec. School',
      degree: '10th Grade (85.5%)',
      field: 'Science',
      startDate: '2016',
      endDate: '2017',
      location: 'India',
      type: 'primary'
    }
    
    
  ],
  achievements: [
    {
      id: '1',
      title: 'STIS-V International Conference Lead',
      description: 'Led Registration Desk operations, coordinating volunteers and managing 500+ attendees',
      date: '2025'
    },
    {
      id: '2',
      title: 'GeeksForGeeks Top Performer',
      description: 'Secured 3rd rank in weekly coding competition',
      date: '2024'
    },
    {
      id: '3',
      title: 'Igebra AI Hackathon Winner',
      description: 'Secured 1st rank in the Igebra AI Hackathon',
      date: '2024'
    },
    {
      id: '4',
      title: 'Guinness World Record Participant',
      description: 'Largest Human waving flag formation at Chandigarh University',
      date: 'August 2022'
    }
  ],
  certifications: [
    { id: '1', name: 'React', issuer: 'Infowiz' },
    { id: '2', name: 'AWS Architecting', issuer: 'Amazon Web Services' },
    { id: '3', name: 'Software Testing', issuer: 'NPTEL' },
    { id: '4', name: 'Generative AI', issuer: 'Google Cloud' },
    { id: '5', name: 'Machine Learning', issuer: 'Stanford University' },
    { id: '6', name: 'Introduction To Cloud Computing', issuer: 'IBM' },
    { id: '7', name: 'AWS cloud Technical Essentials', issuer: 'Coursera' },
    { id: '8', name: 'Introduction To Agile Development & Scrum', issuer: 'Coursera' },
    { id: '9', name: 'The Fundamentals of Digital Marketing', issuer: 'Google' },
  ]
};

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const profile = portfolioData.profile;

  const groupedSkills = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-slate-900">{profile.name}</h1>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="hidden md:flex gap-8">
              {['about', 'experience', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 pb-4">
              {['about', 'experience', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block animate-float">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              KH
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            {profile.name}
          </h1>

          <p className="text-2xl md:text-3xl text-slate-600 font-medium mb-8">
            {profile.title}
          </p>

          <div className="flex items-center justify-center gap-2 text-slate-500 mb-12">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{profile.location}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button asChild variant="default" size="lg" className="bg-slate-900 hover:bg-slate-800">
              <a href={`mailto:${profile.email}`}>
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce inline-flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-slate-50">
  <div className="max-w-5xl mx-auto">
    
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        About Me
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
    </div>

    <Card className="border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
      <CardContent className="p-8 md:p-12 space-y-8">

        {/* Intro */}
        <p className="text-lg md:text-xl text-slate-800 font-medium">
          👋 {profile.summary.intro}
        </p>

        {/* Experience */}
        <p className="text-base md:text-lg text-slate-700 leading-relaxed">
          🏢 <span className="font-semibold text-slate-900">Experience:</span>{' '}
          {profile.summary.experience}
        </p>

        {/* Ownership */}
        <p className="text-base md:text-lg text-slate-700 leading-relaxed">
          🧩 <span className="font-semibold text-slate-900">Product Ownership:</span>{' '}
          {profile.summary.ownership}
        </p>

        {/* AI */}
        <p className="text-base md:text-lg text-slate-700 leading-relaxed">
          🤖 <span className="font-semibold text-slate-900">Generative AI:</span>{' '}
          {profile.summary.ai}
        </p>

        {/* Founder */}
        <p className="text-base md:text-lg text-slate-700 leading-relaxed">
          🚀 <span className="font-semibold text-slate-900">Founder Experience:</span>{' '}
          {profile.summary.founder}
        </p>

        {/* Divider */}
        <div className="h-px bg-slate-200"></div>

        {/* What Drives Me */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            💡 What Drives Me
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700">
            {profile.summary.drives.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Open To */}
        <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border border-blue-100">
          <p className="text-slate-900 font-semibold">
            📌 Open to:
          </p>
          <p className="text-slate-700 mt-1">
            {profile.summary.openTo}
          </p>

          <p className="text-slate-900 font-semibold mt-4">
            🎯 Interests:
          </p>
          <p className="text-slate-700">
            {profile.summary.interests}
          </p>
        </div>

      </CardContent>
    </Card>
  </div>
</section>


      <section id="experience" className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {portfolioData.experiences.map((exp) => (
              <Card key={exp.id} className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-slate-900 mb-2 flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-blue-500 flex-shrink-0" />
                        {exp.position}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-slate-700">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors inline-flex items-center gap-2"
                          >
                            {exp.company}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          exp.company
                        )}
                      </CardDescription>
                    </div>
                    <div className="text-right text-sm md:text-base">
                      <div className="flex items-center gap-2 text-slate-500 mb-1 justify-end">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 justify-end">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <Card key={category} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Code2 className="w-5 h-5 text-blue-500" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill.id} className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Educational Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-cyan-400 transform -translate-x-1/2"></div>

            <div className="space-y-8 md:space-y-12">
              {portfolioData.education.map((edu, index) => (
                <div key={edu.id} className="relative">
                  <div className="hidden md:flex absolute left-1/2 top-8 w-6 h-6 bg-white border-4 border-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full m-auto"></div>
                  </div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-0 md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${
                            edu.type === 'university' ? 'bg-blue-100' :
                            edu.type === 'secondary' ? 'bg-cyan-100' :
                            'bg-green-100'
                          }`}>
                            <GraduationCap className={`w-6 h-6 ${
                              edu.type === 'university' ? 'text-blue-600' :
                              edu.type === 'secondary' ? 'text-cyan-600' :
                              'text-green-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-2xl text-slate-900 mb-1">
                              {edu.degree}
                            </CardTitle>
                            <CardDescription className="text-lg font-medium text-slate-700 mb-2">
                              {edu.institution}
                            </CardDescription>
                            <p className="text-slate-600 text-sm mb-3">{edu.field}</p>

                            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{edu.startDate} - {edu.endDate}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{edu.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>

                  {index < portfolioData.education.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-400"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Achievements & Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                Achievements
              </h3>
              <div className="space-y-4">
                {portfolioData.achievements.map((achievement) => (
                  <Card key={achievement.id} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-slate-900 mb-2">{achievement.title}</h4>
                      <p className="text-slate-600 text-sm mb-2">{achievement.description}</p>
                      {achievement.date && (
                        <p className="text-xs text-slate-400">{achievement.date}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                Certifications
              </h3>
              <div className="space-y-4">
                {portfolioData.certifications.map((cert) => (
                  <Card key={cert.id} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-slate-900 mb-1">{cert.name}</h4>
                      <p className="text-slate-600 text-sm">{cert.issuer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href={`mailto:${profile.email}`} className="text-cyan-400 hover:text-cyan-300 break-all">
                  {profile.email}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href={`tel:${profile.phone}`} className="text-green-400 hover:text-green-300">
                  {profile.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-slate-300">{profile.location}</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-slate-950 text-slate-400 text-center">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
