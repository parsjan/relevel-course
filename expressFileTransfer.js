var expressJs=require("express");
var path=require("path");
var fs=require("fs");
var expressApp=expressJs();

//1st middleware -> logging 
expressApp.use(function(req,res,next){
    console.log("Incoming request");
    console.log( req.url);
    next();
})

//2nd middleware 
//check the request url and see if it is valid file name
expressApp.use(function(req,res,next){

     
    //create the path of the file
    //filepath=>e:\relevel js course\nodejs/file1.txt
    //__dirname => e:\relevel js course\nodejs 
    //req.url => /file.txt
    console.log(__dirname + " is dirname");
    var filePath=path.join(__dirname,req.url);
   //path.join(a,b)=> ab
    
    //fs.stat() is used to return information mentioned in the given file.
    fs.stat(filePath,function(err,fileInfo){
        if(err){
            next();
            return;
        }
        if(fileInfo.isFile()){
            res.sendFile(filePath);
        }
        else{
            next();
        }
    });

});


//3rd middleware
expressApp.use(function(req,res,next){
    console.log("Incorrect URL");
    console.log( req.url);
    next();  
});


expressApp.listen(4000,function(){
 console.log("server is requesting "); 
});