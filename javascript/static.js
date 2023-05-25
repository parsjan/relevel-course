// use of static concepts
class circle{
  static shape;
  static {
    this.shape='circle'; // here the static variable is assigned in the static scope 
  }
  
  // static method
  static circumference(radius){
    return 2*Math.PI* radius;
  }
  constructor(radius,... generatorInput){ // '...'is spreader operator it means the parameters other than radius will be stored in an array name generatorInput
    this.radius=radius;
    console.log(generatorInput);
  } 
  //Getter method
  get area(){
    return this.calArea;
  }
  //method
  calArea() {
    return Math.PI*this.radius*this.radius;
  }
};
const Circle=new circle(5);
console.log(Circle.shape , circle.shape);
console.log(circle.circumference(5));
//console.log(circle.calArea());
console.log(Circle.calArea());
console.log(Circle.area());
const circle1 = new circle(17,18,'paras');
console.log(circle1.calArea());
