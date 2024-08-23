"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && email && password){
      toast.success("Sign Up Successfully");
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      router.push("/login");
    }else{
      toast.error("Please fill the form");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <ToastContainer />
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form className="flex flex-col gap-4 mx-auto max-w-[400px] border p-4 rounded-lg">
        <input
          className="w-full p-2 border outline-none rounded mb-2 text-black"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full p-2 border outline-none rounded mb-2 text-black"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 border outline-none rounded mb-2 text-black"
        type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full p-2 transition-all duration-300  hover:bg-red-500 text-white bg-blue-500 rounded mb-2"
         >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
