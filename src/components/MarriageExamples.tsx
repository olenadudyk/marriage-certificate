
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MarriageExamples = () => {
  const examples = [
    {
      title: "Mexican Civil Marriage Certificate",
      location: "Mexico City, Mexico",
      description: "Acta de Matrimonio Civil from Registro Civil",
      features: [
        "Official Mexican government seal translation",
        "Registrar signature certification", 
        "Date and location verification in Spanish/English",
        "Spouse names with proper English formatting"
      ],
      image: "🇲🇽"
    },
    {
      title: "Mexican Religious Marriage Certificate", 
      location: "Guadalajara, Jalisco",
      description: "Certificado de Matrimonio Religioso with civil registration",
      features: [
        "Church ceremony certificate translation",
        "Civil registry validation included",
        "Witness information and signatures",
        "Parish and priest details translated"
      ],
      image: "⛪"
    },
    {
      title: "Mexican State Marriage Certificate",
      location: "Monterrey, Nuevo León", 
      description: "State-issued Acta de Matrimonio with apostille",
      features: [
        "State government certification translation",
        "Apostille seal and stamp translation",
        "Legal validity confirmation for USA",
        "Complete document authentication"
      ],
      image: "📋"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mexican Marriage Certificate Translation Examples</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in translating Mexican marriage certificates into certified English translations 
            accepted by USCIS and US government agencies for immigration purposes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border">
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4">{example.image}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">{example.title}</CardTitle>
                <p className="text-blue-600 font-medium">{example.location}</p>
                <p className="text-gray-600 text-sm">{example.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-gray-900">Our translation includes:</h4>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Specializing in Mexican Documents for USA Immigration</h3>
            <p className="text-gray-600 mb-6">
              Our certified translators specialize in Mexican marriage certificates for US immigration applications. 
              We understand the specific requirements of USCIS and ensure your documents meet all standards.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Mexican states we commonly serve:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>🏛️ Mexico City (CDMX) • Jalisco • Nuevo León</p>
                  <p>🏛️ Guanajuato • Michoacán • Veracruz</p>
                  <p>🏛️ Puebla • Estado de México • Oaxaca</p>
                  <p>🏛️ Chihuahua • Sonora • Baja California</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Document types we translate:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Acta de Matrimonio Civil</p>
                  <p>• Certificado de Matrimonio Religioso</p>
                  <p>• Marriage certificates with apostille</p>
                  <p>• Civil registry marriage documents</p>
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
