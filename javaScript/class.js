"use strict";
//object-oriendted programming
// class: template
// object: instance of a class
// javaScript classes
// -introduced in ES6

// 1. Class declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const soon = new Person("soonyong", 26);
console.log(soon.name);
console.log(soon.age);
soon.speak();

// 2. getter and setter

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    //if(value<0){
    // throw Error('age can not be negative!);
    //}
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("kwon", "soonyong", -1);
console.log(user1.age);

// 5. inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  //오버라이딩(재정의)
  draw() {
    super.draw(); //부모의 매소드 호출 가능
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `triangle: color: ${this.color}`;
  }
}
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

//6. class checking: instanceOf
console.log(rectangle instanceof Rectangle); //true
console.group(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true

console.log(triangle.toString());
