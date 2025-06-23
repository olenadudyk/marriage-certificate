
import React from 'react';
import ContractHeader from '../components/contract/ContractHeader';
import ContractHero from '../components/contract/ContractHero';
import ContractTrustIndicators from '../components/contract/ContractTrustIndicators';
import ContractExamples from '../components/contract/ContractExamples';
import ContractPdfExamples from '../components/contract/ContractPdfExamples';
import ContractUploadArea from '../components/contract/ContractUploadArea';
import ContractTestimonials from '../components/contract/ContractTestimonials';
import ContractFooter from '../components/contract/ContractFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ContractHeader />
      <ContractHero />
      <ContractTrustIndicators />
      <ContractExamples />
      <ContractPdfExamples />
      <ContractUploadArea />
      <ContractTestimonials />
      <ContractFooter />
    </div>
  );
};

export default Index;
