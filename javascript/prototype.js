function Vehicle(brand,model,price,speed,wheel){
  this.name={
    'brand':brand,                 //object
    'model' :model                 //   | (inherits from prototype)
  };                               //vehicle
  this.price=price;                //    |  (inherits from prototype)
  this.speed=speed;                //car 
  this.wheel=wheel;
}
let car=new Vehicle('hundai','accent',500000,200,4);
console.log(car);
console.log(car.name, car.name.model, car.name.brand);
// there are some other pre-defined methods and properties like toString ,valueOf, etc.
console.log(car.toString());
console.log(car.valueOf());

Vehicle.prototype.color='red'     //adding properties to the prototype
Vehicle.prototype.feature= function(){
  console.log(this.name.brand + '  ' + this.name.model + ' has a power steering');
}
console.log('color of car is :' + car.color );
car.feature();