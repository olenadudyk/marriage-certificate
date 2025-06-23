
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContractTestimonials = () => {
  const testimonials = [
    {
      name: "María Rodríguez",
      role: "Gerente de Negocios Internacionales",
      company: "Global Commerce Solutions",
      text: "La traducción del contrato fue perfecta para nuestra asociación española. Cada cláusula legal fue traducida con precisión y certificada para nuestro acuerdo internacional.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Asesor Legal Corporativo",
      company: "Wilson & Associates Law",
      text: "Excelente servicio para traducciones de contratos laborales. Rápido, preciso y legalmente conforme. Nuestros clientes confían en estas traducciones para todos los procedimientos comerciales.",
      rating: 5
    },
    {
      name: "Carmen Gutiérrez",
      role: "Directora de RRHH",
      company: "TechStart International",
      text: "Servicio profesional de traducción de contratos. La traducción certificada cumplió con todos nuestros requisitos legales para contratación internacional. Altamente recomendado para uso comercial.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes de Traducción de Contratos</h2>
          <p className="text-xl text-gray-600">
            Confiado por empresas, firmas legales y corporaciones para traducciones profesionales de contratos
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Únase a Miles de Clientes Comerciales Satisfechos</h3>
            <p className="text-gray-600 mb-6">
              Servicios profesionales de traducción de contratos confiados por empresas internacionales, 
              firmas legales y corporaciones mundiales para traducción precisa y certificada de documentos.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">3,200+</div>
                <div className="text-gray-600">Traducciones de Contratos Completadas</div>
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
