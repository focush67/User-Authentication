import { NextRequest,NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import User from "@/models/userModel";
 import { connect } from "@/dbConfig/dbConfig";

export const POST = async(request : NextRequest)=>
{
    try {
        
        const requestBody = await request.json();
        const {token,password} = requestBody;
        const salt = await bcryptjs.genSalt(10);

        const newHashedPassword = await bcryptjs.hash(password,salt);

        const user = await User.findOneAndUpdate({forgotPasswordToken:token , forgotPasswordTokenExpiry:{$gt:Date.now()}},{new : true});

        if(!user)
        {
            return NextResponse.json({
                message : "User not found",
                status : 404
            });
        }

        user.password = newHashedPassword;
        user.forgotPasswordToken = undefined;
        user.forgotPasswordTokenExpiry = undefined;

        await user.save();

        return NextResponse.json({
            message : "Password changed successfully",
            status : 200
        });

    } catch (error:any) {
        return NextResponse.json({
            message : "Some error occured",
            status : 500
        });
    }
}