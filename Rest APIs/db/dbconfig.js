const mongoose = require('mongoose')

async function dbConnect(){
    const DB_URL = "mongodb+srv://aniket96:pupulaniket420@cluster0.mksf4r6.mongodb.net/";
    const DB="placementpal"
    try{
        await mongoose.connect(DB_URL+'/'+DB);
        console.log('Mongo db connected');
    }catch(error){
        console.error(error);
    }
}

module.exports=dbConnect