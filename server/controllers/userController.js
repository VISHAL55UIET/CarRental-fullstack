import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Car from "../models/Car.js";
  
const generateToken = (userId)=>{
   const payload = userId;
   return jwt.sign(payload,process.env.JWT_SECRET)
}


export const registerUser = async(req,res)=>{

   try {
    const {name,email,password}  =  req.body
    if(!name || !email || !password || password.length<8){
        return res.json({success : false,message:'fill all the fields'})
    }
    const  userExists = await User.findOne({email})
    if(userExists){
        return res.json({success : false,message:'user all ready exit'}) 
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const  user =  await User.create({name,email,password:hashedPassword})
    const token = generateToken(user._id.toString())
    res.json({success:true,token})
   } catch (error) {
      console.log(error.message);
      res.json({success:false,message: error.message})
   }
}

// login user
 export const loginUser = async(req,res)=>{
       try {
          const {email,password}  =  req.body
          const user = await User.findOne({email})
          if(!user){
            return res.json({success:false,message:"User not found"})
          }
          const isMatch = await bcrypt.compare(password,user.password)
          if(!isMatch){
               return res.json({success:false,message:"Invalid Credentials"})
          }
    const token = generateToken(user._id.toString())
    res.json({success:true,token})

       } catch (error) {
        console.log(error.message);
        res.json({success:false,message: error.message})
       }
 }

    // get iuser dtat using tooken
export const getUserData = async (req, res) => {
  try {
    const userId = req.user._id || req.user; // handles both object or raw ID

    const user = await User.findById(userId).select("-password"); // ✅ get full user document

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user }); // ✅ returns full user (name, email, image, etc.)
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};


  export const getCars  = async(req,res)=>{
         try {
          const cars = await Car.find({isAvaliable:true})
         res.json({success:true,cars})    
        } catch (error) {
         console.log(error.message);
        res.json({success:false,message: error.message})    
        }
   }








