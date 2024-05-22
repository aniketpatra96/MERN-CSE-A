const StudentAcademicModel = require("../models/student_academic_info.model");
const StudentModel = require("../models/student_info.model");

const getAllStudentDetails = async (req, res) => {
  try {
    const details = await StudentModel.aggregate([
      {
        $lookup: {
          from: "studentacademicinfos",
          localField: "rollno",
          foreignField: "rollno",
          as: "studentDetails",
        },
      },
    ]);
    if (details) {
      res.status(200).json(details);
    } else {
      res.status(404).json({ message: "No Data Found!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const addAllStudentDetails = async (req, res) => {
  try {
    const { name, rollno, mobile, email, address, studentDetails } = req.body;
    const [{program,branch,cgpa}] =  studentDetails;
    const studentInfo = await StudentModel.create({
        name,
        rollno,
        mobile,
        email,
        address,
    })
    const studentAcademicInfo = await StudentAcademicModel.create({
        rollno,
        program,
        branch,
        cgpa,
    })
    res.status(200).json({message : "Data Inserted to both the collections!!"})
  } catch (error) {
    console.log(error);
    res.status(500).json({Error : "Error is : "+error});
  }
};

module.exports = {
  getAllStudentDetails,
  addAllStudentDetails,
};
