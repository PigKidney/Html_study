function Animal (realname, nickname, age){
    this.realname = realname;
    this.nickname = nickname;
    this.age = age;
}

// 콘솔에 해당 인스턴스를 log()보다 더 계층적으로 출력해주는 메서드
console.dir(Animal);

// 이 함수의 프로토타입 내부에 constructor를 사용해 인스턴스를 생성한다
let misha = new Animal('곰', '미샤', 8);

// 인스턴스는 자신을 생성하는데 사용된 프로토타입에 접급할 때
// __proto__를 사용한다
console.dir(misha);
console.log(misha.__proto__ === Animal.prototype);

// 해당 인스턴스의 프로토타입을 수정하면 해당 프로토타입으로 만들어진
// 모든 인스턴스가 수정되는 효과가 있다
misha.__proto__.attack = function() {
    console.log(`${this.realname} ${this.nickname}가 공격을 했습니다`);
}

// 해당 인스턴스에 같은 이름의 메서드가 있다면 프로토타입보다
// 현재 인스턴스의 메서드를 우선한다
misha.attack = function() {
    console.log('만들어진 곰에만 추가한 메서드');
}

misha.attack();



const pig = new Animal('멧돼지', '킁킁이', 4);

// 프로토타입에 추가한 메서드가 존재한다
pig.attack();


// 기본 타입인 문자열마저도 수정할 수 있다

var str1 = 'imsi text';

str1.__proto__.attack = function() {
    console.log('공격!');
};

str1.attack();

var str2 = 'abc';

str2.attack();