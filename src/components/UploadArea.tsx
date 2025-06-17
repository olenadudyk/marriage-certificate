
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
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upload Your Documents</h2>
          <p className="text-xl text-gray-600">
            Secure, encrypted file upload for your immigration documents
          </p>
        </div>
        
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Start Your Translation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="document-type">Document Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select document type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marriage">Marriage Certificate</SelectItem>
                    <SelectItem value="birth">Birth Certificate</SelectItem>
                    <SelectItem value="divorce">Divorce Decree</SelectItem>
                    <SelectItem value="education">Educational Document</SelectItem>
                    <SelectItem value="police">Police Certificate</SelectItem>
                    <SelectItem value="medical">Medical Record</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="target-language">Translate To</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select target language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                    <SelectItem value="other">Other Language</SelectItem>
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
              <h3 className="text-lg font-semibold mb-2">Drag & Drop Your Files Here</h3>
              <p className="text-gray-600 mb-4">or click to browse your computer</p>
              <Button variant="outline" className="mb-4">
                <FileText className="mr-2" size={16} />
                Choose Files
              </Button>
              <p className="text-sm text-gray-500">
                Supported formats: PDF, JPG, PNG, DOC, DOCX (Max 10MB per file)
              </p>
            </div>
            
            <div>
              <Label htmlFor="special-instructions">Special Instructions (Optional)</Label>
              <Textarea 
                id="special-instructions"
                placeholder="Any specific requirements or notes for your translation..."
                className="min-h-[100px]"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Your translation includes:</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>✓ Certified translation by licensed professional</li>
                <li>✓ Official certification letter for USCIS</li>
                <li>✓ Digital delivery within 24-48 hours</li>
                <li>✓ 100% acceptance guarantee</li>
              </ul>
            </div>
            
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold">
              Get Instant Quote & Upload
            </Button>
            
            <p className="text-center text-sm text-gray-500">
              🔒 Your documents are encrypted and secure. We never share your information.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UploadArea;
