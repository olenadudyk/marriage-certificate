
import React from 'react';
import DeathCertificateHeader from '../components/deathcertificate/DeathCertificateHeader';
import DeathCertificateHero from '../components/deathcertificate/DeathCertificateHero';
import DeathCertificateTrustIndicators from '../components/deathcertificate/DeathCertificateTrustIndicators';
import DeathCertificateExamples from '../components/deathcertificate/DeathCertificateExamples';
import DeathCertificatePdfExamples from '../components/deathcertificate/DeathCertificatePdfExamples';
import DeathCertificateUploadArea from '../components/deathcertificate/DeathCertificateUploadArea';
import DeathCertificateTestimonials from '../components/deathcertificate/DeathCertificateTestimonials';
import DeathCertificateFooter from '../components/deathcertificate/DeathCertificateFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <DeathCertificateHeader />
      <DeathCertificateHero />
      <DeathCertificateTrustIndicators />
      <DeathCertificateExamples />
      <DeathCertificatePdfExamples />
      <DeathCertificateUploadArea />
      <DeathCertificateTestimonials />
      <DeathCertificateFooter />
    </div>
  );
};

export default Index;
