
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContractTestimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Visa Applicant",
      company: "K-1 Fiancé Visa",
      text: "Perfect translation of my Colombian bank statements for my US visa application. Every transaction detail was translated accurately and certified for USCIS. The translation was accepted immediately by the consulate.",
      rating: 5
    },
    {
      name: "Robert Johnson",
      role: "Immigration Attorney",
      company: "Johnson Immigration Law",
      text: "Excellent service for bank statement translations. Fast, accurate, and USCIS-compliant. Our clients trust these translations for all their immigration procedures and visa applications.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Corporate Immigration Manager",
      company: "Global Financial Solutions",
      text: "Professional bank statement translation service. The certified translations met all our legal requirements for employee visa processing. Highly recommended for corporate immigration needs.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Bank Statement Translation Clients Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by visa applicants, law firms, and corporations for professional bank statement translations
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Satisfied Bank Statement Translation Clients</h3>
            <p className="text-gray-600 mb-6">
              Professional bank statement translation services trusted by visa applicants, 
              immigration attorneys, and individuals worldwide for accurate and certified document translation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">6,200+</div>
                <div className="text-gray-600">Bank Statements Translated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
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
