"use client";
import React, { useState } from "react";
import PropertyList from "../components/PropertyList";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import { properties } from "../components/common/helper";
const Home = () => {
  // state for bookings
  const [bookings, setBookings] = useState([]);

  const BOOK_HANDLER = (property) => {               
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

  // handle increase
  const QUANTITY_INCREASE_HANDLER = (booking) => {
    setBookings((prevBookings) =>
      prevBookings.map((b) =>
        b.id === booking.id ? { ...b, quantity: b.quantity + 1 } : b
      )
    );
  };

  // handle decrease
  const QUANTITY_DECREASE_HANDLER = (booking) => {
    setBookings((prevBookings) =>
      prevBookings
        .map((b) =>
          b.id === booking.id ? { ...b, quantity: b.quantity - 1 } : b
        )
        .filter((b) => b.quantity > 0)
    );
  };

  // handle remove
  const REMOVE_HANDLER = (booking) => {
    setBookings((prevBookings) =>
      prevBookings.filter((b) => b.id !== booking.id)
    );
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto p-4 md:p-6">
        <PropertyList properties={properties} onBook={BOOK_HANDLER} />
        <div className="flex flex-wrap mt-10">
          <div className="w-full md:w-4/12 md:pe-3 md:mb-0 mb-5">
            <Cart
              bookings={bookings}
              onIncrease={QUANTITY_INCREASE_HANDLER}
              onDecrease={QUANTITY_DECREASE_HANDLER}
              onRemove={REMOVE_HANDLER}
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
    </div>
  );
};

export default Home;
