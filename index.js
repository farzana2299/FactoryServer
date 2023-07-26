//import server
const express = require("express")

//server creation
const server = express()

//covert the incoming json data to javascript
server.use(express.json())

//set port
server.listen(3000, () => {
    console.log("___server started at port 3000____");
})

//import cors
const cors = require('cors')

//connect with front end
server.use(cors({ origin: "http://localhost:4200" }))

//import logic file
const logic = require('./service/logic')

//import db file
const db = require('./service/db')

// login-post
server.post('/login', (req, res) => {
    logic.login(req.body.uname, req.body.psw).then(result => {
        res.status(result.statusCode).json(result)

    })
})

//add employee-post
server.post('/addEmployee', (req, res) => {
    logic.addEmployee(req.body.eid, req.body.ename, req.body.eposition, req.body.edept, req.body.ephone,req.body.email,
        req.body.ephoto, req.body.esal, req.body.ejoining, req.body.estaff, req.body.eleave).then(result => {
        //convert into json and send
        res.status(result.statusCode).json(result)
    })
})
//add product-post
server.post('/addProduct', (req, res) => {
    logic.addProduct(req.body.pid, req.body.pname, req.body.quantity, req.body.pdate, req.body.pexport, req.body.pplace).then(result => {
        //convert into json and send
        res.status(result.statusCode).json(result)
    })
})
//add raw-post
server.post('/addRaw', (req, res) => {
    logic.addRaw(req.body.rid, req.body.rname, req.body.rqty, req.body.rfrom, req.body.rdate, req.body.usage).then(result => {
        //convert into json and send
        res.status(result.statusCode).json(result)
    })
})
//employee details array in emp component
server.get('/employee/',(req,res)=>{
logic.getEmployee().then(result=>
    {
        res.status(result.statusCode).json(result)
    })
})
//single employee detail
server.get('/viewemp/:eid/',(req,res)=>{
    logic.getEmp(req.params.eid).then(result=>
        {
            res.status(result.statusCode).json(result)
        })
    })
//product details array in pro component
server.get('/product/',(req,res)=>{
    logic.getProduct().then(result=>
        {
            res.status(result.statusCode).json(result)
        })
    })
    //single product details
server.get('/viewpro/:pid/',(req,res)=>{
    logic.getPro(req.params.pid).then(result=>
        {
            res.status(result.statusCode).json(result)
        })
    })
//raw details array in raw component
server.get('/rawmaterial/',(req,res)=>{
    logic.getRaw().then(result=>
        {
            res.status(result.statusCode).json(result)
        })
    })
    //single raw details
server.get('/viewraw/:rid/',(req,res)=>{
    logic.getsRaw(req.params.rid).then(result=>
        {
            res.status(result.statusCode).json(result)
        })
    })
//delete emp
server.delete('/viewemp/:eid',(req,res)=>{
    logic.deleteemp(req.params.eid).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
//delete pro
server.delete('/viewpro/:pid',(req,res)=>{
    logic.deletepro(req.params.pid).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
//delete raw
server.delete('/viewraw/:rid',(req,res)=>{
    logic.deleteraw(req.params.rid).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
//edit emp
server.post('/editEmployee/:eid',(req,res)=>{
    logic.editEmp(req.params.eid,req.body).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
//edit pro
server.post('/editProduct/:pid',(req,res)=>{
    logic.editProduct(req.params.pid,req.body).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
//edit raw
server.post('/editRaw/:rid',(req,res)=>{
    logic.editRaw(req.params.rid,req.body).then(result=>{
        res.status(result.statusCode).json(result)
    })
})