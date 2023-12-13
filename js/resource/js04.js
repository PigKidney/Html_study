
const out = document.getElementById('out');


function println(value) {
    out.innerHTML += value + '<br>';
}

let num1 = 1234;
let num2 = 123.1234;

println(num1);
println(num2);

// typeof로 해당 값이 어떤 타입인지 문자열로 알려준다

println(typeof num1);
println(typeof num2);
println(typeof typeof num2);

//Number타입의 신기한 값 : infinity(무한), NaN(Not a Number)
println(10/0);
println(3*'abc');
println(typeof Infinity);
println(typeof NaN);


// Number타입의 다양한 진법 리터럴
println(10);    //10진수
println(0b10);  //2진수
println(0o10);  //8진수
println(0x10);  //16진수

println(16 == 0x10); // true

// String
let str1 = '김철수';
let str2 = "123.1234";
let str3 = '<div id="div1"></div>'

// ''를 쓴다면 내부에 '에 Escape가 필요하고
// ""를 쓴다면 내부에 ""에 Escape가 필요하다
str1 = '김\'철수\'';
str2 = "김'철수'";

println(typeof str1);
println(typeof str2);


// Boolean

let isPrime = true;
isPrime = false;

println(typeof isPrime);

// undefined

let abc;

println(abc); // 값 undefined
println(typeof abc); // undefined의 타입도 undefined

// null
let minsu = null;

println(minsu); // null : 현재 가리키는 인스턴스가 없다
println(typeof minsu); // Object 타입이다

// Array

let colors = ['red','tomato','orange','skybule'];
let arr1 = ['str',13,17,12.12,'abc'];

console.log(colors);
console.log(arr1);

println(colors);
println(arr1);

// Javascript Object (Java의 Map과 유사한 타입, Key와 Value를 가지고 있음)
let minwoo = {
    name: '민우',
    age: 20,
    math: 99
};

console.log(minwoo);

// 접근방식 2가지
console.log(minwoo['name']);
console.log(minwoo['age']);
console.log(minwoo['math']);


console.log(minwoo.name);
console.log(minwoo.age);
console.log(minwoo.math);

