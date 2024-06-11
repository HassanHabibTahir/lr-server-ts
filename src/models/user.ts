import { Schema, model, Mongoose } from "mongoose";
const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: [true, "Please Enter Your Email!"],
      unique: true,
    }, 
  },
  {
    timestamps: true,
  }
);
export const User = model("User", userSchema);
