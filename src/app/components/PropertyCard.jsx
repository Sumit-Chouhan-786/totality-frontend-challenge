import Image from "next/image";
import React from "react";

const PropertyCard = ({ property, onBook }) => {
  return (
    <div className="border group rounded-lg overflow-hidden shadow-lg max-w-[327px] md:max-w-none md:mx-0 mx-auto">
      <Image
        height={200}
        width={200}
        src={property.myImage}
        alt={property.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-300"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{property.title}</h3>
        <p className="text-gray-700">{property.bedrooms}</p>
        <p className="text-lg font-bold mt-2">${property.price}</p>
        <p className="text-gray-700">{property.location}</p>
        <button
          onClick={() => onBook(property)}
          className="mt-4 bg-slate-100 text-black py-2 hover:bg-blue-500 hover:text-white transition-all duration-300 px-4 rounded"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
