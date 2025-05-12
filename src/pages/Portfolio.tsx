
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Geopolitical Conflicts' Impact on Exchange Rate Dynamics",
      category: "Managerial Research Project",
      description: "Research on how geopolitical conflicts impact exchange rate dynamics, using advanced methodologies such as GARCH, MS-GARCH, and VAR. The project analyzed historical data to identify patterns and correlations between conflicts and currency fluctuations.",
      highlights: [
        "Applied GARCH and MS-GARCH models for volatility analysis",
        "Conducted Vector Autoregression (VAR) to understand interdependencies",
        "Analyzed the impact of major geopolitical events on currency pairs",
        "Developed implications for forex risk management strategies"
      ],
      link: "#"
    },
    {
      title: "Corporate Valuation",
      category: "Financial Modelling Project",
      description: "Financial modeling project focused on corporate valuation using the Dividend Discount Model and Discounted Cash Flow (DCF) model. The project involved analyzing financial statements, forecasting future performance, and determining the intrinsic value of the company.",
      highlights: [
        "Built comprehensive DCF models for company valuation",
        "Implemented the Dividend Discount Model for equity valuation",
        "Conducted sensitivity analysis to account for various scenarios",
        "Created dynamic financial models with multiple valuation methods"
      ],
      link: "#"
    },
    {
      title: "Stock Valuation with Dividend Discount Model",
      category: "Coursera Project",
      description: "Online non-credit project focused on applying the Dividend Discount Model to value stocks. The project provided hands-on experience in financial analysis and stock valuation techniques using real market data.",
      highlights: [
        "Applied theoretical concepts to practical stock valuation",
        "Analyzed dividend patterns and growth rates",
        "Calculated intrinsic values based on future dividend projections",
        "Developed skills in financial modeling and analysis"
      ],
      link: "#"
    },
    {
      title: "Operations Management: Organization and Analysis",
      category: "University of Illinois Course",
      description: "Comprehensive course on operations management principles, focusing on organizational structure and analytical methods for optimizing operations. The course covered various aspects of operations management, from process design to quality control.",
      highlights: [
        "Studied process analysis and operations strategy",
        "Learned quality management and control techniques",
        "Explored supply chain optimization methodologies",
        "Developed skills in operations planning and scheduling"
      ],
      link: "#"
    }
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Portfolio</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">
            A collection of my research projects, financial models, and academic work
          </p>
        </div>
      </div>

      {/* Project Categories */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="animate-on-scroll overflow-hidden">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="rounded-full w-1.5 h-1.5 bg-primary mt-2"></div>
                      <p className="text-sm text-gray-600">{highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full">
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Research Focus */}
      <SectionWrapper className="bg-gray-50">
        <h2 className="section-title text-center animate-on-scroll">Research Focus</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="animate-on-scroll">
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Financial Analysis</h3>
              <p className="text-gray-600">
                Focused on stock valuation, corporate finance, and investment analysis using various financial models and techniques.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll">
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Market Research</h3>
              <p className="text-gray-600">
                Conducted in-depth analysis of market trends, consumer behavior, and competitive landscapes to inform strategic decisions.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll">
            <CardContent className="p-6 text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Operations Optimization</h3>
              <p className="text-gray-600">
                Applied methodologies for streamlining operations, improving process efficiency, and enhancing supply chain management.
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Certifications */}
      <SectionWrapper>
        <h2 className="section-title text-center animate-on-scroll">Certifications & Courses</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="animate-on-scroll">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-primary">Market Risk Management: Frameworks & Strategies</h3>
              <p className="text-secondary">Coursera - New York Institute of Finance</p>
              <p className="mt-4 text-gray-700">
                Comprehensive course on market risk management frameworks and strategies. Learned about risk assessment methodologies, VaR calculations, stress testing, and risk mitigation techniques.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-primary">Credit Risk Management: Frameworks & Strategies</h3>
              <p className="text-secondary">Coursera - New York Institute of Finance</p>
              <p className="mt-4 text-gray-700">
                In-depth study of credit risk assessment, management strategies, and evaluation frameworks. Covered topics including credit scoring models, portfolio management, and regulatory requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-primary">Operations Management: Organization and Analysis</h3>
              <p className="text-secondary">University of Illinois Urbana-Champaign</p>
              <p className="mt-4 text-gray-700">
                Course focused on operations strategy, process analysis, quality management, and supply chain optimization. Developed skills in operations planning, scheduling, and performance evaluation.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-primary">Stock Valuation with Dividend Discount Model</h3>
              <p className="text-secondary">Coursera Project Network</p>
              <p className="mt-4 text-gray-700">
                Practical project applying the Dividend Discount Model for stock valuation. Learned to analyze dividend patterns, calculate growth rates, and determine intrinsic values for equities.
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Portfolio;
