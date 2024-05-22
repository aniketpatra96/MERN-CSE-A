const StudentAcademicModel = require('../models/student_academic_info.model')

const addAllStudentAcademicInfos = async (req, res) => {
  try {
    console.log("add all student academic details");
    let data = req.body;
    await StudentAcademicModel.insertMany(data);
    res.status(201).json({ message: "Data Added Successfully!!" });
  } catch (error) {
    res.status(400).json({ message: "Error in sending Data!!" + "\n" + error });
  }
}

const addStudentAcademicRecord  = async(req,res) => {
  try{
    const studentAcademicRecord = await StudentAcademicModel.create(req.body);
    if(!studentAcademicRecord){
      return res.status(400).send("Failed to create student Academic Record.");
    }
    res.status(200).json(studentAcademicRecord);
  }catch(error){
    res.status(500).json(error)
  }
}

const getAllStudentAcademicInfos = async (req, res) => {
  try {
    const academicRecords = await StudentAcademicModel.find()
    res.status(201).json(academicRecords);
  } catch (error) {
    res.status(400).json({ message: "Error in retrieving Data!!" + "\n" + error });
  }
};

const getStudentAcademicRecordByRoll = async(req,res) => {
  try {
    const id = req.params.id
    const studentAcademicRecord = await StudentAcademicModel.find({rollno:id})
    if(studentAcademicRecord){
      res.status(200).json(studentAcademicRecord)
    }else{
      res.status(400).json({message:"No Data Found!!"})
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const updateStudentAcademicRecordByRoll = async(req,res) => {
  try {
    const id = req.params.id
    const updatedRecord = await StudentAcademicModel.findOneAndUpdate({rollno:id},req.body,{new:true})
    if(updatedRecord){
      res.status(200).json(updatedRecord)
    }else{
      res.status(400).json({message :'Data not found!'});
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteStudentAcademicRecordByRoll = async(req,res) => {
  try {
    const id = req.params.id
    const deletedRecord = await StudentAcademicModel.findOneAndDelete( { rollno: id } )
    if (!deletedRecord) {
        return res.status(400).send("No Record with the provided ID was found.")
    } else {
        res.status(200).json({message:'Deletion Successful'})
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
    addAllStudentAcademicInfos,
    addStudentAcademicRecord,
    getAllStudentAcademicInfos,
    getStudentAcademicRecordByRoll,
    updateStudentAcademicRecordByRoll,
    deleteStudentAcademicRecordByRoll
}