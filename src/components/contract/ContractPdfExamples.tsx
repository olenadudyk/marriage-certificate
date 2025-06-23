
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileImage } from 'lucide-react';

const ContractPdfExamples = () => {
  const pdfExamples = [
    {
      title: "Spanish Business Contract - Original Document",
      description: "Complete commercial agreement from Spanish company",
      location: "Spain, Latin America",
      fileSize: "2.1 MB",
      pages: "8 pages",
      features: [
        "Legal terms and conditions",
        "Corporate signatures", 
        "Payment clauses",
        "Liability provisions"
      ]
    },
    {
      title: "Certified English Translation - Legal Format",
      description: "Professional translation with certification letter",
      location: "Ready for US business and legal use",
      fileSize: "2.8 MB", 
      pages: "10 pages",
      features: [
        "Legal compliant format",
        "Translator certification",
        "Official letterhead",
        "Notarized certification"
      ]
    },
    {
      title: "Mexican Employment Contract with Translation",
      description: "Labor agreement with certified translation",
      location: "Mexico and other Spanish-speaking countries",
      fileSize: "1.9 MB",
      pages: "6 pages", 
      features: [
        "Complete employment terms",
        "Legal compliance validation",
        "Certified translation certificate",
        "Business standard verification"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contract Document Examples</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See examples of Spanish contracts we translate for US business and legal proceedings. 
            View the quality and format of our certified business document translations.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Contract Translation Service</h3>
            <p className="text-gray-600 mb-6">
              Our contract translations maintain exact legal formatting and business validity 
              required by courts, corporate legal departments, and international business institutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Multiple Formats</div>
                <div className="text-gray-600 text-sm">PDF, Word, JPG, PNG, and scanned documents</div>
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
