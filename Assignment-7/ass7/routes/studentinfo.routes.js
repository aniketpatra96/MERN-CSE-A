const express = require("express");
const { getAllStudentInfos, addAllStudentInfos, addStudentInfo, getStudentInfoByRoll, updateStudent, deleteStudent} = require("../controllers/studentinfo.controller");

const StudentInfoRouter = express.Router();

StudentInfoRouter.get("/",getAllStudentInfos);
StudentInfoRouter.post("/",addAllStudentInfos);
StudentInfoRouter.post("/addstudent",addStudentInfo);
StudentInfoRouter.get("/:id",getStudentInfoByRoll);
StudentInfoRouter.put("/:id",updateStudent)
StudentInfoRouter.delete("/:id",deleteStudent)

module.exports = StudentInfoRouter;