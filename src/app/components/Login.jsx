"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { OpenEyes, CloseEyes } from "./common/icons";
import Link from "next/link";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    showPassword: false,
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
    if (signUpInfo) {
      setLocalSignUpInfo({ ...signUpInfo });
    }
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

  const showPass = () => {
    setLoginInfo((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat bg-[url('/assets/images/home-bg.avif')]">
      <ToastContainer />
      <h1 className="text-2xl font-semibold text-white mb-4">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 backdrop-blur-2xl mx-auto max-w-[400px] border p-5 rounded-lg"
      >
        <input
          value={loginInfo.email}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, email: e.target.value })
          }
          className="w-full p-2 border outline-none rounded mb-2 text-black"
          type="email"
          placeholder="Email"
        />
        <div className="relative">
          <div
            onClick={showPass}
            className="absolute right-[2%] top-1/2 text-gray-500 -translate-y-1/2 pb-2 cursor-pointer"
          >
            {loginInfo.showPassword ? <OpenEyes /> : <CloseEyes />}
          </div>
          <input
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            className="w-full ps-2 pe-7 py-2 border outline-none rounded mb-2 text-black"
            type={loginInfo.showPassword ? "text" : "password"}
            placeholder="Password"
          />
        </div>

        <button
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
