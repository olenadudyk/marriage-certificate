
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContractTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Solicitante de Inmigración",
      company: "Solicitud de Tarjeta Verde",
      text: "Excelente traducción de mi certificado de nacimiento colombiano con apostilla para mi solicitud de inmigración estadounidense. Cada detalle fue traducido con precisión y certificado para USCIS. La traducción fue inmediatamente aceptada por inmigración.",
      rating: 5
    },
    {
      name: "Roberto Martínez",
      role: "Abogado de Inmigración",
      company: "Martínez Immigration Law",
      text: "Servicio excepcional para traducciones de documentos con apostilla. Rápido, preciso y compatible con USCIS. Nuestros clientes confían en estas traducciones para todos sus procedimientos de inmigración.",
      rating: 5
    },
    {
      name: "Carmen Silva",
      role: "Consultora de Inmigración",
      company: "International Document Services",
      text: "Servicio profesional de traducción de documentos con apostilla. Las traducciones certificadas cumplieron con todos nuestros requisitos legales para el procesamiento de visas. Altamente recomendado para casos de apostilla.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes de Traducción de Documentos con Apostilla</h2>
          <p className="text-xl text-gray-600">
            Confiado por individuos, bufetes de abogados y consultores para traducciones profesionales de documentos con apostilla
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Únase a Miles de Clientes Satisfechos de Traducción de Documentos con Apostilla</h3>
            <p className="text-gray-600 mb-6">
              Servicios profesionales de traducción de documentos con apostilla confiados por individuos, 
              abogados de inmigración y consultores en todo el mundo para traducción precisa y certificada de documentos.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">3,200+</div>
                <div className="text-gray-600">Documentos con Apostilla Traducidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600">Tasa de Satisfacción del Cliente</div>
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
