import mongoose from "mongoose";
import { Schema } from "mongoose";

const hostelsSchema = new Schema({
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

const Hostel = mongoose.model("hostel", hostelsSchema);

export default Hostel;
