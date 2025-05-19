
import React, { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-primary" />,
      title: "Phone",
      value: "+91 63625 77112",
      link: "tel:+916362577112"
    },
    {
      icon: <Mail size={24} className="text-primary" />,
      title: "Email",
      value: "chiraaagsingri@gmail.com",
      link: "mailto:chiraaagsingri@gmail.com"
    },
    {
      icon: <Linkedin size={24} className="text-primary" />,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://linkedin.com/"
    }
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Me</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">
            Let's connect to discuss how we can work together
          </p>
        </div>
      </div>

      {/* Contact Form and Info */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-primary mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Message subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-dark"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Card */}
            <Card className="animate-on-scroll">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a 
                      key={index} 
                      href={item.link} 
                      target={item.title === "LinkedIn" ? "_blank" : undefined}
                      rel={item.title === "LinkedIn" ? "noreferrer" : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-700 font-medium">{item.title}</h3>
                        <p className="text-primary group-hover:underline">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="animate-on-scroll">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-primary mb-6">Download Resume</h2>
                <p className="text-gray-700 mb-6">
                  Get a detailed overview of my experience, skills, and qualifications. Click the button below to download my resume.
                </p>
                <Button asChild className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark">
                  <a href="/resume.pdf" download>
                    <Download size={18} />
                    <span>Download Resume</span>
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="animate-on-scroll">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">Availability</h2>
                <p className="text-gray-700">
                  I'm currently open to opportunities in finance, operations, and supply chain management. Feel free to reach out for collaborations, projects, or inquiries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Map or Location */}
      <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="section-title">Location</h2>
          <p className="text-lg text-gray-600">Based in Bangalore, Karnataka, India</p>
        </div>
        <div className="h-80 bg-gray-300 rounded-lg overflow-hidden animate-on-scroll">
          {/* This would be replaced with an actual map component in a real implementation */}
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <p className="text-gray-500">Map of Bangalore, Karnataka, India</p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
