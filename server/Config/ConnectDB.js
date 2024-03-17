const mongoose   =   require("mongoose")

const connectDB= async()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/Registration")
        console.log("Data base Connected successFully")
        
    } catch (error) {
        console.log(err)
        process.exit(1)
        
    }
}
module.exports=connectDB;