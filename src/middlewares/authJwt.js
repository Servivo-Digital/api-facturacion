import jwt from "jsonwebtoken"
import config from "../config"
import User from "../models/User"


export const verifytoken = async (req,res,next)=>{
    
    const token = req.headers["x-access-token"]
    
    if(!token) return res.status(403).json({message: "no token provided"})
    
    const decoded = jwt.verify(token,config.SECRET)

    const user = await User.findById(decoded.id)

    if (!user) return res.status(404).json({message: "you don't have the necessary permissions"})

    next()
}