let users=[{"id":"1"
        ,"name":"tushar raina"
        ,"email":"tushar@gmail.com"}
        ,{"id":"2"
        ,"name":"sachin tendulakr"
        ,"email":"sachin@gmail.com"}

];

const id =1;

 
users=users.filter((users)=>{
    if(users.id != id){
        //whatever id is not equal to the mentioned id , it will stay in the array.
        return true;
    }
    return false;
});

//use case: remove the user with id 1
//it will iterate over all the elements of user array and  call the function inside it for each one of them. 
console.log(users);