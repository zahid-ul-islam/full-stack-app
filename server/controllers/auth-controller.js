const User = require("../models/UserReg");
const bcrypt = require("bcryptjs");

const getUser = (req, res)=>{
    res.json({message:"got all the user"})
}

const createUser = async (req,res)=>{
    try {
        const {username, email, password, phone} = req.body;
        const existingEmail = await User.findOne({email});
        if(existingEmail){
            res.status(400).json({message:"email already taken"});
        }
        const user = await User.create({username, email, password, phone})
        res.status(200).json({msg: "registration successful", token:await user.generateToken()});
        
    } catch (error) {
        console.log(error);
        
    }
}

const login = async (req, res)=>{
    try {
        const {email, password} = req.body;
    const userExist = await User.findOne({email});
    if(!userExist){
        res.status(400).json({message:"invalid credential"})
    }
    const user = await userExist.comparePassword(password)
    if(user){
        res.status(200).json({msg: "login successful", token:await userExist.generateToken()});
    }
    else{
        res.status(400).json({messsage:"invalid email or password"})
    }
        
    } catch (error) {
        console.log(error)
    }
    

}

module.exports = {getUser, createUser, login}