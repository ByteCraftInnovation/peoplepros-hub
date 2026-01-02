import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const locations = [
  { name: 'India', coordinates: [78.9629, 20.5937] as [number, number], description: 'Headquarters & Primary Operations' },
  { name: 'Malaysia', coordinates: [101.9758, 4.2105] as [number, number], description: 'Southeast Asia Hub' },
  { name: 'Dubai', coordinates: [55.2708, 25.2048] as [number, number], description: 'Middle East Operations' },
];

const GlobalPresence = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(localStorage.getItem('mapbox_token') || '');
  const [isTokenSet, setIsTokenSet] = useState<boolean>(!!localStorage.getItem('mapbox_token'));

  const handleSetToken = () => {
    if (mapboxToken.trim()) {
      localStorage.setItem('mapbox_token', mapboxToken.trim());
      setIsTokenSet(true);
    }
  };

  useEffect(() => {
    if (!mapContainer.current || !isTokenSet) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      projection: 'globe',
      zoom: 1.8,
      center: [75, 20],
      pitch: 30,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.scrollZoom.disable();

    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(20, 20, 30)',
        'high-color': 'rgb(40, 40, 60)',
        'horizon-blend': 0.2,
      });
    });

    // Add markers for each location
    locations.forEach((location) => {
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.backgroundColor = 'hsl(37, 92%, 50%)';
      el.style.borderRadius = '50%';
      el.style.border = '3px solid white';
      el.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.6)';
      el.style.cursor = 'pointer';

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div style="padding: 8px;">
          <h3 style="font-weight: bold; margin-bottom: 4px; color: #1a1a1a;">${location.name}</h3>
          <p style="font-size: 12px; color: #666;">${location.description}</p>
        </div>`
      );

      new mapboxgl.Marker(el)
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Rotation animation
    const secondsPerRevolution = 180;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;
    let userInteracting = false;

    function spinGlobe() {
      if (!map.current) return;
      
      const zoom = map.current.getZoom();
      if (!userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.current.on('mousedown', () => { userInteracting = true; });
    map.current.on('dragstart', () => { userInteracting = true; });
    map.current.on('mouseup', () => { userInteracting = false; spinGlobe(); });
    map.current.on('touchend', () => { userInteracting = false; spinGlobe(); });
    map.current.on('moveend', () => { spinGlobe(); });

    spinGlobe();

    return () => {
      map.current?.remove();
    };
  }, [isTokenSet, mapboxToken]);

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

        {!isTokenSet ? (
          <div className="max-w-md mx-auto bg-card p-6 rounded-xl border">
            <p className="text-muted-foreground mb-4 text-sm">
              Enter your Mapbox public token to display the interactive map. 
              Get one free at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="pk.eyJ1..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
              />
              <Button onClick={handleSetToken}>Set Token</Button>
            </div>
          </div>
        ) : (
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div ref={mapContainer} className="absolute inset-0" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent p-6">
              <div className="flex flex-wrap justify-center gap-8">
                {locations.map((location) => (
                  <div key={location.name} className="text-center">
                    <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-2 shadow-lg" />
                    <h4 className="font-bold text-secondary-foreground">{location.name}</h4>
                    <p className="text-sm text-secondary-foreground/70">{location.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GlobalPresence;
