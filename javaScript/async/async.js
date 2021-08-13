// async & await
// clear style of using promise

// 1. async

async function fetchUser() {
  // async : 자동으로 promise, 간편하게 사용가능
  // do network request in 10 secs...
  return "soonyong";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return "🍎";
}

async function getBanana() {
  await delay(3000);
  return "🍌";
}

async function getWatermelon() {
  await delay(1000);
  return "🍉";
}

/* callback 헬
function pickFruits(){
    return getApple().then(apple=>{
        return getBanana().then(banana=>`${apple} + ${banana}`);
    });
}
pickFruits().then(console.log);
*/

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();

  const apple = await applePromise;
  const banana = await bananaPromise; //병렬 처리

  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful promise APIs

function pickAllfruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllfruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana(), getWatermelon()]); // race() -> 배열 전달된 promise중 가장 먼저 전달된것 리턴
}

pickOnlyOne().then(console.log);
