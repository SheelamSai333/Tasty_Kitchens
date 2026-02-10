// import User from "../model/User";
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'


// export const Signup = async (req,res)=>{
//     const {username,email,password} = req.body;
//     try{
//         if(!username || !email || !password){
//             return res.status(400).json({
//                 message: "All feilds required"
//             })
//         }
//         const userExist = await User.findOne({email})
//         if(userExist){
//             return res.status(400).json({message:"User Already Exist"})
//         } 
//         const hashedPassword = bcrypt.hash(password,10)
//         const user = await User.create({
//             username,
//             email,
//             password:hashedPassword

//         })
//         return res.status(200).json({message:"User Created Successfuly",user})
//     }
//     catch(e){
//         res.status(500).json({
//             message: e.message
//         })
//     }
// }

// export const Signin =async (req,res)=>{
//     const {email,password} = req.body;
//     const user = await User.findOne({email});
//     if(!user){
//         return res.status(400).json({
//             message:"User Not Found"
//         })
//     }
//     const comparePassword = await bcrypt.compare(password,user.password)
//     if(!comparePassword){
//         return res.status(400).json({message:"Invalid Password"})
//     }
//     const payload = {name:user.name, email: user.email}
//     const jwtToken = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1h"})
//     return res.status(200).json(
//         {message:"Login Successfull",
//         user,
//         jwt_token:jwtToken
//         })
// }

