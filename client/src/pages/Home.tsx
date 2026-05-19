import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Star, Check, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Refined Minimalism with Warmth
 * - Clean, elegant layouts with generous whitespace
 * - Warm color palette (cream, gold, charcoal) for premium feel
 * - Asymmetric hero section with high-quality imagery
 * - Serif headlines paired with sans-serif body text
 * - Smooth, purposeful animations and micro-interactions
 */

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState(0);

  const properties = [
    {
      id: 1,
      name: "Luxury Studio",
      beds: 1,
      baths: 1,
      sqft: "450 sqft",
      price: "₦150,000/night",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663663343752/28HXhjr6NKe4PGB5Cf7wAV/bedroom_luxury-BXibFtokiRPeb6yNQjp8a4.webp",
      features: ["Smart TV", "Premium Bedding", "Modern Bathroom", "City Views"]
    },
    {
      id: 2,
      name: "Executive One-Bedroom",
      beds: 1,
      baths: 1,
      sqft: "650 sqft",
      price: "₦200,000/night",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663663343752/28HXhjr6NKe4PGB5Cf7wAV/amenities_showcase-ACZ847hsMuXpcGGBCm76pY.webp",
      features: ["Full Kitchen", "Dining Area", "Work Desk", "Premium Finishes"]
    },
    {
      id: 3,
      name: "Penthouse Suite",
      beds: 2,
      baths: 2,
      sqft: "1000 sqft",
      price: "₦350,000/night",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663663343752/28HXhjr6NKe4PGB5Cf7wAV/hero_luxury_apartment-adRfhm6H93CeFrVhX73rsJ.webp",
      features: ["Spacious Living", "Panoramic Views", "Premium Amenities", "Concierge Service"]
    }
  ];

  const amenities = [
    { icon: "🏠", title: "Fully Furnished", desc: "Complete with modern furniture and decor" },
    { icon: "🍳", title: "Equipped Kitchen", desc: "Stainless steel appliances and cookware" },
    { icon: "📺", title: "Smart Entertainment", desc: "Premium TV and streaming services" },
    { icon: "🌐", title: "High-Speed WiFi", desc: "Reliable internet for work and leisure" },
    { icon: "🧹", title: "Housekeeping", desc: "Professional cleaning services available" },
    { icon: "🛡️", title: "24/7 Security", desc: "Safe and secure environment" }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F5F1ED] border-b border-[#E8E0D8]">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#D4A574] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DJ</span>
            </div>
            <h1 className="text-xl font-serif font-bold text-[#2C2C2C]">Dejays Homes</h1>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#properties" className="text-[#2C2C2C] hover:text-[#D4A574] transition-colors">Properties</a>
            <a href="#amenities" className="text-[#2C2C2C] hover:text-[#D4A574] transition-colors">Amenities</a>
            <a href="#contact" className="text-[#2C2C2C] hover:text-[#D4A574] transition-colors">Contact</a>
            <Button className="bg-[#D4A574] hover:bg-[#C49564] text-white">Book Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 py-20 grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div>
              <p className="text-[#D4A574] font-semibold mb-2">LUXURY SHORTLET APARTMENTS</p>
              <h2 className="text-5xl font-serif font-bold text-[#2C2C2C] leading-tight">Experience Refined Living in Abuja</h2>
            </div>
            <p className="text-lg text-[#9B8B7E] leading-relaxed">Discover our collection of premium, fully-furnished apartments designed for the discerning traveler. Each space combines modern comfort with sophisticated elegance.</p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-[#D4A574] hover:bg-[#C49564] text-white px-8 py-6 text-lg">Explore Properties</Button>
              <Button variant="outline" className="border-[#D4A574] text-[#D4A574] hover:bg-[#FAFAF8] px-8 py-6 text-lg">Learn More</Button>
            </div>
            <div className="flex gap-8 pt-6 border-t border-[#E8E0D8]">
              <div>
                <p className="text-3xl font-bold text-[#2C2C2C]">50+</p>
                <p className="text-sm text-[#9B8B7E]">Premium Units</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#2C2C2C]">5.0★</p>
                <p className="text-sm text-[#9B8B7E]">Guest Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#2C2C2C]">24/7</p>
                <p className="text-sm text-[#9B8B7E]">Support</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663663343752/28HXhjr6NKe4PGB5Cf7wAV/hero_luxury_apartment-adRfhm6H93CeFrVhX73rsJ.webp"
              alt="Luxury apartment living room"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-[#FAFAF8]">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#D4A574] font-semibold mb-2">OUR COLLECTION</p>
            <h2 className="text-4xl font-serif font-bold text-[#2C2C2C] mb-4">Handpicked Apartments</h2>
            <p className="text-[#9B8B7E] max-w-2xl mx-auto">Each property is carefully curated to offer the perfect blend of comfort, style, and convenience.</p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-12">
            {properties.map((prop, idx) => (
              <div
                key={prop.id}
                onClick={() => setSelectedProperty(idx)}
                className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                  selectedProperty === idx
                    ? "ring-2 ring-[#D4A574] shadow-xl"
                    : "shadow-md hover:shadow-lg"
                }`}
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={prop.image}
                    alt={prop.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="bg-white p-6">
                  <h3 className="font-serif text-xl font-bold text-[#2C2C2C] mb-2">{prop.name}</h3>
                  <div className="flex gap-4 text-sm text-[#9B8B7E] mb-4">
                    <span>{prop.beds} Bed</span>
                    <span>•</span>
                    <span>{prop.baths} Bath</span>
                    <span>•</span>
                    <span>{prop.sqft}</span>
                  </div>
                  <p className="text-[#D4A574] font-semibold text-lg">{prop.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Property Details */}
          <div className="bg-white rounded-lg p-8 border border-[#E8E0D8]">
            <h3 className="font-serif text-2xl font-bold text-[#2C2C2C] mb-6">{properties[selectedProperty].name} - Key Features</h3>
            <div className="grid grid-cols-2 gap-4">
              {properties[selectedProperty].features.map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                  <span className="text-[#2C2C2C]">{feature}</span>
                </div>
              ))}
            </div>
            <Button className="bg-[#D4A574] hover:bg-[#C49564] text-white mt-8 px-8 py-6 text-lg">Book This Property</Button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#D4A574] font-semibold mb-2">WHAT WE OFFER</p>
            <h2 className="text-4xl font-serif font-bold text-[#2C2C2C] mb-4">Premium Amenities</h2>
            <p className="text-[#9B8B7E] max-w-2xl mx-auto">Every apartment is equipped with everything you need for a comfortable and productive stay.</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAF8] rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="font-serif text-xl font-bold text-[#2C2C2C] mb-2">{amenity.title}</h3>
                <p className="text-[#9B8B7E]">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#D4A574] font-semibold mb-2">PRIME LOCATION</p>
            <h2 className="text-4xl font-serif font-bold text-[#2C2C2C] mb-6">Located in Abuja's Heart</h2>
            <p className="text-[#9B8B7E] mb-6 leading-relaxed">Situated at Banex Junction, opposite Olive Plaza, our apartments offer convenient access to Abuja's business district, shopping centers, restaurants, and entertainment venues.</p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-[#D4A574] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#2C2C2C]">Banex Junction, Abuja</p>
                  <p className="text-[#9B8B7E]">FCT, Nigeria 900108</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-[#D4A574] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#2C2C2C]">+234 907 138 3160</p>
                  <p className="text-[#9B8B7E]">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7527404123!2d7.465194!3d9.082401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0be78a753a5d%3A0xa655af85567d1e5a!2sDejays%20homes%20and%20shortlets!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2C2C2C] text-white">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Experience Luxury?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Book your perfect apartment today and enjoy a stay that exceeds your expectations.</p>
          <Button className="bg-[#D4A574] hover:bg-[#C49564] text-white px-10 py-6 text-lg">Book Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1A1A1A] text-white py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif font-bold mb-4">Dejays Homes</h3>
              <p className="text-gray-400 text-sm">Premium shortlet apartments in Abuja for discerning travelers.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#properties" className="hover:text-[#D4A574] transition-colors">Properties</a></li>
                <li><a href="#amenities" className="hover:text-[#D4A574] transition-colors">Amenities</a></li>
                <li><a href="#contact" className="hover:text-[#D4A574] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2"><Phone className="w-4 h-4" /> +234 907 138 3160</li>
                <li className="flex gap-2"><Mail className="w-4 h-4" /> info@dejayshomes.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-sm text-gray-400">Open 24/7</p>
              <p className="text-sm text-gray-400 mt-2">Professional support always available</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Dejays Homes and Shortlets. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
