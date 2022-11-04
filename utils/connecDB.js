import mongoose from "mongoose";

const connectDB =async ()=> {
    try{
    const connected = await mongoose.connect(process.env.MONGODB_URL)
console.log("Connected successfully")   
}catch(err){
        console.log("Error", err)
    }
}
export default connectDB;