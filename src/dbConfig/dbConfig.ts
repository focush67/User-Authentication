import mongoose from "mongoose";

export async function connect()
{
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected' , () => {
            console.log("MONGO DB CONNECTED SUCCESSFULLY");
        })

        connection.on('error' , (error) => {
            console.log("MONGO DB CONNECTION FAILED",error);

            process.exit();
        })
    } 
    
    catch (error) {
        console.log("Something went wrong");
        console.log(error);    
    }
}