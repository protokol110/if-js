/*
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
/!* test('qwerty', () => {
  expect(sum(5)(2)).toBe(7);
});
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
*/

// lesson-5
const date = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  timeZone: 'UTC',
};
console.log(new Date().toLocaleString('ru', date));
// 6
const newData = [];
const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];
data.forEach((element) => {
  newData.push(element.country, element.city, element.hotel);
/*
test('color', () => {
  expect(f1()).toBe(colors);
});
*/

console.log(newData);
console.log(newData.filter((el) => el === 'Berlin'));
console.log(newData.filter((el) => el === 'Germany'));
const mass = [{ country: 'Russia' },
  { country: 'Ukraine' },
  { country: 'Kazakhastan' },
  { country: 'Spain' },
  { country: 'Slowakia' },
  { country: 'Indonesia' },
  { country: 'Netherlands' },
  { country: 'Marocco' },
  { country: 'Germany' },
];
const sorting = JSON.stringify(mass);
const output = sorting.replace(/country/g, '');
const searchData1 = /\B\w{4}\B/g;
console.log(output.match(searchData1));
const mass2 = [
  { city: 'Saint Petersburg' },
  { city: 'Vysokie Tatry' },
  { city: 'Santa Cruz de Tenerife' },
  { city: 'Berlin' },
  { city: 'Bali' },
  { city: 'Rotterdam ' },
  { city: 'Ourika' },
  { city: 'Berlin' },
];
const sorting1 = JSON.stringify(mass2);
const output1 = sorting1.replace(/country/g, '');
const searchData2 = /\B\w{5}\B/g;
console.log(output1.match(searchData2));
const mass3 = [
  { hotel: 'Hotel Leopold' },
  { hotel: 'Apartment Sunshine' },
  { hotel: 'Villa Kunerad' },
  { hotel: 'Hostel Friendship' },
  { hotel: 'Ubud Bali Resort&SPA' },
  { hotel: 'King Kong Hostel' },
  { hotel: 'Rokoko Hotel' },
  { hotel: 'Hotel Rehberge Berlin Mitte' },
];
const sorting2 = JSON.stringify(mass3);
const output2 = sorting2.replace(/country/g, '');
const searchData3 = /\b\w{4}\B/g;
console.log(output2.match(searchData3))}
