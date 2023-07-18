import { NextResponse, NextRequest} from "next/server";
import { sendEmail } from "@/helpers/mail";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function POST(request : NextRequest)
{
    try {

      const requestBody = await request.json();
      const {email} = requestBody;
      const user = await User.findOne({email});

      if(!user)
      {
        return NextResponse.json({
            message : "User doesnt exist",
            status : 404
        });
      }

      await sendEmail({email,emailType:"RESET",userId:user._id});

      return NextResponse.json({
        message : "Request processed successfully",
        status : 200
      });

    } catch (error:any) {
        return NextResponse.json({
            message : "Some error occured",
            status : 500
        });
    }
}