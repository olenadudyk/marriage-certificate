
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sofia Martinez",
      location: "Colombia → New York, United States",
      rating: 5,
      text: "Perfect translation of my Colombian engineering diploma with apostille. They translated every academic detail including grades, honors, and the apostille seal. My university accepted it immediately for my Master's program application.",
      avatar: "👩‍🎓"
    },
    {
      name: "Diego Rodriguez", 
      location: "Spain → California, United States",
      rating: 5,
      text: "Excellent diploma translation service for my Spanish business degree. They understood all the academic terminology and apostille authentication details perfectly. Fast delivery helped me meet my job application deadline.",
      avatar: "👨‍💼"
    },
    {
      name: "Carmen Gonzalez",
      location: "Mexico → Texas, United States",
      rating: 5,
      text: "Outstanding service for my Mexican medical degree with apostille. They translated the entire document including specialized medical terms and apostille certification with perfect accuracy. USCIS accepted it without questions.",
      avatar: "👩‍⚕️"
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Diploma Translation Statistics</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">8,500+</div>
                <div className="text-gray-600">Diplomas Translated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">University Acceptance Rate</div>
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

export default Testimonials;
