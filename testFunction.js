function capital(str) {
  return str[0].toUpperCase();
}

function sum(a, b) {
  return a + b;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  mul: (x, y) => x * y,
  divide: (x, y) => x / y,
};

function caesarCipher(str, num) {
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return str
    .split('')
    .map((el) => {
      let rayCase = el.toUpperCase() === el ? upperCase : lowerCase;
      let indexOfEl = rayCase.indexOf(el);
      if (indexOfEl === -1) {
        return el;
      }
      let newElIndex = indexOfEl + num;

      if (newElIndex > 25) {
        newElIndex = newElIndex - 25 - 1;
      }
      return rayCase[newElIndex];
    })
    .join('');
}

function analyzeArray(array) {
  let sort = array.sort((a, b) => a - b);
  let totalNum = array.reduce((accu, el) => accu + el, 0);
  let obj = {
    average: totalNum / array.length,
    min: sort[0],
    max: sort[array.length - 1],
    length: array.length,
  };
  return obj;
}

export { capital, sum, reverseString, calculator, caesarCipher, analyzeArray };
