import mongoose from "mongoose";
import { Schema } from "mongoose";

const childProtectionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
});

const ChildProtection = mongoose.model(
  "childProtection",
  childProtectionSchema
);

export default ChildProtection;
