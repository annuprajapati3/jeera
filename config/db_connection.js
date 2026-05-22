const mongoose = require("mongoose");

const connectDB = async () => {
    try{
    await mongoose.connect(process.env.MONGODB);
    console.log("db is successfully Connected");
    }
    catch(err){ 
        console.log(err);
    }
    
};

module.exports = connectDB;