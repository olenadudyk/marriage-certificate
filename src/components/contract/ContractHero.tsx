
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Award } from 'lucide-react';

const ContractHero = () => {
  return (
    <section className="relative bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Driver's License Translation Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto">
            Certified translation of driver's licenses from Spanish to English for US immigration, car rental, and official purposes. 
            Expert translators specialized in driving licenses and automotive documents from all Spanish-speaking countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Upload Your Driver's License for Translation
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
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Certified Driver's License Translation</h3>
            <p className="text-gray-600">Complete translation of license details, restrictions, and endorsements with certified accuracy for full legal validity and official acceptance</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Clock className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast License Translation</h3>
            <p className="text-gray-600">24-hour delivery for urgent driver's license translations with certified accuracy for car rental and official applications</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Award className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Automotive Document Experts</h3>
            <p className="text-gray-600">Specialized translators with expertise in driver's license translations from all Spanish-speaking countries and automotive authorities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractHero;
