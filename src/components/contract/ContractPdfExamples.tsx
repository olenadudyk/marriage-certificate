
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileImage } from 'lucide-react';

const ContractPdfExamples = () => {
  const pdfExamples = [
    {
      title: "Acta de Nacimiento Española - Documento Original",
      description: "Acta de Nacimiento del Registro Civil Español",
      location: "España, América Latina",
      fileSize: "1.4 MB",
      pages: "2 páginas",
      features: [
        "Sello oficial del registro civil",
        "Firmas del registrador", 
        "Detalles de información de padres",
        "Registro completo de nacimiento"
      ]
    },
    {
      title: "Traducción Certificada al Inglés - Formato USCIS",
      description: "Traducción profesional con carta de certificación",
      location: "Lista para uso de inmigración y legal en EE.UU.",
      fileSize: "2.1 MB", 
      pages: "3 páginas",
      features: [
        "Formato compatible con USCIS",
        "Certificación del traductor",
        "Membrete oficial",
        "Certificación notarizada"
      ]
    },
    {
      title: "Acta de Nacimiento Mexicana",
      description: "Acta de nacimiento mexicana con validación oficial",
      location: "Registro civil mexicano",
      fileSize: "1.1 MB",
      pages: "2 páginas", 
      features: [
        "Detalles completos de información vital",
        "Validación del registro civil",
        "Sellos oficiales del registro",
        "Lugar y fecha de nacimiento certificados"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ejemplos de Documentos de Acta de Nacimiento</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ve ejemplos de actas de nacimiento españolas que traducimos para inmigración y propósitos legales en EE.UU. 
            Observa la calidad y formato de nuestras traducciones certificadas de registros vitales.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio Profesional de Traducción de Acta de Nacimiento</h3>
            <p className="text-gray-600 mb-6">
              Nuestras traducciones de actas de nacimiento mantienen el formato exacto y validez legal 
              requerida por USCIS e instituciones legales para procedimientos de inmigración.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Múltiples Formatos</div>
                <div className="text-gray-600 text-sm">PDF, JPG, PNG y documentos escaneados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Certificado</div>
                <div className="text-gray-600 text-sm">Traducciones aceptadas por USCIS</div>
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
