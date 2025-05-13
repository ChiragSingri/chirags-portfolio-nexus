
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Financial Analysis & Modelling",
      description: "Comprehensive financial analysis and modeling services including valuation, forecasting, and scenario analysis to support your financial decision-making.",
      details: [
        "Stock and corporate valuation using DCF and DDM",
        "Financial statement analysis and ratio analysis",
        "Financial forecasting and projection",
        "Investment analysis and portfolio optimization",
        "Risk assessment and sensitivity analysis"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Market Research & Analysis",
      description: "In-depth market research and competitive analysis to help you understand market dynamics, identify opportunities, and make informed business decisions.",
      details: [
        "Comprehensive industry analysis",
        "Competitor benchmarking and analysis",
        "Market trend identification and analysis",
        "Consumer behavior studies",
        "Geopolitical impact assessment on markets"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: "Operations Optimization",
      description: "Strategic operations management consulting to streamline processes, enhance efficiency, and improve overall organizational productivity.",
      details: [
        "Process mapping and optimization",
        "Supply chain efficiency assessment",
        "Inventory management strategies",
        "Quality assurance framework development",
        "Standard Operating Procedure (SOP) development"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Financial Compliance & Reporting",
      description: "Expert assistance with financial compliance, GST filing, and reporting to ensure your business meets regulatory requirements efficiently.",
      details: [
        "GST return filing and compliance",
        "Financial report preparation",
        "Regulatory compliance assistance",
        "Financial reconciliation",
        "Audit support"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Initial discussion to understand your specific needs, challenges, and objectives."
    },
    {
      number: "02",
      title: "Analysis",
      description: "Thorough analysis of your current situation, identifying opportunities and areas for improvement."
    },
    {
      number: "03",
      title: "Strategy Development",
      description: "Creating a tailored strategy and action plan based on the analysis findings."
    },
    {
      number: "04",
      title: "Implementation",
      description: "Executing the strategy with constant monitoring and adjustments as needed."
    },
    {
      number: "05",
      title: "Review & Optimization",
      description: "Evaluating results and refining approaches to ensure optimal outcomes."
    }
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">
            Specialized expertise in finance, market research, and operations management
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <SectionWrapper>
        <h2 className="section-title text-center animate-on-scroll">What I Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="animate-on-scroll">
              <CardContent className="p-8">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="rounded-full w-1.5 h-1.5 bg-primary mt-2"></div>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-8 pb-8 pt-0">
                <Button asChild className="w-full bg-primary hover:bg-primary-dark">
                  <Link to="/contact">Inquire About This Service</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper className="bg-gray-50">
        <h2 className="section-title text-center animate-on-scroll">My Process</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 animate-on-scroll ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline number */}
              <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold md:absolute md:left-1/2 md:transform md:-translate-x-1/2 mb-4 md:mb-0">
                {step.number}
              </div>

              {/* Content */}
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <Card className="overflow-hidden">
                  <div className="h-1 bg-primary"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Spacer for alternate sides */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}
        </div>
      </SectionWrapper>

          </div>
  );
};

export default Services;
