
import React from 'react';
import BirthCertificateHero from '../components/birthcertificate/BirthCertificateHero';
import BirthCertificateTrustIndicators from '../components/birthcertificate/BirthCertificateTrustIndicators';
import BirthCertificateExamples from '../components/birthcertificate/BirthCertificateExamples';
import BirthCertificatePdfExamples from '../components/birthcertificate/BirthCertificatePdfExamples';
import BirthCertificateUploadArea from '../components/birthcertificate/BirthCertificateUploadArea';
import BirthCertificateTestimonials from '../components/birthcertificate/BirthCertificateTestimonials';
import BirthCertificateFooter from '../components/birthcertificate/BirthCertificateFooter';

const BirthCertificate = () => {
  return (
    <div className="min-h-screen bg-white">
      <BirthCertificateHero />
      <BirthCertificateTrustIndicators />
      <BirthCertificateExamples />
      <BirthCertificatePdfExamples />
      <BirthCertificateUploadArea />
      <BirthCertificateTestimonials />
      <BirthCertificateFooter />
    </div>
  );
};

export default BirthCertificate;
