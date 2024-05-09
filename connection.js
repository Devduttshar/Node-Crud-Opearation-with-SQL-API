const mysql = require('mysql2');
var  mysqlConnection = mysql.createConnection({

    host: 'localhost',
    user:  'root',
    password:'Gu@54321',
    database:'PANDO'
})
 mysqlConnection.connect((err)=>{
    if(err){
        console.log("Error in Db connection: "+JSON.stringify(err,undefined,2));

    }else{
        console.log("Db Connect Successfully");

    }

 })
 module.exports=mysqlConnection;