
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContractTestimonials = () => {
  const testimonials = [
    {
      name: "Sofia Martinez",
      role: "Immigration Applicant",
      company: "Green Card Application",
      text: "Excellent translation of my Colombian engineering degree for my US immigration application. They translated every academic detail including grades, honors and the official seal. My university accepted it immediately for my Master's program.",
      rating: 5
    },
    {
      name: "Diego Rodriguez",
      role: "Business Professional",
      company: "Tech Company USA",
      text: "Outstanding service for my Spanish business diploma translation. They perfectly understood all the academic terminology and authentication details. The fast delivery helped me meet my job application deadline.",
      rating: 5
    },
    {
      name: "Carmen Gonzalez",
      role: "Doctor",
      company: "Hospital Certification",
      text: "Outstanding service for my Mexican medical degree. They translated the entire document including specialized medical terms and certification with perfect accuracy. USCIS accepted it without question for my medical certification process.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Diploma Translation Clients Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by thousands for professional diploma and educational document translations
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Satisfied Diploma Translation Clients</h3>
            <p className="text-gray-600 mb-6">
              Professional diploma translation services trusted by individuals, 
              students and professionals worldwide for accurate and certified educational document translation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">8,500+</div>
                <div className="text-gray-600">Diplomas Translated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">University Acceptance Rate</div>
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
