// components/Cart.js
import React from "react";

const Cart = ({ bookings, onIncrease, onDecrease, onRemove }) => {
  const totalCost = bookings.reduce(
    (acc, booking) => acc + booking.price * booking.quantity,
    0
  );

  return (
    <div className="p-4 h-full border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((booking, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{booking.title}</h3>
            <p>
              ${booking.price} x {booking.quantity}
            </p>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => onIncrease(booking)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                +
              </button>
              <button
                onClick={() => onDecrease(booking)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                -
              </button>
              <button
                onClick={() => onRemove(booking)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <div className="mt-4">
        <p className="text-xl font-bold">Total: ${totalCost}</p>
      </div>
    </div>
  );
};

export default Cart;
