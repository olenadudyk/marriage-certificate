
import React from 'react';
import Hero from '../components/Hero';
import TrustIndicators from '../components/TrustIndicators';
import DiplomaExamples from '../components/diploma/DiplomaExamples';
import DiplomaPdfExamples from '../components/diploma/DiplomaPdfExamples';
import UploadArea from '../components/UploadArea';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustIndicators />
      <DiplomaExamples />
      <DiplomaPdfExamples />
      <UploadArea />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
