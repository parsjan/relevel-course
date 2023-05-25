const http= require('http');

const listener=function(req,res){
    //req-> request
    //res-> response
    console.log("server processing request ");
    res.writeHead(200); //writeHeader //statusCode->200
    res.end("our first HTTP server"); //end the response process
}
const simpleserver=http.createServer(listener);

simpleserver.listen(8080);