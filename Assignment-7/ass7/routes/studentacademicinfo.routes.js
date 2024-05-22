const express = require("express");
const {
  addAllStudentAcademicInfos,
  addStudentAcademicRecord,
  getAllStudentAcademicInfos,
  getStudentAcademicRecordByRoll,
  updateStudentAcademicRecordByRoll,
  deleteStudentAcademicRecordByRoll,
} = require("../controllers/studentacademicinfo.controller");

const StudentAcademicInfoRouter = express.Router();

StudentAcademicInfoRouter.post("/", addAllStudentAcademicInfos);
StudentAcademicInfoRouter.post("/addacademicrecord", addStudentAcademicRecord);
StudentAcademicInfoRouter.get("/", getAllStudentAcademicInfos);
StudentAcademicInfoRouter.get("/:id", getStudentAcademicRecordByRoll);
StudentAcademicInfoRouter.put("/:id", updateStudentAcademicRecordByRoll);
StudentAcademicInfoRouter.delete("/:id", deleteStudentAcademicRecordByRoll);

module.exports = StudentAcademicInfoRouter;
