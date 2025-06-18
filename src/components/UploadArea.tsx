
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upload Your Diploma for Translation</h2>
          <p className="text-xl text-gray-600">
            Secure upload for professional diploma translation with complete certification
          </p>
        </div>
        
        <Card className="shadow-xl border">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">Professional Diploma Translation Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h4 className="font-semibold text-blue-900 mb-4 text-xl">Your diploma translation includes:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-blue-800">
                <div className="space-y-2">
                  <p>✓ Complete seal translation</p>
                  <p>✓ University signature certification</p>
                  <p>✓ Official academic content translation</p>
                </div>
                <div className="space-y-2">
                  <p>✓ Certified translation certificate</p>
                  <p>✓ 24-hour delivery available</p>
                  <p>✓ 100% university acceptance guarantee</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-xl font-semibold"
              onClick={handleRedirect}
            >
              Get Quote for Diploma Translation
            </Button>
            
            <p className="text-center text-sm text-gray-500">
              🔒 Your educational documents are securely encrypted. We maintain strict confidentiality for all academic translations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UploadArea;
