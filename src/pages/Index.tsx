
import React from 'react';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const skills = [
    "Team Management", 
    "Market Research", 
    "Problem Solving", 
    "Interpersonal Communication", 
    "Time Management"
  ];

  const educationTimeline = [
    {
      degree: "MBA",
      institution: "RV Institute of Management",
      years: "2023-2025",
      specialization: "Finance, Operations, and Supply Chain Management"
    },
    {
      degree: "B.Com",
      institution: "Vijaya Evening College",
      years: "2020-2023",
      specialization: "Accounting and Marketing"
    },
    {
      degree: "PUC in Commerce",
      institution: "Sri Bhagwan Mahaveer Jain College",
      years: "2018-2020",
      specialization: ""
    },
    {
      degree: "10th",
      institution: "Vasavi Vidyanikethan, Magadi",
      years: "2018",
      specialization: ""
    }
  ];

  return (
    <>
      <HeroSection />

      {/* About Preview Section */}
      <SectionWrapper className="bg-gray-50">
        <h2 className="section-title text-center animate-on-scroll">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-on-scroll">
            <h3 className="section-subtitle">Background</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate finance and operations professional with a strong academic background and practical experience in financial analysis, operations optimization, and supply chain management.
            </p>
            <p className="text-gray-700">
              Currently pursuing my MBA with a specialization in Finance, Operations, and Supply Chain Management, I aim to leverage my skills to drive operational efficiency and financial growth.
            </p>
            <Button asChild className="mt-6 bg-primary hover:bg-primary-dark">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
          <div className="animate-on-scroll">
            <h3 className="section-subtitle">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-primary shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="section-subtitle mt-8">Languages</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Kannada, Telugu – Native Proficiency</li>
              <li>Hindi – Intermediate</li>
              <li>English – Professional Proficiency</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Experience Preview */}
      <SectionWrapper>
        <h2 className="section-title text-center animate-on-scroll">Work Experience</h2>
        <div className="space-y-8">
          <Card className="animate-on-scroll">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl text-primary">Finance Intern</h3>
              <p className="text-secondary font-medium">Aasaanjobs Pvt. Ltd. | Nov 2024 – Jan 2025</p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                <li>Managed payroll processes and financial reconciliations</li>
                <li>Filed monthly GST returns, ensuring compliance and accuracy</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="animate-on-scroll">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl text-primary">Quality Assurance Intern</h3>
              <p className="text-secondary font-medium">The Akshaya Patra Foundation | June 2024</p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                <li>Ensured quality assurance and control in food safety operations</li>
                <li>Monitored SOP compliance and managed stock tagging for inventory control</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-10">
          <Button asChild className="bg-primary hover:bg-primary-dark">
            <Link to="/portfolio">View My Portfolio</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Education Timeline */}
      <SectionWrapper className="bg-gray-50">
        <h2 className="section-title text-center animate-on-scroll">Education</h2>
        <div className="space-y-8 relative">
          <div className="hidden md:block w-0.5 bg-gray-300 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
          
          {educationTimeline.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center animate-on-scroll ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2"></div>
              <div className="rounded-full w-8 h-8 bg-primary hidden md:flex items-center justify-center mx-4 z-10">
                <div className="rounded-full w-3 h-3 bg-white"></div>
              </div>
              <Card className="md:w-1/2 w-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-primary">{item.degree}</h3>
                  <p className="text-secondary font-medium">{item.institution} | {item.years}</p>
                  {item.specialization && (
                    <p className="mt-2 text-gray-600">{item.specialization}</p>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact CTA */}
      <SectionWrapper>
        <div className="bg-primary rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            I'm open to opportunities in finance, operations, and supply chain management. 
            Feel free to reach out for collaborations or inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="tel:+916362577112" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
            >
              <Phone size={18} />
              <span>+91 63625 77112</span>
            </a>
            <a 
              href="mailto:chiraaagsingri@gmail.com" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
            >
              <Mail size={18} />
              <span>chiraaagsingri@gmail.com</span>
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Contact Me</Link>
            </Button>
            <Button asChild className="bg-white text-primary hover:bg-gray-100">
              <a href="https://crimson-kip-34.tiiny.site" target="_blank" rel="noopener noreferrer">
                <Download size={18} className="mr-2" />
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Index;
