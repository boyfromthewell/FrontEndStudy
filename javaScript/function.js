//function

// 1. function declaration
//function is object in JS

// 2. parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const soon = { name: "soon" };
changeName(soon);
console.log(soon);

// 3. default parameters (added in ES6)
function show(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
show("hi");

// 4. rest parameters (added in ES6)
// 배열형태로 전달
function printAll(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
}
printAll('kwon', 'soon', 'yong');

// 5. local scope
let global='global'; //전역 변수
function printMessage(){
    let message='hello'; //지역 변수
    console.log(message);
    console.log(global);
}
printMessage();

// 7. early return, early exit
// bad
function upgradeUser(user){
    if(user.point>10){
        //long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    //long upgrade logic...
}

// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer==='love you'){
        printYes();
    }
    else{
        printNo();
    }
}
const printYes=function(){
    console.group('yes!');
}
const printNo=function print(){
    console.log("no!");
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// arrow function
// always anonymous
const simplePrint=()=>console.log('simple print');
const add=(a,b)=>a+b;
const simpleMul=(a,b)=>{
    //do someting
    return a*b;
}

//IIFE: imediately invoked function expression
(function hello(){
    console.log('IIFE');
})(); //함수 바로 실행