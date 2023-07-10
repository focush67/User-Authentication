import {connect} from '@/dbConfig/dbConfig';
import User from "@/models/userModel.js";
import { NextRequest,NextResponse } from 'next/server';
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
connect();

export async function POST(request : NextRequest)
{
    try {
        
        const requestBody = await request.json();
        const {email,password} = requestBody;
        console.log(requestBody);

        //checking if user exist of not
        const foundUser = await User.findOne({email});

        if(!foundUser)
        {
            return NextResponse.json({error : "User doesn't exist"},{status:500})
        }

        const validPassword = await bcryptjs.compare(password , foundUser.password);

        if(!validPassword)
        {
            return NextResponse.json({error : "Invalid Password"},{status:400})
        }

        //create token data

        const tokenData = {
            id : foundUser._id,
            email : foundUser.email
        }

        //create token

        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET! , {expiresIn:"1h"})

        const response = NextResponse.json({
            message : "Login successful",
            success : true,
        })

        response.cookies.set("token",token,{httpOnly : true})

        return response;
    } 
    
    catch (error:any) 
    {
        alert("error");
        return NextResponse.json({error : error.message},{status:500});    
    }
}