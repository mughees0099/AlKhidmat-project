import mongoose from "mongoose";
import { Schema } from "mongoose";

const scholarshipSchema = new Schema({
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

const ScholarShip = mongoose.model("scholarship", scholarshipSchema);

export default ScholarShip;
