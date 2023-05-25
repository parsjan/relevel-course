/*var expressJS= require("express");
var expressApp= expressJS();

expressApp.get("/",function(request,response){
response.send("expressjs backed http endpoint is ready .please enter correct user id");
});
expressApp.get("/users/:userID",function(request,response){
    response.send("expressjs backed http endpoint is ready  " + "returning data for userID:   " + request.params.userID);
})
expressApp.listen(8080,function(){
    console.log("application is listening to port 8080");
});
*/
//issue:-
// it can pick any random input for example, /users/jgchjc will not give the error ever it is not a valid userID 
// to resolve this problem we use to validate the input url 
// we can validate these using regular expression(RegEx)
//regular expression (which we studied in toc) 


var expressJS= require("express");
var expressApp= expressJS();

expressApp.get("/",function(request,response){
response.send("expressjs backed http endpoint is ready .please enter correct user id");
});
expressApp.get(/^\/users\/(\d+)$/,function(request,response){
    response.send("expressjs backed http endpoint is ready  " + "returning data for userID:   " + request.params[0]);
})
expressApp.listen(8080,function(){
    console.log("application is listening to port 8080");
});