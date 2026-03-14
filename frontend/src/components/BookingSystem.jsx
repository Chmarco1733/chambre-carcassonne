import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, Mail, Phone, User, MessageSquare, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { rooms, bookedDates, calculateSeasonalPrice, getSeasonByMonth } from '../utils/mockData';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { toast } from 'sonner';

const BookingSystem = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(2);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
  
  const [guestInfo, setGuestInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const calculateTotalPrice = () => {
    if (!checkInDate || !checkOutDate || !selectedRoom) return 0;
    const room = rooms.find(r => r.id.toString() === selectedRoom);
    if (!room) return 0;
    
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    
    // Calculate price based on check-in month season
    const checkInMonth = checkInDate.getMonth() + 1;
    const seasonalPrice = calculateSeasonalPrice(room.basePrice, checkInMonth);
    
    return nights * seasonalPrice;
  };

  const isDateBooked = (date) => {
    if (!selectedRoom) return false;
    return bookedDates.some(booking => {
      if (booking.roomId.toString() !== selectedRoom) return false;
      return date >= booking.start && date <= booking.end;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!selectedRoom || !checkInDate || !checkOutDate || !guestInfo.name || !guestInfo.email || !guestInfo.phone) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (checkOutDate <= checkInDate) {
      toast.error('La date de départ doit être après la date d\'arrivée');
      return;
    }

    // Simulate booking creation
    const bookingData = {
      room: rooms.find(r => r.id.toString() === selectedRoom),
      checkIn: format(checkInDate, 'dd/MM/yyyy', { locale: fr }),
      checkOut: format(checkOutDate, 'dd/MM/yyyy', { locale: fr }),
      guests,
      totalPrice: calculateTotalPrice(),
      guestInfo
    };

    console.log('Booking created:', bookingData);
    
    toast.success('Réservation enregistrée ! Vous recevrez une confirmation par email.');
    
    // Reset form
    setSelectedRoom('');
    setCheckInDate(null);
    setCheckOutDate(null);
    setGuests(2);
    setGuestInfo({ name: '', email: '', phone: '', message: '' });
  };

  const totalPrice = calculateTotalPrice();
  const nights = checkInDate && checkOutDate 
    ? Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <section id="reservation" className="py-20 bg-gradient-to-br from-[#F5F5DC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Réservez votre séjour
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Réservation simple et rapide en ligne
          </p>
          <div className="w-24 h-1 bg-[#6B8E23] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#6B8E23] to-[#556B1E] text-white">
                <CardTitle className="text-2xl">Détails de la réservation</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Room Selection */}
                  <div>
                    <Label htmlFor="room" className="text-base font-semibold">
                      Choisir une chambre *
                    </Label>
                    <Select value={selectedRoom} onValueChange={setSelectedRoom}>
                      <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="Sélectionnez une chambre" />
                      </SelectTrigger>
                      <SelectContent>
                        {rooms.map(room => (
                          <SelectItem key={room.id} value={room.id.toString()}>
                            {room.name} - {room.price}€/nuit ({room.capacity})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date Selection */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-base font-semibold">Date d'arrivée *</Label>
                      <Popover open={showCheckInCalendar} onOpenChange={setShowCheckInCalendar}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal mt-2"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkInDate ? format(checkInDate, 'dd MMMM yyyy', { locale: fr }) : 'Sélectionner'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkInDate}
                            onSelect={(date) => {
                              setCheckInDate(date);
                              setShowCheckInCalendar(false);
                            }}
                            disabled={(date) => date < new Date() || isDateBooked(date)}
                            initialFocus
                            locale={fr}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label className="text-base font-semibold">Date de départ *</Label>
                      <Popover open={showCheckOutCalendar} onOpenChange={setShowCheckOutCalendar}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal mt-2"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOutDate ? format(checkOutDate, 'dd MMMM yyyy', { locale: fr }) : 'Sélectionner'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkOutDate}
                            onSelect={(date) => {
                              setCheckOutDate(date);
                              setShowCheckOutCalendar(false);
                            }}
                            disabled={(date) => !checkInDate || date <= checkInDate || isDateBooked(date)}
                            initialFocus
                            locale={fr}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <Label htmlFor="guests" className="text-base font-semibold">
                      <Users className="inline h-4 w-4 mr-1" />
                      Nombre de voyageurs *
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="6"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="mt-2"
                    />
                  </div>

                  {/* Guest Information */}
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold mb-4">Vos informations</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-base">
                          <User className="inline h-4 w-4 mr-1" />
                          Nom complet *
                        </Label>
                        <Input
                          id="name"
                          value={guestInfo.name}
                          onChange={(e) => setGuestInfo({ ...guestInfo, name: e.target.value })}
                          placeholder="Votre nom"
                          className="mt-2"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-base">
                            <Mail className="inline h-4 w-4 mr-1" />
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={guestInfo.email}
                            onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
                            placeholder="votre@email.fr"
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone" className="text-base">
                            <Phone className="inline h-4 w-4 mr-1" />
                            Téléphone *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={guestInfo.phone}
                            onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                            placeholder="+33 6 12 34 56 78"
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-base">
                          <MessageSquare className="inline h-4 w-4 mr-1" />
                          Message (optionnel)
                        </Label>
                        <Textarea
                          id="message"
                          value={guestInfo.message}
                          onChange={(e) => setGuestInfo({ ...guestInfo, message: e.target.value })}
                          placeholder="Informations complémentaires..."
                          rows={4}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#E2725B] hover:bg-[#D35E47] text-white text-lg py-6 transition-all duration-300 hover:scale-105"
                  >
                    <Check className="mr-2 h-5 w-5" />
                    Confirmer la réservation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <Card className="shadow-xl sticky top-24">
              <CardHeader className="bg-gradient-to-r from-[#6B8E23] to-[#556B1E] text-white">
                <CardTitle>Résumé</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {selectedRoom && (
                    <div className="pb-4 border-b">
                      <p className="text-sm text-gray-600 mb-1">Chambre sélectionnée</p>
                      <p className="font-semibold text-lg">
                        {rooms.find(r => r.id.toString() === selectedRoom)?.name}
                      </p>
                    </div>
                  )}

                  {checkInDate && checkOutDate && (
                    <div className="pb-4 border-b">
                      <p className="text-sm text-gray-600 mb-1">Dates</p>
                      <p className="font-semibold">
                        {format(checkInDate, 'dd MMM', { locale: fr })} - {format(checkOutDate, 'dd MMM yyyy', { locale: fr })}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">{nights} nuit{nights > 1 ? 's' : ''}</p>
                    </div>
                  )}

                  <div className="pb-4 border-b">
                    <p className="text-sm text-gray-600 mb-1">Voyageurs</p>
                    <p className="font-semibold">{guests} personne{guests > 1 ? 's' : ''}</p>
                  </div>

                  {totalPrice > 0 && (
                    <div className="pt-4">
                      <div className="space-y-2 mb-4">
                        {checkInDate && (
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Saison</span>
                            <span className="font-medium text-[#6B8E23]">
                              {getSeasonByMonth(checkInDate.getMonth() + 1).name}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">
                            {selectedRoom && calculateSeasonalPrice(rooms.find(r => r.id.toString() === selectedRoom)?.basePrice, checkInDate?.getMonth() + 1)}€ × {nights} nuit{nights > 1 ? 's' : ''}
                          </span>
                          <span className="font-semibold">{totalPrice}€</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-xl font-bold pt-4 border-t">
                        <span>Total</span>
                        <span className="text-[#6B8E23]">{totalPrice}€</span>
                      </div>
                    </div>
                  )}

                  {!selectedRoom && (
                    <div className="text-center py-8 text-gray-500">
                      <CalendarIcon className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>Sélectionnez une chambre pour commencer</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="shadow-lg mt-6">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Conditions</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#6B8E23] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Arrivée : 16h00 - 20h00</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#6B8E23] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Départ : avant 11h00</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#6B8E23] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Petit-déjeuner inclus</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-[#6B8E23] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Annulation gratuite 48h avant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;
