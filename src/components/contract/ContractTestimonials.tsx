
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContractTestimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Immigration Applicant",
      company: "Green Card Application",
      text: "Perfect translation of my Mexican birth certificate. They translated every detail including the civil registry seal and parent information. USCIS accepted it immediately for my citizenship application.",
      rating: 5
    },
    {
      name: "Carlos Mendez",
      role: "Visa Applicant",
      company: "Student Visa USA",
      text: "Excellent birth certificate translation service for my Colombian document. They understood all the civil registry terminology and certification details perfectly. Fast delivery helped me meet my visa deadline.",
      rating: 5
    },
    {
      name: "Ana Gutierrez",
      role: "Legal Proceeding",
      company: "Family Court Case",
      text: "Outstanding service for my Spanish birth certificate. They translated the entire document including specialized legal terms and official seals with perfect accuracy. Immigration office accepted it without questions.",
      rating: 5
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
            <Card key={index} className="shadow-lg border">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600 text-sm font-medium">{testimonial.role}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-50 border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Satisfied Birth Certificate Translation Clients</h3>
            <p className="text-gray-600 mb-6">
              Professional birth certificate translation services trusted by individuals, 
              families and legal professionals worldwide for accurate and certified vital records translation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">12,000+</div>
                <div className="text-gray-600">Birth Certificates Translated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">USCIS Acceptance Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
                <div className="text-gray-600">Average Delivery Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractTestimonials;
