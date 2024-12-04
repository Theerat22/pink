// models/sport.ts
import mongoose from "mongoose";

const SportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    default: null,
  },
});

const Sport = mongoose.models.Sport || mongoose.model("Sport", SportSchema);

export default Sport;
