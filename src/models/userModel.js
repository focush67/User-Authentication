import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username:{
        type:String,

        required:[true,"Please provide valid username"],

        unique:true
    },

    email:{
        type:String,

        required:[true,"Please provide valid email"],

        unique:true
    },

    password:{
        type:String,

        required:[true,"Enter passoword"]
    },

    isVerified:{
        type:Boolean,

        default:false,
    },

    isAdmin:{
        type:Boolean,

        default:false,
    },

    forgotPasswordToken : String,
    forgotPasswordTokenExpiry : Date,

    verifyToken : String,
    verifyTokenExpiry : Date 
})

const User = mongoose.models.users || mongoose.model("users" , userSchema);

export default User;