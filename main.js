/* let user = 'John Doe';
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
console.log(sum(5)(2));

/* test('qwerty', () => {
  expect(sum(5)(2)).toBe(7);
}); *!/
}); */
// 6
/* const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
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
} */
/*
test('color', () => {
  expect(f1()).toBe(colors);
});

// lesson-5
const date = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  timeZone: 'UTC',
};
console.log(new Date().toLocaleString('ru', date)); */
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
const qaz = JSON.stringify(vbn);
const wsx = qaz.replace(/country/g, '');
const de = /\b\w{4}\B/g;
console.log(wsx.match(de));
/* 6 lesson */
/* function palindrome(s) {
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
const search = (str) => {
  const newData1 = [];
  data.forEach((lx, i) => {
    const obj = data[i];
    if (obj.country.includes(str) || obj.city.includes(str) || obj.hotel.includes(str)) {
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
const sorting2 = JSON.stringify(mass3);
const output2 = sorting2.replace(/country/g, '');
const searchData3 = /\b\w{4}\B/g;
console.log(output2.match(searchData3)); */
// lesson - 7
/* const obj12 = {
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
} */
/* console.log(objectsAreEqual(obj3, obj12));
console.log(objectsAreEqual(obj12, obj22)); */
// lesson-8
/* const dateCurrentYear = new Date().getFullYear();
const studentsData = [
  {
    firstName: '??????????????',
    lastName: '????????????',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: '????????',
    lastName: '????????????',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: '??????????????????',
    lastName: '??????????????',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: '??????????????',
    lastName: '????????????',
    admissionYear: 2019,
    courseName: 'Android',
  },
];
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Student extends User {
  constructor(admissionYear, courseName, firstName, lastname) {
    super(firstName, lastname);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return dateCurrentYear - this.admissionYear;
  }
}
class Student1 {
  constructor(firstName, lastName, admissionYear, courseName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get fullName1() {
    return `${this.firstName} ${this.lastName}`;
  }

  // eslint-disable-next-line class-methods-use-this
  get course() {
    return dateCurrentYear - this.admissionYear;
  }
}
const data2 = studentsData.map((e) => new Student1(...Object.values(e)));
class Students {
  constructor(students) {
    this.students = students;
  }

  getInfo() {
    const sorted = this.students.sort((a, b) => a.course - b.course);
    return sorted.map((a) => `${a.fullName1} - ${a.courseName}, ${a.course} ????????`);
  }
}
const students1 = new Students(data2);
const exercise = new User('Aleksey', ' Siniakevich');
const courseExercise = new Student(2020, 'Java');
console.log(exercise);
console.log(exercise.fullName);
console.log(courseExercise.course);
console.log(students1.getInfo());
// lesson-9
const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return {
      current: 0,
      data: this.data,
      next() {
        this.current += 1;
        return {
          done: this.current === this.data.length,
          value: { color: this.data[this.current], index: this.current },
        };
      },
    };
  },
};
for (const color of colors) {
  const textEl = document.getElementById(`text${color.index}`);
  textEl.style.color = color.color;
} */
// lesson-10
/* const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];
const divContainer = document.querySelector('.block-homes__container-image');

data.forEach((elem) => {
  divContainer.innerHTML += `
  <div class="block-homes__container-image-first block-1-hotels">
    <div class="test">
            <img src=${elem.imageUrl}
                 alt=${elem.name}
                 class="image-1-hotels"/>
                  </div>
            <p class="block-homes__container-text">${elem.name}</p>
            <p class="block-homes__container-text-grey">${elem.city}, ${elem.country}</p>
  </div>
  `;
}); */
// lesson-11
/* const buttonRoomPlus = document.getElementById('button-rooms-plus');
const buttonChildrensPlus = document.getElementById('button-children-plus');
const buttonAdultsPlus = document.getElementById('button-adults-plus');
const buttonRoomMinus = document.getElementById('button-rooms-minus');
const buttonChildrensMinus = document.getElementById('button-children-minus');
const buttonAdultsMinus = document.getElementById('button-adults-minus');
const countRoom = document.getElementById('button-Count-Rooms');
const countChildren = document.getElementById('button-Count-Children');
const countAdult = document.getElementById('button-Count-Adult');
const age = document.getElementById('age-div');
const ageFirst = document.getElementById('age-first');
const ageTwo = document.getElementById('age-two');
const ageThree = document.getElementById('age-three');
const ageFour = document.getElementById('age-four');
const ageFive = document.getElementById('age-five');
const ageSix = document.getElementById('age-six');
const ageSeven = document.getElementById('age-seven');
const ageEight = document.getElementById('age-eight');
const ageNine = document.getElementById('age-nine');
const ageTen = document.getElementById('age-ten');
let numberRoom = 1;
let numberChildren = 0;
let numberAdult = 1;

buttonAdultsPlus.onclick = function f() {
  if (numberAdult <= 29) {
    numberAdult++;
    countAdult.innerHTML = numberAdult;
  }
};

buttonAdultsMinus.onclick = function () {
  if (numberAdult >= 2) {
    numberAdult--;
    countAdult.innerHTML = numberAdult;
  }
};

buttonChildrensPlus.onclick = function () {
  if (numberChildren <= 9) {
    numberChildren++;
    countChildren.innerHTML = numberChildren;
    if (numberChildren !== 0) {
      age.classList.remove('choice-age__disabled');
    }
    if (numberChildren === 1) {
      ageFirst.classList.remove('choice-age__disabled');
    }
    if (numberChildren === 2) {
      ageTwo.classList.remove('choice-age__disabled');
    }
    if (numberChildren === 3) {
      ageThree.classList.remove('choice-age__disabled');
    }
    if (numberChildren === 4) {
      ageFour.classList.remove('choice-age__disabled');
    }
    if (numberChildren === 5) {
      ageFive.classList.remove('choice-age__disabled');
    }
    if (numberChildren === 6) {
      ageSix.classList.remove('choice-age__disabled');
    }
    if (numberChildren === 7) {
      ageSeven.classList.remove('choice-age__disabled');
    }
    if (numberChildren === 8) {
      ageEight.classList.remove('choice-age__disabled');
    }
    if (numberChildren === 9) {
      ageNine.classList.remove('choice-age__disabled');
    }
    if (numberChildren === 10) {
      ageTen.classList.remove('choice-age__disabled');
    }
  }
};

buttonChildrensMinus.onclick = function () {
  if (numberChildren >= 1) {
    numberChildren--;
    countChildren.innerHTML = numberChildren;
    if (numberChildren === 0) {
      age.classList.add('choice-age__disabled');
    }
  }
};
function removeSelection() {
  const selects = document.querySelectorAll('.choice-age__select');
  const selectsCount = selects.length;
  const lastSelect = selects[selectsCount - 1];
  lastSelect.remove();
}
buttonChildrensMinus.addEventListener('click', removeSelection);

buttonRoomPlus.onclick = function () {
  if (numberRoom <= 29) {
    numberRoom++;
    countRoom.innerHTML = numberRoom;
  }
};

buttonRoomMinus.onclick = function () {
  if (numberRoom >= 2) {
    numberRoom--;
    countRoom.innerHTML = numberRoom;
  }
}; */
// lesson 12
/*
const divContainer = document.querySelector('.block-homes__container-image');
const app = async () => {
  const obj = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular');
  const result = await obj.json();
  result.forEach((elem) => {
    divContainer.innerHTML += `
  <div class="block-homes__container-image-first block-1-hotels">
    <div class="test">
            <img src=${elem.imageUrl}
                 alt=${elem.name}
                 class="image-1-hotels"/>
                  </div>
            <p class="block-homes__container-text">${elem.name}</p>
            <p class="block-homes__container-text-grey">${elem.city}, ${elem.country}</p>
  </div>
  `;
  });
};

app();
*/

