//this is object constructor function or blueprint
function Person(first, last, age, eye) {   
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");  //Objects of the same type are created by calling the constructor function with the "new" keyword
console.log(myFather.age)

myFather.nationality = "Indian";   //adding new property to object
console.log(myFather.nationality)

myFather.age = 51;     // updating property of object
console.log(myFather.age)

console.log(myFather.constructor)  //find constructor of an object
console.log(myFather instanceof Person)   // returns true

var obj1 = { State: "karnataka" }
var obj2 = { PinCode: 560048 }
Object.assign(myFather, obj1, obj2)  //Object.assign takes parameter as target followed by different sources and add all sources to target
console.log(myFather)
console.log(myFather.PinCode)

//few important object methods
console.log(Object.keys(myFather))   // gives list of keys
console.log(Object.values(myFather))   // gives list of values

//inbuilt javascript constructors
var x1 = new Object();    // A new Object object
var x2 = new String();    // A new String object
var x3 = new Number();    // A new Number object
var x4 = new Boolean();   // A new Boolean object
var x5 = new Array();     // A new Array object
var x6 = new RegExp();    // A new RegExp object
var x7 = new Function();  // A new Function object
var x8 = new Date();      // A new Date object
