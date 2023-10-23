import { Schema, model } from "mongoose";
import { handleSaveError, updateValidation } from "./hooks.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for user"],
    },

    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },

    token: String,
  },
  { versionKey: false }
);

userSchema.pre("findOneAndUpdate", updateValidation);
userSchema.post("save", handleSaveError);
userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;
