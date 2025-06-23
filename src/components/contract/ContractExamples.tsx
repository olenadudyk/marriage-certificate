
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContractExamples = () => {
  const examples = [
    {
      title: "Birth Certificate Translation for Immigration",
      description: "Certified birth certificate with complete validation",
      features: [
        "Personal information translation",
        "Official seal and stamp translation", 
        "Registrar signature verification",
        "Government authority endorsements included"
      ],
      image: "📄"
    },
    {
      title: "Marriage Certificate Translation for USCIS", 
      description: "Official marriage document with full certification",
      features: [
        "Complete ceremony details verified",
        "Witness information translation",
        "Official registry documentation",
        "Government seal certification"
      ],
      image: "💍"
    },
    {
      title: "Diploma Translation for Immigration",
      description: "Educational credential translation for visa processing",
      features: [
        "University seal and signature translation",
        "Academic achievement verification",
        "Educational authority certification",
        "Degree validation documentation"
      ],
      image: "🎓"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Immigration Document Translation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert translation services for immigration documents accepted by 
            USCIS, consulates, and official immigration authorities for visa applications and legal proceedings.
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
                <h4 className="font-semibold mb-3 text-gray-900">The translation includes:</h4>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Immigration Document Translation Service</h3>
            <p className="text-gray-600 mb-6">
              Our certified translators provide precise translations of immigration documents that meet 
              legal requirements and USCIS standards for visa applications and immigration proceedings.
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
                  <p>• Birth certificates</p>
                  <p>• Marriage certificates</p>
                  <p>• Educational diplomas</p>
                  <p>• Police clearance certificates</p>
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
