import mongoose from "mongoose";
import { Schema } from "mongoose";

const SchoolSchema = new Schema({
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

const Schools = mongoose.model("school", SchoolSchema);

export default Schools;
