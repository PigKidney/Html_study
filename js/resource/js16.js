// 배열은 []로 만든다
const fruits = ['사과','배','귤','참외','피망','포도','포도'];

console.log(fruits);
console.log(typeof fruits);

// push(item) : 배열의 맨 뒤에 요소를 추가한다. 추가 후 배열의 길이를 반환한다.
console.log(fruits.push('apple'));
console.log(fruits.push('kiwi'));


console.log(fruits);

// pop(item) : 배열의 맨 뒤 요소를 제거한다. 제거 후 제거한 요소를 반환한다
console.log(fruits.pop());  
console.log(fruits);


// shift() : 맨 앞의 값을 제거한다, 제거 후 제거한 요소를 반환한다
console.log(fruits.shift());
console.log(fruits);

// unshift(item) : 맨 앞에 값을 추가
console.log(fruits.unshift('용과'));
console.log(fruits);

// reverse() : 현재 배열의 순서를 거꾸로 바꾼다
console.log(fruits.reverse());
console.log(fruits);

// sort() : 배열안의 내용들을 정렬한다.
console.log(fruits.sort());

console.log('정렬 후:',fruits);

// sort(compareFn) : 내가 원하는 기준으로 배열안의 내용들을 정렬한다.
const numbers = [99, 1, 3, -50, 123, 88, 14, 15];

const myComparator = function (a,b) {
    if(a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
};

// const sorted = numbers.sort(function (a,b) {
//     if(a < b) {
//         return 1;
//     } else if (a > b) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// callback function
// 내림차순으로 정렬하기...
const sorted = numbers.sort(myComparator);
console.log(sorted);

/*

    1. 배열에 랜덤으로 1~45  사이의 숫자를 1000개 추가한다

    2. 각 숫자들이 나온 횟수를 센다

    3. 가장 많이 나온 숫자 6개를 HTML에 동그란 공모양으로 출력해준다

*/

const lottoNums = [];

function getLottoNums(time) {
    for(let i =0 ; i < time ; i++){
        lottoNums.push(parseInt((Math.random()*45)+1));
    }
    return lottoNums;
}

getLottoNums(1000);
lottoNums.sort()
console.log(lottoNums);

const arryLotto = [];
function countNums(lottoNums) {
    let counts = 0;
    for(let i =0 ; i < lottoNums.length ; i++){

        if(lottoNums[i] === lottoNums[i+1]) {
            counts++;
        } else {
            arryLotto.push(counts);
            counts=0;
        };
    };
}
countNums(lottoNums.sort());

const rank = [];
for (let [key, value] of arryLotto.entries()) {
    console.log(key+1 +' : ' + value);
    rank[key]=[key+1,value];
}
console.log(rank);

rank.sort((prev, cur) => {
    if (prev[1] > cur[1]) return -1;
    if (prev[1] < cur[1]) return 1;
});


console.log(rank.slice(0,6));

const finalLotto = [];
for(let i =0 ; i < 6 ; i++){
    finalLotto.push(rank[i][0]);
}

function numberSort(num1,num2){  
    return num1-num2
};

finalLotto.sort(numberSort);
// finalLotto.sort();

const boll = document.getElementById('boll');
boll.style.display = 'grid';
boll.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';
boll.style.padding = '4rem';
boll.style.borderRadius = '80px';
boll.style.backgroundColor = 'rgba(128, 128, 128, 0.3)';

console.log(finalLotto);

function newBoll (nums) {
    const div = document.getElementById(nums);
    const num = div.innerText;
    if(num>0 && num<=10){
        div.style.backgroundColor = '#FFCF00';
    } else if(num>10 && num<=20){
        div.style.backgroundColor = '#0047a0';
    } else if(num>20 && num<=30){
        div.style.backgroundColor = '#cd2e3a';
    } else if(num>30 && num<=40){
        div.style.backgroundColor = '#343a40';
    }  else if(num>40 && num<=45){
        div.style.backgroundColor = '#28a745';
    }
    div.style.borderRadius = '150px';
    div.style.width = '150px';
    div.style.height = '150px';
    div.style.textAlign = 'center';
    div.style.color = 'white';
    div.style.fontSize = '50px'
    div.style.fontWeight ='1000'
    div.style.lineHeight = '140px';
    div.style.textShadow = '0 1px 2px black';
    div.style.boxShadow = '0 2px 4px rgba(128, 128, 128, 0.39)';
}


function addDiv(value) {
    for(let i = 0 ; i < 6 ; i++){
        boll.innerHTML += '<div id=\''+i+'\'>' + value[i] + '</div>';
        new newBoll(i);
    }
    
}

addDiv(finalLotto);

///////////////////////////////////////////////

const lottoDiv = document.getElementById('lotto');

function LottoNum(num, cnt) {
    this.num = num;
    this.cnt = cnt;
}

const lottoNm = [];
for(let i =0 ; i < 1000 ; i++){
    lottoNm.push(parseInt((Math.random()*45)+1));
}

const lottoCnt = [];
for(let i = 0; i < 45; ++i){
    lottoCnt[i]= new LottoNum(i + 1, 0);
}

for(let i =0 ; i < 1000 ; i++){
    lottoCnt[lottoNm[i]-1].cnt++
}

lottoCnt.sort((a,b) => {
    return b.cnt - a.cnt;
});


lottoDiv.innerHTML += `<div>${lottoCnt[0].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[1].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[2].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[3].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[4].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[5].num}</div>`;
