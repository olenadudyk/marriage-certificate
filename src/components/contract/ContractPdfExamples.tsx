
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileImage } from 'lucide-react';

const ContractPdfExamples = () => {
  const pdfExamples = [
    {
      title: "Spanish Death Certificate - Original Document",
      description: "Full death certificate from Spanish Civil Registry",
      location: "Spain, Latin America",
      fileSize: "1.2 MB",
      pages: "1 page",
      features: [
        "Official civil registry seal",
        "Registrar signatures", 
        "Complete death details",
        "Cause of death information"
      ]
    },
    {
      title: "Certified English Translation - Legal Format",
      description: "Professional translation with certification letter",
      location: "Ready for US legal and estate use",
      fileSize: "1.8 MB", 
      pages: "2 pages",
      features: [
        "Court compliant format",
        "Translator certification",
        "Official letterhead",
        "Notarized certification"
      ]
    },
    {
      title: "Mexican Death Certificate with Translation",
      description: "Civil registry certificate with certified translation",
      location: "Mexico and other Spanish-speaking countries",
      fileSize: "1.3 MB",
      pages: "2 pages", 
      features: [
        "Complete vital record details",
        "Official registry validation",
        "Certified translation certificate",
        "Legal compliance verification"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Death Certificate Document Examples</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See examples of Spanish death certificates we translate for US legal and estate proceedings. 
            View the quality and format of our certified vital records translations.
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
                <h4 className="font-semibold mb-3 text-gray-900">The document includes:</h4>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Death Certificate Translation Service</h3>
            <p className="text-gray-600 mb-6">
              Our death certificate translations maintain exact formatting and legal validity 
              required by courts, government agencies and legal institutions for estate and legal proceedings.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Multiple Formats</div>
                <div className="text-gray-600 text-sm">PDF, JPG, PNG and scanned documents</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Certified</div>
                <div className="text-gray-600 text-sm">Translations accepted by courts</div>
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

export default ContractPdfExamples;
