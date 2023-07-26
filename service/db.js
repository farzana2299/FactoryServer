// import mongoose library
const mongoose=require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/fServer')


// model for collection     //schema fields and values in model
const User=mongoose.model('User',{
    uname:String,
    psw:String
})

const Emp=mongoose.model('Emp',{
    eid:String,
    ename:String,
    eposition:String,
    edept:String,
    ephone:String,
    email:String,
    ephoto:String,
    esal:Number,
    ejoining:String,
    estaff:String,
    eleaving:String
})

const Prod=mongoose.model('Prod',{
    pid:String,
    pname:String,
    quantity:Number,
    pdate:Date,
    pexport:String,
    pplace:String
})
const Raw=mongoose.model('Raw',{
    rid:String,
    rname:String,
    rqty:Number,
    rfrom:String,
    rdate:Date,
    usage:String
})
//export the model 

module.exports={
    User,Emp,Prod,Raw
}