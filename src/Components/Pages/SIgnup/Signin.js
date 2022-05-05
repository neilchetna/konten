import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { UserContext } from "../../Context/UserState";
import Spinner from "./Spinner";

export default function Signup() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { userSingIn, authError, setAuthError, checkUserToken, reqLoading } =
    useContext(UserContext);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    await userSingIn(data);
    checkUserToken();
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
              required={true}
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
                setAuthError(null);
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
              required={true}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setAuthError(null);
              }}
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="flex w-20 row justify-center items-center bg-astra-100 hover:bg-astra-200 text-white font-bold py-2 px-2 rounded focus:ring-2 focus:ring-astra-100 focus:ring-opacity-70"
              type="submit"
            >
              {reqLoading ? <Spinner /> : <span>Sign In</span>}
            </button>
            <Link
              to="/forgot-password"
              className="inline-block align-baseline font-bold text-sm text-astra-100 hover:text-blue-800"
            >
              Forgot Password?
            </Link>
          </div>
          {authError && (
            <div className="my-3 gap-2 flex flex-row justify-center items-center p-4 bg-red-400 rounded-md bg-opacity-10 text-red-400">
              <span>
                <BiErrorCircle />
              </span>
              {authError}
            </div>
          )}
          <div className="m-3">
            Dont have an account?{" "}
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
