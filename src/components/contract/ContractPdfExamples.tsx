
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileImage } from 'lucide-react';

const ContractPdfExamples = () => {
  const pdfExamples = [
    {
      title: "Contrato Comercial Español - Documento Original",
      description: "Acuerdo comercial completo de empresa española",
      location: "España, América Latina",
      fileSize: "2.1 MB",
      pages: "8 páginas",
      features: [
        "Términos y condiciones legales",
        "Firmas corporativas", 
        "Cláusulas de pago",
        "Disposiciones de responsabilidad"
      ]
    },
    {
      title: "Traducción Certificada al Inglés - Formato Legal",
      description: "Traducción profesional con carta de certificación",
      location: "Listo para uso comercial y legal en EE.UU.",
      fileSize: "2.8 MB", 
      pages: "10 páginas",
      features: [
        "Formato legalmente conforme",
        "Certificación del traductor",
        "Membrete oficial",
        "Certificación notarizada"
      ]
    },
    {
      title: "Contrato Laboral Mexicano con Traducción",
      description: "Acuerdo laboral con traducción certificada",
      location: "México y otros países de habla hispana",
      fileSize: "1.9 MB",
      pages: "6 páginas", 
      features: [
        "Términos completos de empleo",
        "Validación de cumplimiento legal",
        "Certificado de traducción certificada",
        "Verificación de estándares comerciales"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ejemplos de Documentos de Contratos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vea ejemplos de contratos en español que traducimos para negocios estadounidenses y procedimientos legales. 
            Observe la calidad y formato de nuestras traducciones certificadas de documentos comerciales.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio Profesional de Traducción de Contratos</h3>
            <p className="text-gray-600 mb-6">
              Nuestras traducciones de contratos mantienen el formato legal exacto y la validez comercial 
              requerida por tribunales, departamentos legales corporativos e instituciones comerciales internacionales.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Múltiples Formatos</div>
                <div className="text-gray-600 text-sm">PDF, Word, JPG, PNG y documentos escaneados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Certificado</div>
                <div className="text-gray-600 text-sm">Traducciones aceptadas por tribunales</div>
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
