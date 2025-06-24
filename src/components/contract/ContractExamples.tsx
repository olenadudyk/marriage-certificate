
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContractExamples = () => {
  const examples = [
    {
      title: "Spanish Passport Translation",
      description: "Complete passport biographical page with certification",
      features: [
        "Personal information translation",
        "Passport number and dates", 
        "Issuing authority verification",
        "Official stamps and seals included"
      ],
      image: "📘"
    },
    {
      title: "Mexican Passport Translation", 
      description: "Official passport document with full certification",
      features: [
        "Complete biographical data verified",
        "Photograph and signature pages",
        "Government seal certification",
        "Official authority documentation"
      ],
      image: "🇲🇽"
    },
    {
      title: "Colombian Passport Translation",
      description: "Passport translation for immigration processing",
      features: [
        "Identity page details translation",
        "Entry/exit stamp translations",
        "Official government certification",
        "Immigration authority documentation"
      ],
      image: "🇨🇴"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Passport Translation Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert translation services for passports accepted by 
            USCIS, consulates, and official immigration authorities for visa applications and legal procedures.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Passport Translation Service</h3>
            <p className="text-gray-600 mb-6">
              Our certified translators provide accurate passport translations that meet 
              legal requirements and USCIS standards for visa applications and immigration procedures.
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
                  <p>• Biographical passport pages</p>
                  <p>• Visa and stamp pages</p>
                  <p>• Emergency travel documents</p>
                  <p>• Passport renewal pages</p>
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
