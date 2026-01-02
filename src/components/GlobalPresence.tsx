import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
  { name: 'India', description: 'Headquarters & Primary Operations', x: 68, y: 42 },
  { name: 'Malaysia', description: 'Southeast Asia Hub', x: 75, y: 52 },
  { name: 'Dubai', description: 'Middle East Operations', x: 58, y: 40 },
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

        <div className="relative max-w-5xl mx-auto">
          {/* World Map SVG */}
          <div className="relative bg-card rounded-2xl p-8 shadow-xl border overflow-hidden">
            <svg
              viewBox="0 0 100 50"
              className="w-full h-auto"
              style={{ minHeight: '300px' }}
            >
              {/* Simplified world map paths */}
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--muted))" />
                  <stop offset="100%" stopColor="hsl(var(--muted-foreground) / 0.2)" />
                </linearGradient>
              </defs>
              
              {/* Continents simplified shapes */}
              {/* North America */}
              <path
                d="M5,15 Q10,10 20,12 Q25,8 28,15 Q30,20 25,25 Q20,30 15,28 Q8,25 5,20 Z"
                fill="url(#mapGradient)"
                className="opacity-60"
              />
              {/* South America */}
              <path
                d="M18,32 Q22,30 24,35 Q26,42 22,47 Q18,48 16,45 Q14,40 16,35 Z"
                fill="url(#mapGradient)"
                className="opacity-60"
              />
              {/* Europe */}
              <path
                d="M42,12 Q48,10 52,14 Q54,18 50,20 Q46,22 42,18 Z"
                fill="url(#mapGradient)"
                className="opacity-60"
              />
              {/* Africa */}
              <path
                d="M45,24 Q52,22 55,28 Q56,35 52,42 Q48,45 44,40 Q42,32 45,24 Z"
                fill="url(#mapGradient)"
                className="opacity-60"
              />
              {/* Asia */}
              <path
                d="M55,10 Q65,8 78,12 Q85,15 88,22 Q85,28 78,30 Q70,32 62,28 Q55,24 55,18 Z"
                fill="url(#mapGradient)"
                className="opacity-60"
              />
              {/* India subcontinent */}
              <path
                d="M62,28 Q68,26 72,32 Q70,40 66,42 Q62,40 60,35 Q60,30 62,28 Z"
                fill="url(#mapGradient)"
                className="opacity-60"
              />
              {/* Southeast Asia */}
              <path
                d="M72,32 Q78,30 82,35 Q80,42 76,44 Q72,42 72,38 Z"
                fill="url(#mapGradient)"
                className="opacity-60"
              />
              {/* Australia */}
              <path
                d="M78,40 Q85,38 90,42 Q92,48 86,50 Q80,48 78,44 Z"
                fill="url(#mapGradient)"
                className="opacity-60"
              />

              {/* Location markers */}
              {locations.map((location, index) => (
                <g key={location.name}>
                  {/* Pulse animation circle */}
                  <circle
                    cx={location.x}
                    cy={location.y}
                    r="2"
                    fill="hsl(var(--primary))"
                    className="animate-ping opacity-75"
                    style={{ transformOrigin: `${location.x}px ${location.y}px` }}
                  />
                  {/* Main marker */}
                  <circle
                    cx={location.x}
                    cy={location.y}
                    r="1.5"
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--primary-foreground))"
                    strokeWidth="0.3"
                  />
                </g>
              ))}
            </svg>

            {/* Location cards overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card/95 to-transparent p-6 pt-16">
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {locations.map((location) => (
                  <div key={location.name} className="text-center group">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h4 className="font-bold text-foreground">{location.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{location.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