// lesson-13
const divContainer = document.querySelector('.block-homes__container-image');
if (sessionStorage.getItem('dataHome') !== null) {
  const result = JSON.parse(sessionStorage.dataHome);
  result.forEach((elem) => {
    divContainer.innerHTML += `
  <div class="block-homes__container-image-first block-1-hotels">
    <div class="test">
            <img src=${elem.imageUrl}
                 alt=${elem.name}
                 class="image-1-hotels"/>
                  </div>
            <p class="block-homes__container-text">${elem.name}</p>
            <p class="block-homes__container-text-grey">${elem.city}, ${elem.country}</p>
  </div>
  `;
  });
} else {
  const app = async () => {
    const obj = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular');
    const result = await obj.json();
    result.forEach((elem) => {
      divContainer.innerHTML += `
  <div class="block-homes__container-image-first block-1-hotels">
    <div class="test">
            <img src=${elem.imageUrl}
                 alt=${elem.name}
                 class="image-1-hotels"/>
                  </div>
            <p class="block-homes__container-text">${elem.name}</p>
            <p class="block-homes__container-text-grey">${elem.city}, ${elem.country}</p>
  </div>
  `;
    });
    const toSesStorage = JSON.stringify(result);
    sessionStorage.setItem('dataHome', toSesStorage);
  };
  app();
}
