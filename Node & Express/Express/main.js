const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname + '/public')))

console.log(path.join(__dirname + "/public/style.css"));

app.get("/", (req,res) => {
    // res.send("Hello from Express Server")
    res.sendFile(path.join(__dirname,"../public","index.html"))
})

app.get("/about", (req,res) => {
    res.send("About Express Server")
})

app.listen(5000, () => {
    console.log('Server Started at 5000');
})