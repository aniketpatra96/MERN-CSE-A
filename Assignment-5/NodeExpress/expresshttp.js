const express = require('express')
const path = require('path')

const server = express()

server.use(express.static(path.join(__dirname, "public")))

server.get("/", (req, res)=>{
    // res.send("Hello Form Express Server")
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

server.get("/about", (req, res)=>{
    res.send("About Express Server")
})

server.listen(5000, ()=>console.log("Server Started"))