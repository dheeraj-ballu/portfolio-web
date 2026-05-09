
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="font-semibold text-lg">Gurpreet Kaur</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dedicated Chemistry and English Linguistics educator committed to helping students achieve their academic goals.
            </p>
          </div>

          <div>
            <span className="font-semibold mb-4 block">Quick links</span>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                About
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Services
              </Link>
              <Link to="/experiences" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Experiences
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <span className="font-semibold mb-4 block">Connect</span>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:gurpreet.kaur@example.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>gurpreet.kaur@example.com</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Gurpreet Kaur. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground">Privacy Policy</span>
            <span className="text-sm text-muted-foreground">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
