import { Monitor, Headphones, Film, Rocket, Briefcase, GraduationCap, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    icon: Monitor,
    title: "Information Technology (IT) & Software Services",
  },
  {
    icon: Headphones,
    title: "IT Enabled Services (ITES) / BPO / KPO",
  },
  {
    icon: Film,
    title: "Media & Entertainment (Film, OTT, Digital Content)",
  },
  {
    icon: Rocket,
    title: "Startups & Digital Businesses",
  },
  {
    icon: Briefcase,
    title: "Corporate & Professional Services",
  },
  {
    icon: GraduationCap,
    title: "Education, Training & Skill Development",
  },
  {
    icon: Palette,
    title: "Creative & Design Services",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Served Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            YoBee XP delivers specialized HR solutions across diverse industry verticals
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <industry.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground text-sm leading-tight">
                  {industry.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
