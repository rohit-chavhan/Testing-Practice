import {
  sum,
  capital,
  calculator,
  reverseString,
  caesarCipher,
  analyzeArray,
} from './testFunction';

test('dragon to equal D', () => {
  expect(capital('dragon')).toBe('D');
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('reverse jelly to equal yllej', () => {
  expect(reverseString('jelly')).toBe('yllej');
});

describe('object for mathematic operations', () => {
  test('check it have function properties', () => {
    expect(calculator).toEqual({
      add: expect.any(Function),
      subtract: expect.any(Function),
      mul: expect.any(Function),
      divide: expect.any(Function),
    });
  });

  test('12 + 2 should return 14', () => {
    expect(calculator.add(4, 2)).toBe(6);
    expect(calculator.add(0, 1)).toBe(1);
    expect(calculator.add(0, 1000)).toBe(1000);
  });

  test('10 - 4 should return 6', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
    expect(calculator.subtract(500, 10)).toBe(490);
    expect(calculator.subtract(-1, -1)).toBe(0);
  });

  test('10 * 2 should return 20', () => {
    expect(calculator.mul(10, 2)).toBe(20);
    expect(calculator.mul(5, 5)).toBe(25);
  });

  test('should divide two number', () => {
    expect(calculator.divide(15, 5)).toBe(3);
    expect(calculator.divide(0, 1)).toBe(0);
  });
});

describe('perform caesarCipher on string', () => {
  test('should perform text wrapping', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('rohit', 2)).toBe('tqjkv');
  });

  test('should maintain original case', () => {
    expect(caesarCipher('CANDY', 2)).toBe('ECPFA');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('should maitain punctuation spaces', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCipher('red blue hey', 2)).toBe('tgf dnwg jga');
  });
});

describe('perform analyzeArray function ', () => {
  let object = analyzeArray([1, 8, 3, 4, 2, 6]);
  test('it should perform anlaysis on array', () => {
    expect(object).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  let object2 = analyzeArray([45, 56, 23, 124]);
  test('should perform analysis', () => {
    expect(object2).toEqual({ average: 62, min: 23, max: 124, length: 4 });
  });
});
