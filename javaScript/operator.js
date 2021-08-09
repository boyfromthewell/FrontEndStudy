// 1. string concatenation

console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals:
''''
1+2=${1 + 2}`);

console.log("soon's book");

// 2. numeric operators

//3. increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//연산하고 할당
console.log(`{preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
//할당후 연산
console.log(`{postIncrement: ${postIncrement}, counter: ${counter}`);

// 6. logical operators
const value1 = false;
const value2 = 4 < 2;

// || or
console.log(`or: ${value1 || value2 || check()}`);
// && (and)
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    console.log("x");
  }
  return true;
}

// 7. equality
const stringFive = "5";
const numberFive = 5;

// == loose equality (값 같으면 괜찮)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality (타입도 같아야함)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const soon1 = { name: "soon" };
const soon2 = { name: "soon" };
const soon3 = soon1;
console.log(soon1 == soon2); //false
console.log(soon1 === soon2); //false
console.log(soon1 === soon3); //true;

//9. ternary operator: ?
// condition ? value1 : value2;
const name = "soon";
console.log(name === "soon" ? "yes" : "no");

//
for(let i=0; i<=10; i++){
    if(i%2!==0){
        continue;
    }
    console.log(i);
}
for(let i=0; i<10; i++){
    if(i==8)
        break;
    console.log(i);
}
