
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileImage } from 'lucide-react';

const ContractPdfExamples = () => {
  const pdfExamples = [
    {
      title: "Certificado de Nacimiento Español con Apostilla - Documento Original",
      description: "Certificado de nacimiento completo con apostilla del registro civil español",
      location: "España, territorios españoles",
      fileSize: "1.1 MB",
      pages: "2 páginas",
      features: [
        "Detalles de nacimiento",
        "Sello y certificación de apostilla", 
        "Sellos oficiales del gobierno",
        "Firmas oficiales y del registrador"
      ]
    },
    {
      title: "Traducción Certificada al Inglés - Formato Oficial",
      description: "Traducción profesional de documento con apostilla con carta de certificación",
      location: "Lista para uso de USCIS",
      fileSize: "1.7 MB", 
      pages: "3 páginas",
      features: [
        "Formato compatible con USCIS",
        "Certificación del traductor",
        "Membrete oficial",
        "Certificación notarizada"
      ]
    },
    {
      title: "Traducción de Diploma Mexicano con Apostilla",
      description: "Diploma educativo con apostilla y traducción certificada",
      location: "México y otros países de habla hispana",
      fileSize: "1.4 MB",
      pages: "2 páginas", 
      features: [
        "Información académica completa",
        "Traducción de autenticación de apostilla",
        "Certificado de traducción certificada",
        "Validación educativa"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ejemplos de Traducción de Documentos con Apostilla</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vea ejemplos de documentos españoles apostillados que traducimos para solicitudes de visa estadounidenses y procedimientos oficiales. 
            Observe la calidad y formato de nuestras traducciones certificadas de documentos con apostilla.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pdfExamples.map((example, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-32 h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <FileImage className="text-gray-400" size={32} />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">{example.title}</CardTitle>
                <p className="text-blue-600 font-medium text-sm">{example.location}</p>
                <p className="text-gray-600 text-sm">{example.description}</p>
                <div className="flex justify-center gap-4 text-xs text-gray-500 mt-2">
                  <span>{example.fileSize}</span>
                  <span>•</span>
                  <span>{example.pages}</span>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-gray-900">El documento incluye:</h4>
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
          <div className="bg-white border rounded-lg p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio Profesional de Traducción de Documentos con Apostilla</h3>
            <p className="text-gray-600 mb-6">
              Nuestras traducciones de documentos con apostilla mantienen el formato legal exacto y la validez 
              requerida por USCIS, consulados y autoridades internacionales de inmigración.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Múltiples Formatos</div>
                <div className="text-gray-600 text-sm">PDF, JPG, PNG y documentos escaneados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Certificado</div>
                <div className="text-gray-600 text-sm">Traducciones aceptadas por autoridades oficiales</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">24 Horas</div>
                <div className="text-gray-600 text-sm">Entrega rápida garantizada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractPdfExamples;
