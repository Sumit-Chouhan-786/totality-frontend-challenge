"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [localSignUpInfo, setLocalSignUpInfo] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  useEffect(() => {
    const signUpInfo = JSON.parse(localStorage.getItem("signUpInfo"));
    setLocalSignUpInfo({ ...signUpInfo });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      loginInfo.email === localSignUpInfo.email &&
      loginInfo.password === localSignUpInfo.password
    ) {
      toast.success("Login Successfully");
      router.push("/home");
    } else {
      toast.error("Invalid Email or Password");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat bg-[url('/assets/images/home-bg.avif')]">
      <ToastContainer />
      <h1 className="text-2xl font-semibold text-white mb-4">Login</h1>
      <form className="flex flex-col gap-3 backdrop-blur-2xl mx-auto max-w-[400px] border p-5 rounded-lg">
        <input
          value={loginInfo.email}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, email: e.target.value })
          }
          className="w-full p-2 border outline-none rounded mb-2 text-black"
          type="email"
          placeholder="Email"
        />
        <input
          value={loginInfo.password}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
          className="w-full p-2 border outline-none rounded mb-2 text-black"
          type="password"
          placeholder="Password"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-red-500 transition-all duration-300 text-white p-2 rounded-lg"
          type="submit"
        >
          Login
        </button>
        <p className="text-white">
            Don&apos;t have an account?{" "}
          <Link href="/" className="underline cursor-pointer text-blue-500">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
