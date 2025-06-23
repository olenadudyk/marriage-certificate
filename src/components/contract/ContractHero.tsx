
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Award } from 'lucide-react';

const ContractHero = () => {
  return (
    <section className="relative bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Immigration Document Translation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto">
            Certified translation of immigration documents from Spanish to English for USCIS, consular processing, and official immigration purposes. 
            Expert translators specialized in birth certificates, marriage certificates, diplomas, and all required immigration documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Upload Your Immigration Document for Translation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 text-gray-700 bg-white px-8 py-4 text-lg cursor-default" 
              disabled
            >
              📞 (555) 123-4567
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Shield className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Certified Immigration Document Translation</h3>
            <p className="text-gray-600">Complete translation of official seals, stamps, and government content with certified accuracy for USCIS acceptance and legal validity</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Clock className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Immigration Translation</h3>
            <p className="text-gray-600">24-hour delivery for urgent immigration translations with certified accuracy for visa applications and immigration petitions</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Award className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">USCIS Immigration Experts</h3>
            <p className="text-gray-600">Specialized translators with expertise in immigration document translations from all Spanish-speaking countries and government authorities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractHero;
