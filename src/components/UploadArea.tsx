
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload, FileText } from 'lucide-react';

const UploadArea = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    console.log("Files dropped:", e.dataTransfer.files);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upload Your Marriage Certificate</h2>
          <p className="text-xl text-gray-600">
            Secure upload for fast, certified translation service
          </p>
        </div>
        
        <Card className="shadow-xl border">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">Get Your Translation Started</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="source-language" className="text-gray-700">Source Language</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Language of your certificate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="portuguese">Portuguese</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="chinese">Chinese</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="russian">Russian</SelectItem>
                    <SelectItem value="other">Other Language</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="country" className="text-gray-700">Issuing Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Where was it issued?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mexico">Mexico</SelectItem>
                    <SelectItem value="spain">Spain</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="philippines">Philippines</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="brazil">Brazil</SelectItem>
                    <SelectItem value="other">Other Country</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="mx-auto mb-4 text-gray-400" size={48} />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Upload Your Marriage Certificate</h3>
              <p className="text-gray-600 mb-4">Drag and drop your file here, or click to browse</p>
              <Button variant="outline" className="mb-4">
                <FileText className="mr-2" size={16} />
                Choose Files
              </Button>
              <p className="text-sm text-gray-500">
                Accepted formats: PDF, JPG, PNG (Maximum 10MB)
              </p>
            </div>
            
            <div>
              <Label htmlFor="special-instructions" className="text-gray-700">Special Instructions (Optional)</Label>
              <Textarea 
                id="special-instructions"
                placeholder="Any specific requirements for your translation..."
                className="min-h-[80px]"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Your certified translation includes:</h4>
              <div className="grid md:grid-cols-2 gap-2 text-blue-800 text-sm">
                <div className="space-y-1">
                  <p>✓ Professional translation by certified translator</p>
                  <p>✓ Official certification letter and statement</p>
                </div>
                <div className="space-y-1">
                  <p>✓ Digital delivery within 24 hours</p>
                  <p>✓ 100% USCIS acceptance guarantee</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold">
              Get Instant Quote & Upload
            </Button>
            
            <p className="text-center text-sm text-gray-500">
              🔒 Your documents are securely encrypted. We maintain strict confidentiality.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UploadArea;
