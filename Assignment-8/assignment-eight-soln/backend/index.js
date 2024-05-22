const express = require("express");
const dbConnect = require("./db/db.config");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT,()=>{
    dbConnect()
    console.log(`Server  is running on port ${PORT}`);
})