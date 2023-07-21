// import mongoose library
const mongoose=require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/fServer')


// model for collection     //schema fields and values in model
const User=mongoose.model('User',{
    uname:String,
    psw:String,
    ename:String,
    eid:String,
    eposition:String,
    edept:String,
    ephone:String,
    esal:Number,
    ejoining:String,
    estaff:String,
    eleaving:Date,
    pid:String,
    pname:String,
    quantity:Number,
    pdate:String,
    export:String,
    pplace:String,
    rid:String,
    rname:String,
    rqty:Number,
    rfrom:String,
    rdate:String,
    usage:String

})
//export the model 

module.exports={
    User
}