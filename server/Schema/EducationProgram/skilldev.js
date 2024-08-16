import mongoose from "mongoose";
import { Schema } from "mongoose";

const skilldevSchema = new Schema({
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

const Skilldev = mongoose.model("Skilldev", skilldevSchema);

export default Skilldev;
