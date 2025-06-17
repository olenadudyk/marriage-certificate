
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      country: "Mexico → USA",
      document: "Marriage Certificate",
      rating: 5,
      text: "I needed my marriage certificate translated for my green card application. The translation was perfect and USCIS accepted it without any issues. Fast and professional service!",
      avatar: "👩‍💼"
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt → Canada", 
      document: "Educational Documents",
      rating: 5,
      text: "Excellent service for translating my university transcripts. The team understood exactly what was needed for immigration purposes. Delivered ahead of schedule.",
      avatar: "👨‍🎓"
    },
    {
      name: "Sophie Chen",
      country: "China → Australia",
      document: "Birth Certificate",
      rating: 5,
      text: "Very professional translation of my birth certificate. The certification was exactly what the immigration office required. Great communication throughout the process.",
      avatar: "👩‍💻"
    },
    {
      name: "Carlos Silva",
      country: "Brazil → USA",
      document: "Police Certificate",
      rating: 5,
      text: "I was worried about the technical terms in my police clearance certificate, but the translation was flawless. USCIS accepted it immediately. Highly recommended!",
      avatar: "👨‍💼"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">
            Thousands of immigrants trust us with their most important documents
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.document}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8">
            <h3 className="text-3xl font-bold mb-4">Join Thousands of Satisfied Customers</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">15,000+</div>
                <div className="text-blue-200">Documents Translated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.8%</div>
                <div className="text-blue-200">USCIS Acceptance Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24hrs</div>
                <div className="text-blue-200">Average Delivery Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
