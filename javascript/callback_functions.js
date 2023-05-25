//callback functions
/*function greet(){
  console.log('hello world');
}
 
 function sayName(name){
   console.log('hello'+ ' '+ name);
 }
  
  // calling the function
  ;
  setTimeout(greet,2000);
  sayName('Jhon');
*/


/*
function greet(name ,myFunction){
  console.log('hello world');
  myFunction(name); // calling of sayName function 
}

function sayName(name){
  console.log('hello'+' '+name);
}

setTimeout(greet,2000,'jhon',sayName);*/   //last two are arguments for the greet function
//.in above code greet is a asynchronous ftn 
// whereas sayName is synchronous ftn

/*let nums=[10,20,30];
console.log('we are learning setTimeout')
setTimeout(()=> {
  console.log('after 1 second');
  console.log(nums.length);
  console.log('statements inside are non-blocking')
},1000);
nums.forEach((num)=>{
  console.log(num);
});
console.log('statement outside are blocking');
*/

//nested callback function
/*console.log('zero');
setTimeout(()=>{
  console.log('one');
   console.log('two');
   setTimeout(()=>{
     console.log('three');
     console.log('four');
   },2000);
console.log('five');
},1000);
console.log('six');
*/

//callback hell example
/*function cheese(){
  console.log('add lots of cheese');
}
function patty(cheese){
  console.log('add veggies and patties');
  cheese();
}
function bun(patty){
  console.log('take two fresh buns');
  patty(cheese);
}
function burger(bun){
  setTimeout(()=>{
    bun(patty);
    console.log('our burger is ready');
  },2000);
}
burger(bun);
console.log('lets make a burger');
*/