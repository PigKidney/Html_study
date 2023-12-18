const click2Div = document.getElementById('click2');

// 선택한 HTML요소에 자바스크립트로 이벤트 추가하기1 (HTML 속성에 추가하기)
click2Div.onclick = () => {
    click2Div.style.backgroundColor = 'green'
    click2Div.style.color = 'white'
};

// 선택한 HTML요소에 자바스크립트로 이벤트 추가하기2 (addEventListener 함수로 추가하기)
click2Div.addEventListener('mouseleave', (e) => {
    click2Div.style.backgroundColor = 'white';
    click2Div.style.color = 'black';
})

// click2Div.addEventListener('mouseover', (e) => {
//     click2Div.style.backgroundColor = 'blue';
//     click2Div.style.color = 'white';
// })

click2Div.addEventListener('mouseover', (e) => {
    // 이벤트 콜백 함수에서의 this는 이벤트 발생 주체가 아닌 윈도우 객체를 가리킨다
    console.log(e.target);

    // this 대신 이벤트 객체를 사용해 이벤트 발생 요소를 선택할 수 있다
    e.target.style.backgroundColor = 'blue';
    e.target.style.color = 'white';
})

// 이벤트의 종류는 구글링하면 잘 나온다(javascript event listener list)

// 이벤트 중첩 테스트
const outer = document.getElementById('outer');
const inner1 = document.getElementById('inner1');
const inner2 = document.getElementById('inner2');


// addEventListener(이벤트 종류, 이벤트 처리 함수, 캡처링 여부)

// e.currentTarget : 버블링 또는 캡처링으로 인해 현재 이벤트의 영향을 받고있는 객체
// e.target : 현재 이벤트를 발생시킨 객체
outer.addEventListener('click', (e) => {
    console.log(e);
    console.log('outer clicked!!');
    if (e.currentTarget === e.target) {
        console.log('범인은', e.target.id, '입니다');
    }

}) // 버블링

inner1.addEventListener('click', (e) => {
    console.log(e);
    console.log('inner1 clicked!!');
    console.log('outer clicked!!');
    if (e.currentTarget === e.target) {
        console.log('범인은', e.target.id, '입니다');
    }

}, true) // 캡처링

inner2.addEventListener('click', (e) => {
    console.log(e);
    console.log('inner2 clicked!!');
    console.log('outer clicked!!');
    if (e.currentTarget === e.target) {
        console.log('범인은', e.target.id, '입니다');
    }

}, false) // 버블링


// const clickEventHandler = function(e) {
//     console.log(e);
//     alert(e.target.id, 'clicked!');
//     // e.target.
// }
// outer.addEventListener('click',clickEventHandler);
// inner1.addEventListener('click',clickEventHandler);
// inner2.addEventListener('click',clickEventHandler);


// 기본 이벤트 막아보기
const userId = document.getElementById('user-id');

// keydown, keyup, keypress
userId.addEventListener('keydown', (e) => {
    // 기본 동작 취소
    e.preventDefault();

    if (e.key === 'Tab') {
        e.currentTarget.value += '\t';
    } else {
        // 기본 동작 취소 가능 여부 체크
        console.log('기본동작 취소 가능 여부: ', e.cancelable);
        console.log(e);
    }
})


const userIntro = document.getElementById('user-intro');

// keydown, keyup, keypress
userIntro.addEventListener('keydown', (e) => {
    // 기본 동작 취소
    e.preventDefault();

    if (e.key === 'Backspace') {
        document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Backspace'}));
    } else if (e.key === 'Tab') {
        e.currentTarget.value += '\t';
    }
    else {
        // 기본 동작 취소 가능 여부 체크
        console.log('기본동작 취소 가능 여부: ', e.cancelable);
        console.log(e);
    }
})

const userLink = document.getElementById('link1');

userLink.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('기본동작 취소 가능 여부: ', e.cancelable);
    console.log(e);

})

const itemList = document.getElementById('item-list');


itemList.addEventListener('click', (e) => {
    
    if(e.target.id == 'item-list'){
        alert('거기 말고 아이템 눌러유')
    } else {
        alert(e.target.innerText);
    }
    
    console.log(e.target);

})
