import nodemailer from "nodemailer";
import User from "@/models/userModel";

import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export const sendEmail = async ({ email, emailType, userId }: {email:string,emailType:string,userId:string}) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 24*60*60,
      });
    } 
    
    else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 24 * 60 * 60,
      });
    }

    var transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "85554cdad15035",
        pass: "2eb3a435285c26",
      },
    });

    const mailOptions = {
        from : "sparshv70@bbdu.ac.in",
        to : email,
        subject : emailType === "VERIFY" ? "Verify your email" : "Reset your password",
        html : `<p>Click <a href="${process.env.DOMAIN}/${emailType === "VERIFY" ? "verifyEmail" : "verify-password"}?token=${hashedToken}"> here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset you password"}
        or paste this link on your browser
        <br/>${process.env.DOMAIN}/"${emailType === "VERIFY" ? "verifyEmail" : "verify-password"}"?token=${hashedToken}
        </p>`
    }

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;

  } catch (error: any) {
    throw new Error(error.message);
  }
};

// export const resetPassword = async({
//   token,
//   newPassword,
// }:any) => {

//   try {
    
//     const user = await User.findOne({
//       forgotPasswordToken : token,
//       forgotPasswordTokenExpiry : {$gt : Date.now()},
//     })

//     if(!user)
//     {
//       throw new Error("INVALID OR EXPIRED TOKEN");
//     }

//     const hashedPassword = await bcryptjs.hash(newPassword,10);

//     user.password = hashedPassword;
//     user.forgotPasswordToken = undefined;
//     user.forgotPasswordTokenExpiry = undefined;

//     await user.save();

//     return NextResponse.json({
//       message : "Reset successful",
//       status : 200
//     });


//   } catch (error:any) {
//     throw new Error(error.message);
//   }
// }