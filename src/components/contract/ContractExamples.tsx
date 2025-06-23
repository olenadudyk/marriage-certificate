
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContractExamples = () => {
  const examples = [
    {
      title: "Commercial Contract Translation",
      description: "Complete business agreement with legal certification",
      features: [
        "Terms and conditions translation",
        "Legal clause certification", 
        "Payment terms included",
        "Liability provisions verified"
      ],
      image: "📋"
    },
    {
      title: "Employment Contract Translation", 
      description: "Labor agreement with complete legal validation",
      features: [
        "Job description details verified",
        "Compensation information",
        "Benefits and obligations",
        "Legal compliance certified"
      ],
      image: "📄"
    },
    {
      title: "International Contract Translation",
      description: "Cross-border agreement for global business",
      features: [
        "International law compliance",
        "Multi-jurisdiction format",
        "Trade terms translation",
        "Legal validity certification"
      ],
      image: "🌍"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Contract Translation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert translation services for business contracts accepted by 
            courts, legal firms, and corporate institutions for international business and legal proceedings.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Business Document Translation Service</h3>
            <p className="text-gray-600 mb-6">
              Our certified translators provide accurate contract translations that meet 
              legal requirements and business standards for international commerce.
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
                <h4 className="font-semibold text-gray-900 mb-2">Contract types:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Employment contracts</p>
                  <p>• Commercial agreements</p>
                  <p>• Service contracts</p>
                  <p>• International trade agreements</p>
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
