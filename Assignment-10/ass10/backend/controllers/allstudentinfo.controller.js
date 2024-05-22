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
    req.body.userId = req.user.id;
    const { name, rollno, mobile, email, address, studentDetails, userId } = req.body;
    const [{ program, branch, cgpa }] = studentDetails;
    console.log(userId);
    const studentInfo = await StudentModel.create({
      name,
      rollno,
      mobile,
      email,
      address,
      userId,
    });
    const studentAcademicInfo = await StudentAcademicModel.create({
      rollno,
      program,
      branch,
      cgpa,
      userId,
    });
    res
      .status(200)
      .json({
        message: "Data Inserted to both the collections!!",
        studentInfo,
        studentAcademicInfo,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Error is : " + error });
  }
};

const getStudentDetailsByRoll = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await StudentModel.find({ rollno: id });
    const student_academic_info = await StudentAcademicModel.find({
      rollno: id,
    });
    const studentDetails = {
      studentInfo: [...student],
      studentAcademicInfo: [...student_academic_info],
    };
    res.status(201).json(studentDetails);
  } catch (error) {
    res.status(400).json({ message: "Student not found!!" });
  }
};

const updateStudentDetailsByRoll = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedStudent = await StudentModel.findOneAndUpdate(
      { rollno: id },
      req.body.studentDetails[0],
      { new: true }
    );
    const updatedStudentAcademicDetails =
      await StudentAcademicModel.findOneAndUpdate(
        { rollno: id },
        req.body.studentAcademicDetails[0],
        { new: true }
      );
    if (updatedStudent && updatedStudentAcademicDetails) {
      res.status(200).json([updatedStudent, updatedStudentAcademicDetails]);
    } else {
      res
        .status(404)
        .json({ message: "No Student with this rollno is present" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteStudentDetailsByRoll = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedStudent = await StudentModel.findOneAndDelete({ rollno: id });
    const deletedStudentAcademicInfo =
      await StudentAcademicModel.findOneAndDelete({ rollno: id });
    if (!deletedStudent && !deletedStudentAcademicInfo) {
      return res.status(404).json("No such user present");
    } else if (deletedStudent && deletedStudentAcademicInfo) {
      res.status(200).json(deletedStudent);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllStudentDetails,
  addAllStudentDetails,
  getStudentDetailsByRoll,
  deleteStudentDetailsByRoll,
  updateStudentDetailsByRoll,
};
