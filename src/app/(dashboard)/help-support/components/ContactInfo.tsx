"use client";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactInfo() {
  const infoItems = [
    {
      icon: <MapPin className="text-[#00B3BB]" size={20} />,
      title: "Location",
      subtitle: "New Delhi, India",
    },
    {
      icon: <Mail className="text-[#00B3BB]" size={20} />,
      title: "Email us",
      subtitle: "syncnexplore@gmail.com",
    },
    {
      icon: <Phone className="text-[#00B3BB]" size={20} />,
      title: "Call us",
      subtitle: "+91 12345-67890",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
      <p className="text-gray-700">
        Whether it's a quick query or detailed travel planning, we'd love to hear from you. 
        Reach out and let’s make your journey seamless and memorable.
      </p>

      <div className="space-y-5">
        {infoItems.map((item, i) => (
          <div key={i} className="flex items-start space-x-3">
            <div className="p-2 bg-[#E0F7F8] rounded-full">{item.icon}</div>
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-600 text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
