
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BirthCertificateExamples = () => {
  const examples = [
    {
      title: "Full Birth Certificate Translation",
      description: "Complete birth certificate with official certification",
      features: [
        "Civil registry seal translation",
        "Registrar signatures certified", 
        "Parent information included",
        "Birth location and date verified"
      ],
      image: "📋"
    },
    {
      title: "Short Form Birth Certificate Translation", 
      description: "Abstract or short form birth certificate with validation",
      features: [
        "Essential birth details verified",
        "Official registry information",
        "Hospital or birth facility details",
        "Official certification included"
      ],
      image: "📄"
    },
    {
      title: "International Birth Certificate Translation",
      description: "Foreign birth certificate for US legal proceedings",
      features: [
        "Complete vital information",
        "Country-specific format recognized",
        "Official certification",
        "USCIS compliant translation"
      ],
      image: "🌍"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Birth Certificate Translation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert translation services for birth certificates accepted by 
            USCIS, courts, government agencies, and legal institutions for immigration and citizenship purposes.
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
                <h4 className="font-semibold mb-3 text-gray-900">Translation includes:</h4>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Vital Records Translation Service</h3>
            <p className="text-gray-600 mb-6">
              Our certified translators provide accurate birth certificate translations that meet 
              immigration requirements and legal document standards for official proceedings.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Languages we serve:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Spanish to English</p>
                  <p>• Portuguese to English</p>
                  <p>• French to English</p>
                  <p>• Other languages available</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Document types:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Full birth certificates</p>
                  <p>• Short form birth certificates</p>
                  <p>• Hospital birth records</p>
                  <p>• Civil registry certificates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthCertificateExamples;
