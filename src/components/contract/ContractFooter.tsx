
import React from 'react';
import { Button } from '@/components/ui/button';

const ContractFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-gray-300 mb-4">
            Support hours: 7 AM to 4 PM (UTC 0), Mon-Fri.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Translate.com</h4>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Clients</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Translate.com Services</a></li>
              <li><a href="#" className="hover:text-white">Online Document Translation</a></li>
              <li><a href="#" className="hover:text-white">Business Translation</a></li>
              <li><a href="#" className="hover:text-white">Medical Translation</a></li>
              <li><a href="#" className="hover:text-white">Technical Translation</a></li>
              <li><a href="#" className="hover:text-white">Email Translation</a></li>
              <li><a href="#" className="hover:text-white">Text Proofreading</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Businesses</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Translate.com API</a></li>
              <li><a href="#" className="hover:text-white">API Documentation</a></li>
              <li><a href="#" className="hover:text-white">Zendesk Integration</a></li>
              <li><a href="#" className="hover:text-white">Zapier Integration</a></li>
              <li><a href="#" className="hover:text-white">All Integrations</a></li>
              <li><a href="#" className="hover:text-white">Translate JSON</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Machine Translation</a></li>
              <li><a href="#" className="hover:text-white">Dictionaries</a></li>
              <li><a href="#" className="hover:text-white">Language Pairs</a></li>
              <li><a href="#" className="hover:text-white"><span className="bg-red-600 text-white px-1 py-0.5 rounded text-xs mr-1">NEW!</span>English-French</a></li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
              </ul>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-4">For Translators</h4>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="text-center text-sm text-gray-400">
            Copyright ©2011-2025 Translate LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContractFooter;
