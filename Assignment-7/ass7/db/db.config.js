//connect to mongo db
const mongoose = require("mongoose");
require('dotenv').config()
const dbConnect = async () => {
  const DB_URL = process.env.MONGO_URL;
  const DB = "csea";
  try {
    await mongoose.connect(DB_URL + "/" + DB);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error('Unable to connect to mongoDB!!');
  }
};

module.exports = dbConnect;