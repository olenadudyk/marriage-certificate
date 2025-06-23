
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContractTestimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "International Business Manager",
      company: "Global Commerce Solutions",
      text: "The contract translation was perfect for our Spanish partnership. Every legal clause was accurately translated and certified for our international agreement.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Corporate Legal Counsel",
      company: "Wilson & Associates Law",
      text: "Excellent service for employment contract translations. Fast, accurate, and legally compliant. Our clients trust these translations for all business proceedings.",
      rating: 5
    },
    {
      name: "Carmen Gutierrez",
      role: "HR Director",
      company: "TechStart International",
      text: "Professional contract translation service. The certified translation met all our legal requirements for international hiring. Highly recommended for business use.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Contract Translation Clients Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by businesses, legal firms, and corporations for professional contract translations
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Satisfied Business Clients</h3>
            <p className="text-gray-600 mb-6">
              Professional contract translation services trusted by international businesses, 
              legal firms, and corporations worldwide for accurate and certified document translation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">3,200+</div>
                <div className="text-gray-600">Contract Translations Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24hr</div>
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
