import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Mexico City → Texas, USA",
      rating: 5,
      text: "Perfect translation of my Mexican marriage certificate for my green card application. USCIS accepted it immediately. The translator understood all the Mexican legal terms perfectly.",
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Hernandez", 
      location: "Guadalajara → California, USA",
      rating: 5,
      text: "Excellent service for my Jalisco marriage certificate. They handled the religious ceremony details and civil registration perfectly. Delivered faster than promised for my urgent case.",
      avatar: "👨‍💼"
    },
    {
      name: "Ana Gutierrez",
      location: "Monterrey → Florida, USA",
      rating: 5,
      text: "I was worried about my Nuevo León marriage certificate translation, but they knew exactly what USCIS needed. The translation was flawless and accepted without questions.",
      avatar: "👩‍💻"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Mexican Immigrants Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by thousands of Mexican families for USA immigration translations
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trusted by Mexican Immigrants Nationwide</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">8,500+</div>
                <div className="text-gray-600">Mexican Marriage Certificates Translated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">USCIS USA Acceptance Rate</div>
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

export default Testimonials;
