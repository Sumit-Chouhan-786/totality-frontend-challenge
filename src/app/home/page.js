"use client";
import React, { useState } from "react";
import PropertyList from "../components/PropertyList";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";

const Home = () => {
  const [properties] = useState([
    {
      id: 1,
      title: "Modern Apartment",
      location: "New York",
      bedrooms: "1 bed",
      price: 120,
      myImage: "/assets/images/modern-apartment.jpg",
    },
    {
      id: 2,
      title: "Beach House",
      location: "Thailand",
      bedrooms: "2 bed",
      price: 200,
      myImage: "/assets/images/near-beach.jpg",
    },
    {
      id: 3,
      title: "Near the City",
      location: "Goa",
      bedrooms: "3 bed",
      price: 250,
      myImage: "/assets/images/near-city.jpg",
    },
    {
      id: 4,
      title: "On the Hills",
      bedrooms: "4 bed",
      location: "Mumbai",
      price: 350,
      myImage: "/assets/images/on-hills.jpg",
    },
  ]);

  const [bookings, setBookings] = useState([]);

  const handleBook = (property) => {
    setBookings((prevBookings) => {
      const existingBooking = prevBookings.find((b) => b.id === property.id);
      if (existingBooking) {
        return prevBookings.map((b) =>
          b.id === property.id ? { ...b, quantity: b.quantity + 1 } : b
        );
      } else {
        return [...prevBookings, { ...property, quantity: 1 }];
      }
    });
  };

  const handleIncrease = (booking) => {
    setBookings((prevBookings) =>
      prevBookings.map((b) =>
        b.id === booking.id ? { ...b, quantity: b.quantity + 1 } : b
      )
    );
  };

  const handleDecrease = (booking) => {
    setBookings((prevBookings) =>
      prevBookings
        .map((b) =>
          b.id === booking.id ? { ...b, quantity: b.quantity - 1 } : b
        )
        .filter((b) => b.quantity > 0)
    );
  };

  const handleRemove = (booking) => {
    setBookings((prevBookings) =>
      prevBookings.filter((b) => b.id !== booking.id)
    );
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <PropertyList properties={properties} onBook={handleBook} />
        <div className="flex flex-wrap mt-10">
          <div className="w-full md:w-4/12 md:pe-3 md:mb-0 mb-5">
            <Cart
              bookings={bookings}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onRemove={handleRemove}
            />
          </div>
          <div className="w-full md:w-8/12 md:ps-2">
            <Checkout
              totalCost={bookings.reduce(
                (acc, booking) => acc + booking.price * booking.quantity,
                0
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
