import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hello@johndoe.dev",
      href: "mailto:hello@johndoe.dev"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/johndoe",
      username: "@johndoe"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/johndoe",
      username: "/in/johndoe"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://twitter.com/johndoe",
      username: "@johndoe"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-stack bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your project to life? I'm available for freelance work, 
            consulting, and exciting full-time opportunities.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                <p className="text-muted-foreground">
                  Drop me a line and I'll get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input 
                      id="name"
                      placeholder="Your name" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your@email.com" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input 
                    id="subject"
                    placeholder="Project inquiry, collaboration, etc." 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project, timeline, and budget..."
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-success border-success/20">
                    Available for projects
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Response time: ~24 hours
                  </span>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-tech-stack hover:shadow-[var(--glow-primary)] transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-colors group"
                    >
                      <div className="text-primary group-hover:text-tech-stack transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-colors group"
                    >
                      <div className="text-primary group-hover:text-tech-stack transition-colors">
                        {social.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{social.label}</div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {social.username}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Project Rates</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hourly Rate:</span>
                    <span className="font-medium">$75 - $120/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project Rate:</span>
                    <span className="font-medium">$5,000 - $50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;