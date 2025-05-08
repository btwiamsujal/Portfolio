
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      link: "https://github.com/btwiamsujal",
      username: "sujal"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      link: "https://www.linkedin.com/in/sujal-patel-45b632266/",
      username: "sujal"
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      link: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqKBqCDMxsfSLFkhVmnjWjPpHDRWTGtgbWsVPjDVWWNqmxWjCRqsNJxgPDPXgNTqMLBdB",
      username: "sujal Patel"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-tech-darker">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-tech-gray-lighter">
              Have a question or want to work together? Feel free to contact me through this form or via my social links.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-tech-dark border-tech-gray text-black"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-tech-dark border-tech-gray text-black"
                />
              </div>
              <div>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-tech-dark border-tech-gray text-black"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="bg-tech-dark border-tech-gray text-black resize-none"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-tech-blue hover:bg-tech-blue-light"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-tech-dark p-6 rounded-lg border border-tech-gray">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-md hover:bg-tech-gray/20 transition-all"
                  >
                    <div className="bg-tech-blue/20 p-2 rounded-full text-tech-blue-light">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-medium">{social.name}</p>
                      <p className="text-tech-gray-lighter text-sm">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-tech-dark p-6 rounded-lg border border-tech-gray">
              <h3 className="text-xl font-semibold mb-4">Resume</h3>
              <p className="text-tech-gray-lighter mb-4">
                Download my resume to learn more about my education, experience, and skills.
              </p>
              <Button asChild className="w-full bg-tech-blue hover:bg-tech-blue-light">
                <a href="https://drive.google.com/file/d/1DNOjuOXaRIAcn6lRcOQemkFh6Csp_qoV/view?usp=sharing" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
