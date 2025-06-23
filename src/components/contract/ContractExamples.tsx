
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContractExamples = () => {
  const examples = [
    {
      title: "Traducción de Licencia de Conducir Estándar",
      description: "Licencia de manejo completa con certificación total",
      features: [
        "Traducción de información personal",
        "Clase de licencia y restricciones", 
        "Verificación de fecha de vencimiento",
        "Endosos oficiales incluidos"
      ],
      image: "🪪"
    },
    {
      title: "Traducción de Licencia de Conducir Comercial", 
      description: "CDL profesional con validación completa",
      features: [
        "Endosos comerciales verificados",
        "Especificaciones de clase de vehículo",
        "Detalles de certificado médico",
        "Certificación de endoso de materiales peligrosos"
      ],
      image: "🚛"
    },
    {
      title: "Traducción de Licencia de Conducir Internacional",
      description: "Licencia transfronteriza para viajes globales",
      features: [
        "Cumplimiento con permiso internacional",
        "Formato de validez multinacional",
        "Certificación de autoridad automotriz",
        "Validación de documento de viaje"
      ],
      image: "🌍"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Traducción Profesional de Licencia de Conducir</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios de traducción expertos para licencias de manejo aceptadas por 
            oficinas del DMV, agencias de alquiler de autos e instituciones oficiales para viajes y propósitos legales.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border">
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4">{example.image}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">{example.title}</CardTitle>
                <p className="text-gray-600 text-sm">{example.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-gray-900">La traducción incluye:</h4>
                <ul className="space-y-2">
                  {example.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-50 border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio de Traducción de Documentos Automotrices Profesional</h3>
            <p className="text-gray-600 mb-6">
              Nuestros traductores certificados proporcionan traducciones precisas de licencias de conducir que cumplen 
              con requisitos legales y estándares oficiales para viajes internacionales y necesidades automotrices.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Idiomas que atendemos:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Español a Inglés</p>
                  <p>• Portugués a Inglés</p>
                  <p>• Francés a Inglés</p>
                  <p>• Otros idiomas disponibles</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tipos de licencias:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Licencias de conducir estándar</p>
                  <p>• Licencias de conducir comerciales</p>
                  <p>• Licencias de motocicleta</p>
                  <p>• Permisos de conducir internacionales</p>
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
