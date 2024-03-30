const mongoose = require('mongoose')

async function dbConnect(){
    const DB_URL = "Your database URL"
    const DB = "placementpal"
    try {
        await mongoose.connect(DB_URL+"/"+DB)
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("Database Error: "+ error);
    }
}

module.exports = dbConnect