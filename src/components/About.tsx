import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Globe, Zap, Shield } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: ["PHP", "Node.js", "Python", "RESTful API"],
      color: "border-primary/30 bg-primary/5"
    },
    {
      category: "Frontend", 
      icon: <Code className="w-6 h-6" />,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap 5"],
      color: "border-tech-stack/30 bg-tech-stack/5"
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      technologies: ["MySQL", "SQL"],
      color: "border-success/30 bg-success/5"
    },
    {
      category: "DevOps & Tools",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["Docker", "Docker Compose", "Git", "GitHub", "Composer", "npm"],
      color: "border-warning/30 bg-warning/5"
    }
  ];

  const highlights = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Focused",
      description: "Optimizing applications for speed and scalability with advanced caching, database optimization, and efficient code architecture."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "Implementing robust security practices including input validation, SQL injection prevention, and secure authentication systems."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack Expertise",
      description: "From database design to user interface, delivering complete web solutions with modern best practices and clean code."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-stack bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 5 years of experience in web development, I specialize in creating 
            high-performance, secure applications that solve real business problems. 
            I'm passionate about clean code, modern architecture, and delivering exceptional user experiences.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className={`border ${skill.color} hover:shadow-[var(--shadow-card)] transition-all duration-300`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;