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
  let isSum = a;
  function res(b) {
    isSum += b;
    return res;
  }
  res.toString = function () {
    return isSum;
  };
  return res;
}
console.log(sum(5)(2));
/* test('qwerty', () => {
  expect(sum(5)(2)).toBe(7);
}); */
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

// lesson-5
const date = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  timeZone: 'UTC',
};
console.log(new Date().toLocaleString('ru', date));
/* // 6
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
});
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
const str = JSON.stringify(mass);
const str1 = str.replace(/country/g, '');
const re = /\B\w{4}\B/g;
console.log(str1.match(re));
const qwe = [
  { city: 'Saint Petersburg' },
  { city: 'Vysokie Tatry' },
  { city: 'Santa Cruz de Tenerife' },
  { city: 'Berlin' },
  { city: 'Bali' },
  { city: 'Rotterdam ' },
  { city: 'Ourika' },
  { city: 'Berlin' },
];
const asd = JSON.stringify(qwe);
const zxc = asd.replace(/country/g, '');
const te = /\B\w{5}\B/g;
console.log(zxc.match(te));
const vbn = [
  { hotel: 'Hotel Leopold' },
  { hotel: 'Apartment Sunshine' },
  { hotel: 'Villa Kunerad' },
  { hotel: 'Hostel Friendship' },
  { hotel: 'Ubud Bali Resort&SPA' },
  { hotel: 'King Kong Hostel' },
  { hotel: 'Rokoko Hotel' },
  { hotel: 'Hotel Rehberge Berlin Mitte' },
];
const qaz = JSON.stringify(vbn);
const wsx = qaz.replace(/country/g, '');
const de = /\b\w{4}\B/g;
console.log(wsx.match(de));
/* 6 lesson */
function palindrome(s) {
  return s === s.split('').reverse().join('');
}
console.log(palindrome('zxc'));

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
const search = (strz) => {
  const newData1 = [];
  data.forEach((lx, i) => {
    const obj = data[i];
    if (obj.country.includes(strz) || obj.city.includes(strz) || obj.hotel.includes(strz)) {
      newData1[newData1.length] = `${obj.country} ${obj.city} ${obj.hotel}`;
    }
  });
  return newData1;
};
console.log(search('Rus'));
const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];
function city() {
  const object = {};
  let i = 0;
  while (i < hotels.length) {
    const search1 = hotels[i];
    if (search1?.country in object) {
      object[search1?.country].push(search1?.city);
    } else {
      object[search1?.country] = [search1?.city];
    }
    i += 1;
  }
  return object;
}
console.log(city(hotels));
// lesson - 7
const obj12 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj22 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};
function objectsAreEqual(a, b) {
  for (const prop in a) {
    if (a.hasOwnProperty(prop)) {
      if (b.hasOwnProperty(prop)) {
        if (typeof a[prop] === 'object') {
          if (!objectsAreEqual(a[prop], b[prop])) return false;
        } else if (a[prop] !== b[prop]) return false;
      } else {
        return false;
      }
    }
  }
  return true;
}
console.log(objectsAreEqual(obj3, obj12));
console.log(objectsAreEqual(obj12, obj22));
