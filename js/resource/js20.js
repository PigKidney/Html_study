const pushBtn = document.querySelector('#pushBtn');
const popBtn = document.querySelector('#popBtn');
const shiftBtn = document.querySelector('#shiftBtn');
const unShiftBtn = document.querySelector('#unShiftBtn');

const out = document.querySelector('#out');

let starCount = 0;
const createStarDiv = () => {
    const starDiv = document.createElement('div');
    const starText = document.createTextNode('grade');
    starDiv.classList.add('material-symbols-outlined');
    starDiv.classList.add('star');
    starDiv.appendChild(starText);

    const numDiv = document.createElement('div');
    const numText = document.createTextNode(starCount++);

    numDiv.classList.add('starNum');
    numDiv.appendChild(numText);
    starDiv.appendChild(numDiv);

    return starDiv;
}

const setFirstChild = () => document.querySelector('#out > div:first-child');

const pushChild = () => out.appendChild(createStarDiv());
const popChild = () => out.removeChild(out.lastElementChild);
const shiftChild = () => out.removeChild(out.firstElementChild);
const unShiftChild = () => out.insertBefore(createStarDiv(), out.firstElementChild);


pushBtn.addEventListener('click', (e) => pushChild());
popBtn.addEventListener('click', (e) => popChild())
shiftBtn.addEventListener('click', (e) => shiftChild());
unShiftBtn.addEventListener('click', (e) => unShiftChild())

document.body.addEventListener('keydown', (e) => {

    switch (e.key) {
        case "ArrowRight":
            e.preventDefault();
            unShiftChild();
            break;
        case "ArrowLeft":
            e.preventDefault();
            shiftChild();
            break;
        case "ArrowUp":
            e.preventDefault();
            pushChild();
            break;
        case "ArrowDown":
            e.preventDefault();
            popChild();
            break;

    }
});

// window.addEventListener('keydown', (e) => {

//     if (e.key == 37 || e.key == "ArrowRight") {
//         unShiftChild();
//     }
//     else if (e.key == 39 || e.key == "ArrowLeft") {
//         shiftChild();
//     }
//     else if (e.key == 38 || e.key == "ArrowUp") {
//         pushChild();
//     }
//     else if (e.key == 40 || e.key == "ArrowDown") {
//         popChild();
//     } else {
//         console.log(e);
//     }
// });







/*
const set =[];
let count = 0;
// 새 요소 객체 만들어서 자식으로 추가하기
pushBtn.addEventListener('click', (e) => {
    // 1. Element node를 생성한다
    const newDiv = document.createElement('div');

    // 2. Text node를 생성한다
    const newText = document.createTextNode('Grade');

    // 3. Element node를 설정한다
    newDiv.classList.add('material-symbols-outlined');
    newDiv.style.fontSize = '35px';
    newDiv.style.color = 'red';
    newDiv.style.display = 'flex';


    // 4. Element node에 Text node를 부착한다
    newDiv.appendChild(newText);
    newDiv.appendChild(addCountDiv());
    // 5. 새 Element node를 out에 추가한다
    set.push(newDiv);
    for(let i = 0; i < set.length ; i++){
        out.appendChild(set[i]);
    }
})

// popBtn.addEventListener('click', (e) => {
//     if (e.target === popBtn) {
//         const newI = document.createElement('i');
//         newI.className = "fa-regular fa-star fa-bounce";
//         newI.style.fontSize = '30px';
//         newI.style.color = 'red';
//         newI.style.display = 'flex';


//         newI.appendChild(addCountDiv());

//         out.appendChild(newI);
//     }
// })




function addCountDiv() {

    const countDiv = document.createElement('div');

    countDiv.innerText = count++;
    countDiv.style.verticalAlign = 'top';
    countDiv.style.color = 'white';
    countDiv.style.fontSize = '0.4rem';
    countDiv.style.backgroundColor = 'red';
    countDiv.style.height = '1.0rem';
    countDiv.style.width = '1.0rem';
    countDiv.style.borderRadius = '50%';
    countDiv.style.textAlign = 'center';
    countDiv.style.lineHeight = '1.0rem';
    countDiv.style.fontWeight = '700';

    return countDiv;
}

function addNewDiv() {

    const newDiv = document.createElement('div');

    const newText = document.createTextNode('Grade');

    newDiv.classList.add('material-symbols-outlined');
    newDiv.style.fontSize = '35px';
    newDiv.style.color = 'red';
    newDiv.style.display = 'flex';


    newDiv.appendChild(newText);
    newDiv.appendChild(addCountDiv());

    out.appendChild(newDiv);
}

unShiftBtn.addEventListener('click', (e) => {
    if (e.target === unShiftBtn) {
        const newDiv = document.createElement('div');

        const newText = document.createTextNode('Grade');

        newDiv.classList.add('material-symbols-outlined');
        newDiv.style.fontSize = '35px';
        newDiv.style.color = 'red';
        newDiv.style.display = 'flex';


        newDiv.appendChild(newText);
        newDiv.appendChild(addCountDiv());
        set.unshift(newDiv);
        for(let i = 0; i < set.length ; i++){
            out.appendChild(set[i]);
        }
    }
})



shiftBtn.addEventListener('click', (e) => {
    if (e.target === shiftBtn) {
        set.shift();
        out.removeChild(out.firstChild);
    }
})



popBtn.addEventListener('click', (e) => {
    if (e.target === popBtn) {
        set.pop();
        out.removeChild(out.lastChild);
    }
})

*/