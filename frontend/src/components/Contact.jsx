import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { contactInfo } from '../utils/mockData';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    // Simulate form submission
    console.log('Contact form submitted:', formData);
    toast.success('Message envoyé ! Nous vous répondrons rapidement.');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question ? N'hésitez pas à nous contacter
          </p>
          <div className="w-24 h-1 bg-[#6B8E23] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-[#6B8E23] to-[#556B1E] text-white">
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Téléphone
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-xl font-semibold text-[#6B8E23] hover:text-[#556B1E] transition-colors"
                >
                  {contactInfo.phone}
                </a>
                <p className="text-gray-600 mt-2">
                  Du lundi au dimanche, de 9h à 20h
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-[#E2725B] to-[#D35E47] text-white">
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-xl font-semibold text-[#E2725B] hover:text-[#D35E47] transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
                <p className="text-gray-600 mt-2">
                  Réponse sous 24h
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-[#6B8E23] to-[#556B1E] text-white">
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-xl font-semibold text-gray-900">
                  {contactInfo.address}
                </p>
                <p className="text-gray-600 mt-2">
                  À 15 minutes de la Cité de Carcassonne
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#6B8E23] to-[#556B1E] text-white">
                <CardTitle>Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name" className="text-base font-semibold">
                      Nom *
                    </Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Votre nom"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-email" className="text-base font-semibold">
                      Email *
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.fr"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message" className="text-base font-semibold">
                      Message *
                    </Label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Votre message..."
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#E2725B] hover:bg-[#D35E47] text-white text-lg py-6 transition-all duration-300 hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="mt-6 p-6 bg-[#F5F5DC] rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Informations pratiques</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Check-in : 16h00 - 20h00</li>
                <li>• Check-out : avant 11h00</li>
                <li>• Petit-déjeuner : 8h00 - 10h00</li>
                <li>• Parking gratuit sur place</li>
                <li>• Wi-Fi gratuit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
