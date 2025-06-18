
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const UploadArea = () => {
  const handleRedirect = () => {
    window.open('https://your-main-website.com', '_blank');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sube Tu Acta de Matrimonio</h2>
          <p className="text-xl text-gray-600">
            Subida segura para traducción rápida y certificada del español al inglés para inmigración a Estados Unidos
          </p>
        </div>
        
        <Card className="shadow-xl border">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">Obtén tu Traducción para Inmigración a Estados Unidos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h4 className="font-semibold text-blue-900 mb-4 text-xl">Tu traducción para inmigración a Estados Unidos incluye:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-blue-800">
                <div className="space-y-2">
                  <p>✓ Traducción certificada conforme a USCIS</p>
                  <p>✓ Carta de certificación oficial para inmigración a Estados Unidos</p>
                </div>
                <div className="space-y-2">
                  <p>✓ Entrega en 24 horas para casos urgentes</p>
                  <p>✓ 100% garantía de aceptación USCIS</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-xl font-semibold"
              onClick={handleRedirect}
            >
              Obtener Cotización para Traducción de Inmigración a Estados Unidos
            </Button>
            
            <p className="text-center text-sm text-gray-500">
              🔒 Tus documentos están encriptados de forma segura. Mantenemos estricta confidencialidad para casos de inmigración a Estados Unidos.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UploadArea;
