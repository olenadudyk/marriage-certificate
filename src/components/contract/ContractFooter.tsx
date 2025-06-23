
import React from 'react';
import { Button } from '@/components/ui/button';

const ContractFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-gray-300 mb-4">
            Horario de atención de 7 AM a 4 PM (UTC 0), Lun-Vie.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Translate.com</h4>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Para Clientes</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Servicios de Translate.com</a></li>
              <li><a href="#" className="hover:text-white">Traducir Documento en Línea</a></li>
              <li><a href="#" className="hover:text-white">Traducción Empresarial</a></li>
              <li><a href="#" className="hover:text-white">Traducción Médica</a></li>
              <li><a href="#" className="hover:text-white">Traducción Técnica</a></li>
              <li><a href="#" className="hover:text-white">Traducción de Email</a></li>
              <li><a href="#" className="hover:text-white">Corrección de Estilo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Para Empresas</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">API de Translate.com</a></li>
              <li><a href="#" className="hover:text-white">Documentación de API</a></li>
              <li><a href="#" className="hover:text-white">Integración con Zendesk</a></li>
              <li><a href="#" className="hover:text-white">Integración con Zapier</a></li>
              <li><a href="#" className="hover:text-white">Todas las Integraciones</a></li>
              <li><a href="#" className="hover:text-white">Traducir JSON</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Traducción Automática</a></li>
              <li><a href="#" className="hover:text-white">Diccionarios</a></li>
              <li><a href="#" className="hover:text-white">Pares de Idiomas</a></li>
              <li><a href="#" className="hover:text-white"><span className="bg-red-600 text-white px-1 py-0.5 rounded text-xs mr-1">¡NUEVO!</span>Inglés-Francés</a></li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">Acerca de Nosotros</a></li>
                <li><a href="#" className="hover:text-white">Contáctanos</a></li>
                <li><a href="#" className="hover:text-white">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-white">Centro de Ayuda</a></li>
              </ul>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Para Traductores</h4>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="text-center text-sm text-gray-400">
            Copyright ©2011-2025 Translate LLC. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContractFooter;
