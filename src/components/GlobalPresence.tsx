import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
  { name: 'India', description: 'Headquarters & Primary Operations', x: 195, y: 180 },
  { name: 'Malaysia', description: 'Southeast Asia Hub', x: 280, y: 240 },
  { name: 'Dubai', description: 'Middle East Operations', x: 120, y: 150 },
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
          <div className="relative bg-card rounded-2xl p-6 md:p-8 shadow-xl border overflow-hidden">
            <svg
              viewBox="0 0 400 320"
              className="w-full h-auto"
              style={{ minHeight: '350px' }}
            >
              <defs>
                <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.15" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Ocean background */}
              <rect x="0" y="0" width="400" height="320" fill="hsl(var(--muted))" opacity="0.3" rx="12" />

              {/* Middle East - Saudi Arabia, UAE region */}
              <path
                d="M80,130 L100,120 L130,125 L140,140 L145,160 L130,180 L100,185 L80,170 L70,150 Z"
                fill="url(#landGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />
              
              {/* Iran */}
              <path
                d="M100,100 L140,95 L160,110 L155,130 L140,140 L130,125 L100,120 Z"
                fill="url(#landGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />

              {/* Pakistan */}
              <path
                d="M155,130 L175,115 L195,120 L200,140 L190,160 L170,165 L155,155 Z"
                fill="url(#landGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />

              {/* India */}
              <path
                d="M170,165 L190,160 L200,140 L220,135 L240,145 L245,165 L235,190 L220,220 L200,240 L185,230 L180,200 L175,180 Z"
                fill="url(#landGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />

              {/* Sri Lanka */}
              <path
                d="M210,250 L220,245 L225,255 L218,265 L210,260 Z"
                fill="url(#landGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />

              {/* Myanmar */}
              <path
                d="M245,165 L260,155 L265,175 L260,200 L250,210 L245,195 Z"
                fill="url(#landGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />

              {/* Thailand */}
              <path
                d="M260,200 L275,190 L280,210 L275,235 L265,245 L260,230 L258,215 Z"
                fill="url(#landGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />

              {/* Vietnam */}
              <path
                d="M280,175 L295,165 L300,185 L295,210 L285,225 L280,210 Z"
                fill="url(#landGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />

              {/* Malaysia */}
              <path
                d="M265,245 L290,240 L300,250 L295,265 L275,270 L265,260 Z"
                fill="url(#landGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />

              {/* Indonesia (partial) */}
              <path
                d="M275,280 L320,275 L340,285 L330,295 L290,300 L275,290 Z"
                fill="url(#landGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />

              {/* China */}
              <path
                d="M220,80 L280,70 L330,85 L350,110 L340,140 L310,155 L280,160 L260,155 L245,145 L240,120 L230,100 Z"
                fill="url(#landGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />

              {/* Japan */}
              <path
                d="M350,100 L365,95 L370,115 L365,135 L355,130 L350,115 Z"
                fill="url(#landGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />

              {/* Philippines */}
              <path
                d="M320,180 L335,175 L340,195 L335,215 L325,210 L320,195 Z"
                fill="url(#landGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />

              {/* Location markers with pulse animation */}
              {locations.map((location) => (
                <g key={location.name} filter="url(#glow)">
                  {/* Outer pulse ring */}
                  <circle
                    cx={location.x}
                    cy={location.y}
                    r="12"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    opacity="0.4"
                    className="animate-ping"
                    style={{ transformOrigin: `${location.x}px ${location.y}px` }}
                  />
                  {/* Inner glow */}
                  <circle
                    cx={location.x}
                    cy={location.y}
                    r="8"
                    fill="hsl(var(--primary))"
                    opacity="0.3"
                  />
                  {/* Main marker */}
                  <circle
                    cx={location.x}
                    cy={location.y}
                    r="6"
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--background))"
                    strokeWidth="2"
                  />
                  {/* Center dot */}
                  <circle
                    cx={location.x}
                    cy={location.y}
                    r="2"
                    fill="hsl(var(--background))"
                  />
                </g>
              ))}

              {/* Location labels */}
              <text x="120" y="135" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold" textAnchor="middle">Dubai</text>
              <text x="195" y="165" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold" textAnchor="middle">India</text>
              <text x="280" y="225" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold" textAnchor="middle">Malaysia</text>
            </svg>

            {/* Location cards */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card/95 to-transparent p-6 pt-12">
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {locations.map((location) => (
                  <div key={location.name} className="text-center group hover-scale cursor-pointer">
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
