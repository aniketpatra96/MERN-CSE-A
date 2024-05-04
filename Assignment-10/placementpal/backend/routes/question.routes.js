const express = require('express')

const {
    addQuestion,
    getAllQuestions,
    updateQuestion,
    deleteQuestion
} = require('../controllers/question.controller')
const authenticateUser = require('../middlewares/auth.middleware')

const questionRouter = express.Router()

questionRouter.post("/", authenticateUser, addQuestion)
questionRouter.get("/", getAllQuestions)
questionRouter.put("/:id", authenticateUser, updateQuestion)
questionRouter.delete("/:id", authenticateUser, deleteQuestion)

module.exports = questionRouter