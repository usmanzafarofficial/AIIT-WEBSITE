import React from 'react';
import Hero from '../components/Hero';
import AIFeatures from '../components/AIFeatures';
import TechStats from '../components/TechStats';
import RobotGallery from '../components/RobotGallery';
import AIModels from '../components/AIModels';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AIFeatures />
      <TechStats />
      <AIModels />
      <RobotGallery />
      {/* Other sections will be added here */}
    </div>
  );
};

export default Home;