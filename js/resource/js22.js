const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');

// setTimeout : 한 번만 실행, 메서드 실행 후 타이머 ID를 반환 (타이머 취소에 ID가 필요)
const timeout_id1 = setTimeout(() => box1.style.backgroundColor = 'red', 1000);
const timeout_id2 = setTimeout(() => box2.style.backgroundColor = 'green', 2000);

// setInterval : 정해진 초마다 계속 실행
let x = 0, y = 0;
const interval_id1 = setInterval(() => box2.style.left = x++ + 'px', 500);
const interval_id2 = setInterval(() => box2.style.left = y++ + 'px', 100);

// clearTimeout(handler) : 해당 타임아웃 삭제

// 타임아웃을 비활성화 하기 위해서는 해당 타이머의 ID가 필요하다 
document.getElementById('clear1').addEventListener('click', () => {
    clearTimeout(timeout_id1);
    clearTimeout(timeout_id2);
})

// clearInterval(handler) : 해당 인터벌 삭제
document.getElementById('clear2').addEventListener('click', () => {
    clearInterval(interval_id1);
    clearInterval(interval_id2);
})