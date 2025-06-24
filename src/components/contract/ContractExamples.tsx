
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContractExamples = () => {
  const examples = [
    {
      title: "Full Death Certificate Translation",
      description: "Complete death certificate with official certification",
      features: [
        "Complete civil registry seal translation",
        "Certified registrar signatures", 
        "Cause of death information included",
        "Date and place of death verified"
      ],
      image: "📋"
    },
    {
      title: "Short Form Death Certificate Translation", 
      description: "Abstract or short form death certificate with validation",
      features: [
        "Essential death details verified",
        "Official registry information",
        "Medical examiner or medical center details",
        "Official certification included"
      ],
      image: "📄"
    },
    {
      title: "International Death Certificate Translation",
      description: "Foreign death certificate for US legal proceedings",
      features: [
        "Complete vital information",
        "Country-specific format recognized",
        "Official certification",
        "Court compliant translation"
      ],
      image: "🌍"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Death Certificate Translation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert translation services for death certificates accepted by 
            courts, government agencies and legal institutions for estate matters and legal proceedings.
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
              Our certified translators provide accurate death certificate translations that meet 
              legal requirements and document standards for official proceedings and estate matters.
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
                  <p>• Full death certificates</p>
                  <p>• Short form death certificates</p>
                  <p>• Medical examiner reports</p>
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

export default ContractExamples;
