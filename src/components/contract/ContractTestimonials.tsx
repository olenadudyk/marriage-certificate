
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContractTestimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Solicitante de Visa",
      company: "Visa de Prometida K-1",
      text: "Traducción perfecta de mis estados de cuenta colombianos para mi solicitud de visa estadounidense. Cada detalle de transacción fue traducido con precisión y certificado para USCIS. La traducción fue aceptada inmediatamente por el consulado.",
      rating: 5
    },
    {
      name: "Robert Johnson",
      role: "Abogado de Inmigración",
      company: "Johnson Immigration Law",
      text: "Excelente servicio para traducciones de estados de cuenta. Rápido, preciso y compatible con USCIS. Nuestros clientes confían en estas traducciones para todos sus procedimientos de inmigración y solicitudes de visa.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Gerente de Inmigración Corporativa",
      company: "Global Financial Solutions",
      text: "Servicio profesional de traducción de estados de cuenta. Las traducciones certificadas cumplieron con todos nuestros requisitos legales para el procesamiento de visas de empleados. Altamente recomendado para necesidades de inmigración corporativa.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que Dicen Nuestros Clientes de Traducción de Estados de Cuenta</h2>
          <p className="text-xl text-gray-600">
            Confiado por solicitantes de visa, bufetes de abogados y corporaciones para traducciones profesionales de estados de cuenta
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Únete a Miles de Clientes Satisfechos con Traducción de Estados de Cuenta</h3>
            <p className="text-gray-600 mb-6">
              Traducciones profesionales de estados de cuenta confiadas por solicitantes de visa, 
              abogados de inmigración e individuos de todo el mundo para traducción precisa y certificada de documentos.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">6,200+</div>
                <div className="text-gray-600">Estados de Cuenta Traducidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
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
