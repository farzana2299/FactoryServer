//import the db.js to this page
const db = require('./db')

login = (uname, psw) => {
    return db.User.findOne({ uname,psw }).then(user => {
        if (user) {
         return{
            message: 'login success',
            status: true,
            statusCode: 200,
            currentUsername:user.uname

         }
        }
        else {
            return {
                message: 'This user didnot exist',
                status: false,
                statusCode: 404

            }
        }
    })
}

//app emp

addEmployee = (eid,ename,eposition,edept,ephone,esal,ejoining,estaff,eleave) => {
    return db.Emp.findOne({ eid:eid }).then(emp => {
        if (emp) {
            return {
                message: 'This employee already present',
                status: false,
                statusCode: 404
            }
        }
        else {
            newemp = new db.Emp({
                eid:eid,
                ename:ename,
                eposition:eposition,
                edept:edept,
                ephone:ephone,
                esal:esal,
                ejoining:ejoining,
                estaff:estaff,
                eleave:eleave

            })
            //to reflect the changes done by server in database
            newemp.save()
            return {
                message: 'Employee Registration done successfully',
                status: true,
                statusCode: 200

            }


        }
    })
}

//app product

addProduct = (pid,pname,quantity,pdate,pexport,pplace) => {
    return db.Prod.findOne({ pid:pid }).then(pro => {
        if (pro) {
            return {
                message: 'This product already present',
                status: false,
                statusCode: 404
            }
        }
        else {
            newpro = new db.Prod({
                pid:pid,
                pname:pname,
                quantity:quantity,
                pdate:pdate,
                pexport:pexport,
                pplace:pplace

            })
            //to reflect the changes done by server in database
            newpro.save()
            return {
                message: 'New product added successfully',
                status: true,
                statusCode: 200

            }


        }
    })
}
//add raw
addRaw = (rid,rname,rqty,rfrom,rdate,usage) => {
    return db.Raw.findOne({ rid:rid }).then(raw => {
        if (raw) {
            return {
                message: 'This material already present',
                status: false,
                statusCode: 404
            }
        }
        else {
            newraw = new db.Raw({
                rid:rid,
                rname:rname,
                rqty:rqty,
                rfrom:rfrom,
                rdate:rdate,
                usage:usage

            })
            //to reflect the changes done by server in database
            newraw.save()
            return {
                message: 'New material added successfully',
                status: true,
                statusCode: 200

            }


        }
    })
}

//get employee details
getEmployee=()=>{
    return db.Emp.find().then(emp=>{
        if(emp)
        {
            return{
                message:emp,
                status: true,
                statusCode: 200
            }
        }
        else{
            return{
                message: 'please check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
//get product details
getProduct=()=>{
    return db.Prod.find().then(pro=>{
        if(pro)
        {
            return{
                message:pro,
                status: true,
                statusCode: 200
            }
        }
        else{
            return{
                message: 'please check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
//get raw details
getRaw=()=>{
    return db.Raw.find().then(raw=>{
        if(raw)
        {
            return{
                message:raw,
                status: true,
                statusCode: 200
            }
        }
        else{
            return{
                message: 'please check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
deleteEmployee=(eid)=>{
    return db.Emp.deleteOne({eid:eid}).then(result=>{
        if(result)
        {
            return{
                message:'Deleted Successfully',
                status: true,
                statusCode: 200
            }
        }
        else
        {
            return{
                message: 'Please Check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
deleteProduct=(pid)=>{
    return db.Prod.deleteOne({pid:pid}).then(result=>{
        if(result)
        {
            return{
                message:'Deleted Successfully',
                status: true,
                statusCode: 200
            }
        }
        else
        {
            return{
                message: 'Please Check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
deleteRaw=(rid)=>{
    return db.Raw.deleteOne({rid:rid}).then(result=>{
        if(result)
        {
            return{
                message:'Deleted Successfully',
                status: true,
                statusCode: 200
            }
        }
        else
        {
            return{
                message: 'Please Check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
module.exports = {
    login,addEmployee,addProduct,addRaw,getEmployee,getProduct,getRaw,deleteEmployee,deleteProduct,deleteRaw
}
