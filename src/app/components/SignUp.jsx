"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OpenEyes, CloseEyes } from "./common/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUp = () => {
  // use router for navigation
  const router = useRouter();

  // sign up info
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
    showPassword: false, 
  });

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // check if all fields are filled
    if (signUpInfo.name && signUpInfo.email && signUpInfo.password) {
      // if all fields are filled, show success toast
      toast.success("Sign Up Successfully");
      // save sign up info to local storage
      localStorage.setItem("signUpInfo", JSON.stringify(signUpInfo));
      // navigate to login page
      router.push("/login");
    } else {
      // if all fields are not filled, show error toast
      toast.error("Please fill the form");
    }
  };

  // function to toggle password visibility
  const showPass = () => {
    setSignUpInfo((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat bg-[url('/assets/images/home-bg.avif')]">
      <ToastContainer />
      <h2 className="text-2xl font-semibold text-white mb-4">Sign Up</h2>
      {/* sign up form */}
      <form className="flex flex-col gap-3 backdrop-blur-2xl mx-auto max-w-[400px] border p-5 rounded-lg">
        {/* all input fields for get user info */}
        <input
          className="w-full p-2 border outline-none rounded mb-2 text-black"
          type="text"
          placeholder="Name"
          value={signUpInfo.name}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, name: e.target.value })
          }
        />
        <input
          className="w-full p-2 border outline-none rounded mb-2 text-black"
          type="email"
          placeholder="Email"
          value={signUpInfo.email}
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, email: e.target.value })
          }
        />
        <div className="relative">
          <div
            onClick={showPass}
            className="absolute right-[2%] top-1/2 text-gray-500 -translate-y-1/2 pb-2 cursor-pointer"
          >
            {signUpInfo.showPassword ? <OpenEyes /> : <CloseEyes />}
          </div>
          <input
            className="w-full ps-2 pe-7 py-2 border outline-none rounded mb-2 text-black"
            type={signUpInfo.showPassword ? "text" : "password"} // dynamically change the input type
            placeholder="Password"
            value={signUpInfo.password}
            onChange={(e) =>
              setSignUpInfo({ ...signUpInfo, password: e.target.value })
            }
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full p-2 transition-all duration-300 hover:bg-red-500 text-white bg-blue-500 rounded mb-2"
        >
          Sign Up
        </button>
        <p className="text-white">
          Already have an account?{" "}
          <Link
            href="/login"
            className="underline cursor-pointer text-blue-500"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
