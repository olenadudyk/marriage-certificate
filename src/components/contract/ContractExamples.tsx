
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContractExamples = () => {
  const examples = [
    {
      title: "Traducción de Contrato Comercial",
      description: "Acuerdo comercial completo con certificación legal",
      features: [
        "Traducción de términos y condiciones",
        "Certificación de cláusulas legales", 
        "Términos de pago incluidos",
        "Disposiciones de responsabilidad verificadas"
      ],
      image: "📋"
    },
    {
      title: "Traducción de Contrato Laboral", 
      description: "Acuerdo laboral con validación legal completa",
      features: [
        "Detalles de descripción del trabajo verificados",
        "Información de compensación",
        "Beneficios y obligaciones",
        "Cumplimiento legal certificado"
      ],
      image: "📄"
    },
    {
      title: "Traducción de Contrato Internacional",
      description: "Acuerdo transfronterizo para negocios globales",
      features: [
        "Cumplimiento de derecho internacional",
        "Formato de múltiples jurisdicciones",
        "Traducción de términos comerciales",
        "Certificación de validez legal"
      ],
      image: "🌍"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Traducción Profesional de Contratos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios expertos de traducción para contratos comerciales aceptados por 
            tribunales, firmas legales e instituciones corporativas para negocios internacionales y procedimientos legales.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio Profesional de Traducción de Documentos Comerciales</h3>
            <p className="text-gray-600 mb-6">
              Nuestros traductores certificados proporcionan traducciones precisas de contratos que cumplen 
              con los requisitos legales y estándares comerciales para el comercio internacional.
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
                <h4 className="font-semibold text-gray-900 mb-2">Tipos de contratos:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Contratos de empleo</p>
                  <p>• Acuerdos comerciales</p>
                  <p>• Contratos de servicios</p>
                  <p>• Acuerdos de comercio internacional</p>
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
