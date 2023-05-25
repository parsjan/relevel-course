 let ranks =[ 'a','b','c'];
  //using for loop 
  for (let i=0 ; i<ranks.length ;i++){
    console.log(ranks[i]);
  }
  //Issues :  1. its complexity grows when you nest a loop inside another loop.
  //          2. keeping track of multiple variables inside the loops is error prone .

  //for...of/each : to elinimate standard loop complexity and avoid errors caused by keeping track of loop indexes .

  for (let rank of ranks ){
    console.log(rank);
  }
  //shows the true intent of the code 

  //for...of loop has the ability to create a loop over any iterable object not just an array 

  //Javascript iterators and iterables:
  //----------------------------------

  //JS provides a protocol to iterate over the  data structure 
  
//iterator 
//itrable 

//iterable:
//--------

//the data structures that have the Symbol.iterator() method are called iterables .
//eg , arrays ,strings ,sets  etc.

//itrators:
//--------

// an iterator is an object that is retuned by the Symbol.iterator() method .


const number=[1,2,3];
for(let n of number[Symbol.iterator]()){
    console.log(n);
}

for(let n of number){
    console.log(n);
}


//javascript .next() method returns the next item in the sequence 
//.next() method contains two propities :
//value: value property can be of any data type and represents the current value of sequence 
// done: done property  is a boolean value that indicates whether  the iteration is complete  or not 

const arr =['h','e','l','l','o'];
 let  arrIterator = arr[Symbol.iterator]();
 console.log(arrIterator.next());
 console.log(arrIterator.next());
 console.log(arrIterator.next());
 console.log(arrIterator.next());
 console.log(arrIterator.next());
 console.log(arrIterator.next());
 console.log(arrIterator.next());




 //user defined iterator: 
 //---------------------
 function displayElement(arr){
    let n=0;
    return{
      //implementing the next() function

      next(){
        if(n<arr.length){
             return {
              value:arr[n++],
              done:false
             }
        }

        else{
          return{
            value:undefined,
            done:true
          }
        }
    }
    }
 }
// displayElements function is returning an iterator object .
 const arrIterator1=displayElement(arr);
 console.log(arrIterator1.next());
 console.log(arrIterator1.next());
 console.log(arrIterator1.next());
 console.log(arrIterator1.next());
 console.log(arrIterator1.next());
 console.log(arrIterator1.next());
 console.log(arrIterator1.next());


 //generator 
 //you can stop the execution of the function or  continue executing code from a halted position 
 
 
 //inversion  of control 