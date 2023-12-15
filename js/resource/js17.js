

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

const students = scores.map((score) => ({ score: score, grade: getGrade(score) }));

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
const filtered = scores.filter((score) => { return score < 60; });
// 등급이 F인 객체만 남겨놓고 싶은 경우
const fs = students.filter((student) => { return student.grade === 'F'; });
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


const max = scores.reduce((maxScore, currScore) => maxScore > currScore ? maxScore : currScore);

console.log('총합 : ', sum);
console.log('가장 낮은 점수 : ', min);
console.log('가장 높은 점수 : ', max);

/*

    # 배열.prototype.some

    - 조건을 만족하는 요소가 하나 이상 있는지 검사한다

*/

const fruits = ['apple', 'banana', 'orange', 'melon', 'pineapple'];

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

const firstName = ['김', '이', '박', '윤', '황', '권', '양', '최', '강', '조', '정', '신'];
const lastName = ['민준', '서준', '도윤', '예준', '시우', '하준', '지호', '주원', '지후', '준우', '서윤', '서연', '지우', '하윤', '서현', '하은', '민서', '지유', '윤서', '채원'];

const getRanfirstName = () => firstName[parseInt(Math.random() * firstName.length)];
const getRanlastName = () =>  lastName[parseInt(Math.random() * lastName.length)];
const getRanName = () => getRanfirstName() + getRanlastName();
const getRanScore = () =>  parseInt(Math.random() * 101);


let stuNum = 0;

function Student() {
    this.name = getRanName();
    this.studentNum = `STU${stuNum++}`;
    this.kor = getRanScore();
    this.eng = getRanScore();
    this.math = getRanScore();

}

const students2 = [];

for (let i = 0; i < 100; ++i) {
   students2.push(new Student());
}

console.log(students2);

// 모든 학생들에게 평균 필드 추가하기
students2.forEach(stu => stu.avg = (stu.kor + stu.eng + stu.math) / 3 );

console.log(students2);

// 평균 점수 60점 미만 학생 배열 만들기
const fstus = students2.filter(stu => stu.avg < 60);
console.log(fstus);

// 각 과목 평균점수 계산하기
// 1. 총점을 구하는 함수
// 2. 총점을 전체 길이로 나눠서 평균을 구하는 함수

// 총합 결과에 .kor을 할 수 없으므로 문제가 생김...
// students2.reduce((stu1, stu2) => stu1.kor + stu2.kor);

// reduce에 두 번째 인자값으로 초기값을 전달해주면
// 첫 번째 반복을 초기값으로 진행할 수 있음
const getTotal = sub =>  students2.reduce((tot, stu) => tot + stu[sub], 0);

console.log('국어 총합:', getTotal('kor'));
console.log('영어 총합:', getTotal('eng'));
console.log('수학 총합:', getTotal('math'));

const getSubjectAvg = sub => getTotal(sub) / students2.length;

console.log('국어 평균:', getSubjectAvg('kor'));
console.log('영어 평균:', getSubjectAvg('eng'));``
console.log('수학 평균:', getSubjectAvg('math'));

const allStudentsTable = document.getElementById('all-students');
const badStudentsTable = document.getElementById('bad-students');


const addRow = (table,stu) => {
     table.innerHTML +=
      `<div>${stu.studentNum}</div>`
      +`<div>${stu.name}</div>`
      +`<div>${stu.kor}</div>`
      +`<div>${stu.eng}</div>`
      +`<div>${stu.math}</div>`
      +`<div>${stu.avg}</div>`
}

students2.forEach(stu => addRow(allStudentsTable, stu));
fstus.forEach(stu => addRow(badStudentsTable, stu))

/*

let count = 0;
function RandomStudents() {
    this.name = getRanName();
    this.studentNum = `EZ00${count++}`;
    this.korS = getRanScore();
    this.engS = getRanScore();
    this.mathS = getRanScore();
}



function getRanScore() {
    return parseInt((Math.random() * 100) + 1);
};

function getRanName() {
    return firstName[parseInt(Math.random() * firstName.length)] + lastName[parseInt(Math.random() * lastName.length)];
};


const school = [];
for (let i = 0; i < 100; ++i) {
    school[i] = new RandomStudents();
    school[i].avg = parseInt((school[i].korS + school[i].engS + school[i].mathS) / 3);

}

console.dir(school);

school.avg = function() {
    console.log(parseInt((school[i].korS + school[i].engS + school[i].mathS) / 3));
}

let koravg = 0;
let engavg = 0;
let maxavg = 0;
let mathavg = 0;
for (let i = 0; i < 100; ++i) {
    maxavg += school[i].avg
    engavg += school[i].engS
    koravg += school[i].korS
    mathavg += school[i].mathS
}

const maxscore = school.reduce((precstudent, currstudent) => {
    console.log(precstudent.engS);
    console.log(currstudent.engS);
    return precstudent.engS + currstudent.engS;
});

console.log('총합 : ', maxscore);

koravg = parseInt(koravg / 100);
engavg = parseInt(engavg / 100);
maxavg = parseInt(maxavg / 100);
mathavg = parseInt(mathavg / 100);
console.log('전체 학생 평균 : ', maxavg);
console.log('영어 점수 평균 : ', engavg);
console.log('국어 학생 평균 : ', koravg);
console.log('수학 점수 평균 : ', mathavg);


let failScore = school.filter((student) => student.avg < 60);
console.dir(failScore);





const schooltable = document.getElementById('school');
schooltable.style.textAlign = 'center';
schooltable.style.width = '500px'
schooltable.style.margin = '1px'
schooltable.style.borderCollapse = 'collapse'




// schooltable.innerHTML += `<tr><th>${school[0].num}</th></tr>`;
schooltable.innerHTML +=
    `<tr style="background-color: black; color: white;" ><th>학번</th><th>이름</th><th>국어</th><th>영어</th><th>수학</th><th>평균</th></tr>`;

function addstudentInfo() {

    for (let i = 0; i < 100; i++) {
        schooltable.innerHTML +=
            `<tr><td>${school[i].studentNum}</td> <td>${school[i].name}</td><td>${school[i].korS}</td>
        <td>${school[i].engS}</td><td>${school[i].mathS}</td><td>${school[i].avg}</td></tr>`;
    }

}
addstudentInfo();

schooltable.innerHTML +=
    `<tr><th colspan="6" style="background-color: black; color: white;" >평균 점수 60점 미만 학생들</th></tr>`;

function addfailStudent() {

    for (let i = 0; i < failScore.length; i++) {
        schooltable.innerHTML +=
            `<tr><td>${failScore[i].studentNum}</td> <td>${failScore[i].name}</td><td>${failScore[i].korS}</td>
        <td>${failScore[i].engS}</td><td>${failScore[i].mathS}</td><td>${failScore[i].avg}</td></tr>`;
    }

}

addfailStudent();

schooltable.innerHTML +=
    `<tr><th colspan="6"  style="background-color: black; color: white;" >학생들 각점수 평균</th></tr>`;
schooltable.innerHTML +=
    `<tr><th colspan="2">국어평균</th><th colspan="2">영어평균</th><th colspan="2">수학평균</th></tr>`;

schooltable.innerHTML +=
    `<tr><td colspan="2">${koravg}</td><td colspan="2">${engavg}</td><td colspan="2">${mathavg}</td></tr>`;

 */