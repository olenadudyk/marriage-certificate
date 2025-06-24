
import React from 'react';

const ContractExamples = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Passport Translation Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert translators for passport documents accepted by 
            USCIS, consulates and official immigration authorities for visa applications and legal procedures.
          </p>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-50 border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Passport Translation Services</h3>
            <p className="text-gray-600 mb-6">
              Our certified translators provide accurate passport translations that meet 
              legal requirements and USCIS standards for visa applications and immigration procedures.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Languages we serve:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Spanish to English</p>
                  <p>• Portuguese to English</p>
                  <p>• French to English</p>
                  <p>• Other languages available</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Document types:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Regular passports</p>
                  <p>• Diplomatic passports</p>
                  <p>• Official passports</p>
                  <p>• Emergency travel documents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractExamples;
