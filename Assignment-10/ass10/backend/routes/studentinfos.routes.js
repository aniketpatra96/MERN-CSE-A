const express = require("express");
const {
  getAllStudentDetails,
  addAllStudentDetails,
  getStudentDetailsByRoll,
  deleteStudentDetailsByRoll,
  updateStudentDetailsByRoll,
} = require("../controllers/allstudentinfo.controller");
const authenticateUser = require("../middlewares/auth.middleware");

const AllStudentInfoRouter = express.Router();

AllStudentInfoRouter.get("/", getAllStudentDetails);
AllStudentInfoRouter.post("/",authenticateUser, addAllStudentDetails);
AllStudentInfoRouter.get("/:id", getStudentDetailsByRoll);
AllStudentInfoRouter.delete("/:id",authenticateUser, deleteStudentDetailsByRoll);
AllStudentInfoRouter.put("/:id",authenticateUser, updateStudentDetailsByRoll);
module.exports = {
  AllStudentInfoRouter,
};
