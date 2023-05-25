//use of this keyword
const person={
  name:'paras',
  place:'sagour',
  getBio: function(){
    //here this is bound to the object person
    console.log(this.name + 'lives in' + this.place);
    //console.log(name + 'lives in' + place); /* this will give the reference error in which it will tell name and place is not defined because name and place is not in the scope of getBio() function , hence we use this to tell it the scope of name and place is the object*\
  }
}
person.getBio();