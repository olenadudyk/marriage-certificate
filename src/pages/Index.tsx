
import React from 'react';
import Hero from '../components/Hero';
import DocumentTypes from '../components/DocumentTypes';
import TrustIndicators from '../components/TrustIndicators';
import UploadArea from '../components/UploadArea';
import ProcessSteps from '../components/ProcessSteps';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <TrustIndicators />
      <DocumentTypes />
      <UploadArea />
      <ProcessSteps />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
