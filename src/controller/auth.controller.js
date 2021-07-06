import jwt from "jsonwebtoken";
import User from "../models/User";
import config from "../config";
import Role from "../models/Roles";
import { mailValidation } from "../libs/UserFound";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const mailStatus = await mailValidation(email);

  if (mailStatus === "Email not validate") {
    res.status(400).json({ message: "email not validate" });
  } else {
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();

    console.log(savedUser);

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400, //24 horas
    });

    res.status(200).json({ token });
  }
};

export const signIn = async (req, res) => {

  const {email, password } = req.body;
  const mailStatus = await mailValidation(email);

  if (mailStatus === "Email not validate") {
    res.status(400).json({ message: "email not validate" });
  }else if (!mailStatus){
    res.status(404).json({ message: "User not found " });
  }
  const UserCompleted = await User.findOne({email}).populate("roles");
  
  const matchPassword = await User.comparePassword(password, UserCompleted.password)
  
  if(!matchPassword){
    return res.status(401).json({ message: "invalid Password " });
  }

  const token = jwt.sign({ id: UserCompleted._id }, config.SECRET, {
    expiresIn: 86400, //24 horas
  });
  res.status(200).json({ token });
};
