import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional PHP developer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-stack/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 text-tech-stack border-tech-stack/20">
            Available for Freelance Projects
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-tech-stack bg-clip-text text-transparent">
            Full-Stack PHP
            <br />
            Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Building robust, scalable web applications with modern PHP frameworks, 
            cutting-edge frontend technologies, and cloud infrastructure.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {['PHP', 'Laravel', 'React', 'Vue.js', 'MySQL', 'Docker', 'AWS'].map((tech) => (
              <Badge key={tech} variant="outline" className="border-primary/30 text-primary hover:border-primary/60 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-primary to-tech-stack hover:shadow-[var(--glow-primary)] transition-all duration-300 animate-glow-pulse">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:border-primary/60">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;