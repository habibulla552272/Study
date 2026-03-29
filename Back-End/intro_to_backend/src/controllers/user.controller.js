 import {User} from "../models/user.model.js";

 const registerUser=async(req,res)=>{
    try{
        const {username,password,email}=req.body;

        if(!username || !password || !email){
            return res.status(400).json({message:"All fields are Important or Required"});
        }

        //if user exists 
        const existingUser= await User.findOne({email:email.toLowerCase()});

        if(existingUser){
            return res.status(409).json({message:"User  already Exists !"});
        }
         
        const user=await User.create({
            username,
            password,
            email:email.toLowerCase(),
            loggedIn:false,
        });
      res.status(201).json({
        message:"user Registered Successfully" ,
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
      })
    }catch(error){  
      res.status(500).json({message:"Failed to Register User",error:error.message});
    }
 }


 const userLogin=async(req,res)=>{
    try{


        //check if user exists
    
        const {email,password}=req.body;
        
        const user=await User.findOne({
            email:email.toLowerCase()
        });
    
        if(!user){
            return res.status(404).json({message:"User Not Found"});
    
        }
        const isMatch=await user.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({
                message:"Invalid Credentials"
            });
        };
        res.status(200).json({
            message:"Login Successfuly",
            user:{
                id:user._id,
                username:user.username,
                email:user.email
            }
        })
    }catch(error){
        res.status(500).json({
            message:"Failed to Login User",
            error:error.message 
        })

    }
 }
 export {
    registerUser,
    userLogin
 }