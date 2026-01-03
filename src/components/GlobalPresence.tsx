import { MapPin } from 'lucide-react';

const locations = [
  { name: 'India', description: 'Headquarters & Primary Operations' },
  { name: 'Malaysia', description: 'Southeast Asia Hub' },
  { name: 'Dubai', description: 'Middle East Operations' },
];

const GlobalPresence = () => {
  return (
    <section id="global-presence" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-foreground">
            Our <span className="text-primary">Global Presence</span>
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Delivering HR excellence across Asia and the Middle East
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {locations.map((location) => (
            <div key={location.name} className="text-center group cursor-pointer bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-6 h-6 text-primary" />
                <h4 className="font-bold text-lg text-foreground">{location.name}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{location.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
