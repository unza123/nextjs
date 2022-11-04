import { SignalCellularConnectedNoInternet0Bar } from "@mui/icons-material";
import user from "../../../models/userModel";
// import Register from "../../register";
import bcrypt from 'bcrypt';
import connectDB from "../../../utils/connecDB";
import valid from "../../../utils/valid";

connectDB() 
export default async (req, res)=> {
    switch(req.method){
        case "POST":
            await register(req, res)
            break;
    }
}
const register = async (req, res)=> {
    try{
        const {name, email, password, cf_password} = req.body;
        
        const errMsg = valid(name, email, password, cf_password);
        if(errMsg) return res.status(400).json({err: errMsg})
        const passwordHash = await bcrypt.hash(password, 12)
        const newUser = new user({ name, email, password: passwordHash, cf_password})
        await newUser.save()
        // console.log(newUser);
        res.json({msg: "Register Success!"})
    }catch(err){
      console.log("Error from register", err)
    }
}