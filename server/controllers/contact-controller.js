const Contact = require("../models/Contact")

const contactAction = async (req,res)=>{
    try {
    const {username, email, message} = req.body
    const contactForm = await Contact.create({username, email, message})
    res.status(200).json({msg: "message sent successfully"})
    } catch (error) {
        res.status(402).json(error)
        
    }
   




}
module.exports = contactAction