const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.84252

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//*********************************Maths********************* */
console.log(Math);
console.log(Math.abs(-4));

console.log(Math.round(4.3));

console.log(Math.ceil(4.3));

console.log(Math.floor(5.6));

console.log(Math.min(4, 3, 6, 8));

console.log(Math.random()); //value comes between 0 and 1

console.log(Math.random()*10); //now value come above 0 and below 10

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

