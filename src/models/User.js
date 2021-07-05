import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      requiere: true,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


userSchema.static.encryptPassword = async(password) =>{

  const salt = bcrypt.genSalt(10)
  return await bcrypt.hash(password,salt)

}
userSchema.static.comparePassword = async(password, receivedPassword) =>{

  return await bcrypt.compare(password, receivedPassword)

}

export default model("User", userSchema);
