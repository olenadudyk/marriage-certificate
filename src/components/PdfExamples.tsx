
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FilePdf, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PdfExamples = () => {
  const pdfExamples = [
    {
      title: "Mexican Marriage Certificate - Original Spanish",
      description: "Acta de Matrimonio from Registro Civil de Mexico City",
      location: "Mexico City, CDMX",
      fileSize: "1.2 MB",
      pages: "2 pages",
      features: [
        "Official government seal",
        "Registrar signatures", 
        "Legal stamps and annotations",
        "Complete spouse information"
      ]
    },
    {
      title: "Certified English Translation - USCIS Format",
      description: "Professional translation with certification letter",
      location: "USA Immigration Ready",
      fileSize: "1.8 MB", 
      pages: "3 pages",
      features: [
        "USCIS-compliant format",
        "Translator certification",
        "Official letterhead",
        "Notarized attestation"
      ]
    },
    {
      title: "Mexican Religious Marriage Certificate",
      description: "Certificado Matrimonial from Catholic Church with civil validation",
      location: "Guadalajara, Jalisco",
      fileSize: "950 KB",
      pages: "2 pages", 
      features: [
        "Church ceremony details",
        "Priest and witness signatures",
        "Civil registration validation",
        "Parish official stamps"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sample PDF Marriage Certificates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View examples of Mexican marriage certificates we translate for USA immigration. 
            See the quality and format of our certified translations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pdfExamples.map((example, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border bg-white">
              <CardHeader className="text-center pb-4">
                <FilePdf className="mx-auto mb-4 text-red-600" size={64} />
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
                <h4 className="font-semibold mb-3 text-gray-900">Document includes:</h4>
                <ul className="space-y-2 mb-6">
                  {example.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" size="sm">
                  <Download className="mr-2" size={16} />
                  View Sample PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white border rounded-lg p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional PDF Translation Service</h3>
            <p className="text-gray-600 mb-6">
              Our Mexican marriage certificate translations maintain the exact format and legal validity 
              required by USCIS for USA immigration applications.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">PDF Format</div>
                <div className="text-gray-600 text-sm">High-quality scanned documents</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Certified</div>
                <div className="text-gray-600 text-sm">USCIS-accepted translations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">24 Hours</div>
                <div className="text-gray-600 text-sm">Fast delivery guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PdfExamples;
