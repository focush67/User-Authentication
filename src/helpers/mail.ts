import nodemailer from "nodemailer";
import User from "@/models/userModel";

import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 36000000,
      });
    } 
    
    else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 36000000,
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
        html : `<p>Click <a href="${process.env.DOMAIN}/verifyEmail?token=${hashedToken}"> here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset you password"}
        or paste this link on your browser
        <br/>${process.env.DOMAIN}/verifyemail?token=${hashedToken}
        </p>`
    }

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;

  } catch (error: any) {
    throw new Error(error.message);
  }
};
