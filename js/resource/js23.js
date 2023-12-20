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
const secondStage = document.createElement('div');

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
    span.classList.add('frist');
    // span.style.zIndex = 99;
    return span;
}


function createSecondSpan() {
    const span = document.createElement('span');
    span.innerText = boxCount++
    span.classList.add('box');
    span.classList.add('second');
    // span.style.zIndex = 60;
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

let nextBox = [];
for (let i = 26; i <= 50; i++) {
    nextBox.push(i);
}
shuffle(nextBox);

let goleNum = 1;
let x = 0;
const interval_id1 = null;

grid.addEventListener('click', (e) => {
    if (e.target.innerText == goleNum) {
        if (goleNum === 50) {
            e.target.innerText = '';
            clearTimeout(interval_id1);
            // const time = document.getElementById('timer').innerText;
            // document.getElementById('timer').innerHTML = time;
        }
        if (nextBox.length === 0) {
            e.target.innerText = '';
        } else {
            e.target.innerText = nextBox[0];
            nextBox.shift();
        }
        e.target.classList.add('second');
        goleNum++;
    }
});

// interval_id1 = setInterval(() => document.getElementById('timer').innerText = msToTime(`${x++*10}`), 10);
// setInterval : 정해진 초마다 계속 실행 

// clearTimeout(handler) : 해당 타임아웃 삭제


// clearInterval(handler) : 해당 인터벌 삭제


function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 10)
        , seconds = parseInt((duration / 1000) % 60)
        , minutes = parseInt((duration / (1000 * 60)) % 60)
        , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}