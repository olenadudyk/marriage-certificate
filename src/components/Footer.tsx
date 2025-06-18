
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DiplomaTranslate.com</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Professional diploma translation services with apostille certification. 
              Certified, accurate and academically accepted worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Diploma Translation Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">University Degree Translation</a></li>
              <li><a href="#" className="hover:text-white">College Diploma Translation</a></li>
              <li><a href="#" className="hover:text-white">Academic Transcript Translation</a></li>
              <li><a href="#" className="hover:text-white">Professional Certificate Translation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Diploma Translation FAQ</a></li>
              <li><a href="#" className="hover:text-white">Educational Translation Samples</a></li>
              <li><a href="#" className="hover:text-white">Track Diploma Translation</a></li>
              <li><a href="#" className="hover:text-white">Contact Academic Experts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get Diploma Translation</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Upload your diploma for professional translation with apostille certification.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
              Upload Diploma Document
            </Button>
            <div className="text-xs text-gray-400 space-y-1">
              <p>📞 24/7 Academic Translation Support</p>
              <p>📧 diploma@diplomatranslate.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 DiplomaTranslate.com. Professional Educational Document Translation Services.
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <span>🔒 SSL Protected</span>
              <span>✅ University Certified</span>
              <span>🎓 Academic Translation Experts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
