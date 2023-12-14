

console.log(add(1, 3));
console.log(x); // x가 undefined
console.log(add(22));

// 함수선언, 변수선언 등은 코드의 위치와 상관없이 우선적으로 실행된다.
function add(num1){
    return num1 + x;
}

// 변수 선언은 먼저 실행되지만 대입은 나중에 일어나기 때문에 발생하는 현상
var x = 10;

console.log(x); // x에 10이 들어가 있음
console.log(add(22));


// 함수의 기본적인 선언은 function 키워드를 사용한다
// 리턴 타입은 적지 않는다
function mul3(num) {
    console.log(num*3);
}

// 리턴이 없는 함수는 undefined를 리턴한다.
mul3(123);
console.log(mul3(234));

// 자바스크립트의 함수는 변수에 넣을 수 있다

// mul3을 그냥 쓰는 것 : mul3이라는 함수 그 자체를 의미
let myFunction = mul3; 

// mul3()를 쓰는 것 : mul3이라는 함수를 실행하고 결과를 리턴받아 사용하겠다는 뜻
let myFunctionResult = mul3();

// 저장된 함수 출력해보기
console.log(myFunction);

// 저장된 함수 실행해보기
myFunction(10);



// 함수 표현식 : 변수에 함수를 넣어놓는 방식으로 선언하는 것
const gop2 = function (num) {
    return num * 2;
}

// 함수 표현식으로 선언한 함수는 변수명으로만 실행할 수 있다

console.log(gop2(123));

// 함수 표현식 축약형 (화살표 함수)
const gop4 = (num) => {
    return num *4;
};

console.log(gop4(5));

// 화살표 함수 사용시 해당 함수의 내용이 리턴 한 줄이라면 다음과 같이 축약할 수 있다
// (상황에 따라 (), return, {}를 생략 가능)
const gop5 = num => num*5; // 매개 변수가 하나일때는 ()도 생략 가능
const gop6 = (num1,num2) => num1*num2; // 매개 변수가 두개이상일때는 ()를 써야함

console.log(gop5(3));
console.log(gop6(5,6));

// 함수 표현식은 선언과는 다르게 밑에 있으면 사용할 수 없다
// console.log(gop8(33));

const gop8 = num => console.log(num*8);

var count;
function gop9(num) {
    count++;
    return num * 9;
}

gop9(3);

console.log(count);