import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "Remote",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading development of large-scale web applications using Laravel and React. Architected microservices infrastructure, mentored junior developers, and improved application performance by 40%.",
      technologies: ["PHP", "Laravel", "React", "AWS", "Docker", "MySQL"],
      achievements: [
        "Reduced server response time by 60% through optimization",
        "Led team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 80%"
      ]
    },
    {
      id: 2,
      title: "PHP Developer",
      company: "Digital Innovation Labs",
      location: "San Francisco, CA",
      period: "2020 - 2022",
      type: "Full-time", 
      description: "Developed and maintained e-commerce platforms serving 100K+ users. Integrated third-party APIs, implemented payment systems, and optimized database performance.",
      technologies: ["PHP", "Symfony", "Vue.js", "PostgreSQL", "Redis"],
      achievements: [
        "Built payment system processing $2M+ monthly",
        "Improved site performance resulting in 25% conversion increase",
        "Implemented automated testing reducing bugs by 70%"
      ]
    },
    {
      id: 3,
      title: "Junior Web Developer", 
      company: "StartupHub",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Collaborated on various client projects, building responsive websites and web applications. Gained experience in agile development methodologies and modern PHP frameworks.",
      technologies: ["PHP", "CodeIgniter", "jQuery", "MySQL", "Bootstrap"],
      achievements: [
        "Delivered 15+ client projects on time and budget",
        "Learned modern development practices and frameworks",
        "Contributed to open-source projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-stack bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey in full-stack development, working with innovative companies 
            and delivering impactful solutions across various industries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-px bg-gradient-to-b from-primary to-primary/20 hidden md:block" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-[var(--glow-primary)] hidden md:block" />
              
              <div className="md:ml-16 mb-12">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-[var(--shadow-card)] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">{experience.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start lg:items-end gap-2 mt-4 lg:mt-0">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <Badge variant="secondary">{experience.type}</Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-tech-stack/30 text-tech-stack">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;