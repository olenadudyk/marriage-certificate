
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContractTestimonials = () => {
  const testimonials = [
    {
      name: "María Rodríguez",
      role: "Viajera Internacional",
      company: "Cliente de Alquiler Vacacional",
      text: "Traducción perfecta de licencia de conducir para mi licencia española. Cada detalle fue traducido con precisión y certificado para mi alquiler de auto en Florida. La traducción fue aceptada inmediatamente.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Consultor de Inmigración",
      company: "Wilson Immigration Services",
      text: "Excelente servicio para traducciones de licencias de conducir. Rápido, preciso y legalmente conforme. Nuestros clientes confían en estas traducciones para todos sus procedimientos oficiales y necesidades de viaje.",
      rating: 5
    },
    {
      name: "Carmen Gutiérrez",
      role: "Gerente de Reubicación Corporativa",
      company: "Global Mobility Solutions",
      text: "Servicio de traducción de licencias de conducir profesional. La traducción certificada cumplió con todos nuestros requisitos legales para reubicación de empleados. Altamente recomendado para uso empresarial.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes de Traducción de Licencias de Conducir</h2>
          <p className="text-xl text-gray-600">
            Confiado por viajeros, empresas e individuos para traducciones profesionales de licencias de conducir
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Únase a Miles de Clientes de Conducción Satisfechos</h3>
            <p className="text-gray-600 mb-6">
              Servicios de traducción de licencias de conducir profesionales confiados por viajeros internacionales, 
              agencias de alquiler de autos e individuos en todo el mundo para traducción precisa y certificada de documentos.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">4,500+</div>
                <div className="text-gray-600">Traducciones de Licencias de Conducir Completadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Tasa de Satisfacción del Cliente</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24hr</div>
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
