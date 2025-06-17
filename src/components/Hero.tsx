
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Certified Immigration Document Translation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Professional translation services for marriage certificates and immigration documents. 
            USCIS accepted, legally certified, delivered in 24-48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              Get Started Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
              View Sample Translation
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Shield className="mx-auto mb-4 text-blue-200" size={48} />
            <h3 className="text-xl font-semibold mb-2">USCIS Accepted</h3>
            <p className="text-blue-100">Certified translations accepted by immigration authorities</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Clock className="mx-auto mb-4 text-blue-200" size={48} />
            <h3 className="text-xl font-semibold mb-2">24-48 Hour Delivery</h3>
            <p className="text-blue-100">Fast turnaround for urgent immigration needs</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Award className="mx-auto mb-4 text-blue-200" size={48} />
            <h3 className="text-xl font-semibold mb-2">Certified Translators</h3>
            <p className="text-blue-100">ATA-certified professionals with immigration expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
