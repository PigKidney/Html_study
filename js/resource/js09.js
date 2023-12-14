
// parseInt() : 다양한 타입들을 Number타입 정수로 변환

console.log(parseInt(123.123));
console.log(parseInt('123456'));
console.log(parseInt('123.456'));

// 숫자가 될 수 없는 값은 NaN이 나온다
console.log(parseInt('FF00'));
console.log(parseInt('Lion'));

// 다른 진법 문자열을 정수로 변환할 수 있다
console.log(parseInt('FF00', 16));
console.log(parseInt('F7', 16));
console.log(parseInt('767', 8));

// 숫자를 문자열로 변환하기

let numStr = (123).toString();

console.log(`Value : ${numStr}, type: ${typeof numStr}`);

numStr =(123.1234).toString();
console.log(`Value : ${numStr}, type: ${typeof numStr}`);

// 숫자 인스턴스 생성하기
console.log(Number('abc')); // 숫자가 아닌걸 넣으면 NaN
console.log(Number('123.123'));
console.log(Number('12355'));
console.log(Number(1234));
console.log(Number(true));
console.log(Number(false));
console.log(Number(new Date()));

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

// Number에 .찍고 알아서 잘 활용할 것