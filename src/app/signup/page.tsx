'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../Home/Header/page";
import Footer from "../Home/Footer/page";
import { CircularProgress, Alert } from "@mui/material";

const SignUpPage = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [load, setLoad] = useState(false);
  const [userAlert, setUserAlert] = useState(false);
  const router = useRouter();
  const [dataAlert, setDataAlert] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignUp = async () => {
    try {
      setLoad(true);
      const response = await axios.post("/api/users/signup", user);
      const status = response.status;

      if (status === 400) {
        setUserAlert(true);
        setTimeout(() => {
          setUserAlert(false);
        }, 5000);
        setUser({ ...user, email: "", password: "" }); // Clear input fields
      } 
      
      else if (status === 410) {
        setDataAlert(true);
        setTimeout(() => {
          setDataAlert(false);
        }, 3000);
      } else {
        console.log("SIGNUP SUCCESSFUL", response.data);
        router.push("/login");
      }
    } catch (error:any) {
      console.log("SIGNUP FAILED", error.message);
    } finally {
      setTimeout(() => {
        setLoad(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length >= 8 && 
      user.username.length >= 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <Header />
      <span className="bg-gray-300 min-h-[85vh] flex flex-col">
        {userAlert && <Alert severity="warning">User already exists</Alert>}
        {dataAlert && (
          <Alert severity="error" variant="filled">
            Check Inputs
          </Alert>
        )}
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 shadow-sm">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center font-semibold">Sign Up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              value={user.username}
              onChange={(e) =>
                setUser({ ...user, username: e.target.value })
              }
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            {!buttonDisabled && (
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-700 text-white hover:bg-green-600 focus:outline-none my-1"
                onClick={onSignUp}
              >
                Create Account
              </button>
            )}
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the{" "}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="text-grey-dark mt-6">
            Already have an account?{" "}
            <Link
              className="no-underline border-b border-blue text-blue-500 hover:font-bold"
              href="/login"
            >
              Log in
            </Link>
          </div>
          {load && (
            <div className="flex justify-center">
              <CircularProgress />
            </div>
          )}
        </div>
      </span>
      <Footer />
    </>
  );
};

export default SignUpPage;
