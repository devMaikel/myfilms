import mongoose from "mongoose";

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    // select: false //não retorna nas consultas
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model("User", User);
