const express = require('express')
const { getAllStudentDetails, addAllStudentDetails } = require('../controllers/allstudentinfo.controller')

const AllStudentInfoRouter = express.Router();

AllStudentInfoRouter.get("/",getAllStudentDetails)
AllStudentInfoRouter.post("/",addAllStudentDetails)

module.exports = {
    AllStudentInfoRouter
}