'use strict';

// array

// 1. declaration

const arr1=new Array();
const arr2=[1,2];

// 2. index position
const fruits=['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

// 3. looping over an array
//print all fruits
// a. for
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach 
fruits.forEach((fruit, index)=> console.log(fruit)); //배열 value마다 내가 전달한 함수 출력

// 4. addition, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'orange');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('strawberry', 'lemon');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift -> pop, push보다 매우 느림
//splice: remove an item by index position
fruits.push('peach', 'lemon');
console.log(fruits);
fruits.splice(1,1); //인덱스 1 부터 한개만 지우기
console.log(fruits);
fruits.splice(1,1, 'watermelon'); //지우고 그자리에 추가도 가능
console.log(fruits);

// combine two arrays
const fruits2=['mango', 'melon'];
const newFruits =fruits.concat(fruits2);
console.log(newFruits);

// 5. searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));

console.log(fruits.includes('orange')); //있는지 없는지

// lastIndexOf
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));