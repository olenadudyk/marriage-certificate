
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContractExamples = () => {
  const examples = [
    {
      title: "University Degree Translation",
      description: "Bachelor's or Master's degree with official certification",
      features: [
        "Complete university seal translation",
        "Certified registrar signatures", 
        "Academic honors and GPA included",
        "Verified graduation date"
      ],
      image: "🎓"
    },
    {
      title: "Professional Diploma Translation", 
      description: "Technical or professional diploma with official validation",
      features: [
        "Verified professional credentials",
        "Institution details included",
        "Specialization areas translated",
        "Official certification included"
      ],
      image: "📜"
    },
    {
      title: "Academic Transcript Translation",
      description: "Official academic record for credential evaluation",
      features: [
        "Complete course listing",
        "Grades and credit hours",
        "Official certification",
        "Institutional accreditation details"
      ],
      image: "📊"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Diploma Translation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert translation services for diplomas accepted by 
            US universities, employers and USCIS for immigration and educational purposes.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Educational Translation Service</h3>
            <p className="text-gray-600 mb-6">
              Our certified translators provide accurate diploma translations that meet 
              university admission requirements and employer verification standards.
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
                  <p>• University degrees</p>
                  <p>• Technical diplomas</p>
                  <p>• Academic transcripts</p>
                  <p>• Professional certificates</p>
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
