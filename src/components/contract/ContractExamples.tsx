
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContractExamples = () => {
  const examples = [
    {
      title: "Traducción de Título Universitario",
      description: "Licenciatura o Maestría con certificación oficial",
      features: [
        "Traducción completa de sello universitario",
        "Firmas del registro certificadas", 
        "Honores académicos y promedio incluidos",
        "Fecha de graduación verificada"
      ],
      image: "🎓"
    },
    {
      title: "Traducción de Diploma Profesional", 
      description: "Diploma técnico o profesional con validación oficial",
      features: [
        "Credenciales profesionales verificadas",
        "Detalles de la institución incluidos",
        "Áreas de especialización traducidas",
        "Certificación oficial incluida"
      ],
      image: "📜"
    },
    {
      title: "Traducción de Transcripción Académica",
      description: "Expediente académico oficial para evaluación de credenciales",
      features: [
        "Lista completa de cursos",
        "Calificaciones y horas de crédito",
        "Certificación oficial",
        "Detalles de acreditación institucional"
      ],
      image: "📊"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Traducción Profesional de Diplomas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios de traducción expertos para diplomas aceptados por 
            universidades estadounidenses, empleadores y USCIS para propósitos de inmigración y educación.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio Profesional de Traducción Educativa</h3>
            <p className="text-gray-600 mb-6">
              Nuestros traductores certificados proporcionan traducciones precisas de diplomas que cumplen 
              con los requisitos de admisión universitaria y estándares de verificación de empleadores.
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
                  <p>• Títulos universitarios</p>
                  <p>• Diplomas técnicos</p>
                  <p>• Transcripciones académicas</p>
                  <p>• Certificados profesionales</p>
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
