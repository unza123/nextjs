import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }, 
    role:{
        type: String,
        default: 'user'
    },
    root:{
        type: Boolean,
        required: false
    },
    avatar:{
        type:String,
        default:'https://res.cloudinary.com/dm0q0d4tr/image/upload/v1666601168/sample.jpg'
    }
}, {
    timestamps: true
})
let UserModel = mongoose.models.user || mongoose.model('user', userSchema);
export default UserModel