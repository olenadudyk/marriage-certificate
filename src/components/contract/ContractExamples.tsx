
import React from 'react';

const ContractExamples = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Traducción Profesional de Estados de Cuenta Bancarios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traductores expertos para estados de cuenta bancarios aceptados por 
            USCIS, consulados y autoridades oficiales de inmigración para solicitudes de visa y procedimientos legales.
          </p>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-50 border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Traducción Profesional de Estados de Cuenta Bancarios</h3>
            <p className="text-gray-600 mb-6">
              Nuestros traductores certificados proporcionan traducciones precisas de estados de cuenta que cumplen 
              con los requisitos legales y estándares de USCIS para solicitudes de visa y procedimientos de inmigración.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Idiomas que servimos:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Español a Inglés</p>
                  <p>• Portugués a Inglés</p>
                  <p>• Francés a Inglés</p>
                  <p>• Otros idiomas disponibles</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tipos de documentos:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Estados de cuenta corriente</p>
                  <p>• Estados de cuenta de ahorros</p>
                  <p>• Estados de cuenta comerciales</p>
                  <p>• Estados de tarjeta de crédito</p>
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
