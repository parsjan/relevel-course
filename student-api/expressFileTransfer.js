const express=require("express");
const bodyParser=require("body-parser");

const expressApp=express();


//database
let users=[{"id":"1"
        ,"name":"tushar raina"
        ,"email":"tushar@gmail.com"}
        ,{"id":"2"
        ,"name":"sachin tendulakr"
        ,"email":"sachin@gmail.com"}

];


expressApp.use(bodyParser.urlencoded({extended:false}));
expressApp.use(bodyParser.json());

expressApp.get('/users',(request,response)=>{
    response.json(users).status(200);
});

expressApp.delete('/user/:id',(req,res)=>{
    const id=req.params.id;
    //id with user id 1.
    //[a,b,c]
    //id-> b(the function will filter out b.)\
    //[a,c]
    users=users.filter(user=>{
        if(user.id != id){
            //whatever id is not equal to the mentioned id , it will stay in the array.
            return true;
        }
        return false;
    });

res.send('user is deleted').status(200);
});

expressApp.post('/user',(req,res)=>{
    const user=req.body;
    users.push(user);
    res.send("user is added to the database").status(200);
});

expressApp.listen(3000,()=> console.log("listening on port 3000")
);