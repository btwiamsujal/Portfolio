
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-tech-blue-light">Hi, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Sujal Patel
            </h1>
            <h2 className="text-3xl md:text-4xl text-tech-gray-lighter font-semibold">
              Aspiring Cybersecurity Enthusiast & Python Developer
            </h2>
            <p className="text-lg text-tech-gray-lighter max-w-lg">
              A final-year B.Tech IT student passionate about cybersecurity, Python development, and solving real-world problems through technology.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-tech-blue hover:bg-tech-blue-light">
                <a href="https://github.com/btwiamsujal">View My Work</a>
              </Button>
              <Button variant="outline" className="border-tech-blue text-tech-blue-light hover:bg-tech-blue/10">
                <a href="https://www.linkedin.com/in/sujal-patel-45b632266/">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-60 h-60 md:w-80 md:h-80 bg-tech-blue-dark/20 rounded-full overflow-hidden border-2 border-tech-blue/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue-dark to-tech-blue/50 opacity-70"></div>
              {/* Profile image placeholder with a tech-inspired gradient */}
              <div className="absolute inset-0 flex items-center justify-center text-white/70 text-6xl font-bold">
                <img src="images/img2.png" alt="Profile" className="rounded-full w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" className="text-tech-gray-lighter hover:text-tech-blue-light">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
