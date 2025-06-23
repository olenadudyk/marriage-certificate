
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileImage } from 'lucide-react';

const ContractPdfExamples = () => {
  const pdfExamples = [
    {
      title: "Spanish Driver's License - Original Document",
      description: "Complete driving license from Spanish authority",
      location: "Spain, Latin America",
      fileSize: "1.2 MB",
      pages: "2 pages",
      features: [
        "Personal identification details",
        "License class and restrictions", 
        "Expiration and issue dates",
        "Official seals and signatures"
      ]
    },
    {
      title: "Certified English Translation - Official Format",
      description: "Professional translation with certification letter",
      location: "Ready for US official use",
      fileSize: "1.8 MB", 
      pages: "3 pages",
      features: [
        "Legally compliant format",
        "Translator certification",
        "Official letterhead",
        "Notarized certification"
      ]
    },
    {
      title: "Mexican Driver's License with Translation",
      description: "Driving license with certified translation",
      location: "Mexico and other Spanish-speaking countries",
      fileSize: "1.5 MB",
      pages: "2 pages", 
      features: [
        "Complete license information",
        "Legal compliance validation",
        "Certified translation certificate",
        "Official standards verification"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Driver's License Document Examples</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See examples of Spanish driver's licenses we translate for US travel and official procedures. 
            View the quality and format of our certified automotive document translations.
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
                <h4 className="font-semibold mb-3 text-gray-900">Document includes:</h4>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Driver's License Translation Service</h3>
            <p className="text-gray-600 mb-6">
              Our driver's license translations maintain exact legal format and automotive validity 
              required by DMV offices, car rental companies, and international travel authorities.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Multiple Formats</div>
                <div className="text-gray-600 text-sm">PDF, JPG, PNG and scanned documents</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Certified</div>
                <div className="text-gray-600 text-sm">Translations accepted by official authorities</div>
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
