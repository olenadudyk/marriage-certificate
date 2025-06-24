
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

        <div className="mt-16">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Passport Translation Examples</h3>
            <p className="text-gray-700 mb-8 text-center">
              See examples of the types of passport documents we translate with certified accuracy
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h4 className="font-bold text-blue-900 mb-3">Spanish Passport</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Original:</strong> "Pasaporte Español"</p>
                  <p><strong>Translation:</strong> "Spanish Passport"</p>
                  <p><strong>Contains:</strong> Personal data, nationality, passport number, visa pages</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h4 className="font-bold text-blue-900 mb-3">Mexican Passport</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Original:</strong> "Pasaporte Mexicano"</p>
                  <p><strong>Translation:</strong> "Mexican Passport"</p>
                  <p><strong>Contains:</strong> CURP, birth details, travel stamps, emergency contact</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h4 className="font-bold text-blue-900 mb-3">Colombian Passport</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Original:</strong> "Pasaporte Colombiano"</p>
                  <p><strong>Translation:</strong> "Colombian Passport"</p>
                  <p><strong>Contains:</strong> Cédula number, visa history, entry/exit stamps</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h4 className="font-bold text-blue-900 mb-3">Brazilian Passport</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Original:</strong> "Passaporte Brasileiro"</p>
                  <p><strong>Translation:</strong> "Brazilian Passport"</p>
                  <p><strong>Contains:</strong> CPF, RG, visa pages, consular stamps</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h4 className="font-bold text-blue-900 mb-3">French Passport</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Original:</strong> "Passeport Français"</p>
                  <p><strong>Translation:</strong> "French Passport"</p>
                  <p><strong>Contains:</strong> EU citizenship, Schengen visas, travel endorsements</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h4 className="font-bold text-blue-900 mb-3">Diplomatic Passport</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Original:</strong> "Pasaporte Diplomático"</p>
                  <p><strong>Translation:</strong> "Diplomatic Passport"</p>
                  <p><strong>Contains:</strong> Official status, diplomatic immunity, special endorsements</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 font-medium">
                All passport translations include complete certification and notarization for USCIS acceptance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractExamples;
