
import React from 'react';

const ProcessSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Upload Your Document",
      description: "Securely upload your immigration document through our encrypted platform",
      icon: "📄"
    },
    {
      number: "2", 
      title: "Professional Translation",
      description: "Our certified translators work on your document with immigration expertise",
      icon: "🌐"
    },
    {
      number: "3",
      title: "Official Certification",
      description: "We add the required certification letter and notarization for USCIS acceptance",
      icon: "✅"
    },
    {
      number: "4",
      title: "Delivery & Support",
      description: "Receive your certified translation via email with ongoing support if needed",
      icon: "📧"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Simple, secure, and professional - your immigration documents translated in 4 easy steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="bg-white rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-lg border-4 border-blue-200">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Express Service Available</h3>
            <p className="text-gray-700 mb-4">
              Need your translation faster? Our express service delivers certified translations in as little as 4-6 hours.
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
              <span>🕐 4-6 Hour Delivery</span>
              <span>📞 Priority Support</span>
              <span>⚡ Rush Processing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
