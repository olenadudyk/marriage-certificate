
import React from 'react';
import { Button } from '@/components/ui/button';

const DeathCertificateHeader = () => {
  const handleLogoClick = () => {
    window.open('https://your-main-website.com', '_blank');
  };

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={handleLogoClick}
          >
            <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl mr-3">
              DT
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">DeathCertificateTranslate.com</h1>
              <p className="text-sm text-gray-600">Professional Translation Services</p>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            onClick={handleLogoClick}
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            Visit Main Site
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DeathCertificateHeader;
