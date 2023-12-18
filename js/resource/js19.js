const listItems = [...document.getElementsByTagName('li')];
const importants = document.getElementsByClassName('important');
const datas = document.getElementsByName('data');
const head2 = document.querySelector('#head2'); // CSS 선택자를 이용한 요소 선택
const imports = document.querySelectorAll('.important');

// HTMLCollection 타입은 Array가 아니므로 편리한 배열 함수들(forEach, filter, ...)을 이용할 수 없다
console.log(listItems);
console.log(importants);

// name 속성으로 선택하는 경우 NodeList 타입으로 꺼내는데 forEach만 구현되어 있다
console.log(datas);

console.log(head2);
console.log(imports);


// const liArr = [...listItems]; // 배열로 만들기
const liArr = [];
for(let i = 0 ; i < listItems.length; i++){
    liArr.push(listItems[i]);
}

// listItems.forEach(element =>  console.log(element));

const test1 = document.querySelector('#test1');

console.log(test1);

// innerHTML : 태그가 적용 됨. (보안에 매우매우매우 취약함)
test1.innerHTML = '<b>element.innerHTML</b> : 해당 요소의 내용에 접근';

// innerText : 태그가 적용되지 않음. (보안 강함)
test1.innerText = '<b>element.innerHTML</b> : 해당 요소의 내용에 접근';

// 속성에 접근하기
test1.title = '마우스를 올리고 있으면 나오는 문구';
console.log(test1.title);

// 속성에 메서드로 접근하기
test1.setAttribute('title', 'title에 들어갈 문구');

// style.property를 이용하는게 더 바람직
test1.setAttribute('style', 'border: solid 1px black');

// className, classList를 이용하는게 더 바람직
test1.setAttribute('class', 'use');


console.log(test1.getAttribute('title'));

// 클래스 속성에 접근하기
test1.className = 'important red box';
console.log(test1.className);
console.log(test1.classList[0]);
console.log(test1.classList[1]);
console.log(test1.classList[2]);
console.log(test1.classList[3]);

// 클래스 값 추가하기 (고전방식)
test1.className += ' animal';

// classList 객체 사용하기
test1.classList.add('swim');
test1.classList.replace('animal', 'tiger');
test1.classList.remove('important');

// toggle: 해당 클래스 값이 없을때는 추가, 있으면 삭제
test1.classList.toggle('visible');
console.log(test1.classList.contains('visible'));
test1.classList.toggle('visible');
console.log(test1.classList.contains('visible'));
