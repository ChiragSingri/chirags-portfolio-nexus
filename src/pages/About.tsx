
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = {
    professional: [
      "Team Management",
      "Market Research",
      "Problem Solving",
      "Interpersonal Communication",
      "Time Management",
      "Financial Analysis",
      "Supply Chain Management",
      "Operations Optimization",
      "Data Analysis",
      "Quality Assurance"
    ],
    technical: [
      "MS Office Suite",
      "Financial Modeling",
      "GST Filing",
      "Payroll Management",
      "Inventory Control",
      "Basic Python"
    ]
  };

  const achievements = [
    "Student Coordinator, Placement Cell at RV Institute of Management",
    "Winner of Business Quizzes conducted across various B-Schools",
    "Core Committee Member, RVIM Challenge 3.0 (Budget Analysis Competition)",
    "Core Organizer, Finance Fest – Nidhi Utsav 2024",
    "Committee Member, Student Research Symposium – Anveshan 2025, a student research conference",
    "Volunteer, REEN Conference 2025 (Hosted by IISc and University of the Fraser Valley, Canada)"
  ];

  const certifications = [
    {
      name: "Market Risk Management: Frameworks & Strategies",
      issuer: "Coursera - New York Institute of Finance"
    },
    {
      name: "Credit Risk Management: Frameworks & Strategies",
      issuer: "Coursera - New York Institute of Finance"
    },
    {
      name: "Operations Management: Organization and Analysis",
      issuer: "University of Illinois Urbana-Champaign"
    },
    {
      name: "Stock Valuation with Dividend Discount Model",
      issuer: "Coursera Project Network"
    }
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">
            A passionate professional with expertise in finance, operations, and supply chain management
          </p>
        </div>
      </div>

      {/* Personal Background */}
      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Chirag S M"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-primary">Chirag S M</h2>
              <p className="text-secondary mb-4">Finance | Operations and Supply Chain Management</p>
            </div>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div className="animate-on-scroll">
              <h2 className="section-subtitle">Personal Background</h2>
              <p className="text-gray-700 mb-4">
                I am a detail-oriented and motivated finance and operations professional with a strong academic foundation and a passion for continuous learning. Currently pursuing my MBA with specialization in Finance, Operations, and Supply Chain Management at RV Institute of Management, I am dedicated to leveraging my skills to drive operational efficiency and financial growth.
              </p>
              <p className="text-gray-700">
                With experience spanning payroll management, financial reconciliations, and quality assurance, I have developed a comprehensive understanding of the key aspects that drive business success. I am particularly interested in data analysis, market research, and problem-solving.
              </p>
            </div>

            <div className="animate-on-scroll">
              <h2 className="section-subtitle">Education</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-semibold text-lg">MBA - Finance, Operations, and Supply Chain Management</h3>
                  <p className="text-secondary">RV Institute of Management | 2023-2025</p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-semibold text-lg">B.Com - Accounting and Marketing</h3>
                  <p className="text-secondary">Vijaya Evening College | 2020-2023</p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-semibold text-lg">Pre-University Course in Commerce</h3>
                  <p className="text-secondary">Sri Bhagwan Mahaveer Jain College | 2018-2020</p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-semibold text-lg">10th Standard</h3>
                  <p className="text-secondary">Vasavi Vidyanikethan, Magadi | 2018</p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <h2 className="section-subtitle">Internship Experience</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl text-primary">Finance Intern</h3>
                    <p className="text-secondary font-medium">Aasaanjobs Pvt. Ltd. | Nov 2024 – Jan 2025</p>
                    <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                      <li>Managed payroll processes and financial reconciliations.</li>
                      <li>Filed monthly GST returns, ensuring compliance and accuracy.</li>
                      <li>Assisted in financial reporting and data analysis.</li>
                      <li>Collaborated with cross-functional teams to streamline financial operations.</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl text-primary">Quality Assurance Intern</h3>
                    <p className="text-secondary font-medium">The Akshaya Patra Foundation | June 2024</p>
                    <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                      <li>Ensured quality assurance and control in food safety operations.</li>
                      <li>Monitored SOP compliance and managed stock tagging for inventory control.</li>
                      <li>Participated in supply chain optimization initiatives.</li>
                      <li>Documented quality assurance processes and helped identify improvement opportunities.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills and Certifications */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h2 className="section-subtitle">Professional Skills</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.professional.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-primary shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h2 className="section-subtitle">Technical Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.technical.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-secondary shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <h2 className="section-subtitle">Languages</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Kannada, Telugu</span>
                  <span>Native Proficiency</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">English</span>
                  <span>Professional Proficiency</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Hindi</span>
                  <span>Intermediate</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>

            <h2 className="section-subtitle">Certifications</h2>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium text-primary">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Achievements */}
      <SectionWrapper>
        <h2 className="section-title text-center animate-on-scroll">Awards & Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="animate-on-scroll">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="rounded-full w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="rounded-full w-4 h-4 bg-primary"></div>
                </div>
                <p className="text-gray-700">{achievement}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
