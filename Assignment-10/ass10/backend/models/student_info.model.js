const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rollno: {
      type: Number,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      pin: {
        type: String,
        required: true,
      },
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const StudentModel = new mongoose.model("StudentInfo", StudentSchema);

module.exports = StudentModel;
