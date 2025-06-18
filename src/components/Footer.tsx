
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Translate.com</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Servicios profesionales de traducción de actas de matrimonio. 
              Certificadas, precisas y aceptadas por USCIS.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Servicios de Traducción</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Traducción de Actas de Matrimonio</a></li>
              <li><a href="#" className="hover:text-white">Traducción Certificada</a></li>
              <li><a href="#" className="hover:text-white">Traducción USCIS</a></li>
              <li><a href="#" className="hover:text-white">Traducción de Documentos Legales</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white">Traducciones de Ejemplo</a></li>
              <li><a href="#" className="hover:text-white">Rastrear Pedido</a></li>
              <li><a href="#" className="hover:text-white">Contactar Soporte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Comienza</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Sube tu acta de matrimonio ahora.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
              Subir Documento
            </Button>
            <div className="text-xs text-gray-400 space-y-1">
              <p>📞 Soporte al Cliente 24/7</p>
              <p>📧 support@translate.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Translate.com. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <span>🔒 Protegido con SSL</span>
              <span>✅ Conforme a HIPAA</span>
              <span>🏆 Certificado ATA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
