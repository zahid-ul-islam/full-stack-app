const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async ()=>{
    try {
        const uri = process.env.MONGO_URI
        await mongoose.connect(uri);
        console.log("Mongoose connection is open");
    } catch (error) {
        console.log("Mongoose connection error");
    }
}
module.exports = connectDB
