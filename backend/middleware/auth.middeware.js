// import jwt from 'jsonwebtoken';
// import User from '../models/userModel.js';

// export const Auth =async(req,res,next)=>{
// 	const accessToken=req.cookies.accessToken;
// 	if(!accessToken){
// 		return res.status(404).json({message:"No access token found"})
// 	};
// 	try{
// 		const ded=jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
// 		const user= await User.findById(ded.userId).select("-password");
// if(!user){
// 	return res.status(404).json({message:"user not found"})
// }
// req.user=user;
// next();

// 	}catch(error){
// 		return res.status(404).json({message:"not authorized"})
// 	}

// }


// export const admin= async(req,res,next)=>{
// 	if(req.user&& req.user.role==='admin'){
// 		next();
// 	}
// }




import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const Auth = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({
      message: "No access token found",
    });
  }

  try {
    const decoded = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Not authorized",
    });
  }
};

export const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }

  return res.status(403).json({
    message: "Admin access required",
  });
};