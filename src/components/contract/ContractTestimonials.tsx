
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContractTestimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Solicitante de Visa de Esposa",
      company: "Solicitud de Visa K-1",
      text: "Excelente traducción de mi acta de matrimonio española para mi solicitud de visa de esposa estadounidense. Cada detalle fue traducido con precisión y certificado para USCIS. La traducción fue aceptada inmediatamente por inmigración.",
      rating: 5
    },
    {
      name: "Roberto Martínez",
      role: "Abogado de Inmigración",
      company: "Martínez Immigration Law",
      text: "Servicio excepcional para traducciones de actas matrimoniales. Rápido, preciso y conforme a USCIS. Nuestros clientes confían en estas traducciones para todos sus procedimientos de inmigración familiar.",
      rating: 5
    },
    {
      name: "Carmen Silva",
      role: "Consultora de Inmigración",
      company: "Family Immigration Services",
      text: "Servicio profesional de traducción de actas de matrimonio. Las traducciones certificadas cumplieron con todos nuestros requisitos legales para el procesamiento de visas familiares. Altamente recomendado para casos matrimoniales.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes de Traducción de Actas de Matrimonio</h2>
          <p className="text-xl text-gray-600">
            Confianza de parejas, bufetes de abogados y consultores para traducciones profesionales de documentos matrimoniales
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Únete a Miles de Clientes Satisfechos de Traducción de Actas de Matrimonio</h3>
            <p className="text-gray-600 mb-6">
              Servicios profesionales de traducción de actas matrimoniales confiados por parejas, 
              abogados de inmigración familiar e individuos en todo el mundo para traducción precisa y certificada de documentos.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5,200+</div>
                <div className="text-gray-600">Actas de Matrimonio Traducidas</div>
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
