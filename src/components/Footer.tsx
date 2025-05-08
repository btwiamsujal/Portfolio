import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-tech-dark border-t border-tech-gray">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-tech-gray-lighter mb-2 text-center">
              © {currentYear} Sujal. All rights reserved.
            </p>
            <p className="text-tech-gray-light text-sm">
              {/* Cybersecurity Enthusiast & Python Developer */}
            </p>
          </div>
          <div>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 p-3 rounded-full bg-tech-darker hover:bg-tech-blue/20 transition-colors group"
              aria-label="Back to top"
            >
              <ArrowUp
                size={20}
                className="text-tech-blue-light group-hover:translate-y-[-2px] transition-transform"
              />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-tech-gray text-center">
          <p className="text-tech-gray-light text-sm">
            Designed by Sujal Patel | Copyright ©2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
