
import React from 'react';
import { Button } from '@/components/ui/button';

const ApostilleFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ApostilleTranslate.com</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Professional apostille document translation services. 
              Certified, accurate and USCIS-accepted.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Translation Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Apostille Document Translation</a></li>
              <li><a href="#" className="hover:text-white">Certified Translation</a></li>
              <li><a href="#" className="hover:text-white">USCIS Translation</a></li>
              <li><a href="#" className="hover:text-white">Legal Document Translation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Frequently Asked Questions</a></li>
              <li><a href="#" className="hover:text-white">Translation Samples</a></li>
              <li><a href="#" className="hover:text-white">Track Order</a></li>
              <li><a href="#" className="hover:text-white">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Upload your apostille document now.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
              Upload Document
            </Button>
            <div className="text-xs text-gray-400 space-y-1">
              <p>📞 24/7 Customer Support</p>
              <p>📧 support@apostilletranslate.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 ApostilleTranslate.com. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <span>🔒 SSL Protected</span>
              <span>✅ HIPAA Compliant</span>
              <span>🏆 ATA Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ApostilleFooter;
