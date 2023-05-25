 // adding the required library
 const http= require('http');
//add listener
const listener=function(req,res){
    //req-> request
    //res-> response
    console.log("server processing request ");
    res.setHeader("Content-Type","application/json")
    res.writeHead(200); //writeHeader //statusCode->200
    res.end('{"message": "this is a JSON response  from a jeson server"}'); //end the response process
}
const simpleserver=http.createServer(listener);

simpleserver.listen(8080);