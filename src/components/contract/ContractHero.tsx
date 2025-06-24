
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Award } from 'lucide-react';

const ContractHero = () => {
  return (
    <section className="relative bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Servicios de Traducción de Pasaporte
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto">
            Traducción certificada de pasaportes del español al inglés para USCIS, inmigración, solicitudes de visa y propósitos oficiales. 
            Traductores expertos especializados en documentos de pasaporte, páginas de identificación y sellos oficiales para aceptación legal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Sube Tu Pasaporte para Traducción
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
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Traducción Certificada de Pasaporte</h3>
            <p className="text-gray-600">Traducción completa de páginas de pasaporte, sellos oficiales e información biográfica con precisión certificada para aceptación de USCIS y validez legal</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Clock className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Traducción Rápida de Documentos</h3>
            <p className="text-gray-600">Entrega en 24 horas para traducciones urgentes de pasaportes con precisión certificada para solicitudes de visa y peticiones de inmigración</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Award className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Expertos en Documentos de Pasaporte</h3>
            <p className="text-gray-600">Traductores especializados con experiencia en traducciones de pasaportes de todos los países y territorios de habla hispana</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractHero;
