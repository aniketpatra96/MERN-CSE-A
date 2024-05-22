const express = require("express");
const {
  getAllStudentDetails,
  addAllStudentDetails,
  getStudentDetailsByRoll,
  deleteStudentDetailsByRoll,
  updateStudentDetailsByRoll,
} = require("../controllers/allstudentinfo.controller");

const AllStudentInfoRouter = express.Router();

AllStudentInfoRouter.get("/", getAllStudentDetails);
AllStudentInfoRouter.post("/", addAllStudentDetails);
AllStudentInfoRouter.get("/:id", getStudentDetailsByRoll);
AllStudentInfoRouter.delete("/:id", deleteStudentDetailsByRoll);
AllStudentInfoRouter.put("/:id", updateStudentDetailsByRoll);
module.exports = {
  AllStudentInfoRouter,
};
