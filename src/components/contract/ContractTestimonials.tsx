
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContractTestimonials = () => {
  const testimonials = [
    {
      name: "María Rodríguez",
      role: "Solicitante de Inmigración",
      company: "Solicitud de Tarjeta Verde",
      text: "Traducción perfecta de mi acta de nacimiento mexicana. Tradujeron cada detalle incluyendo el sello del registro civil e información de padres. USCIS la aceptó inmediatamente para mi solicitud de ciudadanía.",
      rating: 5
    },
    {
      name: "Carlos Méndez",
      role: "Solicitante de Visa",
      company: "Visa de Estudiante EE.UU.",
      text: "Excelente servicio de traducción de acta de nacimiento para mi documento colombiano. Entendieron perfectamente toda la terminología del registro civil y detalles de certificación. La entrega rápida me ayudó a cumplir con mi fecha límite de visa.",
      rating: 5
    },
    {
      name: "Ana Gutiérrez",
      role: "Procedimiento Legal",
      company: "Caso de Corte Familiar",
      text: "Servicio excepcional para mi acta de nacimiento española. Tradujeron todo el documento incluyendo términos legales especializados y sellos oficiales con perfecta precisión. La oficina de inmigración la aceptó sin preguntas.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que Dicen Nuestros Clientes de Traducción de Acta de Nacimiento</h2>
          <p className="text-xl text-gray-600">
            Confiado por miles para traducciones profesionales de actas de nacimiento y registros vitales
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Únete a Miles de Clientes Satisfechos de Traducción de Acta de Nacimiento</h3>
            <p className="text-gray-600 mb-6">
              Servicios profesionales de traducción de actas de nacimiento confiados por individuos, 
              familias y profesionales legales en todo el mundo para traducción precisa y certificada de registros vitales.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">12,000+</div>
                <div className="text-gray-600">Actas de Nacimiento Traducidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Tasa de Aceptación USCIS</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
                <div className="text-gray-600">Tiempo Promedio de Entrega</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractTestimonials;
