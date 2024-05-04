const express = require('express')
const cors = require('cors')
require('dotenv').config()
const dbConnect = require("./db/db.config")
const interviewRouter = require("./routes/interview.routes")
const questionRouter = require('./routes/question.routes')
const logger = require('./middlewares/logging.middleware')
const userRouter = require('./routes/user.routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(logger)

app.use("/interview", interviewRouter)
app.use("/question", questionRouter)
app.use("/user", userRouter)

app.get("/", (req, res)=>{
    res.send("<h1>REST API!!!</h1>")
})


dbConnect()
app.listen(5000, ()=>console.log("http://localhost:5000"))