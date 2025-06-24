
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContractExamples = () => {
  const examples = [
    {
      title: "Traducción Completa de Acta de Defunción",
      description: "Acta de defunción completa con certificación oficial",
      features: [
        "Traducción completa del sello del registro civil",
        "Firmas certificadas del registrador", 
        "Información de causa de muerte incluida",
        "Fecha y lugar de defunción verificados"
      ],
      image: "📋"
    },
    {
      title: "Traducción de Acta de Defunción Forma Corta", 
      description: "Extracto o acta de defunción forma corta con validación",
      features: [
        "Detalles esenciales de defunción verificados",
        "Información oficial del registro",
        "Detalles del médico forense o centro médico",
        "Certificación oficial incluida"
      ],
      image: "📄"
    },
    {
      title: "Traducción de Acta de Defunción Internacional",
      description: "Acta de defunción extranjera para procedimientos legales en EE.UU.",
      features: [
        "Información vital completa",
        "Formato específico del país reconocido",
        "Certificación oficial",
        "Traducción compatible con tribunales"
      ],
      image: "🌍"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Traducción Profesional de Acta de Defunción</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios de traducción experta para actas de defunción aceptadas por 
            tribunales, agencias gubernamentales e instituciones legales para asuntos de herencia y procedimientos legales.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio Profesional de Traducción de Registros Vitales</h3>
            <p className="text-gray-600 mb-6">
              Nuestros traductores certificados proporcionan traducciones precisas de actas de defunción que cumplen 
              con los requisitos legales y estándares de documentos para procedimientos oficiales y de herencia.
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
                  <p>• Actas de defunción completas</p>
                  <p>• Actas de defunción forma corta</p>
                  <p>• Reportes del médico forense</p>
                  <p>• Certificados del registro civil</p>
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
