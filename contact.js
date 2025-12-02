import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           <Card className="md:col-span-1 dark:bg-gray-800 h-fit">
              <CardContent className="p-6 space-y-6">
                 <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                       <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                       <p className="text-gray-500 dark:text-gray-400">support@jobspare.com</p>
                       <p className="text-gray-500 dark:text-gray-400">info@jobspare.com</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                       <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                       <p className="text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                       <p className="text-gray-500 dark:text-gray-400">Mon-Fri 9am-6pm</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                       <h3 className="font-semibold text-gray-900 dark:text-white">Office</h3>
                       <p className="text-gray-500 dark:text-gray-400">
                          123 Job Avenue,<br />
                          Tech District, NY 10001
                       </p>
                    </div>
                 </div>
              </CardContent>
           </Card>

           <Card className="md:col-span-2 dark:bg-gray-800">
              <CardContent className="p-8">
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                          <Input placeholder="Your name" required />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                          <Input type="email" placeholder="your@email.com" required />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                       <Input placeholder="How can we help?" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                       <Textarea placeholder="Your message..." className="h-32" required />
                    </div>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto">
                       Send Message
                    </Button>
                 </form>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}