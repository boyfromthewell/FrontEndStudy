"use strict";

// Promise is a JavaScript object for asynchronous operation.
// state : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically

const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("kwon soon"); //성공시

    reject(new Error("NO NETWORK")); //실패시
  }, 2000);
});

// 2. Consumers : then, catch, finally

promise
  .then((value) => {
    console.log(value); // then() -> resolve에서 전달한값 들어옴
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally"); // finally() -> 성공하던 실패하던 수행
  });

// 3. Promise chaining

const fetchNum = new Promise((resove, reject) => {
  setTimeout(() => resove(1), 1000);
});

fetchNum
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error ! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then(hen=>getEgg(hen))
  .catch(error=>{
      return '🍞'; // 전달받은 에러 빵으로 대체
  })
  .then(egg=>cook(egg))
  .then(meal=>console.log(meal))
  .catch(console.log);