let user = 'John Doe';
console.log(user);
const student = 'Aleksei';
console.log(student);
user = student; // Aleksei
console.log(user);
let test = 1;
test += 1;
test += '1'; // 21
console.log(test);
test -= '1'; // 20
console.log(test);
test = true; // true
console.log(test);
const zzz = [2, 3, 5, 8];// 8 exercise
let result = 1;
for (let i = 0; i < zzz.length; i += 1) {
  result *= zzz[i];
}
console.log(result);

const xxx = [2, 5, 8, 15, 0, 6, 20, 3];// 9
for (let i = 0; i < xxx.length; i += 1) {
  if (xxx[i] > 5 && xxx[i] < 10) {
    console.log(xxx[i]); // 6 8
  }
}
const ccc = [2, 5, 8, 15, 0, 6, 20, 3]; // 10
for (let i = 0; i < ccc.length; i += 1) {
  if (ccc[i] % 2 === 0) {
    console.log(ccc[i]);// 2 8 0 6 20
  }
}
// new homework
const isPalindrome = (str) => {
  const strLen = str.length;
  if (strLen < 2) return true;

  if (str[0] === str[strLen - 1]) {
    return isPalindrome(str.slice(1, strLen - 1));
  }

  return false;
};

console.log(isPalindrome('madam'));

function minn(a, b) {
  return a < b ? a : b;
}
minn(9, 20);

function maxx(a, y) {
  return a > y ? a : y;
}
maxx(2, 5);
console.log('max', maxx(2, 5)); // 5
console.log('min', minn(9, 20)); // 9

function randArr(count, min, max) {
  const arr = [];
  while (arr.length !== count) {
    const rand = Math.floor(Math.random() * (max + 1 - min) + min);
    if (arr.indexOf(rand) === -1) arr.push(rand);
  }
  return arr;
}
function replaceZero(number) {
  const numStr = `${number}`;
  if (numStr.includes('0')) {
    return `${number}`.replaceAll('0', 'zero');
  }
  return number;
}
randArr(10, 1, 100);
console.log(randArr(10, 1, 100).map(replaceZero).join(', '));
// new homework lesson-4
function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(5)(2));
/* test('qwerty', () => {
console.log(sum(5)(2));
*/
// 6
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const pcollect = document.getElementsByTagName('p');

const f1 = function () {
  let k = 0;
  return function () {
    this.style.color = colors[k];
    k += 1;
    if (k === colors.length) { k = 0; }
  };
};

for (let i = 0; i < pcollect.length; i += 1) {
  pcollect[i].addEventListener('click', f1());
}

/*
test('color', () => {
  expect(f1()).toBe(colors);
});
*/
