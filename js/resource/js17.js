

const numbers = [];

for (let i = 0; i < 10; ++i) {
    numbers[i] = i;
}

console.log(numbers);




/*
# 배열.prototype.forEach 

- 배열의 모든 값을 하나씩 순서대로 꺼내서 전달한 함수를 실행
- 전달한 함수에 첫 번째 인자로 해당번째 요소를 전달된다
- 전달한 함수에 두 번째 인자로 인덱스가 전달된다
- 전달한 함수에 세 번째 인자로 원본 배열이 전달된다
- 반드시 모든 인자를 다 받을 필요는 없다 (필요한 경우에만 꺼내서 사용)

*/
const myFunction = function (item, index, srcArr) {
    // console.log(item*10, `${index}번째 실행입니다.`,'원본:',srcArr);
    console.log(`number[${index}]: ${item}`);
}

numbers.forEach(myFunction);

/*
    # 배열.prototype.map

    - 값을 하나씩 순서대로 꺼내면서 해당 값을 사용해 결과를 리턴한다
    - 리턴한 결과들로 구성된 새로운 배열을 리턴한다
    - map에 전달하는 콜백함수는 반드시 결과를 리턴해야 한다
*/

const scores = [80, 55, 60, 99, 100, 70, 72, 30];

const resultArr = numbers.map((item, index) => {
    return item + 5;
})

// 점수 배열로 등급 배열 생성해보기
const grades = scores.map((score) => {
    if (score > 100 || score < 0) {
        return 'F';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
})


const getGrade = (score) => {
    if (score > 100 || score < 0) {
        return 'F';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

const students =  scores.map((score) => ({score: score, grade: getGrade(score)}));

console.log(resultArr);
console.log(grades);
console.log(students);


/*
    # 배열.prototype.filter

    - 배열의 모든 값을 순차적으로 하나씩 꺼내면서 전달한 함수의 기준을
      통과하는 것만 남겨놓는 함수
    - filter에 전달하는 콜백함수는 반드시 boolean타입 값을 리턴해야한다
    - true를 리턴하는 요소는 남게 되고 false를 리턴하는 요소는 걸러지게 된다


*/

// 60점 미만인 점수만 남겨놓고 싶은 경우
const filtered = scores.filter((score) => {return score < 60;});
// 등급이 F인 객체만 남겨놓고 싶은 경우
const fs = students.filter((student) => {return student.grade === 'F';});
console.log(filtered);
console.log(fs);


/*

    # 배열.prototype.reduce

    - 배열의 모든 요소를 하나로 취합한다
    - 전달한 함수의 결과를 다음 반복에 계속해서 사용한다

*/

// 총합 구하기


const sum = scores.reduce((precScore, currScore, index) => {
    console.log(`## ${index}번째 반복 ##`);
    console.log('prev:', precScore);
    console.log('curr:', currScore);

    return precScore + currScore;
});

console.log('총합 : ', sum);


const min = scores.reduce((minScore, currScore) => {
    return minScore < currScore ? minScore : currScore;
});


const max = scores.reduce((maxScore, currScore)=> maxScore > currScore ? maxScore : currScore);

console.log('총합 : ', sum);
console.log('가장 낮은 점수 : ', min);
console.log('가장 높은 점수 : ', max);

/*

    # 배열.prototype.some

    - 조건을 만족하는 요소가 하나 이상 있는지 검사한다

*/

const fruits = ['apple','banana','orange','melon', 'pineapple'];

// 과일 중에 참외가 있는지 검사해보기
const result1 = fruits.some((fruit) => {
    return fruit === '참외';
});

// 과일 중에 apple이 있는지 검사해보기
const result2 = fruits.some((fruit) => fruit === 'apple');

// 과일 중에 apple이 포함된 과일이 있는지 검사해보기
const result3 = fruits.some((fruit) => fruit.includes('apple'));


console.log(result1);
console.log(result2);
console.log(result3);

/*

    1. 100명의 랜덤 학생 정보를 생성한다 (학생 객체는 학번, 이름, 국어, 영어, 수학울 가지고 있음)
    2. 모든 학생 객체에 평균 점수 속성을 추가해보기
    3. 평균 점수가 60점 미만인 학생들로만 이루어진 배열을 생성해보기
    4. 모든 학생들의 평균 영어점수를 계산해보기
    5. 2번 3번 4번의 내용을 HTML에 테이블 형식으로 정리해놓기

*/

const firstName = ['김','이','박','윤', '황','권','양','최','강','조','정','신'];

const lastName = ['민준','서준','도윤','예준', '시우','하준','지호','주원','지후','준우','서윤','서연','지우','하윤','서현','하은','민서','지유','윤서','채원'];

let count = 0;
function RandomStudents(){
    this.name = getRanName();
    this.studentNum = `EZ00${count++}`;
    this.korS = getRanScore();
    this.engS = getRanScore();
    this.mathS = getRanScore();
}

function getRanScore() {
    return parseInt((Math.random()*100)+1);
};

function getRanName() {
    return firstName[parseInt(Math.random()*firstName.length)]+lastName[parseInt(Math.random()*lastName.length)];
};
// const maxSize = 100;
// const school = new Array(maxSize);
const school = [];
for (let i = 0; i < 100; ++i) {
    school[i] = i;
}

// school[0].__proto__.avg = function(){
//     this.avg = school[0].korS + school[0].engS + school[0].mathS;
    
// }
// school[0].avg();

const getRanStudent = function (item, index) {
    item = new RandomStudents();
    item.avg = parseInt((item.korS + item.engS + item.mathS)/3);
    console.log(`[${index}].Student [${item.name}]: ${item.studentNum} ${item.korS} ${item.engS} ${item.mathS} 평균 :${item.avg}`);
}


school.map(getRanStudent);
// console.log(school.avg);



const failScore = school.filter((student) => {return student.avgs < 60;});

const totalEngSSum = school.reduce((precScore, currScore, index) => {
    console.log(`## ${index}번째 반복 ##`);
    console.log('prev:', school[index].engS);
    console.log('curr:', currScore.engS);

    return precScore.engS + currScore.engS;
});
console.log(totalEngSSum);
console.log(failScore);