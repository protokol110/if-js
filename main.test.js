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

test('qwerty', () => {
  expect(sum(5)(2)).toBe(7);
});

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

test('color', () => {
  expect(f1()).toBe(true);
});
// tests in main.js because in this file tests doesn't work
