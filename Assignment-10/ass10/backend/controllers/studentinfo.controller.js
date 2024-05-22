const mongoose = require("mongoose");
const StudentModel = require("../models/student_info.model");

const getAllStudentInfos = async (req, res) => {
  try {
    console.log("get all student info called");
    const studentinfos = await StudentModel.find();
    res.status(200).json(studentinfos);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addAllStudentInfos = async (req, res) => {
  try {
    console.log("add all students");
    let data = req.body;
    await StudentModel.insertMany(data);
    res.status(201).json({ message: "Data Added Successfully!!" });
  } catch (error) {
    res.status(400).json({ message: "Error in sending Data!!"+"\n" + error });
  }
};

const addStudentInfo = async(req,res) => {
  try {
    console.log("add a student");
    let data = req.body;
    await StudentModel.create(data);
    res.status(201).json({ message: "Data Added Successfully!!" });
  } catch (error) {
    res.status(400).json({ message: "Error in sending Data!!" + "\n" + error });
  }
}

const getStudentInfoByRoll = async(req,res) => {
  try{
    const id = req.params.id
    const student = await StudentModel.find( { rollno : id } )
    res.status(201).json(student)
  }catch(error){
    res.status(400).json({message:"Student not found!!"})
  }
}

const updateStudent = async(req,res) => {
  try {
    const id = req.params.id
    const updatedStudent = await StudentModel.findOneAndUpdate({"rollno":id},req.body,{new:true});
    if(updatedStudent){
      res.status(200).json(updatedStudent);
    }else{
      res.status(404).json({message:'No Student with this rollno is present'});
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteStudent = async(req,res) => {
  try {
    const id = req.params.id
    const  deletedStudent = await StudentModel.findOneAndDelete( {"rollno":id} );
    if(!deletedStudent){
      return res.status(404).json('No such user present')
    }
    res.status(200).json(deletedStudent);
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports = {
  getAllStudentInfos,
  addAllStudentInfos,
  addStudentInfo,
  getStudentInfoByRoll,
  updateStudent,
  deleteStudent
};
