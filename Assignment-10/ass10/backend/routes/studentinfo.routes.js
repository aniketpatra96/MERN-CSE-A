const express = require("express");
const {
  getAllStudentInfos,
  addAllStudentInfos,
  addStudentInfo,
  getStudentInfoByRoll,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentinfo.controller");
const authenticateUser = require("../middlewares/auth.middleware");

const StudentInfoRouter = express.Router();

StudentInfoRouter.get("/", getAllStudentInfos);
StudentInfoRouter.post("/", authenticateUser, addAllStudentInfos);
StudentInfoRouter.post("/addstudent", authenticateUser, addStudentInfo);
StudentInfoRouter.get("/:id", getStudentInfoByRoll);
StudentInfoRouter.put("/:id", authenticateUser, updateStudent);
StudentInfoRouter.delete("/:id", authenticateUser, deleteStudent);

module.exports = StudentInfoRouter;
