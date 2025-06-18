
import React from 'react';
import { Button } from '@/components/ui/button';

const DeathCertificateFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DeathCertificateTranslate.com</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Professional death certificate translation services with official certification. 
              Certified, accurate and legally accepted worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Death Certificate Translation Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Full Death Certificate Translation</a></li>
              <li><a href="#" className="hover:text-white">Short Form Death Certificate Translation</a></li>
              <li><a href="#" className="hover:text-white">Civil Registry Document Translation</a></li>
              <li><a href="#" className="hover:text-white">Vital Records Translation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Death Certificate Translation FAQ</a></li>
              <li><a href="#" className="hover:text-white">Vital Records Translation Samples</a></li>
              <li><a href="#" className="hover:text-white">Track Death Certificate Translation</a></li>
              <li><a href="#" className="hover:text-white">Contact Civil Document Experts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get Death Certificate Translation</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Upload your death certificate for professional translation with official certification.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
              Upload Death Certificate Document
            </Button>
            <div className="text-xs text-gray-400 space-y-1">
              <p>📞 24/7 Vital Records Translation Support</p>
              <p>📧 deathcert@deathcertificatetranslate.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 DeathCertificateTranslate.com. Professional Vital Records Translation Services.
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <span>🔒 SSL Protected</span>
              <span>✅ Court Certified</span>
              <span>📋 Vital Records Translation Experts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DeathCertificateFooter;
