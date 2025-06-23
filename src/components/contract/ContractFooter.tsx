
import React from 'react';
import { Button } from '@/components/ui/button';

const ContractFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ContractTranslate.com</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Professional contract translation services with official certification. 
              Certified, accurate and legally accepted worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contract Translation Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Employment Contract Translation</a></li>
              <li><a href="#" className="hover:text-white">Commercial Agreement Translation</a></li>
              <li><a href="#" className="hover:text-white">Service Contract Translation</a></li>
              <li><a href="#" className="hover:text-white">International Contract Translation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Contract Translation FAQ</a></li>
              <li><a href="#" className="hover:text-white">Business Document Translation Samples</a></li>
              <li><a href="#" className="hover:text-white">Track Contract Translation</a></li>
              <li><a href="#" className="hover:text-white">Contact Business Document Experts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get Contract Translation</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Upload your contract for professional translation with official certification.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
              Upload Contract Document
            </Button>
            <div className="text-xs text-gray-400 space-y-1">
              <p>📞 24/7 Business Document Translation Support</p>
              <p>📧 contracts@contracttranslate.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 ContractTranslate.com. Professional Business Document Translation Services.
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <span>🔒 SSL Protected</span>
              <span>✅ Court Certified</span>
              <span>📋 Business Document Translation Experts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContractFooter;
