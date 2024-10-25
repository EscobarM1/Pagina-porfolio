import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Cog, GraduationCap, Mail, User2, Wrench, Gauge } from "lucide-react";
import { useNavigate } from "react-router-dom";

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center hero-background">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-blue-glow" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Cog className="w-20 h-20 mx-auto mb-8 text-primary animate-spin-slow opacity-90" />
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white mb-6">
            Mechanical Design Portfolio
          </h1>
          <p className="text-xl text-blue-200/80 max-w-2xl mx-auto mb-8">
            Transforming innovative concepts into precision-engineered solutions
          </p>
          <Button 
            size="lg" 
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 btn-scale btn-click"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background relative overflow-hidden" id="about">
        <div className="absolute inset-0 bg-blue-glow opacity-40" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-blue-400">
                <User2 className="w-8 h-8" /> About Me
              </h2>
              <p className="text-muted-foreground mb-4">
                With over [X] years of experience in mechanical design, I specialize in creating innovative solutions that combine form and function. My expertise spans from conceptual design to final production.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="p-4 border-blue-900/50 bg-muted/50 backdrop-blur hover:border-blue-700/50 transition-colors duration-300">
                  <Wrench className="w-8 h-8 mb-2 text-primary" />
                  <h3 className="font-semibold text-blue-200">CAD Expertise</h3>
                </Card>
                <Card className="p-4 border-blue-900/50 bg-muted/50 backdrop-blur hover:border-blue-700/50 transition-colors duration-300">
                  <Gauge className="w-8 h-8 mb-2 text-primary" />
                  <h3 className="font-semibold text-blue-200">Precision Design</h3>
                </Card>
              </div>
            </div>
            <div className="flex-1">
              <Card className="p-2 border-blue-900/50 bg-muted/50 backdrop-blur hover:border-blue-700/50 transition-colors duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="Design Work"
                  className="rounded-lg shadow-xl"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/10" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="overflow-hidden group border-blue-900/50 bg-muted/50 backdrop-blur hover:border-blue-700/50 transition-colors duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80`}
                    alt={`Project ${project}`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-200">Project Title {project}</h3>
                  <p className="text-muted-foreground mb-4">
                    Brief description of the project and its key features.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-900 hover:bg-blue-900/50 btn-scale btn-click"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section className="py-20 bg-background relative" id="skills">
        <div className="absolute inset-0 bg-blue-glow opacity-40" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 justify-center text-blue-400">
            <GraduationCap className="w-8 h-8" /> Education & Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-200">Education</h3>
              <div className="space-y-4">
                <Card className="p-6 border-blue-900/50 bg-muted/50 backdrop-blur hover:border-blue-700/50 transition-colors duration-300">
                  <h4 className="font-semibold text-blue-200">Master's in Mechanical Engineering</h4>
                  <p className="text-muted-foreground">University Name • 2018-2020</p>
                </Card>
                <Card className="p-6 border-blue-900/50 bg-muted/50 backdrop-blur hover:border-blue-700/50 transition-colors duration-300">
                  <h4 className="font-semibold text-blue-200">Bachelor's in Mechanical Engineering</h4>
                  <p className="text-muted-foreground">University Name • 2014-2018</p>
                </Card>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-200">Technical Skills</h3>
              <Card className="p-6 border-blue-900/50 bg-muted/50 backdrop-blur hover:border-blue-700/50 transition-colors duration-300">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-200">SolidWorks</span>
                      <span className="text-blue-400">95%</span>
                    </div>
                    <div className="h-2 bg-blue-950/50 rounded-full">
                      <div className="h-full w-[95%] bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-200">AutoCAD</span>
                      <span className="text-blue-400">90%</span>
                    </div>
                    <div className="h-2 bg-blue-950/50 rounded-full">
                      <div className="h-full w-[90%] bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-200">Fusion 360</span>
                      <span className="text-blue-400">85%</span>
                    </div>
                    <div className="h-2 bg-blue-950/50 rounded-full">
                      <div className="h-full w-[85%] bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/10" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 justify-center text-blue-400">
            <Mail className="w-8 h-8" /> Get in Touch
          </h2>
          <Card className="max-w-md mx-auto p-6 border-blue-900/50 bg-muted/50 backdrop-blur hover:border-blue-700/50 transition-colors duration-300">
            <p className="text-muted-foreground mb-6">
              Interested in collaboration? Let's discuss your project requirements.
            </p>
            <Button 
              size="lg" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 btn-scale btn-click"
            >
              Contact Me
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <Separator className="mb-8 opacity-20" />
          <div className="text-center text-muted-foreground">
            <p>© 2024 Mechanical Design Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;