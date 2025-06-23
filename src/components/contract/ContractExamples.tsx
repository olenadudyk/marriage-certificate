
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContractExamples = () => {
  const examples = [
    {
      title: "Traducción de Acta de Nacimiento para Inmigración",
      description: "Acta de nacimiento certificada con validación completa",
      features: [
        "Traducción de información personal",
        "Traducción de sello oficial y estampilla", 
        "Verificación de firma del registrador",
        "Endosos de autoridades gubernamentales incluidos"
      ],
      image: "📄"
    },
    {
      title: "Traducción de Certificado de Matrimonio para USCIS", 
      description: "Documento oficial de matrimonio con certificación completa",
      features: [
        "Detalles completos de la ceremonia verificados",
        "Traducción de información de testigos",
        "Documentación oficial del registro",
        "Certificación de sello gubernamental"
      ],
      image: "💍"
    },
    {
      title: "Traducción de Diploma para Inmigración",
      description: "Traducción de credencial educativa para procesamiento de visa",
      features: [
        "Traducción de sello y firma universitaria",
        "Verificación de logros académicos",
        "Certificación de autoridad educativa",
        "Documentación de validación de grado"
      ],
      image: "🎓"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Traducción Profesional de Documentos de Inmigración</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios de traducción experta para documentos de inmigración aceptados por 
            USCIS, consulados y autoridades oficiales de inmigración para solicitudes de visa y procedimientos legales.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio Profesional de Traducción de Documentos de Inmigración</h3>
            <p className="text-gray-600 mb-6">
              Nuestros traductores certificados proporcionan traducciones precisas de documentos de inmigración que cumplen 
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
                  <p>• Actas de nacimiento</p>
                  <p>• Certificados de matrimonio</p>
                  <p>• Diplomas educativos</p>
                  <p>• Certificados de antecedentes penales</p>
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
