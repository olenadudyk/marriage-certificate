
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const BirthCertificateTestimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Mexico → Florida, United States",
      rating: 5,
      text: "Perfect translation of my Mexican birth certificate. They translated every detail including the civil registry seal and parent information. USCIS accepted it immediately for my citizenship application.",
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Mendez", 
      location: "Colombia → New York, United States",
      rating: 5,
      text: "Excellent birth certificate translation service for my Colombian document. They understood all the civil registry terminology and certification details perfectly. Fast delivery helped me meet my visa deadline.",
      avatar: "👨‍💻"
    },
    {
      name: "Ana Gutierrez",
      location: "Spain → California, United States",
      rating: 5,
      text: "Outstanding service for my Spanish birth certificate. They translated the entire document including specialized legal terms and official seals with perfect accuracy. Immigration office accepted it without questions.",
      avatar: "👩‍⚖️"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Birth Certificate Translation Clients Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by thousands for professional birth certificate and vital records translations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-gray-700 italic text-sm">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-50 border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Birth Certificate Translation Statistics</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">12,000+</div>
                <div className="text-gray-600">Birth Certificates Translated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">USCIS Acceptance Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24hrs</div>
                <div className="text-gray-600">Average Translation Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthCertificateTestimonials;
