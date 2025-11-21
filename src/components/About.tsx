import { CheckCircle } from "lucide-react";
import teamAbout from "@/assets/team-about.jpeg";
const features = ["Expert HR professionals with industry experience", "Customized solutions for businesses of all sizes", "Compliance-focused approach", "Technology-driven processes", "24/7 support and consultation"];
const About = () => {
  return <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl transform -rotate-3" />
            <img src={teamAbout} alt="About YoBee xp" className="relative rounded-3xl shadow-2xl w-full h-auto object-cover" />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose <span className="text-primary">YoBee xp</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At YoBee xp, we're more than just an HR consulting firm. We're your strategic 
              partner in building a thriving workforce and creating a workplace where people 
              love to work.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{feature}</span>
                </div>)}
            </div>
            <div className="pt-6">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">17+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;