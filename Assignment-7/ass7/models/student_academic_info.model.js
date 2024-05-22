const mongoose = require("mongoose");

const StudentAcademicSchema = new mongoose.Schema(
  {
    rollno: {
      type: Number,
      unique: true,
      ref: "StudentInfo",
    },
    program:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    cgpa:{
        type:String,
        required:true
    }
  },
  { timestamps: true }
);

const StudentAcademicModel = new mongoose.model("StudentAcademicInfo", StudentAcademicSchema);

module.exports = StudentAcademicModel;