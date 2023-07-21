//import the db.js to this page
const db = require('./db')

login = (uname, psw) => {
    return db.User.findOne({ uname, psw }).then(user => {
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
                message: 'Incorrect username or password',
                status: false,
                statusCode: 404

            }
        }
    })
}

//app emp

addEmployee = (eid,ename,eposition,edept,ephone,esal,ejoining,estaff,eleave) => {
    return db.User.findOne({ eid:eid }).then(user => {
        if (user) {
            return {
                message: 'This employee already present',
                status: false,
                statusCode: 404
            }
        }
        else {
            newuser = new db.User({
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
            newuser.save()
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
    return db.User.findOne({ pid:pid }).then(user => {
        if (user) {
            return {
                message: 'This product already present',
                status: false,
                statusCode: 404
            }
        }
        else {
            newpro = new db.User({
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
//app raw

addRaw = (rid,rname,rqty,rfrom,rdate,usage) => {
    return db.User.findOne({ pid:pid }).then(user => {
        if (user) {
            return {
                message: 'This raw-material already present',
                status: false,
                statusCode: 404
            }
        }
        else {
            newraw = new db.User({
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
                message: 'New raw-material added successfully',
                status: true,
                statusCode: 200

            }


        }
    })
}
//get employee details
// employee=>{
//     return db.User.findOne().then(user=>{
//         if(user)
//         {
//             return{
//                 message:"success",
//                 status: true,
//                 statusCode: 200
//             }
//         }
//         else{
//             return{
//                 message: 'please check again',
//                 status: false,
//                 statusCode: 404
//             }
//         }
//     })
// }

module.exports = {
    login,addEmployee,addProduct,addRaw
}
