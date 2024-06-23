// 2704. To Be Or Not To Be
// https://leetcode.com/problems/to-be-or-not-to-be/

/**
 * @param {string} val
 * @return {Object}
 */

var expect = function (val) {
  return {
    toBe: val2 => {
      if (val !== val2) throw new Error('Not Equal');
      else return true;
    },
    notToBe: val2 => {
      if (val === val2) throw new Error('Equal');
      else return true;
    },
  };
};
