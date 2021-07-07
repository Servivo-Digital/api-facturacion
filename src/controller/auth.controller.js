import jwt from "jsonwebtoken";
import User from "../models/User";
import config from "../config";
import Role from "../models/Roles";
import {
  isEmail,
  isRegistered,
  consoleMessage,
  uniqueUsername,
} from "../libs/UserFound";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const mailValid = await isEmail(email);

  if (!mailValid) {
    res.status(400).json({
      message:
        "the registration failed, verifies your information and tries again",
    });
    return;
  } else {
    const accountCreated = await isRegistered(email);
    if (accountCreated) {
      res
        .status(200)
        .json({ message: "this email is already associated with an account" });
      consoleMessage("accountCreated", "user already has an account");
      return;
    } else {
      const uniqueUser = await uniqueUsername(username);

      if (uniqueUser) {
        res
          .status(400)
          .json({ message: "user already exists please change it" });
        consoleMessage("accountCreated", "username already has an account");
      } else {
        consoleMessage("Sign In", "user being registered");
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
    }
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const mail = await isRegistered(email);

  if (mail === undefined) {
    res.status(400).json({
      message: "the login failed, verifies your information and tries again",
    });
    consoleMessage("SignIn", "bad mail");
  } else {
    if (!mail) {
      res
        .status(400)
        .json({ message: "this email not already associated with an account" });
      consoleMessage("notAccountCreated", "user not already has an account");
    } else {
      const UserCompleted = await User.findOne({ email }).populate("roles");

      const matchPassword = await User.comparePassword(
        password,
        UserCompleted.password
      );

      if (!matchPassword) {
        return res.status(401).json({ message: "invalid Password " });
      }

      const token = jwt.sign({ id: UserCompleted._id }, config.SECRET, {
        expiresIn: 86400, //24 horas
      });
      consoleMessage("SignIn", mail);

      res.status(200).json({
         User :[{
           "id":UserCompleted._id,
           "username":UserCompleted.username,
           "email":UserCompleted.email,
           "roles":UserCompleted.roles,
           token,
         }],
        });
    }
  }
};
