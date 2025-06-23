
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Award } from 'lucide-react';

const ContractHero = () => {
  return (
    <section className="relative bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Traducción de Documentos de Inmigración
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto">
            Traducción certificada de documentos de inmigración del español al inglés para USCIS, procesamiento consular y propósitos oficiales de inmigración. 
            Traductores expertos especializados en actas de nacimiento, certificados de matrimonio, diplomas y toda la documentación requerida para inmigración.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Sube tu Documento de Inmigración para Traducción
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
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Traducción Certificada de Documentos de Inmigración</h3>
            <p className="text-gray-600">Traducción completa de sellos oficiales, estampillas y contenido gubernamental con precisión certificada para aceptación de USCIS y validez legal</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Clock className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Traducción Rápida para Inmigración</h3>
            <p className="text-gray-600">Entrega en 24 horas para traducciones urgentes de inmigración con precisión certificada para solicitudes de visa y peticiones de inmigración</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Award className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Expertos en Inmigración de USCIS</h3>
            <p className="text-gray-600">Traductores especializados con experiencia en traducciones de documentos de inmigración de todos los países de habla hispana y autoridades gubernamentales</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractHero;
