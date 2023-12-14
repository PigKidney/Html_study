const gugudan = document.getElementById('gugudan');

gugudan.style.display = 'grid';
// gugudan.style.display = 'grid';

// for(i=1 ; i<10 ; i++){
//     for(j=2 ; j<10 ; j++){
//         gugudan.innerHTML += '<div>'+j+'*'+i+'='+i*j+'</div>'; 
//     }
// }
count = 0;
for (i = 2; i < 10; i++) {
    let str = '';
    for (j = 1; j < 10; j++) {
        str += i + '*' + j + '=' + i * j + '<br>';
    }
    addDiv(str);
}``

gugudan.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';

function addDiv(value) {
    // count++;
    gugudan.innerHTML += '<div>' + value + '</div>';
}

// gugudan.style.gridTemplateColumns = '1fr'*count;
function makeGugudanDiv(){
    return `<div>${dan}X${gop}=${dan*gop}</div>`; //Javascript format string
}

// gugudan.style.grid-template-columns = '';

let i = 0;

// 0을 false라고 생각하고 그 외의 숫자는 true라고 생각한다.
while(true) {
    console.log(i++)

    if( i === 10){
        break;
    }
}

console.log('while문이 끝났습니다.');