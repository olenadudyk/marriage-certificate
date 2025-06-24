
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContractTestimonials = () => {
  const testimonials = [
    {
      name: "Maria González",
      role: "Spouse Visa Applicant",
      company: "K-1 Visa Application",
      text: "Excellent translation of my Spanish marriage certificate for my US spouse visa application. Every detail was accurately translated and certified for USCIS. The translation was immediately accepted by immigration.",
      rating: 5
    },
    {
      name: "Roberto Martínez",
      role: "Immigration Attorney",
      company: "Martínez Immigration Law",
      text: "Exceptional service for marriage certificate translations. Fast, accurate and USCIS compliant. Our clients trust these translations for all their family immigration procedures.",
      rating: 5
    },
    {
      name: "Carmen Silva",
      role: "Immigration Consultant",
      company: "Family Immigration Services",
      text: "Professional marriage certificate translation service. The certified translations met all our legal requirements for family visa processing. Highly recommended for marriage cases.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Marriage Certificate Translation Customers Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by couples, law firms and consultants for professional marriage document translations
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Satisfied Marriage Certificate Translation Customers</h3>
            <p className="text-gray-600 mb-6">
              Professional marriage certificate translation services trusted by couples, 
              family immigration attorneys and individuals worldwide for accurate and certified document translation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5,200+</div>
                <div className="text-gray-600">Marriage Certificates Translated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600">Customer Satisfaction Rate</div>
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
