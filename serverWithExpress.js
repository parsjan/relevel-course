//importing express module
var expressJS= require("express");

var expressApp= expressJS();
//ADD ROUTING LOGIC 
// get function ->get(url,response)
expressApp.get("/",function(request,response){
    response.send("expressJS backed  http endpoint is ready");
});
expressApp.get("/name",function(request,response){
    response.send("ExpressJS backed http end point is ready !  name: tushar raina ");
});
expressApp.get("/company",function(request,response){
    response.send("ExpressJS backed http end point is ready ! campany is reputed ");
});
expressApp.listen(8080,function(){
    console.log("application is listining to port 8080 ");
});
