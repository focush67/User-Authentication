import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken';

export const extractDataFromToken = (request : NextRequest) => {

    try {

        const encodedToken = request.cookies.get('token')?.value || "";

        const decToken:any = jwt.verify(encodedToken,process.env.TOKEN_SECRET!);

        return decToken.id;
    } 
    
    catch (error:any) 
    {
        throw new Error(error.message);
    }

}