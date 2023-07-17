'use client';
import axios from "axios";
import Link from 'next/link';
import React,{useState,useEffect} from 'react';

export default function verifyEmailPage()
{
    const [token,setToken] = useState("");
    const [verify , setVerify] = useState(false);
    const [error,setError] = useState(false);

    const verifyUserEmail = async () => {

        try {
            
            await axios.post('/api/users/verifyEmail' , {token});

            setVerify(true);

        } catch (error:any) {
            
            setError(true);
            console.log(error.response.data);

        }

    }

    useEffect(()=>{

        const urlToken = window.location.search.split("=")[1];

        setToken(urlToken || "");

    },[]);

    useEffect(()=>{

        if(token.length > 0)
        {
            verifyUserEmail();
        }

    },[token])


    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl">Verify Email</h1>

            <h2 className="p-2 text-black bg-white">{token ? `${token}` : "No Token"}</h2>

            {
                verify && (
                    <div>
                        <h2>Email Verified</h2>
                        <Link href="/login" className="text-blue-800">
                            Login
                        </Link>
                    </div>
                )
            }

            {
                verify && (
                    <div>
                        <h2 className="text-red-600 bg-yellow-4000">Error</h2>
                        <Link href="/login" className="text-blue-800">
                            Login
                        </Link>
                    </div>
                )
            }

        </div>
    )
}
