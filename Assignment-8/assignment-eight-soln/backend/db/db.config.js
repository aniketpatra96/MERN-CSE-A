const mongoose = require("mongoose");

const dbConnect = async() => {
    try {
        const DB_URL = "mongodb://localhost:27017";
        const DB = "expense"
        await mongoose.connect(DB_URL+"/"+DB)
        console.log("Connected to Mongo Db...");
    } catch (error) {
        console.error(error);
    }
}

module.exports = dbConnect