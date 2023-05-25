// Default constructor using this and new keyboards
function Laptop(){
   this.make='apple';
   this.model='Macbook';
   this.memory=['ssd', 'hdd'];
   this.cores=8;
   this.memorySize=[256, 1024];
}
 const laptop=new Laptop();
 console.log(laptop.make + ' , ' + laptop.model + '  ,  ' + laptop.cores);
 console.log(laptop.memory, laptop.memory[0], laptop.memory[1]);
 console.log(laptop.memorySize, laptop.memorySize[0], laptop.memorySize[1]);
 
 
 // parameterised constructor using this and new 
 function Laptop1(lapMake,lapModel,lapMemory,lapCores,lapMemorySize){
   this.make=lapMake;
   this.model=lapModel;
   this.cores=lapCores;
   this.memory=lapMemory;
   this.memorySize=lapMemorySize;
 }
 const laptop1=new Laptop1('apple','macbook',  ['ssd','hdd'] , 8 ,[256,1024])
console.log(laptop1.make + ' , ' + laptop1.model + '  ,  ' + laptop1.cores);
 console.log(laptop1.memory, laptop1.memory[0], laptop1.memory[1]);
 console.log(laptop1.memorySize, laptop1.memorySize[0], laptop1.memorySize[1]);