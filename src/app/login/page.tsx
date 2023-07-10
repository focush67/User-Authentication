'use client';
import Link from "next/link";
import { useState,useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { toast } from "react-hot-toast";
export default function LoginPage() {

    const router = useRouter();
    const[user,setUser] = useState({
        username:"",
        email:"",
        password:""
    })

    const [load,setLoad] = useState(false);
    const [buttonDisabled,setButtonDisabled] = useState(false);


    const onLogin = async () => {
      
      try {

        setLoad(true);

        const response = await axios.post('/api/users/login',user);

        toast.success("Login successful");
        console.log(response.data);

        router.push("/profile");

      } 
      
      catch (error:any) 
      {
        toast.error(error.message);
        return NextResponse.json({error : "Login Failed"},{status:500})
      }

      finally{
        setLoad(false);
      }

    }

    useEffect(() => {

      if(user.email.length > 0 && user.password.length > 0)
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
          <h1 className="mb-8 text-3xl text-center font-semibold">{!load ? "Sign In" : "Processing"}</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="username"
            placeholder="username"
            onChange={(e) => setUser({...user , username:e.target.value})}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email*"
            required
            onChange={(e) => setUser({...user , email:e.target.value})}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password*"
            required
            onChange={(e) => setUser({...user , password:e.target.value})}
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-700 text-white hover:bg-green-600 focus:outline-none my-1"
            onClick={onLogin}
          >
            Log In
          </button>

        </div>

        <div className="text-grey-dark mt-6">
          Create an account?{" "}
          <Link
            className="no-underline border-b border-blue text-blue-500 hover:font-bold"
            href="/signup"
          >
            Sign Up
          </Link>
          .
        </div>
      </div>
    </span>
  );
}
