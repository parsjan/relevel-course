const express= require('express');
const {Sequelize}= require('sequelize');
const dbconfig =require('./config.json');
const app=express();
const port=3000;
const env="development";
const dbsettings=dbconfig[env];


const sequelize=new Sequelize(
    dbsettings.database,
    dbsettings.username,
    dbsettings.password,
    dbsettings
);

app.get('/',(req,res)=>{
    res.send("hello world");
});

app.listen(port,async()=>{
console.log(`example app listening at http://localhost: ${port}`);
try{
    await sequelize.authenticate();
    console.log("connection has been successfully established ");  
}
catch(error){
    console.log("unable to connect" , error);               
}
});

//----connecting application to database:-
//start MYsql server -> mysql -u root -p
//CREATE database relevel 


//npm install mysql2
//npm install sequelize