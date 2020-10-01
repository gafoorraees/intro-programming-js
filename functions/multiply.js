function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Input the first number: ');
let right = getNumber('Input the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
