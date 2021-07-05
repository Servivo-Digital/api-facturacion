import jwt from "jsonwebtoken";
import User from "../models/User";
import config from "../config";
import Role from '../models/Roles'

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  //validar que exitste
  const userFound = User.find({ email });

  console.log(userFound);

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if ( roles ){
    const foundRoles = await Role.find({name : {$in: roles}})
    newUser.roles = foundRoles.map( role => role._id)
  }else{
    const  role = await Role.findOne({name: "user"})
    newUser.roles = [role._id] 
  }

  const savedUser = await newUser.save();

  console.log(savedUser)

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, //24 horas
  });
  res.status(200).json({ token });
};



export const signIn = async (req, res) => {

    const {email,password} = req.body

    const userFound = User.findOne({ email });

    if(!userFound) return res.status(400).json("User not found")

    console.log(userFound)
    res.json('hey')
    

};
