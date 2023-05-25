var expressJS= require("express");
var expressApp= expressJS();

expressApp.get("/",function(request,response){
response.send("expressjs backed http endpoint is ready .please enter correct user id");
});
expressApp.get("/users/1",function(request,response){
    response.send("expressjs backed http endpoint is ready . name:tushar raina");
    });
    
expressApp.get("/users/2",function(request,response){
        response.send("expressjs backed http endpoint is ready .name:sachin tendulkar");
        });
expressApp.listen(8080,function(){
    console.log("application is listening to port 8080");
});

//issues:-
// if we have 1000 students in the sysyem ,we would need to add 1000 routes 
//to resolve this issue refer studentInformationmodified.js