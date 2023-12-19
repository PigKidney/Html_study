// setItem(key, value) : 해당 스토리지에 데이터를 저장한다
sessionStorage.setItem('money', 5000);
localStorage.setItem('age', 80);

// removeItem(key) : key를 사용해 해당 데이터를 삭제한다
// sessionStorage.removeItem('money');

// getItem(key) : key를 사용해 저장된 value를 꺼낸다
const data = sessionStorage.getItem('money');
const data2 = localStorage.getItem('age');
const data3 = sessionStorage.getItem('age');

// 스토리지는 F12 개발자도구를 눌러 찾아가서 확인할 수 있다
console.log(data);
console.log(data2);
console.log(data3);



const grid = document.getElementById('grid');
const boxs = document.querySelector('grid>:first-child');

let boxCount = 1;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createFristSpan() {
    const span = document.createElement('span');
    span.innerText = boxCount++
    span.classList.add('box');
    span.style.zIndex = 99;
    return span;
}


function createSecondSpan() {
    const span = document.createElement('span');
    span.innerText = boxCount++
    span.classList.add('box');
    span.classList.add('second');
    span.style.zIndex = 60;
    return span;
}

const createBoxDiv = () => {
    const boxs = document.createElement('div');
    boxs.classList.add('zone');
    boxs.appendChild(createNumSpan());
    return boxs;
}
let setBox = [];

for (let i = 0; i < 25; i++) {
    setBox.push(createFristSpan());
}

shuffle(setBox);
for (let i = 0; i < 25; i++) {
    grid.appendChild(setBox[i]);
}

let nextBox=[];

for (let i = 0; i < 25; i++) {
    nextBox.push(createSecondSpan());
}
shuffle(nextBox);

for (let i = 0; i < 25; i++) {
    grid.appendChild(nextBox[i]);
}

let goleNum = 1;
grid.addEventListener('click', (e) => {
    if(e.target.innerText == goleNum){
        e.target.remove();
        // e.target.appendChild(nextBox.shift());
        goleNum++;
    }
});

