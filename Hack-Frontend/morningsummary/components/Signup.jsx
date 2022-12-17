import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const HandleSubmit = () => {
    fetch("http://127.0.0.1:8000/signup", {
      method: "POST",
      body: JSON.stringify({
        username: Username,
        password: Password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded-xl shadow-2xl text-black w-full">
          <h3 className="text-teal-500 font-bold mb-0 text-3xl text-center">
            Sign Up
          </h3>
          <p className="text-center pb-20">Create an account to continue</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              HandleSubmit();
            }}
          >
            <label>Username</label>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <label>Password</label>
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button
              onSubmit={HandleSubmit}
              type="submit"
              className="w-full text-center py-3 rounded-xl bg-green-300 text-black hover:bg-green-500 focus:outline-none my-1"
            >
              Join
            </button>
          </form>
        </div>

        <div className="text-grey-dark mt-6">
          Already Have An Account? &nbsp;
          <Link
            className="no-underline border-b border-blue text-blue-500 text-center"
            href="http://localhost:3000/sign_in"
          >
            Log In Here!
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Signup;
