// src/app/(dashboard)/stay-options/StayCard.tsx

import Image from "next/image";

interface StayCardProps {
  title: string;
  price: string;
  location: string;
  rating: string;
  bedrooms: number;
  guests: number;
}

export default function StayCard({
  title,
  price,
  location,
  rating,
  bedrooms,
  guests,
}: StayCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm max-w-xs bg-white">
      <Image
        src="/HomeStayVilla.png"
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
        priority
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-teal-600 font-bold">{price}</p>
        <p className="text-sm text-gray-500">{location}</p>

        <div className="flex items-center text-sm mt-2 space-x-3 text-gray-600">
          <span>{rating}</span>
          <span>{bedrooms} Bedrooms</span>
          <span>{guests} Guests</span>
        </div>

        <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
}
