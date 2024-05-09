const connection = require('./connection');
const express = require("express");                                                   
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
let port = 3000;
app.listen(port,()=>{
    console.log("Server is running port 3000");
});
app.get("/employee/:id",(req,res)=>{
    connection.query("select * from employee where id = ?",[req.params.id],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows);
        }
    })

});
app.delete('/employee/:id',(req,res)=>{
    connection.query('Delete from employee where id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err)
        }else{
            res.send(rows)
        }
    })

    });
    app.patch('/employee',(req,res)=>{
        var emp = req.body
   
       
        connection.query("update employee SET ? WHERE Id = "+emp.Id,[emp],(err,rows)=>{
            if(err){
                console.log(err)
            }else{
                res.send(rows)
            }
        })
    
        });
        app.put('/employee',(req,res)=>{
            var emp = req.body
       
           
            connection.query("update employee SET ? WHERE Id = "+emp.Id,[emp],(err,rows)=>{
                if(err){
                    console.log(err)
                }else{
                    if(rows.affectedRows=0){
                        var empData = [emp.Id , emp.Name , emp.Department , emp.Salary ,  emp.Mobile_No]
                        connection.query('Insert Into employee(Id,Name,Department,Salary,Mobile_No) values(?)',[empData] ,(err,rows)=>{
                            if(err){
                                console.log(err);
                            }else{
                                console.log(rows);
                            }
                        })

                    }else{
                        res.send(rows)

                    }
                   
                }
            })
        
            });
