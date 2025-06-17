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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upload Your Mexican Marriage Certificate</h2>
          <p className="text-xl text-gray-600">
            Secure upload for fast, certified Spanish to English translation for USA immigration
          </p>
        </div>
        
        <Card className="shadow-xl border">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">Get Your USA Immigration Translation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="source-language" className="text-gray-700">Document Language</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Spanish (Mexican)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spanish-mexican">Spanish (Mexican)</SelectItem>
                    <SelectItem value="spanish-general">Spanish (General)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="state" className="text-gray-700">Mexican State</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Mexican state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cdmx">Mexico City (CDMX)</SelectItem>
                    <SelectItem value="jalisco">Jalisco</SelectItem>
                    <SelectItem value="nuevo-leon">Nuevo León</SelectItem>
                    <SelectItem value="guanajuato">Guanajuato</SelectItem>
                    <SelectItem value="michoacan">Michoacán</SelectItem>
                    <SelectItem value="veracruz">Veracruz</SelectItem>
                    <SelectItem value="other">Other Mexican State</SelectItem>
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
              <Label htmlFor="special-instructions" className="text-gray-700">Special Instructions for USA Immigration (Optional)</Label>
              <Textarea 
                id="special-instructions"
                placeholder="Any specific USCIS requirements or immigration case details..."
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
              <h4 className="font-semibold text-blue-900 mb-3">Your USA immigration translation includes:</h4>
              <div className="grid md:grid-cols-2 gap-2 text-blue-800 text-sm">
                <div className="space-y-1">
                  <p>✓ USCIS-compliant certified translation</p>
                  <p>✓ Official certification letter for USA immigration</p>
                </div>
                <div className="space-y-1">
                  <p>✓ 24-hour delivery for urgent cases</p>
                  <p>✓ 100% USCIS acceptance guarantee</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold">
              Get USA Immigration Translation Quote
            </Button>
            
            <p className="text-center text-sm text-gray-500">
              🔒 Your Mexican documents are securely encrypted. We maintain strict confidentiality for USA immigration cases.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UploadArea;
