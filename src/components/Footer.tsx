import { Button } from "@/components/ui/button";
import { Code, Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-t from-muted/30 to-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-primary mb-4">
              <Code className="w-6 h-6" />
              <span>John Doe</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Full-stack PHP developer passionate about creating exceptional web experiences 
              with modern technologies and clean code.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" asChild>
                <a href="https://github.com/tat16555" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              {[
                { label: "About Me", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-3 text-muted-foreground">
              <div>Web Application Development</div>
              <div>API Development & Integration</div>
              <div>Database Design & Optimization</div>
              <div>Technical Consulting</div>
              <div>Code Review & Mentoring</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/30">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4 md:mb-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm">
              © 2024 John Doe. All rights reserved.
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;