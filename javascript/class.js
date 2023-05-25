// class declaration:To declare a class , use a keyword "class" with the name
class Circle1{
  constructor(radius){
    this.radius=radius;
  }
}
const circle1=new Circle1(5);
console.log(circle1.radius);

//class expression: it can be named or unnamed 
// unnamed:
let circle2= class{
  constructor(radiusArg){
    this.radiusProp=radiusArg;
  }
};
//console.log(circle2);
console.log(circle2.name);
const circleObj2=new circle2(500);
console.log(circleObj2.radiusProp);

//named:
let circle = class Circles3{
  constructor(radiusArg)  {
    this.radiusProp=radiusArg;
  }
};
console.log(circle.name);
const circleObj3= new circle(300);
console.log(circleObj3.radiusProp );