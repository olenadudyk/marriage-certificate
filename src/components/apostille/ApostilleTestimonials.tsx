
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ApostilleTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Colombia → New York, United States",
      rating: 5,
      text: "Perfect translation of my Colombian birth certificate with apostille for my green card application. USCIS accepted it immediately. The translator understood all the legal Colombian terms perfectly.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen", 
      location: "Spain → California, United States",
      rating: 5,
      text: "Excellent service for my Spanish university diploma with apostille. They handled the academic terminology and apostille details perfectly. Delivered faster than promised for my urgent case.",
      avatar: "👨‍💼"
    },
    {
      name: "Jennifer Martinez",
      location: "Argentina → Florida, United States",
      rating: 5,
      text: "I was worried about translating my Argentine marriage certificate with apostille, but they knew exactly what USCIS needed. The translation was flawless and accepted without questions.",
      avatar: "👩‍💻"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by thousands of families for US immigration translations
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trusted Nationwide</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">12,000+</div>
                <div className="text-gray-600">Apostille Documents Translated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">USCIS Acceptance Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24hrs</div>
                <div className="text-gray-600">Average Delivery Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApostilleTestimonials;
