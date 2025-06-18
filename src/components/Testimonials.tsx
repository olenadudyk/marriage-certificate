
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María Rodríguez",
      location: "Ciudad de México → Texas, Estados Unidos",
      rating: 5,
      text: "Traducción perfecta de mi acta de matrimonio mexicana para mi solicitud de green card. USCIS la aceptó inmediatamente. El traductor entendió todos los términos legales mexicanos perfectamente.",
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Hernández", 
      location: "Guadalajara → California, Estados Unidos",
      rating: 5,
      text: "Excelente servicio para mi acta de matrimonio de Jalisco. Manejaron los detalles de la ceremonia religiosa y el registro civil a la perfección. Entregaron más rápido de lo prometido para mi caso urgente.",
      avatar: "👨‍💼"
    },
    {
      name: "Ana Gutiérrez",
      location: "Monterrey → Florida, Estados Unidos",
      rating: 5,
      text: "Estaba preocupada por la traducción de mi acta de matrimonio de Nuevo León, pero sabían exactamente lo que USCIS necesitaba. La traducción fue impecable y aceptada sin preguntas.",
      avatar: "👩‍💻"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que Dicen los Inmigrantes</h2>
          <p className="text-xl text-gray-600">
            Confiado por miles de familias para traducciones de inmigración a Estados Unidos
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Confiado por Inmigrantes en Todo el País</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">8,500+</div>
                <div className="text-gray-600">Actas de Matrimonio Traducidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Tasa de Aceptación USCIS Estados Unidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24hrs</div>
                <div className="text-gray-600">Tiempo Promedio de Entrega</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
