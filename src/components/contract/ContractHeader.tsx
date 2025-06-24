
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ContractHeader = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleHomeClick = () => {
    navigate('/');
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
              T
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Translate.com</h1>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            onClick={handleHomeClick}
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            Go to Home Page
          </Button>
        </div>
      </div>
    </header>
  );
};

export default ContractHeader;
