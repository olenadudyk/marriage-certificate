
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContractTestimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "International Traveler",
      company: "Vacation Rental Customer",
      text: "Perfect driver's license translation for my Spanish license. Every detail was translated accurately and certified for my car rental in Florida. The translation was accepted immediately.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Immigration Consultant",
      company: "Wilson Immigration Services",
      text: "Excellent service for driver's license translations. Fast, accurate, and legally compliant. Our clients trust these translations for all their official procedures and travel needs.",
      rating: 5
    },
    {
      name: "Carmen Gutierrez",
      role: "Corporate Relocation Manager",
      company: "Global Mobility Solutions",
      text: "Professional driver's license translation service. The certified translation met all our legal requirements for employee relocation. Highly recommended for business use.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Driver's License Translation Clients Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by travelers, businesses, and individuals for professional driver's license translations
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Satisfied Driving Customers</h3>
            <p className="text-gray-600 mb-6">
              Professional driver's license translation services trusted by international travelers, 
              car rental agencies, and individuals worldwide for accurate and certified document translation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">4,500+</div>
                <div className="text-gray-600">Driver's License Translations Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Customer Satisfaction Rate</div>
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
