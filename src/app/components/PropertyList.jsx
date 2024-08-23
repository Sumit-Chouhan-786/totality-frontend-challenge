import React, { useState } from "react";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ properties, onBook }) => {
  const [filters, setFilters] = useState({
    location: "",
    priceRange: ["", ""],
    bedrooms: "",
  });

  const filteredProperties = properties.filter((property) => {
    if (
      filters.location &&
      !property.location.toLowerCase().includes(filters.location.toLowerCase())
    ) {
      return false;
    }

    // Extract the number of bedrooms from the string
    const propertyBedrooms = parseInt(property.bedrooms);

    if (filters.bedrooms && propertyBedrooms !== Number(filters.bedrooms)) {
      return false;
    }

    if (
      filters.priceRange[0] &&
      property.price < Number(filters.priceRange[0])
    ) {
      return false;
    }

    if (
      filters.priceRange[1] &&
      property.price > Number(filters.priceRange[1])
    ) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold pb-4">Search Properties</h2>
      <div className="flex flex-wrap mb-6">
        <div className="lg:w-2/12 pe-2 w-1/2">
          <input
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
            className="border outline-none  w-full text-black p-2 rounded"
            type="text"
            placeholder="Location"
          />
        </div>

        <div className="lg:w-2/12 ps-2 w-1/2">
          <input
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters({
                ...filters,
                priceRange: [filters.priceRange[0], e.target.value],
              })
            }
            className="border outline-none w-full text-black p-2 rounded"
            type="number"
            placeholder="Price"
          />
        </div>
        <div className="lg:w-2/12 pe-2 pt-4 lg:ps-4 lg:pt-0 w-1/2">
          <input
            value={filters.bedrooms}
            onChange={(e) =>
              setFilters({ ...filters, bedrooms: e.target.value })
            }
            className="border outline-none w-full text-black p-2 rounded"
            type="number"
            placeholder="Bedrooms"
          />
        </div>
        <div className="lg:w-2/12 ps-2 pt-4 lg:pt-0 w-1/2">
          <input
            className="border outline-none w-full text-black p-2 rounded"
            type="text"
            placeholder="Amenities"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} onBook={onBook} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
