const mongoose   =require("mongoose")

const RegistrationSchema  = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
},{strict:true,timestamps:true,required:true})

const Registration= mongoose.model('Registration',RegistrationSchema)

module.exports=Registration;