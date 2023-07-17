"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
export default function verifyEmailPage() {
  const [token, setToken] = useState("");
  const [verify, setVerify] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyEmail", { token });

      setVerify(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];

    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <div className="bg-gray-100 p-8 rounded shadow-lg justify-center">
        <h2 className="text-2xl font-bold mb-4 justify-center">Email Verification</h2>
        <h4 className="p-2 text-black bg-gray-200">
          {token ? `${token}` : "No Token Yet , visit link"}
        </h4>
        {verify && (
          <div>
            <h2 className="flex flex-row justify-center">Verified</h2>
            <div className="flex flex-row justify-center">
                <Link
              href={"/login"}
              className="dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-green-700 text-white focus:outline-none dark:focus:ring-gray-800 justify-center"
            >
              Log in
            </Link>
            </div>
          </div>
        )}

        {error && (
          <div>
            <h2 className="text-red-600 bg-yellow-4000">Error</h2>
          </div>
        )}
      </div>
    </div>
  );
}
