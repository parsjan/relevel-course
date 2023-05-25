// adding the required library
const http= require('http');
//add listener
const listener=function(req,res){
   //req-> request
   //res-> response
   console.log("server processing request ");
   res.setHeader("Content-Type","text/csv");
   //content-disposition 
   //the value of this attribute defines how we want to look at  the response  
   //inline : response should be displayed in the browser 
   // attachment : the response to be downloaded 
   //attachment;filename=details.csv : to download with the name  of the file as details.csv 
   res.setHeader("Content-Disposition","Attachment;filename=details.csv");
   res.writeHead(200); //writeHeader //statusCode->200
   res.end('name,rollNO,school\n tushar raina ,34 ,taphar'); //end the response process
}
const simpleserver=http.createServer(listener);

simpleserver.listen(8080);
//csv-> comma seprated file