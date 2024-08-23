// components/Checkout.js
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Checkout = ({ totalCost }) => {
  const paymentSuccess = () => toast("Payment Successful");
  const fillInFields = () => toast("Please fill in all fields");
  const invalidPhone = () => toast("Please enter a valid phone number");
  const invalidCard = () => toast("Please enter a valid card number");
  const invalidExpiry = () => toast("Please enter a valid expiry date");
  const invalidCVV = () => toast("Please enter a valid CVV");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const CHECKOUT_HANDLER = () => {
    if (contactInfo.phone.length < 10) {
      invalidPhone();
      return;
    }
    if (paymentDetails.cardNumber.length < 16) {
      invalidCard();
      return;
    }
    if (  
      paymentDetails.expiry.length < 5 ||
      !paymentDetails.expiry.includes("/")
    ) {
      invalidExpiry();
      return;
    }
    if (paymentDetails.cvv.length < 3) {
      invalidCVV();
      return;
    }
    if (
      contactInfo.name &&
      contactInfo.email &&
      contactInfo.phone &&
      paymentDetails.cardNumber &&
      paymentDetails.expiry &&
      paymentDetails.cvv
    ) {
      paymentSuccess();
      setContactInfo({
        name: "",
        email: "",
        phone: "",
      });
      setPaymentDetails({
        cardNumber: "",
        expiry: "",
        cvv: "",
      });
    } else {
      fillInFields();
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <ToastContainer position="bottom-right" />
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Contact Information</h3>
        <input
          type="text"
          placeholder="Name"
          value={contactInfo.name}
          onChange={(e) =>
            setContactInfo({ ...contactInfo, name: e.target.value })
          }
          className="w-full p-2 border rounded mb-2 text-black"
        />
        <input
          type="email"
          placeholder="Email"
          value={contactInfo.email}
          onChange={(e) =>
            setContactInfo({ ...contactInfo, email: e.target.value })
          }
          className="w-full p-2 border rounded mb-2 text-black"
        />
        <input
          type="tel"
          placeholder="Phone"
          maxLength={12}
          value={contactInfo.phone}
          onChange={(e) =>
            setContactInfo({ ...contactInfo, phone: e.target.value })
          }
          className="w-full p-2 border rounded mb-2 text-black"
        />
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Payment Details</h3>
        <input
          type="text"
          placeholder="Card Number"
          maxLength={16}
          value={paymentDetails.cardNumber}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })
          }
          className="w-full p-2 border rounded mb-2 text-black"
        />
        <input
          type="text"
          placeholder="24/07"
          maxLength={5}
          value={paymentDetails.expiry}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, expiry: e.target.value })
          }
          className="w-full p-2 border rounded mb-2 text-black"
        />
        <input
          type="text"
          placeholder="CVV"
          maxLength={3}
          value={paymentDetails.cvv}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, cvv: e.target.value })
          }
          className="w-full p-2 border rounded mb-2 text-black"
        />
      </div>
      <button
        onClick={CHECKOUT_HANDLER}
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Pay ${totalCost}
      </button>
    </div>
  );
};

export default Checkout;
