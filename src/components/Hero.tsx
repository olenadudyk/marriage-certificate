
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Traducción de Acta de Matrimonio
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto">
            Traducción profesional de actas de matrimonio del español al inglés para solicitudes de inmigración USCIS en Estados Unidos. 
            Especializados en documentos latinos con traducciones certificadas y legalmente aceptadas entregadas en 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Subir Tu Acta de Matrimonio
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
              Ver Traducción de Ejemplo
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Shield className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Aceptado por USCIS en Estados Unidos</h3>
            <p className="text-gray-600">Traducciones certificadas aceptadas por las autoridades de inmigración de Estados Unidos para green cards, visas y solicitudes de ciudadanía</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Clock className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Entrega en 24 Horas</h3>
            <p className="text-gray-600">Tiempo de respuesta rápido para solicitudes urgentes de inmigración y visas de Estados Unidos</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border">
            <Award className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Especialistas en Documentos en Español</h3>
            <p className="text-gray-600">Traductores expertos especializados en actas de matrimonio en español y latino para inmigración a Estados Unidos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
