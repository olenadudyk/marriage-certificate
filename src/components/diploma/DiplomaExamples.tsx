
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DiplomaExamples = () => {
  const examples = [
    {
      title: "University Degree with Apostille",
      description: "Bachelor's or Master's degree with apostille authentication",
      features: [
        "Apostille seal translation",
        "University registrar signatures certified", 
        "Academic honors and GPA included",
        "Graduation date verified"
      ],
      image: "🎓"
    },
    {
      title: "Professional Diploma with Apostille", 
      description: "Technical or professional diploma with apostille validation",
      features: [
        "Professional credentials verified",
        "Institution details included",
        "Specialization areas translated",
        "Apostille authentication certified"
      ],
      image: "📜"
    },
    {
      title: "Academic Transcript with Apostille",
      description: "Official academic transcript with apostille for credential evaluation",
      features: [
        "Complete course listing",
        "Grades and credit hours",
        "Apostille certification",
        "Institution accreditation details"
      ],
      image: "📊"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Diploma Translation with Apostille</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional translation services for apostilled diplomas accepted by 
            US universities, employers, and USCIS for immigration and educational purposes.
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
                  <p>• University degrees with apostille</p>
                  <p>• College diplomas with apostille</p>
                  <p>• Academic transcripts with apostille</p>
                  <p>• Professional certificates with apostille</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiplomaExamples;
