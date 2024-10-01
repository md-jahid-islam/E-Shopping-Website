
import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SignIn = () => {
  // ============= Initial State Start here =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ============= Event Handlers =============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
    }
    if (!password) {
      setErrPassword("Create a password");
    }

    if (email && password) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. An email will be sent to ${email}`
      );
      setEmail("");
      setPassword("");
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`w-full h-screen flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      
      {/* Left-side content */}
      <div className="w-1/2 hidden lgl:inline-flex h-full">
        <div className={`w-[450px] h-full px-10 flex flex-col gap-6 justify-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-primeColor text-white'}`}>
          <Link to="/">
            <span className="text-2xl font-bold text-[#fff] mt-2">E-shop now</span>
          </Link>

          {/* Dark Mode Toggle */}
          <button onClick={toggleTheme} className="self-end bg-blue-500 text-white px-4 py-2 rounded-md">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">Stay signed in for more</h1>
            <p className="text-base">When you sign in, you are with us!</p>
          </div>
          
          {/* Features */}
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1"><BsCheckCircleFill /></span>
            <p className="text-base">
              <span className="font-semibold">Get started fast with E-Shop</span>
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1"><BsCheckCircleFill /></span>
            <p className="text-base">
              <span className="font-semibold">Access all E-Shop services</span>
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Sign-in Form */}
      <div className="w-full lgl:w-1/2 h-full">
        {successMsg ? (
          <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
            <p className="w-full px-4 py-10 text-green-500 font-medium">{successMsg}</p>
            <Link to="/signup">
              <button className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-semibold hover:bg-black hover:text-white duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll">
              <h1 className="underline font-semibold text-3xl mb-4">Login</h1>
              <div className="flex flex-col gap-3">
                {/* Email Input */}
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-gray-600">Email</p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 px-4 rounded-md border-gray-400"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  {errEmail && (
                    <p className="text-red-500 text-sm px-4">{errEmail}</p>
                  )}
                </div>

                {/* Password Input */}
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-gray-600">Password</p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 px-4 rounded-md border-gray-400"
                    type="password"
                    placeholder="Enter Your password"
                  />
                  {errPassword && (
                    <p className="text-red-500 text-sm px-4">{errPassword}</p>
                  )}
                </div>

                <button
                  onClick={handleSignUp}
                  className="bg-blue-500 hover:bg-blue-600 text-white w-full h-10 rounded-md mt-4"
                >
                  Sign In
                </button>
                <p className="text-sm text-center mt-2">
                  Don't have an Account?{" "}
                  <Link to="/signup">
                    <span className="text-blue-500 hover:underline">Sign up</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
