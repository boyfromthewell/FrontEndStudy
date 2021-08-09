// objects
// 자바스크립트 데이터타입 중 하나
// a collection of related data and/or functionality
// object = { key : value };

// 1. literals and properties

const obj1 = {}; // object literal syntax
const obj2 = new Object(); // object constructor syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const soon = { name: "kwon", age: 5 };
print(soon);

soon.hasJob = false;
console.log(soon); //뒤늦게 정의도 가능

delete soon.hasJob;
console.log(soon.hasJob); //삭제도 가능

// 2. computed properties
// key shold be always string
console.log(soon.name);
console.log(soon["name"]);
soon["hasJob"] = false;
console.log(soon.hasJob);

// 3. property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("soon", 20);
console.log(person4);

// 4. constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  //return this
}

// 5. in operator: property 존재 체크
console.log("name" in soon);
console.log("age" in soon);

// 6. for..in vs for..of
//for (key in obj)
console.clear();
for (key in soon) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 3, 4];
for (value of array) {
  console.log(value);
}

// 7. fun cloning
//object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "kwon", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

// another way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

//another ex
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size); // blue big (값 계속 덮어 씌움)
