import Image from "next/image";
import React from "react";
// pass props property and onBook
const PropertyCard = ({ property, onBook }) => {
  return (
    // property card ui
    <div className="border w-full bg-white shadow-lg group rounded-lg overflow-hidden max-w-[327px] md:max-w-none md:mx-0 mx-auto">
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
          className="mt-4 hover:bg-red-500 text-white py-2 bg-blue-500 hover:text-white transition-all duration-300 px-4 rounded"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
