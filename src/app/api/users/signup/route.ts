import {connect} from '@/dbConfig/dbConfig';
import User from "@/models/userModel.js";
import { NextRequest,NextResponse } from 'next/server';
import bcryptjs from "bcryptjs";
import { sendEmail } from '@/helpers/mail';

connect();

export async function POST(request:NextRequest)
{
    try {

        const requestBody = await request.json();
        const {username,email,password} = requestBody;

        console.log(requestBody.username);

        //checking if user already exists

        const user = await User.findOne({email});

        if(user)
        {
            console.log("USER ALREADY EXISTS : 400");
            return NextResponse.json({error:"User already exists"} , {status:400});
        }

        //hashing password

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        //create a new user

        const newUser = new User({
            username,
            email,
            password : hashedPassword
        })

        const savedUser = await newUser.save();
        console.log(savedUser);

        await sendEmail({email , emailType : "VERIFY", userId : savedUser._id});

        return NextResponse.json({
            message : "User created",
            success : true,
            savedUser  
        })
    }
    
    catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});
    }
}
