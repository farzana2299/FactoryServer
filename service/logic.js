//import the db.js to this page
const db = require('./db')

login = (uname, psw) => {
    return db.User.findOne({ uname, psw }).then(user => {
        if (user) {
            return {
                message: 'login success',
                status: true,
                statusCode: 200,
                currentUsername: user.uname

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

addEmployee = (eid, ename, eposition, edept, ephone,email,ephoto, esal, ejoining, estaff, eleaving) => {
    return db.Emp.findOne({ eid: eid }).then(emp => {
        if (emp) {
            return {
                message: 'This employee already present',
                status: false,
                statusCode: 404
            }
        }
        else {
            newemp = new db.Emp({
                eid: eid,
                ename: ename,
                eposition: eposition,
                edept: edept,
                ephone: ephone,
                email: email,
                ephoto: ephoto,
                esal: esal,
                ejoining: ejoining,
                estaff: estaff,
                eleaving: eleaving

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

addProduct = (pid, pname, quantity, pdate, pexport, pplace) => {
    return db.Prod.findOne({ pid: pid }).then(pro => {
        if (pro) {
            return {
                message: 'This product already present',
                status: false,
                statusCode: 404
            }
        }
        else {
            newpro = new db.Prod({
                pid: pid,
                pname: pname,
                quantity: quantity,
                pdate: pdate,
                pexport: pexport,
                pplace: pplace

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
addRaw = (rid, rname, rqty, rfrom, rdate, usage) => {
    return db.Raw.findOne({ rid: rid }).then(raw => {
        if (raw) {
            return {
                message: 'This material already present',
                status: false,
                statusCode: 404
            }
        }
        else {
            newraw = new db.Raw({
                rid: rid,
                rname: rname,
                rqty: rqty,
                rfrom: rfrom,
                rdate: rdate,
                usage: usage

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
getEmployee = () => {
    return db.Emp.find().then(emp => {
        if (emp) {
            return {
                message: emp,
                status: true,
                statusCode: 200
            }
        }
        else {
            return {
                message: 'please check again',
                status: false,
                statusCode: 404
            }
        }
    })
}

//get single data of employee
getEmp = (eid) => {
    return db.Emp.findOne({ eid: eid }).then(emp => {
        if (emp) {
            return {
                message: emp,
                status: true,
                statusCode: 200
            }
        }
        else {
            return {
                message: 'please check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
//edit employee
editEmp = (eid, empObject) => {
    console.log(empObject, "this is empobject");

    // Destructure the empObject directly to get the values
    const {
        ename, eposition, edept, ephone, email,
        ephoto, esal, ejoining, estaff, eleaving
    } = empObject;

    console.log(eid, "this is eid------------------");

    // Use findByIdAndUpdate to update the employee details in the database
    return db.Emp.findOneAndUpdate(
        { eid: eid }, // Query object to find the employee by ID
        {
            ename: ename,
            eposition: eposition,
            edept: edept,
            ephone: ephone,
            email: email,
            ephoto: ephoto,
            esal: esal,
            ejoining: ejoining,
            estaff: estaff,
            eleaving: eleaving
        },
        { new: true } // Set { new: true } to get the updated document as a result of the query
    )
        .then(updatedEmp => {
            if (updatedEmp) {
                return {
                    message: 'Employee details updated successfully',
                    status: true,
                    statusCode: 200,
                    updatedEmp: updatedEmp // You can include the updated employee data if needed
                };
            } else {
                return {
                    message: 'Employee not found',
                    status: false,
                    statusCode: 404
                };
            }
        })
        .catch(err => {
            return {
                message: 'An error occurred while updating employee details',
                status: false,
                statusCode: 500
            };
        });
};
//edit product

editProduct = (pid, proObject) => {
    console.log(proObject, "this is proobject");

    // Destructure the empObject directly to get the values
    const {
        pname, quantity, pdate, pexport, pplace
    } = proObject;
    console.log(pid, "this is pid------------------");
    // Use findByIdAndUpdate to update the employee details in the database
    return db.Prod.findOneAndUpdate(
        { pid: pid }, // Query object to find the employee by ID
        {
            
            pname: pname,
            quantity: quantity,
            pdate: pdate,
            pexport: pexport,
            pplace: pplace
        },
        { new: true } // Set { new: true } to get the updated document as a result of the query
    )
        .then(updatedPro => {
            if (updatedPro) {
                return {
                    message: 'Product details updated successfully',
                    status: true,
                    statusCode: 200,
                    updatedPro: updatedPro // You can include the updated employee data if needed
                };
            } else {
                return {
                    message: 'Product not found',
                    status: false,
                    statusCode: 404
                };
            }
        })
        .catch(err => {
            return {
                message: 'An error occurred while updating product details',
                status: false,
                statusCode: 500
            };
        });
};
//edit raw
editRaw = (rid, rawObject) => {
   

    // Destructure the empObject directly to get the values
    const {
        rname,rqty,rfrom,rdate,usage
    } = rawObject;

    // Use findByIdAndUpdate to update the employee details in the database
    return db.Raw.findOneAndUpdate(
        { rid:rid }, // Query object to find the employee by ID
        {
            
            rname:rname,
            rqty:rqty,
            rfrom:rfrom,
            rdate:rdate,
            usage:usage
        },
        { new: true } // Set { new: true } to get the updated document as a result of the query
    )
        .then(updatedRaw => {
            if (updatedRaw) {
                return {
                    message: 'Material details updated successfully',
                    status: true,
                    statusCode: 200,
                    updatedRaw: updatedRaw // You can include the updated employee data if needed
                };
            } else {
                return {
                    message: 'Material not found',
                    status: false,
                    statusCode: 404
                };
            }
        })
        .catch(err => {
            return {
                message: 'An error occurred while updating material details',
                status: false,
                statusCode: 500
            };
        });
};
//get product details
getProduct = () => {
    return db.Prod.find().then(pro => {
        if (pro) {
            return {
                message: pro,
                status: true,
                statusCode: 200
            }
        }
        else {
            return {
                message: 'please check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
//get single data of product
getPro = (pid) => {
    return db.Prod.findOne({ pid: pid }).then(pro => {
        if (pro) {
            return {
                message: pro,
                status: true,
                statusCode: 200
            }
        }
        else {
            return {
                message: 'please check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
//get raw details
getRaw = () => {
    return db.Raw.find().then(raw => {
        if (raw) {
            return {
                message: raw,
                status: true,
                statusCode: 200
            }
        }
        else {
            return {
                message: 'please check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
//get single data of raw
getsRaw = (rid) => {
    return db.Raw.findOne({ rid: rid }).then(raw => {
        if (raw) {
            return {
                message: raw,
                status: true,
                statusCode: 200
            }
        }
        else {
            return {
                message: 'please check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
deleteemp = (eid) => {
    return db.Emp.deleteOne({ eid: eid }).then(result => {
        if (result) {
            return {
                message: 'Deleted Successfully',
                status: true,
                statusCode: 200
            }
        }
        else {
            return {
                message: 'Please Check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
deletepro = (pid) => {
    return db.Prod.deleteOne({ pid: pid }).then(result => {
        if (result) {
            return {
                message: 'Deleted Successfully',
                status: true,
                statusCode: 200
            }
        }
        else {
            return {
                message: 'Please Check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
deleteraw = (rid) => {
    return db.Raw.deleteOne({ rid: rid }).then(result => {
        if (result) {
            return {
                message: 'Deleted Successfully',
                status: true,
                statusCode: 200
            }
        }
        else {
            return {
                message: 'Please Check again',
                status: false,
                statusCode: 404
            }
        }
    })
}
module.exports = {
    login, addEmployee, addProduct, addRaw, getEmployee, getProduct, getRaw, deleteemp, deletepro, deleteraw,
    getEmp, getPro, getsRaw, editEmp, editProduct, editRaw
}
