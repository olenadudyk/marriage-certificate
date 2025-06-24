
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
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Example Passport Translations</h3>
            <p className="text-gray-700 mb-8 text-center">
              Here are examples of how we translate key passport fields with precision
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Original Spanish</h4>
                    <div className="bg-gray-50 p-4 rounded border text-sm">
                      <p><strong>Apellidos:</strong> García Rodríguez</p>
                      <p><strong>Nombre:</strong> María Isabel</p>
                      <p><strong>Nacionalidad:</strong> Española</p>
                      <p><strong>Fecha de nacimiento:</strong> 15/03/1985</p>
                      <p><strong>Lugar de nacimiento:</strong> Madrid, España</p>
                      <p><strong>Número de pasaporte:</strong> AAA123456</p>
                      <p><strong>Fecha de expedición:</strong> 10/05/2020</p>
                      <p><strong>Fecha de caducidad:</strong> 10/05/2030</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Certified English Translation</h4>
                    <div className="bg-gray-50 p-4 rounded border text-sm">
                      <p><strong>Surname:</strong> García Rodríguez</p>
                      <p><strong>Given name:</strong> María Isabel</p>
                      <p><strong>Nationality:</strong> Spanish</p>
                      <p><strong>Date of birth:</strong> March 15, 1985</p>
                      <p><strong>Place of birth:</strong> Madrid, Spain</p>
                      <p><strong>Passport number:</strong> AAA123456</p>
                      <p><strong>Date of issue:</strong> May 10, 2020</p>
                      <p><strong>Date of expiry:</strong> May 10, 2030</p>
                    </div>
                  </div>
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
