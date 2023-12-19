
console.log(window);


/*
// 경고창을 띄우는 함수들
window.alert('경고창');

// 입력창과 확인창 메서드는 사용자의 선택 결과를 리턴한다
let result = window.prompt('입력창');
console.log('입력창의 결과 : ', result);

result = window.confirm('확인창의 결과 : ' + result);
console.log('확인창의 결과 : ', result);
*/

// 현재 기기의 모니터에 대한 정보
console.log(screen);

// 현재 웹 페이지의 DOM 객체
console.log(document);
console.log(document.head);
console.log(document.body);

// 웹 브라우저의 페이지 이동 내역
console.log(history);

/*
    history.back() :  이전 페이지로
    history.forward() : 다음 페이지로
    history.go(index) : 원하는 페이지로 (-1은 이전 페이지, +1은 다음 페이지)
*/

const backBtn = document.querySelector('#backBtn');
const forwardBtn = document.querySelector('#forwardBtn');
const goBtn = document.querySelector('#goBtn');
const historyIndex = document.querySelector('#historyIndex');


backBtn.addEventListener('click', () => history.back());
forwardBtn.addEventListener('click', () => history.forward());
goBtn.addEventListener('click', () => history.go(historyIndex.value));


// history.state - 사용자가 직접 정의할 수 있는 방문 내역

// history에 새로운 방문 이력을 추가한다
// (file://로 보는 경우 작동하지 않음, 보안상의 이유)
// history.pushState(null, null, 'http://op.gg');

// 현재 위치하고 있는 경로에 대한 객체
console.log(location);

// 현재 URL을 부분적으로 확인할 수 있는 기능을 제공
console.log(location.protocol);
console.log(location.pathname);

// location.href = 'http://op.gg'; // 페이지 이동
// location.reload(); // 새로 고침


// 브라우저 정보
console.log(navigator);