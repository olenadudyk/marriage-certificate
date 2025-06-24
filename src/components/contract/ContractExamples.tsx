
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContractExamples = () => {
  const examples = [
    {
      title: "Traducción de Certificado de Nacimiento con Apostilla",
      description: "Documento oficial de nacimiento con certificación de apostilla",
      features: [
        "Traducción completa de información de nacimiento",
        "Traducción de sello y estampa de apostilla", 
        "Firmas gubernamentales certificadas",
        "Verificación oficial incluida"
      ],
      image: "📄"
    },
    {
      title: "Traducción de Diploma Educativo con Apostilla", 
      description: "Documento académico con validación de apostilla",
      features: [
        "Información académica completa verificada",
        "Traducción de sello y firma universitaria",
        "Autenticación de apostilla certificada",
        "Documentación de registro educativo"
      ],
      image: "🎓"
    },
    {
      title: "Traducción de Certificado de Matrimonio con Apostilla",
      description: "Documento de matrimonio con apostilla para procesamiento de inmigración",
      features: [
        "Traducción de detalles de matrimonio",
        "Traducciones de sello de apostilla",
        "Certificación gubernamental",
        "Documentación de registro civil"
      ],
      image: "💍"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Traducción Profesional de Documentos con Apostilla</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios de traducción expertos para documentos apostillados aceptados por 
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio Profesional de Traducción de Documentos con Apostilla</h3>
            <p className="text-gray-600 mb-6">
              Nuestros traductores certificados proporcionan traducciones precisas de documentos con apostilla que cumplen 
              con los requisitos legales y estándares de USCIS para solicitudes de visa y procedimientos de inmigración.
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
                <h4 className="font-semibold text-gray-900 mb-2">Tipos de documentos:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Certificados de nacimiento con apostilla</p>
                  <p>• Diplomas educativos con apostilla</p>
                  <p>• Certificados de matrimonio con apostilla</p>
                  <p>• Documentos legales con apostilla</p>
                  <p>• Traducciones de sellos de apostilla</p>
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
