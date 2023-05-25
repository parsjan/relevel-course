//creating object using the New keyword
const laptop = new Object();
console.log(laptop);
laptop.make='apple';
laptop.model='macbook'
laptop.memory=['ssd','hdd'];
laptop.cores=8
laptop.memorySize=[256,1024];
console.log(laptop.make+ ' , ' + laptop.model  + '  ,  ' + laptop.cores);
console.log(laptop.memory , laptop.memory[0] , laptop.memory[1]);
console.log(laptop.memorySize , laptop.memorySize[0], laptop.memorySize[1]);