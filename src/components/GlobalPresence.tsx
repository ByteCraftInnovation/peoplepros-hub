import { MapPin, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const locations = [
  {
    region: "India",
    description: "Headquarters with nationwide operations",
  },
  {
    region: "Southeast Asia",
    description: "Regional presence with Malaysia market expertise",
  },
];

const GlobalPresence = () => {
  return (
    <section id="presence" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Globe className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our Global Presence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategically positioned in India and Southeast Asia to serve diverse markets
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {locations.map((location, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {location.region}
                </h3>
                <p className="text-muted-foreground">
                  {location.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
