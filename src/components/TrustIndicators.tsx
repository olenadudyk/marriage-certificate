
import React from 'react';
import { Badge } from '@/components/ui/badge';

const TrustIndicators = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Trusted by Thousands of Immigrants</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm py-2 px-4">
              ⭐ 4.9/5 Rating (2,500+ Reviews)
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              🏆 ATA Certified Translators
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              ✅ USCIS Accepted Format
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              🔒 100% Confidential
            </Badge>
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <p className="text-green-800 font-medium text-lg">
            💯 <strong>Money-Back Guarantee:</strong> If USCIS doesn't accept our translation, we'll refund your payment completely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
