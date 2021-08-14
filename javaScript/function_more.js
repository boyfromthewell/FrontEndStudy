function add(num1, num2){
    return num1+num2;
}

function print(a, b){
    console.log(`${a} ${b}`);
}
print(1, 2);

const doSomething=add; //함수 정의된거 가르킴 

const result=doSomething(2,3);
console.log(result);

function surprise(operator){
    const result=operator(2,3); //add(2,3)
    console.log(result);
}

surprise(add);