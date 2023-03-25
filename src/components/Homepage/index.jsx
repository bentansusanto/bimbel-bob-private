import React, {useState, useEffect} from 'react'
import HeroSection from './Section/HeroSection'
import MapelSection from './Section/MapelSection';
import PackageSection from './Section/PackageSection';
import PromosiSection from './Section/PromosiSection';
import ServiceSection from './Section/ServiceSection';
import TestimoniSection from './Section/TestimoniSection';

const mediaQuery = window.matchMedia('(max-width: 600px)');

const Homepage = () => {
    const [matches, setMatches] = useState(mediaQuery.matches);

    useEffect(() => {
        const handler = (e) => {
          setMatches(e.matches);
        };
    
        mediaQuery.addEventListener('change', handler);
    
        return () => {
          mediaQuery.removeEventListener('change', handler);
        };
      }, []);

  return (
    <div>
        <HeroSection matches={matches}/>
        <PackageSection matches={matches}/>
        <ServiceSection matches={matches}/>
        <MapelSection matches={matches}/>
        <TestimoniSection matches={matches}/>
        <PromosiSection matches={matches}/>
    </div>
  )
}

export default Homepage