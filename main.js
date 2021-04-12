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
