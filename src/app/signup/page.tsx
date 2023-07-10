"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const SignUpPage = () => {

  const [buttonDisabled,setButtonDisabled] = useState(true);
  const[load,setLoad] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    username:"",
    email: "",
    password: "",
  });

  const onSignUp = async () => {

    try {
      
      setLoad(true);

      const response = await axios.post("/api/users/signup",user);

      console.log("SIGNUP SUCCESSFULL",response.data);

      router.push('/login');

    } 
    
    catch (error:any) 
    {
      console.log("SIGNUP FAILED",error.message);
      toast.error(error.message);
    }

    finally{

      setLoad(false);

    }



  };

  useEffect(() => {

    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0 )
    {
      setButtonDisabled(false);
    }

    else
    {
      setButtonDisabled(true);
    }

  },[user])

  return (
    <span className="bg-gray-300 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 shadow-sm">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center font-semibold">{load ? "Processing" : "Sign Up"}</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            onChange={(e) => setUser({...user , username : e.target.value})}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={(e) => setUser({...user , email : e.target.value})}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={(e) => setUser({...user , password : e.target.value})}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          {!buttonDisabled && <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-700 text-white hover:bg-green-600 focus:outline-none my-1"
            onClick={onSignUp}
          >
            Create Account
          </button>}

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
          .
        </div>
      </div>
    </span>
  );
};

export default SignUpPage;
