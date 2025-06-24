
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContractTestimonials = () => {
  const testimonials = [
    {
      name: "Sofia Martinez",
      role: "Solicitante de Inmigración",
      company: "Solicitud de Tarjeta Verde",
      text: "Excelente traducción de mi título de ingeniería colombiano para mi solicitud de inmigración estadounidense. Tradujeron cada detalle académico incluyendo calificaciones, honores y el sello oficial. Mi universidad lo aceptó inmediatamente para mi programa de Maestría.",
      rating: 5
    },
    {
      name: "Diego Rodriguez",
      role: "Profesional de Negocios",
      company: "Tech Company USA",
      text: "Servicio excepcional para traducción de mi diploma de negocios español. Entendieron perfectamente toda la terminología académica y detalles de autenticación. La entrega rápida me ayudó a cumplir con mi fecha límite de solicitud de trabajo.",
      rating: 5
    },
    {
      name: "Carmen Gonzalez",
      role: "Doctora",
      company: "Hospital Certification",
      text: "Servicio sobresaliente para mi título médico mexicano. Tradujeron todo el documento incluyendo términos médicos especializados y certificación con perfecta precisión. USCIS lo aceptó sin preguntas para mi proceso de certificación médica.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes de Traducción de Diplomas</h2>
          <p className="text-xl text-gray-600">
            Confiado por miles de personas para traducciones profesionales de diplomas y documentos educativos
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Únase a Miles de Clientes Satisfechos de Traducción de Diplomas</h3>
            <p className="text-gray-600 mb-6">
              Servicios profesionales de traducción de diplomas confiados por individuos, 
              estudiantes y profesionales en todo el mundo para traducción precisa y certificada de documentos educativos.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">8,500+</div>
                <div className="text-gray-600">Diplomas Traducidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Tasa de Aceptación Universitaria</div>
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
