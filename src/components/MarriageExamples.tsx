
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MarriageExamples = () => {
  const examples = [
    {
      title: "Acta de Matrimonio Civil",
      description: "Documento de matrimonio oficial emitido por el gobierno",
      features: [
        "Traducción de sello gubernamental",
        "Firmas oficiales certificadas", 
        "Fecha y ubicación verificadas",
        "Nombres formateados correctamente"
      ],
      image: "📄"
    },
    {
      title: "Acta de Matrimonio Religioso", 
      description: "Acta de matrimonio emitida por la iglesia con validación civil",
      features: [
        "Detalles de ceremonia religiosa",
        "Registro civil incluido",
        "Firmas de testigos",
        "Certificación de autoridad religiosa"
      ],
      image: "⛪"
    },
    {
      title: "Acta de Matrimonio Estatal",
      description: "Documento de matrimonio emitido por el estado con validación oficial",
      features: [
        "Certificación estatal",
        "Sellos y estampillas oficiales",
        "Validez legal confirmada",
        "Autenticación completa"
      ],
      image: "🏛️"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Traducción de Actas de Matrimonio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios de traducción profesional para actas de matrimonio aceptadas por 
            USCIS y agencias gubernamentales de Estados Unidos para propósitos de inmigración.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio de Traducción Profesional</h3>
            <p className="text-gray-600 mb-6">
              Nuestros traductores certificados proporcionan traducciones precisas que cumplen 
              con los requisitos de USCIS para solicitudes de inmigración a Estados Unidos.
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
                  <p>• Actas de matrimonio civil</p>
                  <p>• Actas de matrimonio religioso</p>
                  <p>• Documentos emitidos por el estado</p>
                  <p>• Certificados apostillados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarriageExamples;
