/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function reset() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/users/reset-password", { email });

      if (response) {
        console.log("check email");
        window.alert("check email");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="p-8 shadow-md rounded-md w-[30rem]">
        <h2 className="text-2xl font-semibold mb-6">Enter email</h2>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              placeholder="Enter new email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Send email
          </button>
        </form>
      </div>
    </div>
  );
}
