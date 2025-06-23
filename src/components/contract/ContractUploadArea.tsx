
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContractUploadArea = () => {
  const handleRedirect = () => {
    window.open('https://your-main-website.com', '_blank');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Subir Su Licencia de Conducir para Traducción</h2>
          <p className="text-xl text-gray-600">
            Subida segura para traducción profesional de licencia de conducir con certificación completa
          </p>
        </div>
        
        <Card className="shadow-xl border">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">Servicio de Traducción de Licencias de Conducir Profesional</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h4 className="font-semibold text-blue-900 mb-4 text-xl">Su traducción de licencia de conducir incluye:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-blue-800">
                <div className="space-y-2">
                  <p>✓ Traducción completa de información personal</p>
                  <p>✓ Clase de licencia y restricciones</p>
                  <p>✓ Traducción de endosos oficiales</p>
                </div>
                <div className="space-y-2">
                  <p>✓ Certificado de traducción certificada</p>
                  <p>✓ Entrega en 24 horas disponible</p>
                  <p>✓ Garantía de 100% aceptación oficial</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-xl font-semibold"
              onClick={handleRedirect}
            >
              Obtener Cotización para Traducción de Licencia de Conducir
            </Button>
            
            <p className="text-center text-sm text-gray-500">
              🔒 Sus documentos de conducir están encriptados de forma segura. Mantenemos estricta confidencialidad para todas las traducciones automotrices.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContractUploadArea;
