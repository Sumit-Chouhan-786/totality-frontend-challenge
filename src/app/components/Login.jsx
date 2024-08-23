"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [localEmail, setLocalEmail] = useState("");
    const [localPassword, setLocalPassword] = useState("");
    const router = useRouter();
    useEffect(() => {
        setLocalEmail(localStorage.getItem("email"));
        setLocalPassword(localStorage.getItem("password"));
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === localEmail && password === localPassword){
            toast.success("Login Successfully");
            router.push("/home");
        }else{
            toast.error("Invalid Email or Password");
        }
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <ToastContainer />
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form className="flex flex-col gap-4 mx-auto max-w-[400px] border p-4 rounded-lg" >
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border outline-none rounded mb-2 text-black" type="email" placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border outline-none rounded mb-2 text-black" type="password" placeholder="Password" />
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded-lg" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
