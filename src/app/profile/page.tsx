'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
const LandingPage = () => {

  const router = useRouter();
  const [data,setData] = useState("nothing");
  const onLogout = async () => {
    try {
      
      await axios.get('/api/users/logout');
      router.push('/login');

    } catch (error:any) {
      console.log(error.message);
    }

  }

  const getUserDetails = async () => {
  try {
    const response = await axios.get('/api/users/person');
    console.log(response.data);
    setData(response.data.data._id);
  } catch (error) {
    console.error('Error fetching user details:', error);
    
  }
};


  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className='absolute top-0 right-0 m-4'>
        <Button variant='contained' onClick={onLogout}>Logout</Button>
      </div>
      <h1 className="text-5xl font-bold mb-8">Welcome to Our Website</h1>
      <p className="text-xl mb-12">
        {data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}
      </p>
      <a
        href="/products"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-xl font-semibold transition duration-300 ease-in-out"
      >
        Explore Products
      </a>

      <div className='absolute top-0 left-0 m-4'>
        <Button variant='contained' onClick={getUserDetails}>Details</Button>
      </div>
    </div>
  );
};

export default LandingPage;
