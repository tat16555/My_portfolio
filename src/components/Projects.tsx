import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import taskManagerImage from "@/assets/project-taskmanager.jpg";
import apiImage from "@/assets/project-api.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Laravel and React, featuring payment integration, inventory management, and real-time analytics.",
      image: ecommerceImage,
      technologies: ["Laravel", "React", "MySQL", "Stripe", "Redis", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      year: "2024",
      featured: true
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.",
      image: taskManagerImage,
      technologies: ["PHP", "Vue.js", "PostgreSQL", "WebSocket", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      year: "2023",
      featured: true
    },
    {
      id: 3,
      title: "RESTful API Documentation",
      description: "Comprehensive API platform with automated documentation generation, testing tools, and developer portal for third-party integrations.",
      image: apiImage,
      technologies: ["Laravel", "OpenAPI", "MongoDB", "OAuth2", "Elasticsearch"],
      liveUrl: "#",
      githubUrl: "#",
      year: "2023",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-stack bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            modern frameworks, and scalable architecture solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <Card key={project.id} className="group border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-[var(--shadow-card)] transition-all duration-500 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.year}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/30 text-primary text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="bg-gradient-to-r from-primary to-tech-stack">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:border-primary/60">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project) => (
            <Card key={project.id} className="group border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.year}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs border-muted">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 border-primary/30 text-primary">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-primary/30 text-primary">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:border-primary/60">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;