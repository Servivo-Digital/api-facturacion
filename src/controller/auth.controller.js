import jwt from "jsonwebtoken";
import User from "../models/User";
import config from "../config";

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

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, //24 horas
  });
  res.status(200).json({ token });
};

export const signIn = async (req, res) => {
  res.json("signIn");
};
