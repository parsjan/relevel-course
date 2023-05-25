//localhost:8080

// maintaining a database of students 
//localhost:8080/1 -> show the details of student with roll no. 1
//local host :8080/2 -> show the details of student with roll no. 2

const http= require('http');

const listener=function(req,res){
    res.writeHead(200);
    switch (req.url) {
        case "/name":
           res.end("http server response : tushar raina ");
           break;
           case "/company":
            res.end("http server response : a reputed MNC");
            break;
        default:
            res.end("http server response : incorrect endpoint ");
            break;
    }
    console.log("server processing request");
}
const simpleserver=http.createServer(listener);

simpleserver.listen(8080);


