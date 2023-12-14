
const text = 'apple/kiwi/orange/banana/grape';
const url = 'https://naver.com';
const input = '  abc123     ';


console.log('length', text.length);
console.log('split:', text.split('/'));
console.log('The text include strawberry?', text.includes('strawberry'));
console.log('The text include banana?', text.includes('banana'));
console.log('IndexOf \'wi\':', text.indexOf('wi'));

console.log('startWith:', url.startsWith('ftp://'));
console.log('endsWith:', url.endsWith('.net'));
console.log(url.toUpperCase());
console.log(url.toUpperCase().toLowerCase());

console.log(url.substring(3));
console.log(url.substring(3, 6));
console.log(url.substring(3, undefined));

console.log('${input} vs ${input.trim()}');