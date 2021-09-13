const { sum, nativeNull } = require('./intro');
const expect = (value) => {
  return {
    toBe: (exp) => {
      if (exp === value) {
        console.log('Success');
      } else {
        console.log('Failed');
      }
    },
  };
};
expect(sum(1, 3)).toBe(4);

describe('Sum function: ', () => {
  test('should return sum of two values', () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(1, 3)).toEqual(4);
  });
  test('should return value correctly comparing to other values', () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(4);
    expect(sum(2, 3)).toBeLessThan(10);
    expect(sum(2, 3)).toBeLessThanOrEqual(10);
  });
});

describe('Native null function: ', () => {
  test('should return false value null', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});

// из собеса
(5).plus(4).minus(3);
// либо
sum(2, 3).plus(4).minus(3);
// решение
function summ(val) {
  var self = Object.create(summ.prototype);
  self.val = val;
  return self;
}
summ.prototype = {
  plus(val) {
    this.val += val;
    return this;
  },
  minus(val) {
    this.val -= val;
    return this;
  },
  valueOf() {
    return this.val;
  },
};

+summ(0).plus(1); // 1
+summ(1).plus(1).plus(1); // 3
+summ(1).plus(2).plus(3).plus(4).minus(5); // 5
summ(3).plus(7).minus(2) * 3; // 24
99 + summ(1); // 100
