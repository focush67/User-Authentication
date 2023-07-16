import { extractDataFromToken } from "@/helpers/extractDataFromToken";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";

import User from "@/models/userModel";
connect();

export async function GET(request : NextRequest)
{
    try {
        
        const userId = await extractDataFromToken(request);
        const user = await User.findOne({_id : userId}).select("-password -isAdmin -isVerified");

        return NextResponse.json({
            message:"User found",
            data:user
        })

    } 
    
    catch (error:any) {

        return NextResponse.json({error:error.message},{status:400});

    }
}