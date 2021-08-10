// JSON
//javascript object notation

// 1. object to JSON
// stringfy(obj)
let json=JSON.stringify(true);
console.log(json);

json=JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit={
    name: 'soon',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: ()=>{
        console.log(`${this.name} can jump!`);
    },
};

console.log(typeof(rabbit));
json=JSON.stringify(rabbit);
console.log(json);

json=JSON.stringify(rabbit, ['name']); //원하는 property만 가능
console.log(json); 

json=JSON.stringify(rabbit, (key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key==='name' ? 'kwon' : value; //세밀하게 통제도 가능 ( name 이라는 key 들어오면 이름 kwon으로 바까줌)
});
console.log(json);
console.log(typeof(json)); //object에서 string으로 변환!!!!!!!

// 2. JSON to object
// parse(json)
console.clear();
json=JSON.stringify(rabbit);
const obj=JSON.parse(json ,(key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key==='birthDate' ? new Date(value):value;
});
console.log(obj);
console.log(typeof(obj));

rabbit.jump();
// obj.jump() -> 실행 x (json으로 바꿀때 함수는 포함 안됬으므로, 다시 obj로 변환해도 없음)

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);