 // Create a class named "Model" which will inherit the methods from the "Car" class:
 class Car {
   constructor(brand) {
     this.carname = brand;
   }
   get cnam() {
     return this.carname;
   }
   set cnam(x) {
     this.carname = x;
   }
   present() {
     return 'I have a ' + this.carname;
   }
 }

 class Model extends Car {
   constructor(brand, mod) {
     super(brand); // super() method refers to the parent class.
     this.model = mod;
   }
   show() {
     return this.present() + ', it is a ' + this.model;
   }
 }

 let myCar = new Model("Hundai", "Verna");
 console.log(myCar.show());
 myCar.cnam = "Maruti";
 console.log(myCar.cnam);