
import React from 'react';
import ApostilleHero from '../components/apostille/ApostilleHero';
import ApostilleTrustIndicators from '../components/apostille/ApostilleTrustIndicators';
import ApostilleExamples from '../components/apostille/ApostilleExamples';
import ApostilleUploadArea from '../components/apostille/ApostilleUploadArea';
import ApostilleTestimonials from '../components/apostille/ApostilleTestimonials';
import ApostilleFooter from '../components/apostille/ApostilleFooter';

const Apostille = () => {
  return (
    <div className="min-h-screen bg-white">
      <ApostilleHero />
      <ApostilleTrustIndicators />
      <ApostilleExamples />
      <ApostilleUploadArea />
      <ApostilleTestimonials />
      <ApostilleFooter />
    </div>
  );
};

export default Apostille;
