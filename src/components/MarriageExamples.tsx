
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MarriageExamples = () => {
  const examples = [
    {
      title: "Spanish Marriage Certificate",
      country: "Spain",
      description: "Civil marriage certificate from Spanish Civil Registry",
      features: [
        "Official government seal translation",
        "Registrar signature certification", 
        "Date and location verification",
        "Spouse name standardization"
      ],
      image: "📄"
    },
    {
      title: "Mexican Marriage Certificate", 
      country: "Mexico",
      description: "Acta de Matrimonio from Mexican Civil Registry",
      features: [
        "State seal and stamp translation",
        "Witness information included",
        "Registry number certification",
        "Official format compliance"
      ],
      image: "📋"
    },
    {
      title: "Indian Marriage Certificate",
      country: "India", 
      description: "Marriage registration certificate from Indian authorities",
      features: [
        "Multi-language document handling",
        "Religious ceremony details",
        "Government registration proof",
        "Apostille preparation ready"
      ],
      image: "📜"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Marriage Certificate Translation Examples</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We translate marriage certificates from any country into certified English translations 
            accepted by USCIS, embassies, and government agencies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border">
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4">{example.image}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">{example.title}</CardTitle>
                <p className="text-blue-600 font-medium">From {example.country}</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't see your country?</h3>
            <p className="text-gray-600 mb-6">
              We translate marriage certificates from every country worldwide. Our certified translators 
              are experienced with all international marriage document formats and requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Common countries we serve:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>🇲🇽 Mexico • 🇪🇸 Spain • 🇮🇳 India</p>
                  <p>🇵🇭 Philippines • 🇨🇳 China • 🇻🇳 Vietnam</p>
                  <p>🇧🇷 Brazil • 🇷🇺 Russia • 🇰🇷 South Korea</p>
                  <p>🇫🇷 France • 🇩🇪 Germany • 🇮🇹 Italy</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">All document types:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Civil marriage certificates</p>
                  <p>• Religious marriage certificates</p>
                  <p>• Marriage licenses</p>
                  <p>• Marriage registration documents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarriageExamples;
