
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DocumentTypes = () => {
  const documents = [
    {
      title: "Marriage Certificates",
      description: "Civil and religious marriage certificates from any country",
      price: "Starting at $25",
      features: ["Official certified translation", "USCIS acceptance guarantee", "24-48 hour delivery", "Notarization included"],
      popular: true
    },
    {
      title: "Birth Certificates",
      description: "Birth certificates and birth records for immigration",
      price: "Starting at $25",
      features: ["Certified translation", "All languages supported", "Fast processing", "Digital delivery"]
    },
    {
      title: "Divorce Decrees",
      description: "Divorce certificates and decree absolute documents",
      price: "Starting at $30",
      features: ["Legal certification", "Court-accepted format", "Professional translation", "Confidential service"]
    },
    {
      title: "Educational Documents",
      description: "Diplomas, transcripts, and degree certificates",
      price: "Starting at $35",
      features: ["Academic certification", "University acceptance", "Grade conversion", "Credential evaluation"]
    },
    {
      title: "Police Certificates",
      description: "Criminal background checks and police clearances",
      price: "Starting at $30",
      features: ["Security clearance", "Government accepted", "Certified translation", "Multiple formats"]
    },
    {
      title: "Medical Records",
      description: "Medical certificates and vaccination records",
      price: "Starting at $40",
      features: ["Medical certification", "CDC compliance", "HIPAA compliant", "Technical accuracy"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Immigration Document Translation Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional translation services for all your immigration document needs. 
            Certified, accurate, and USCIS-accepted translations delivered fast.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <Card key={index} className={`relative transition-all duration-300 hover:shadow-lg ${doc.popular ? 'ring-2 ring-orange-500 shadow-lg' : ''}`}>
              {doc.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">{doc.title}</CardTitle>
                <CardDescription className="text-gray-600">{doc.description}</CardDescription>
                <div className="text-2xl font-bold text-blue-600">{doc.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {doc.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${doc.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
                  Get Translation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentTypes;
