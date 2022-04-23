import React, { useState } from "react";
import { Link } from "react-router-dom";
import { callBackendApi } from "../../utils/common";
import { BiErrorCircle } from "react-icons/bi";
import Cookies from "js-cookie";

export default function Signup() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };

      const userRes = await callBackendApi({
        method: "post",
        url: "/auth/login",
        data: data,
      });
      const { userToken } = userRes.data.data;
      Cookies.set("usreToken", userToken);
    } catch (error) {
      console.log({ error });
      if (error.response) {
        error.response.status = 401
          ? setError("Invalid email or password")
          : setError(error.response.data.data);
      }
    }
  };

  return (
    <div className="w-screen h-screen text-white-100 bg-black-100 flex justify-center items-center flex-col z-50">
      <h3 className="mb-3 text-3xl font-bold">Sign In</h3>
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSignIn}
          className="bg-black-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" for="Email">
              Email
            </label>
            <input
              className="shadow bg-black-100 appearance-none rounded w-full py-2 px-3 text-white-100 leading-tight focus:outline-none focus:ring-2 focus:ring-astra-100"
              id="Email"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
                setError(null);
              }}
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white-200 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow bg-black-100 appearance-none rounded w-full py-2 px-3 text-white-100 leading-tight focus:outline-none focus:ring-2 focus:ring-astra-100"
              id="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setError(null);
              }}
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-astra-100 hover:bg-astra-200 text-white font-bold py-2 px-4 rounded focus:ring-2 focus:ring-astra-100 focus:ring-opacity-70"
              type="submit"
            >
              Sign In
            </button>
            <Link
              to="/forgot-password"
              className="inline-block align-baseline font-bold text-sm text-astra-100 hover:text-blue-800"
            >
              Forgot Password?
            </Link>
          </div>
          {error && (
            <div className="my-3 gap-2 flex flex-row justify-center items-center p-4 bg-red-400 rounded-md bg-opacity-10 text-red-400">
              <span>
                <BiErrorCircle />
              </span>
              {error}
            </div>
          )}
          <div className="m-3">
            Dont have and account?{" "}
            <Link
              to="/signup"
              className="font-bold text-sm text-astra-100 hover:text-blue-800"
            >
              Singup
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          Konten: Making Business Easy
        </p>
      </div>
    </div>
  );
}
