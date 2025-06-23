
import React from 'react';

const ContractTrustIndicators = () => {
  return (
    <section className="py-12 bg-blue-50 border-y">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span>4.9/5 de más de 8,500 clientes de inmigración</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📋</span>
              <span>Especialistas en Traducción de Documentos de Inmigración</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>100% Tasa de Aceptación de USCIS</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Seguro y Confidencial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractTrustIndicators;
