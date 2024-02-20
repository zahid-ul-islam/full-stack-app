const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
   
} ,{
        timestamps:true
    })

userSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            userEmail: this.email,
            isAdmin : this.isAdmin
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"10d"
        }

        ) 
        
    } catch (error) {
        console.log(error);
    }
}

userSchema.pre("save", async function(next){
    const user = this;
    if(!user.isModified("password")){
        next();
    }
    try {
        const roundSalt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(user.password, roundSalt);
        user.password = hashedPass;

        
    } catch (error) {
        next(error);
        
    }

})


const User = new mongoose.model("User", userSchema);
module.exports = User;