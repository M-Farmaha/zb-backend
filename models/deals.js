import { Schema, model } from "mongoose";
import { handleSaveError, updateValidation } from "./hooks.js";

const dealSchema = new Schema(
  {
    url: {
      type: String,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    ticket: {
      type: Number,
    },
    yield : {
      type: Number,
    },
    days_left: {
      type: Number,
    },
    sold: {
      type: Number,
    }
  },
  { versionKey: false }
);

dealSchema.pre("findOneAndUpdate", updateValidation);
dealSchema.post("save", handleSaveError);
dealSchema.post("findOneAndUpdate", handleSaveError);

const Deals = model("deal", dealSchema);

export default Deals;
