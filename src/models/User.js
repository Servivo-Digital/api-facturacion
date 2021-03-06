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


userSchema.statics.encryptPassword = async (password) =>{

  let salt = bcrypt.genSaltSync(10);
  const passwordEncrpt = await bcrypt.hash(password,salt)
  return passwordEncrpt
  
}
userSchema.statics.comparePassword = async(password, receivedPassword) =>{

  return await bcrypt.compare(password, receivedPassword)

}

export default model('User',userSchema);
