import mongoose from "mongoose";

const connectDB =async ()=> {
    try{
    const connected = await mongoose.connect(MONGODB_URL)
console.log("Connected successfully")   
}catch(err){
        console.log("Error", error)
    }
}
export default connectDB;