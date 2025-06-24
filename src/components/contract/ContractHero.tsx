
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Award } from 'lucide-react';

const ContractHero = () => {
  return (
    <section className="relative bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Traducción de Acta de Defunción
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto">
            Traducción certificada de actas de defunción de español a inglés para procedimientos legales, trámites de herencia y propósitos oficiales en Estados Unidos. 
            Traductores expertos especializados en registros vitales y documentos civiles oficiales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Sube tu Acta de Defunción para Traducción
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 text-gray-400 bg-gray-100 px-8 py-4 text-lg cursor-not-allowed" 
              disabled
            >
              Ver Muestra de Traducción de Acta de Defunción
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Shield className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Traducción Certificada de Acta de Defunción</h3>
            <p className="text-gray-600">Traducción completa de sellos oficiales, firmas del registrador y causa de muerte para validez legal completa y aceptación en tribunales</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Clock className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Traducción Rápida de Acta de Defunción</h3>
            <p className="text-gray-600">Entrega en 24 horas para traducciones urgentes de actas de defunción con precisión certificada para trámites legales y de herencia</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Award className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Expertos en Traducción de Registros Vitales</h3>
            <p className="text-gray-600">Traductores especializados con experiencia en traducciones de actas de defunción de registros civiles de todos los países de habla hispana</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractHero;
