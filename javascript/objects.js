// creating the object using object literal
// the easiest and the most common way of creating object is using object literal
const laptop= {
 make:'apple',
 model:'macbook pro',
  memory:['ssd', 'hdd'],
  memorySize:[256,1024],
  
};
console.log(laptop);
laptop.cores=8;
console.log(laptop);
delete laptop.memorySize;
console.log(laptop);
console.log(laptop.make);
console.log(laptop.model,laptop.memory );// most common way to access
console.log(laptop['make'], laptop['model']);// another way to access 
for(myKeys in laptop) {
  console.log(myKeys +'is having the value' + laptop[myKeys]);
}
//any javascript object can be converted into array using Object.values()
const myValues=Object.values(laptop);
console.log(myValues);
//const myKeysSet=Object.Keys(laptop);
//console.log(mykeysSet);
const myJSON=JSON.stringify(laptop)
console.log(myJSON);
console.log(typeof myJSON);

//**************************************
// nested objects 
 myObj={
  name:'paras',
  age:19,
  car:{
    car1:'maruti',
    car2:'honda',
    car3:'pulsar'
  }
};
console.log(myObj);
console.log(myObj.car);
console.log(myObj.car.car2);
//*************††**********************
//nested arrays and objects
const myCars={
  name:'paras',
  age:19,
  cars: [
    {name:'maruti',modles:['WagnoR','swift','alto']},
     {name:'honda', modles:['Bario','Amaze','City']},
     {name:'hundai', modles:['Creta','Verna']}
    ]
};
for(let i in myCars.cars){
  myStr='car make'+myCars.cars[i].name + 'with modles';
  for (let j in myCars.cars[i].modles) {
    myStr+=myCars.cars[i].modles[j]+',';
  //  console.log(myStr);
  }
  console.log(myStr);
  //console.log(myStr.toUpperCase());
}

//****†***************************""
//  javascript setter( the set keyword) and Getter (the get keyword)
 // i can secure better data quality 
 const person={
   firstName:'paras',
   language:'',
   set set_language(language_name){
this.language = language_name;
   },
   get get_language(){
     return this.language;
   }
 };
 // set is an object property setter:
 person.set_language='English';
 // display data from the object with getter 
 console.log(person.firstName + 'knows language' + person.language);
 console.log(person.firstName + 'knows language' + person.get_language);