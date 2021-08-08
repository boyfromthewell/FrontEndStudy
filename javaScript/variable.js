//js=very flexible
//flex=dangerous

'use strict'; // 비상식적인 문법 사용 x 

// 2.variable
// let( added in es6)

let globalName='global name';
{
    let name='soon';
    console.log(name);
    name='hello';
    console.log(name);
}
 console.log(name);
 console.log(globalName);

 // var(사용 xxxxxxxxxxxxxx)

 // 3. Contants
 // immutable data type
 // -security
 // -thread safety
 // -reduce human mistakes

 // 4. variable types

 const count=17;
 const size=17.1;
 console.log(`value : ${count}, type: ${typeof count}`);
 console.log(`value : ${size}, type: ${typeof size}`);

 //number -speicla numeric values : infinity, -infinity ,NaN
 const infinity=1/0;
 const negativeInfinity=-1/0;
 const nan='not a number'/2;
 console.log(infinity);
 console.log(negativeInfinity);
 console.log(nan);

 // string
 const char='c';
 const brendan='brendan';
 const greeting='hello '+brendan;
 console.log(`value: ${greeting}, type : ${typeof greeting}`);
 const helloBob=`hi ${brendan}!`;
 console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

 //boolean
 //false: 0, null, undefined, NaN,''
 //true : any other value
 const canRead=true;
 const test=3<1;
 console.log(`value: ${canRead}, type: ${typeof canRead}`);
 console.log(`value: ${test}, type: ${typeof test}`);

 //null
 let nothing=null;
 console.log(`value: ${nothing}, type: ${typeof nothing}`);

 //undefined
 let x;
 console.log(`value: ${x}, type: ${typeof x}`);

 //symbol, create unique identifiers for objects
 //고유한 식별 번호 만들어줌
 const symbol1=Symbol('id');
 const stymbol2=Symbol('id');
console.log(symbol1===stymbol2); //false
const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const soonyong={
    name: 'soonyong',
    age: 20
};
soonyong.age=26;

// 5. dynamic typing: dynamically typed language
let text='hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text=1;
console.log(`value: ${text}, type: ${typeof text}`);
text='7'+5; //75
console.log(`value: ${text}, type: ${typeof text}`);
text='8'/'2'; //4
console.log(`value: ${text}, type: ${typeof text}`);

