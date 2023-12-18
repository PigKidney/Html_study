const pushBtn = document.querySelector('#pushBtn');
const popBtn = document.querySelector('#popBtn');

const out = document.querySelector('#out');


let count = 0;
// 새 요소 객체 만들어서 자식으로 추가하기
pushBtn.addEventListener('click', (e) => {
    // 1. Element node를 생성한다
    const newDiv = document.createElement('div');

    // 2. Text node를 생성한다
    const newText = document.createTextNode('Grade');

    // 3. Element node를 설정한다
    newDiv.classList.add('material-symbols-outlined');
    newDiv.style.fontSize = '30px';
    newDiv.style.color = 'red';
    newDiv.style.display = 'flex';


    // 4. Element node에 Text node를 부착한다
    newDiv.appendChild(newText);
    newDiv.appendChild(addCountDiv());
    // 5. 새 Element node를 out에 추가한다
    out.appendChild(newDiv);
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

const shiftBtn = document.querySelector('#shiftBtn');
const unShiftBtn = document.querySelector('#unShiftBtn');



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
    newDiv.style.fontSize = '30px';
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
        newDiv.style.fontSize = '30px';
        newDiv.style.color = 'red';
        newDiv.style.display = 'flex';


        newDiv.appendChild(newText);
        newDiv.appendChild(addCountDiv());
        
        out.firstChild.appendChild(newDiv);
    }
})



shiftBtn.addEventListener('click', (e) => {
    if (e.target === shiftBtn) {
        out.removeChild(out.childNodes[0]);
    }
})



popBtn.addEventListener('click', (e) => {
    if (e.target === popBtn) {
        out.removeChild(out.childNodes[out.children.length - 1]);
    }
})

