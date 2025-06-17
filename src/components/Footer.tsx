
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Translate.com</h3>
            <p className="text-gray-300 mb-4">
              Professional immigration document translation services. 
              Certified, accurate, and USCIS-accepted.
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl">🌟</span>
              <span className="text-2xl">🔒</span>
              <span className="text-2xl">⚡</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Marriage Certificates</a></li>
              <li><a href="#" className="hover:text-white">Birth Certificates</a></li>
              <li><a href="#" className="hover:text-white">Divorce Decrees</a></li>
              <li><a href="#" className="hover:text-white">Educational Documents</a></li>
              <li><a href="#" className="hover:text-white">Police Certificates</a></li>
              <li><a href="#" className="hover:text-white">Medical Records</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Sample Translations</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Track Order</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <p className="text-gray-300 mb-4">
              Ready to translate your immigration documents?
            </p>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 mb-4">
              Upload Document
            </Button>
            <div className="text-sm text-gray-400">
              <p>📞 24/7 Support</p>
              <p>📧 support@translate.com</p>
              <p>💬 Live Chat Available</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Translate.com. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>🔒 SSL Secured</span>
              <span>✅ HIPAA Compliant</span>
              <span>🏆 ATA Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
