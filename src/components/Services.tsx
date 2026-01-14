import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, FileCheck, Wallet, Heart, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Background Verification",
    description: "Comprehensive BGV services ensuring secure and compliant hiring processes with thorough candidate screening."
  },
  {
    icon: Users,
    title: "Recruitment",
    description: "End-to-end talent acquisition solutions to find, attract, and onboard the best candidates for your organization."
  },
  {
    icon: FileCheck,
    title: "HR Compliance",
    description: "Stay compliant with ever-changing labor laws and regulations through our expert guidance and support."
  },
  {
    icon: Wallet,
    title: "Payroll Management",
    description: "Accurate and timely payroll processing with tax compliance, ensuring your employees are paid right, on time."
  },
  {
    icon: Heart,
    title: "Employee Engagement",
    description: "Foster a positive workplace culture with programs designed to boost morale, productivity, and retention."
  },
  {
    icon: TrendingUp,
    title: "Compensation & Benefits",
    description: "Market-aligned compensation strategies, benchmarking, performance-linked incentives, and comprehensive benefits advisory to drive results and sustainable growth."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive HR solutions tailored to meet your organization's unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
