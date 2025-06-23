
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Award } from 'lucide-react';

const ContractHero = () => {
  return (
    <section className="relative bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Traducción Profesional de Contratos
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto">
            Traducción certificada de contratos comerciales del español al inglés para el comercio internacional, procedimientos legales y transacciones corporativas. 
            Traductores expertos especializados en acuerdos comerciales y documentos de contratos legales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Subir Su Contrato para Traducción
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
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Traducción Certificada de Contratos</h3>
            <p className="text-gray-600">Traducción completa de cláusulas legales, términos y condiciones con precisión certificada para validez comercial completa y aceptación legal</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Clock className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Traducción Rápida de Contratos</h3>
            <p className="text-gray-600">Entrega en 24 horas para traducciones urgentes de contratos con precisión certificada para aplicaciones comerciales y legales</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Award className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Expertos en Traducción de Documentos Comerciales</h3>
            <p className="text-gray-600">Traductores especializados con experiencia en traducciones de contratos para negocios internacionales en todos los mercados de habla hispana</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractHero;
